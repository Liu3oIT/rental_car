import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Container } from "../Header/Header.styled";

export default function Layout() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
