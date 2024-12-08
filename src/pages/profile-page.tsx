import { USER } from "../settings";

function ProfilePage() {
  const user = USER;

  return (
    <>
      <header className="header">
        <h1 className="text_h1">Hi @{user.username}</h1>
      </header>
    </>
  );
}

export default ProfilePage;
