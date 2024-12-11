import { Block } from "@/components/ui/block";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Path } from "@/settings";
import { fetchPlacelists } from "@/store/api-actions";
import { useNavigate } from "react-router";

function DiscoverPage() {
  const dispatch = useAppDispatch();
  const placelists = useAppSelector((state) => state.placelists);
  const navigate = useNavigate();

  return (
    <>
      <Header text={"Find placelists"} />
      <Input
        placeholder="Search"
        type="text"
        onInput={(event) => dispatch(fetchPlacelists(event.currentTarget.value))}
      />

      <Block>
        {placelists.map((placelist) => (
          <Card key={placelist.id} onClick={() => navigate(`${Path.Placelists}/${placelist.id}`)}>
            <CardHeader>
              <CardTitle>{placelist.name}</CardTitle>
              <CardDescription>{placelist.author}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </Block>
    </>
  );
}

export default DiscoverPage;
