import Block from "../components/block";
import Button from "../components/button";
import Card from "../components/card";
import { ButtonType, PLACELIST_PAGE_PLACES } from "../settings";

function PlacelistPage() {
  const places = PLACELIST_PAGE_PLACES;

  return (
    <>
      <header className="header">
        <h1 className="text_h1">My First Placelist!</h1>
        <h2 className="text_h2">@author</h2>
      </header>
      <Block>
        <div className="progress_bar"></div>
        <Button text="Add Place" type={ButtonType.Accent} />
      </Block>
      <Block>
        {places.map((place) => (
          <Card key={place.id} text={place.name} hint={place.address} />
        ))}
      </Block>
    </>
  );
}

export default PlacelistPage;
