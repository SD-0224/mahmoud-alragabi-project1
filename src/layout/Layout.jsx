import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Header } from "../components/header";

export const Layout = function () {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};
