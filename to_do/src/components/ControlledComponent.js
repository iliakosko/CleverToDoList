import  React,{ useState } from "react"

function ControlledComponent(){
    
    const [text, setText] = useState('')
    const [name, setName] = useState('')

    return(
        <div>
            <input type="text" value = {text} onChange = { (event) => setText(event.target.value)} />

            <input type="text" value = {name} onChange = { (event) => setName(event.target.value)} />
        </div>
    )
}