import { useNavigate } from "react-router";
import Block from "../components/block";
import Button from "../components/button";
import Card from "../components/card";
import PlacelistAddIcon from "../icons/placelist-add-icon";
import { ButtonClass, Path, SAVED_PAGE_PLACELISTS } from "../settings";

function SavedPage() {
  const placelists = SAVED_PAGE_PLACELISTS;

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text_h1">My placelists</h1>
      {placelists.length > 0 && (
        <Block>
          {placelists.map((placelist) => (
            <Card
              key={placelist.id}
              onClick={() => navigate(`${Path.Placelists}/${placelist.id}`)}
              text={placelist.name}
              hint={placelist.author.name}
              active={false}
              extended={false}
            />
          ))}
        </Block>
      )}
      <Button
        icon={<PlacelistAddIcon />}
        onClick={() => navigate(Path.PlacelistsCreate)}
        text="Create placelist"
        buttonClass={ButtonClass.Primary}
      />
    </>
  );
}

export default SavedPage;
