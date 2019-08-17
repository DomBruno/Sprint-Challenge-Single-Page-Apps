import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
//import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
     
      <WelcomePage />
      <CharacterList />
    </main>
  );
}

// inset me after TabNav if needed:  <TabNav />  <AppRouter />
