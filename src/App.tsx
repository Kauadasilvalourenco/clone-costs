import { Routes, Route } from "react-router-dom";
// import react-router;

import { Home } from "./pages/_home/Home";
// import pages;

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
// import components;

import styleApp from "./App.module.css";
// import css;

export function App() {
  return (
    <div
      className={styleApp.App}
    >
      <Header />
      <main
        className={styleApp.Hero}
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};