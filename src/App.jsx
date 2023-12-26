import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNode from "./CreateNode";
import Note from "./Note";
import "./index.css";
const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((preData) => {
      return [...preData, note];
    });
  };
  const dltItem = (id) => {
  setAddItem((oldData) => {
    return oldData.filter((curData, index) => {
      return index !== id;
    });
  });
};

  return (
    <>
      <Header />
      <Footer />
      <CreateNode passNote={addNote} />
      <div className="notes-container">
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={dltItem}
          />
        );
      })}
      </div>
    </>
  );
};
export default App;
