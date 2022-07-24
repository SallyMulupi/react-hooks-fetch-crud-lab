import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";


function App() {
  const [page, setPage] = useState("List");
  const [question, setQuestions]= useState([]);

  const setNewQuestion = (newQuestion) => {
    setQuestions([...question, newQuestion])
  }

const onDelete= (data) => {
  const getQuestion = question.filter(question => question.id !== data.id)
  setQuestions(getQuestion)
};
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setNewQuestion={setNewQuestion} /> : <QuestionList onDelete={onDelete}/>}
    </main>
  );
}


export default App;
