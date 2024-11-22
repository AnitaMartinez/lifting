import "../scss/App.scss";
import Preview from "./Preview";
import Form from "./Form";
import { useState } from "react";

/*
    Cuando la usuaria escriba en uno de los inputs:
        - Recoger el valor del input
        - Pintarlo en preview
*/

function App() {
    const [name, setName] = useState ("");
    const handleName = (userName) => {
        setName(userName);
    }

    return (
        <>
            <header><h1>Lifting y props</h1></header>
            <Form onChangeName = {handleName}/>
            <Preview nameUser ={name}/>
        </>
    )
}

export default App
