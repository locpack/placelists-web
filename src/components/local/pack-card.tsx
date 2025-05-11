import type { Pack } from "@/types/pack.ts";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { Progress } from "@/components/ui/progress.tsx";
import { PackStatus } from "@/enums/enums.ts";
import { Button } from "@/components/ui/button.tsx";
import { Heart } from "lucide-react";
import type { MouseEvent } from "react";
import { updateDiscoverPack } from "@/store/api-actions/pack.ts";

interface PackCardProps {
  pack: Pack;
  onClick: (packId: string) => void;
}

function PackCard({ pack, onClick }: PackCardProps) {
  const totalPlaces = pack.places.length;
  const visitedPlaces = pack.places.filter((place) => place.visited).length;
  const visitedPercentage = totalPlaces > 0 ? Math.round((visitedPlaces / totalPlaces) * 100) : 0;

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  function handleFollowClick(e: MouseEvent) {
    e.stopPropagation();
    if (pack.status === PackStatus.None) {
      dispatch(
        updateDiscoverPack({ id: pack.id, data: { name: "", status: PackStatus.Followed, placesIds: [] } })
      );
    } else if (pack.status === PackStatus.Followed) {
      dispatch(
        updateDiscoverPack({ id: pack.id, data: { name: "", status: PackStatus.None, placesIds: [] } })
      );
    } else {
      console.error(`Unsupported pack status: ${pack.status}`);
    }
  }

  return (
    <Card
      className="overflow-hidden py-0 gap-0 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => onClick(pack.id)}
    >
      <div className="relative w-full h-48 bg-muted">
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex">
          <div className="mr-auto">
            <h3 className="text-lg font-semibold line-clamp-1">{pack.name}</h3>
            <div className="flex items-center">
              <p className="text-base text-muted-foreground">by {pack.author.username}</p>
              {pack.author.id === user?.id && (
                <Badge variant="outline" className="ml-2 text-sm">
                  you
                </Badge>
              )}
            </div>
          </div>
          <Button
            variant={pack.status === PackStatus.Followed ? "default" : "outline"}
            className={`cursor-pointer ${
              pack.status === PackStatus.Followed
                ? "bg-primary text-primary-foreground"
                : "bg-background/80 backdrop-blur-sm hover:bg-background/90"
            } ${pack.author.id === user?.id ? "hidden" : ""}`}
            onClick={handleFollowClick}
          >
            <Heart className={pack.status === PackStatus.Followed ? "fill-current" : ""} />
            {pack.status === PackStatus.Followed ? "Following" : "Follow"}
          </Button>
        </div>
        <Progress value={visitedPercentage} className="mt-3" />
      </CardContent>
    </Card>
  );
}

export default PackCard;
