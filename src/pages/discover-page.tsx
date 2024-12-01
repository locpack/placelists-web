import { useNavigate } from "react-router";
import Block from "../components/block";
import Card from "../components/card";
import Input from "../components/input";
import { DISCOVER_PAGE_PLACELISTS, InputType, Path } from "../settings";

function DiscoverPage() {
  const placelists = DISCOVER_PAGE_PLACELISTS;

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text_h1">All placelists</h1>
      <Input name="search" placeholder="Find placelists" type={InputType.Search} />
      <Block header="Results" horizontalFlow>
        {placelists.map((placelist) => (
          <Card
            key={placelist.id}
            onClick={() => navigate(`${Path.Placelists}/${placelist.id}`)}
            text={placelist.name}
            hint={placelist.author.name}
            active={false}
            extended
          />
        ))}
      </Block>
    </>
  );
}

export default DiscoverPage;
