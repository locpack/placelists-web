import { USER } from "../settings";

function ProfilePage() {
  const user = USER;

  return (
    <>
      <header className="header">
        <h1 className="text_h1">{user.name}</h1>
        <h2 className="username text_h2">{user.username}</h2>
      </header>
    </>
  );
}

export default ProfilePage;
