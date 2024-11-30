import Block from "./components/block";
import Button from "./components/button";
import Card from "./components/card";
import IconBookmark from "./icons/icon-bookmark";
import "./index.css";
import { ButtonType } from "./settings";

function App() {
  return (
    <>
      <Block header="hello">
        <Button text="Main" type={ButtonType.Secondary} icon={<IconBookmark />} />
        <Button text="Main" type={ButtonType.Secondary} icon={<IconBookmark />} />
        <Card text="hello" hint="button" />
      </Block>
    </>
  );
}

export default App;
