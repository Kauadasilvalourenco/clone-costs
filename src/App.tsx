import { Routes, Route } from "react-router";
// import router;

import { Home } from "./pages/_home/Home";
import { Projects } from "./pages/_projects/Projects";
// import pages

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
// import components;

import styleApp from "./App.module.css";
// import css;

export function App() {
  return (
    <div
      className={styleApp.conteiner_app}
    >

      <Header />

      <main
        className={styleApp.hero}
      >

        <Routes>

          <Route 
            path="/"
            element={<Home />}
          />

          <Route 
            path="/projects"
            element={<Projects />}
          />
          
        </Routes>

      </main>

      <Footer />

    </div>
  );
};