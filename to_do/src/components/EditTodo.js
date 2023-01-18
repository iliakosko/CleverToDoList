import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context";

import moment from "moment";
import firebase from "firebase";

import TodoForm from "./TodoForm";

function EditTodo() {
  const [text, setText] = useState("");

  const [date, setDate] = useState(new Date());

  const { selectedTodo } = useContext(TodoContext);

  useEffect(() => {
    if (selectedTodo) {
      console.log(selectedTodo.date);
      setText(selectedTodo.text);
      setDate(new Date(selectedTodo.date));
    }
  }, [selectedTodo]);

  useEffect(() => {
    if (selectedTodo) {
      firebase
        .firestore()
        .collection("todos")
        .doc(selectedTodo.id)
        .update({
          text,
          date: moment(date).format("MM/DD/YYYY"),
        });
    }
  }, [text, date]);

  return (
    <div>
      {selectedTodo && (
        <div className="EditTodo">
          <div className="header">Edit Todo</div>
          <div className="container">
            <TodoForm
              text={text}
              setText={setText}
              date={date}
              setDate={setDate}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EditTodo;
