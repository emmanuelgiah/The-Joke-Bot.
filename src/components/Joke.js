import React from "react";
import ReactDOM from "react-dom";

function Joke(prop) {

    let setup = "";
    let punchline = "";
    //error handling
    if (prop.question == null) {
        setup = "NO SETUP GIVEN";
    } else {
        setup = "Set Up: " + prop.question;
    } 
    
    if (prop.answer == null) {
        punchline = "NO PUNCHILNE GIVEN"
    } else {
        punchline = "Punchline: " + prop.answer;
    }
    //render elements
    return (
        <div className="Joke">
            <h2 className="Question"> <b>{setup}</b></h2>
            <h2 className="Answer"> <b>{punchline}</b></h2>
        </div>
    )

}

export default Joke;