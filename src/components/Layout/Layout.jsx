import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
