import React, { useState } from "react"


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Modal from "./Modal"


function AddNewToDo(){

    const [showModal, setShowModal] = useState(false)

    const [text, setText] = useState('')

    const[date, setDate] = useState(new Date())

    return (
        <div className="AddNewToDo">
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New ToDo
                </button>
            </div>
           
            <Modal showModal = {showModal} setShowModal = {setShowModal}>
                <form>
                    <div className="text">
                        <h3>Add New To Do</h3>
                        <input 
                            type="text" 
                            value = {text} 
                            onChange = { (event) => setText(event.target.value)} 
                            placeholder='To do ...'
                            autoFocus
                        />
                        <div className="pick-day">
                            <div className="title">
                                
                                <p>Choose a day</p>
                            </div>
                            <DatePicker selected={date} onChange={(date) => setDate(date)}/>
                        </div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <button>X</button>
                        </div>
                        <div className="confirm">
                            <button>+ Add to do</button>
                        </div>
                    </div>
                </form>                
                
            </Modal>
        </div>
    )
}

export default AddNewToDo