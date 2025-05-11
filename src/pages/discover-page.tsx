import { useNavigate, useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce.ts";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";
import PackCard from "@/components/local/pack-card.tsx";
import { clearFoundPacks } from "@/store/actions/pack.ts";
import { getPacksByQuery } from "@/store/api-actions/pack.ts";
import { Alert, AlertDescription } from "@/components/ui/alert.tsx";

function DiscoverPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const foundPacks = useAppSelector((state) => state.foundPacks);
  const loading = useAppSelector((state) => state.loading);
  const errors = useAppSelector((state) => state.errors);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const debouncedSearchQuery = useDebounce(searchQuery, 200);

  useEffect(() => {
    if (!debouncedSearchQuery) {
      searchParams.delete("query");
      setSearchParams(searchParams);
      dispatch(clearFoundPacks());
      return;
    }
    searchParams.set("query", encodeURIComponent(debouncedSearchQuery));
    setSearchParams(searchParams);
    dispatch(getPacksByQuery(debouncedSearchQuery));
  }, [debouncedSearchQuery]);

  function handlePackClick(id: string) {
    navigate(`/packs/${id}`);
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto -mx-8 px-8">
      <div className="sticky top-0 z-10 bg-background pb-4">
        <h1 className="text-2xl font-bold mb-4">Discover Packs</h1>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search packs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 pl-10 pr-4 rounded-lg text-base"
          />
        </div>
      </div>

      <div className="flex-1 px-0 pb-6">
        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}

        {errors.map((error) => (
          <Alert
            variant="destructive"
            className="bg-red-50 text-red-600 border-red-200 h-12 py-0 flex items-center"
          >
            <AlertDescription className="text-base">{error.message}</AlertDescription>
          </Alert>
        ))}

        {!loading && errors.length == 0 && searchQuery && foundPacks.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No packs found matching "{searchQuery}"
          </div>
        )}

        {!loading && errors.length == 0 && foundPacks.length > 0 && (
          <div className="grid grid-cols-1 gap-6 mt-4">
            {foundPacks.map((pack) => (
              <PackCard key={pack.id} pack={pack} onClick={handlePackClick} />
            ))}
          </div>
        )}

        {!loading && !searchQuery && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-lg font-medium">Search for packs</h3>
            <p className="text-muted-foreground mt-2 max-w-md">
              Enter a location or activity to discover packs created by other users
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiscoverPage;
