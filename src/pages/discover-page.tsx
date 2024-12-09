import { useState } from "react";
import { useNavigate } from "react-router";
import Block from "../components/block";
import Card from "../components/card";
import Input from "../components/input";
import { DISCOVER_PAGE_PLACELISTS, Path } from "../settings";
import { PlacelistCompressed } from "../types/placelist";

function DiscoverPage() {
  const [placelists, setPlacelists] = useState<PlacelistCompressed[]>([]);
  const navigate = useNavigate();

  function handleInput(value: string) {
    const foundPlacelists = DISCOVER_PAGE_PLACELISTS.filter(
      (placelist) =>
        placelist.author.toLowerCase().includes(value) || placelist.name.toLowerCase().includes(value)
    );
    setPlacelists(foundPlacelists);
  }

  return (
    <>
      <header className="header">
        <h1 className="text_h1">Find placelists</h1>
      </header>
      <Input placeholder="Search" onInput={handleInput} />
      <Block>
        {placelists.map((placelist) => (
          <Card
            key={placelist.id}
            text={placelist.name}
            hint={placelist.author}
            onClick={() => navigate(`${Path.Placelists}/${placelist.id}`)}
          />
        ))}
      </Block>
    </>
  );
}

export default DiscoverPage;
