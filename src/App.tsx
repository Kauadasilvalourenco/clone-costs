import { Routes, Route } from "react-router";
// import router;

import { Home } from "./pages/_home/Home";
import { Projects } from "./pages/_projects/Projects";
// import pages

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
// import components

export function App() {
  return (
    <div>

      <Header />

      <main>

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