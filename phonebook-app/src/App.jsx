import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="h-[100dvh] flex justify-center">
      <div className="p-5 flex flex-col  h-full gap-4 ">
        <ContactForm />
        <ContactList />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
