import React, {useState} from "react";

function CreateArea(props){
    const [note, setNote] = useState({
        content: ""
    });

    function handleChange(event){  //going to reveive an event when it gets triggered
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        })
    }

    function submitNote(event){
        props.onAdd(note); //this is quivalent to calling the addNOte function in App.jsx
        setNote({
            content: ""
        });
        event.preventDefault();  // Prevents reloading of the page when the button is clicked
    }

    return(
        <div>
            <form>
                <textarea 
                    name="content" 
                    onChange={handleChange}
                    value={note.content} 
                    placeholder="Take a note..." 
                    rows="3" 
                />
                <button
                    onClick={submitNote}
                >+
                </button>
            </form>
        </div>
    );
}

export default CreateArea;