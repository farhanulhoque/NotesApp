import React, {useState} from "react";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNote => {
            return [...prevNote, note];
        });
    }

    function deleteNote(id){
        setNotes(prevNote => {
            return prevNote.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <CreateArea onAdd={addNote}/>

            {notes.map((noteItem, index) => {
                return( 
                    <Note 
                        key={index}
                        id={index}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );    
            })}

            <Footer/>
        </div>
    );
}

export default App;