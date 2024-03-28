import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Details } from "../pages/details";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { BottomDrawer } from "../components/bottom-drawer/BottomDrawer";
import { Favourites } from "../pages/favourites/Favourites";

export const Layout = function () {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="details/:id" element={<Details />} />
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
      <BottomDrawer>
        <Favourites />
      </BottomDrawer>
    </>
  );
};
