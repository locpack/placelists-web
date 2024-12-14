import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { fetchPlacelist, updatePlace } from "@/store/api-actions";
import { Place } from "@/types/place";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

function PlacelistPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const placelist = useAppSelector((state) => state.placelist);
  const places = useAppSelector((state) => state.places);

  useEffect(() => {
    if (id) {
      dispatch(fetchPlacelist(id));
    }
  }, [dispatch, id]);

  function handleClick(place: Place) {
    dispatch(updatePlace({ ...place, visited: !place.visited }));
  }

  return (
    <>
      {!placelist ? (
        <p className="text-center">Error during loading page</p>
      ) : (
        <>
          <Block>
            <h1 className="text-4xl font-bold tracking-tight">{placelist.name}</h1>
            <h2 className="text-2xl">{placelist.author.name}</h2>
          </Block>
          <Block>
            <Progress value={33} />
            <Button>Add Place</Button>
          </Block>
          <Block>
            {places.map((place) => (
              <Card
                key={place.id}
                className={
                  place.visited
                    ? "bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90"
                    : "cursor-pointer hover:bg-secondary/90"
                }
                onClick={() => handleClick(place)}
              >
                <CardHeader>
                  <CardTitle>{place.name}</CardTitle>
                  <CardDescription>{place.address}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </Block>
        </>
      )}
    </>
  );
}

export default PlacelistPage;
