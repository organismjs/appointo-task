import { Outlet } from "react-router";
import logo from "../assets/logo.png";

export default function BaseLayout() {
  return (
    <div>
      <nav className="nav-wrapper">
        <img src={logo} />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
