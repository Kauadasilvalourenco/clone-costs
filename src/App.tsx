import { Header } from "./components/header/Header";
// import components;

import styleApp from "./App.module.css";
// import css;

export function App() {
  return (
    <div
      className={styleApp.App}
    >
      <Header />
      <h1>Pronto para começar</h1>
    </div>
  );
};