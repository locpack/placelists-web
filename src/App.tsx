import Block from "./components/block";
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";
import IconBookmark from "./icons/icon-bookmark";
import "./index.css";
import { ButtonType, InputType } from "./settings";

function App() {
  return (
    <>
      <Block header="hello">
        <Button text="Main" type={ButtonType.Secondary} icon={<IconBookmark />} />
        <Button text="Main" type={ButtonType.Secondary} icon={<IconBookmark />} />
        <Card text="hello" hint="button" />
        <Input name="text" placeholder="Текст" type={InputType.Text} />
      </Block>
    </>
  );
}

export default App;
