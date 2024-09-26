import styles from "./note.module.css";
import { useState } from "react";

const App = () => {
  const [noteList, setNoteList] = useState([
    {
      value: "abc",
    },
  ]);

  const addNotes = () => {
    const newNoteList = [...noteList];
    console.log(newNoteList);
    newNoteList.push({ value: "" });
    setNoteList(newNoteList);
  };

  const handleTextChange = (value, index) => {
    const newNoteList = noteList?.map((note, ind) => {
      if (ind === index) {
        return {
          ...note,
          value: value,
        };
      }
      return note;
    });

    setNoteList(newNoteList);
  };

  const handleDaleteNote =(index) =>{
    const newNoteList = noteList.filter((_, ind) => ind !== index);
    setNoteList(newNoteList);
  }

  return (
    <div>
      <h1 className={styles.heading}>Note App</h1>
      <p className={styles.infoText}>Double click on a note to remove it</p>
      {/* <div className={styles.app} id="app">
        <textarea
          cols="30"
          rows="10"
          className={styles.note}
          placeholder="Empty Note"
        ></textarea> */}
      <div className="flex justify-start items-center gap-10">
        <label>{}</label>
        {noteList?.map((note, index) => {
          return (
            <div key={index}>
              <textarea
                value={note?.value}
                rows={7}
                className="bg-gray-200 rounded-md p-5"
                onChange={(event) => {
                  const value = event.target.value;
                  handleTextChange(value, index);
                }}
              />
              <div></div>
            </div>
          );
        })}
        <button
          className={styles.btn}
          id="btn"
          onClick={() => {
            addNotes();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;