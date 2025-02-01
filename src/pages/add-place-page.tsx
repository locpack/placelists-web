import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Path } from "@/settings";
import { createPlace, getPlacesByQuery } from "@/store/api-actions/place-api-actions";
import { Label } from "@radix-ui/react-menubar";
import { Field, Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router";

function AddPlacePage() {
  const dispatch = useAppDispatch();
  const places = useAppSelector((state) => state.places);

  const { id } = useParams();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     dispatch(setPlaces([]));
  //   }, [dispatch]);

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight">Create place</h1>

      <Card>
        <CardContent className="pt-6">
          <Formik
            className="flex flex-col gap-6"
            initialValues={{ name: "", address: "" }}
            onSubmit={(values) => {
              dispatch(createPlace(values));
              navigate(`${Path.Placelists}/${id}`);
            }}
          >
            <Form className="grid gap-6">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label>Name</Label>
                </div>
                <Field
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  type="text"
                  name="name"
                  placeholder="Place name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label>Address</Label>
                </div>
                <Field
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  type="text"
                  name="address"
                  placeholder="Place address"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </Form>
          </Formik>
        </CardContent>
      </Card>

      <h1 className="text-4xl font-bold tracking-tight">Or find it</h1>

      <Card>
        <CardContent className="pt-6">
          <Input
            placeholder="Search"
            type="text"
            onInput={(event) => dispatch(getPlacesByQuery(event.currentTarget.value))}
          />
        </CardContent>
      </Card>

      <Block>
        {places.map((place) => (
          <Card
            key={place.id}
            className={
              place.visited
                ? "bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90"
                : "cursor-pointer hover:bg-secondary/90"
            }
          >
            <CardHeader>
              <CardTitle>{place.name}</CardTitle>
              <CardDescription>{place.address ?? "Address not found"}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </Block>
    </>
  );
}

export default AddPlacePage;
