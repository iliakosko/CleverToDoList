import React, { useState } from "react"

import "react-datepicker/dist/react-datepicker.css";

import Modal from "./Modal"
import TodoForm from "./TodoForm";

import firebase from '../firebase'
import moment from 'moment'

function AddNewToDo(){

    const [showModal, setShowModal] = useState(false)

    const [text, setText] = useState('')

    const[date, setDate] = useState(new Date())

    function handleSubmit(e){
        e.preventDefault()

        if(text){
            firebase
                .firestore()
                .collection('todos')
                .add(
                    {
                        text: text,
                        date: moment(date).format('MM/DD/YYYY'),
                        checked: false
                    }
                )
            setShowModal(false)
            setText('')
            setDate(new Date())
        }
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