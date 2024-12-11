import { Outlet } from "react-router";

function App() {
  return (
    <>
      <main className="flex flex-col gap-8 p-4 pt-16">
        <Outlet />
      </main>
    </>
  );
}

export default App;
