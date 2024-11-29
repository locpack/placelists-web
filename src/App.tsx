import Button from "./components/button";
import IconBookmark from "./icons/icon-bookmark";
import "./index.css";
import { ButtonType } from "./settings";

function App() {
  return (
    <>
      <Button text="Main" type={ButtonType.Secondary} icon={<IconBookmark />} />
    </>
  );
}

export default App;
