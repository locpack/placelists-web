import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppDispatch } from "../hooks/redux";
import { PLACELIST_PAGE_PLACES } from "../settings";

function PlacelistPage() {
  const dispatch = useAppDispatch();
  const places = PLACELIST_PAGE_PLACES;

  // useEffect(() => {
  //   dispatch(fetchPlacelist());
  // }, [dispatch]);

  return (
    <>
      <Block>
        <h1 className="text-4xl font-bold tracking-tight">My First Placelist!</h1>
        <h2 className="text-2xl">@author</h2>
      </Block>
      <Block>
        <Progress value={33} />
        <Button>Add Place</Button>
      </Block>
      <Block>
        {places.map((place) => (
          <Card key={place.id}>
            <CardHeader>
              <CardTitle>{place.name}</CardTitle>
              <CardDescription>{place.address}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </Block>
    </>
  );
}

export default PlacelistPage;
