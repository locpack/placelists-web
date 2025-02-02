import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { clearPlaces } from "@/store/actions/place-actions";
import {
  getPlacelistById,
  getPlacelistPlacesById,
  updatePlacelistPlacesById,
} from "@/store/api-actions/placelist-api-actions";
import { WrappedRequest } from "@/types/api";
import { Id } from "@/types/common";
import { Place } from "@/types/place";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

function PlacelistPage() {
  const dispatch = useAppDispatch();
  const placelist = useAppSelector((state) => state.placelist);
  const places = useAppSelector((state) => state.places);

  const { id } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (id) {
      dispatch(getPlacelistById(id));
      dispatch(getPlacelistPlacesById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    updateProgress();
  }, [places]);

  function handleClick(placeId: Id) {
    const updatedPlaces = places.map((place) => ({
      ...place,
      visited: place.id === placeId ? !place.visited : place.visited,
    }));

    const placelistPlacesUpdate: WrappedRequest<Place[]> = {
      id: placeId,
      data: updatedPlaces,
    };
    dispatch(updatePlacelistPlacesById(placelistPlacesUpdate));
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
            <h2 className="text-2xl">@{placelist.authorUsername}</h2>
          </Block>
          <Block>
            <Card>
              <CardContent className="flex flex-col pt-6 gap-4">
                <Progress value={progress} />
                <Button
                  className="flex flex-1-1"
                  onClick={() => {
                    dispatch(clearPlaces());
                    navigate("./add-place");
                  }}
                >
                  Add Place
                </Button>
              </CardContent>
            </Card>
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
                onClick={() => handleClick(place.id)}
              >
                <CardHeader className="select-none">
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
