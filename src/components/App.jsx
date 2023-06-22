import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NotesContent from "../notes";

function App() {
  return (
    <div>
      <Header />
      {NotesContent.map((notesItem) => (
        <Note
          key={notesItem.key}
          title={notesItem.title}
          content={notesItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
