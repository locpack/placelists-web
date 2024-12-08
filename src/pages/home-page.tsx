import { useNavigate } from "react-router";
import { AUTH_STATUS } from "../settings";

function HomePage() {
  const authStatus = AUTH_STATUS;

  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1 className="text_h1">My First Placelist!</h1>
        <h2 className="text_h2">@author</h2>
      </header>
    </>
  );
}

export default HomePage;
