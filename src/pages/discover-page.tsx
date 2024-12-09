import { useNavigate } from "react-router";
import Block from "../components/block";
import Card from "../components/card";
import Input from "../components/input";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Path } from "../settings";
import { fetchPlacelists } from "../store/api-actions";

function DiscoverPage() {
  const dispatch = useAppDispatch();
  const placelists = useAppSelector((state) => state.placelists);
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <h1 className="text_h1">Find placelists</h1>
      </header>
      <Block>
        <Input placeholder="Search" onInput={(value) => dispatch(fetchPlacelists(value))} />
      </Block>
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
