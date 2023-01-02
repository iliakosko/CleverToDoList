import React from "react"


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



function TodoForm({
    handleSubmit,
    heading = false,
    text, setText,
    date, setDate,
    showButtons = false,
    setShowModal = false
}){

   

    return (
            <form onSubmit={handleSubmit} className='TodoForm'>
                <div className="text">
                    {
                       heading &&
                       <h3>{heading}</h3> 
                    }
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
                    {
                        showButtons &&
                        <div>
                            <div className="cancel" onClick={() => setShowModal(false)}>
                                <button>X</button>
                            </div>
                            <div className="confirm">
                                <button>+ Add to do</button>
                            </div>
                        </div>
                    }
                </div>
            </form>                
    )
}

export default TodoForm