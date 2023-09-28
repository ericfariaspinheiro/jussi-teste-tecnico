import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import Search from "./pages/search/Search";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/jussi-teste-tecnico" element={<Home />} />
        <Route
          path="/search/:searchTerm"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Search />
            </Suspense>
          }
        />
      </Routes>

      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
