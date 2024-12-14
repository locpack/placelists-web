import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { fetchPlacelist, updatePlace } from "@/store/api-actions";
import { Place } from "@/types/place";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

function PlacelistPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const placelist = useAppSelector((state) => state.placelist);
  const places = useAppSelector((state) => state.places);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchPlacelist(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    updateProgress();
  }, [places]);

  function handleClick(place: Place) {
    dispatch(updatePlace({ ...place, visited: !place.visited }));
  }

  function updateProgress() {
    if (!places) {
      setProgress(0);
      return;
    }
    const visitedPlaces = places.filter((place) => place.visited);
    const newProgress = (visitedPlaces.length / places.length) * 100;
    setProgress(newProgress);
  }

  return (
    <>
      {!placelist ? (
        <p className="text-center">Error during loading page</p>
      ) : (
        <>
          <Block>
            <h1 className="text-4xl font-bold tracking-tight">{placelist.name}</h1>
            <h2 className="text-2xl">@{placelist.author.name}</h2>
          </Block>
          <Block>
            <Progress value={progress} />
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
