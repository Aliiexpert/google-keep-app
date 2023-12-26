import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
    const dltNote=()=>{

        props.deleteItem(props.id);
    }
  return (
    <>
      <div className="Note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={dltNote} className="deletebtn">
          <DeleteOutlineIcon className="btnicon"></DeleteOutlineIcon>
        </button>
      </div>
    </>
  );
};
export default Note;
