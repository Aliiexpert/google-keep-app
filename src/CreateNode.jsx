import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
const CreateNode = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (event) => {
    const { value, name } = event.target;
    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const changeEvent=(event)=>{
event.preventDefault();
props.passNote(note);
setNote({
  title: "",
  content: "",
});
  }
  return (
    <>
      <div className="main-note">
        <form>
          <input
            type="text"
            value={note.title}
            onChange={InputEvent}
            name="title"
            placeholder="Title"
          ></input>
          <textarea
            value={note.content}
            onChange={InputEvent}
            name="content"
            placeholder="Write a note..."
          />
          <button onClick={changeEvent}  class="add-button">
            <span class="btn-icon">+</span>
          </button>
        </form>
      </div>
    </>
  );
};
export default CreateNode;
