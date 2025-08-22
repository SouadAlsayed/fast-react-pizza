import { Outlet } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <Outlet />
    </div>
  );
}

export default Home;
