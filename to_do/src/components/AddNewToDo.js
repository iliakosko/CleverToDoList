import React, { useState } from "react"

import "react-datepicker/dist/react-datepicker.css";

import Modal from "./Modal"
import TodoForm from "./TodoForm";


function AddNewToDo(){

    const [showModal, setShowModal] = useState(false)

    const [text, setText] = useState('')

    const[date, setDate] = useState(new Date())

    function handleSubmit(e){

    }

    return (
        <div className="AddNewToDo">
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New ToDo
                </button>
            </div>
           
            <Modal showModal = {showModal} setShowModal = {setShowModal}>
               <TodoForm
                    handleSubmit={handleSubmit}
                    heading ='Add new to do!'
                    text={text}
                    setText={setText}
                    date = {date}
                    setDate={setDate}
                    showButtons = {true}
                    setShowModal={setShowModal}
               />        
            </Modal>
        </div>
    )
}

export default AddNewToDo