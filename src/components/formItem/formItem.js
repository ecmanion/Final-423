import React, {useState} from "react";
import firebase from "../../utilities/firebase";
import "./formItem.css";

function FormItems(){

    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const createItem = () => {
        const itemRef = firebase.database().ref('423-final-app');
        const item = {
            title,
            complete: true
        }

        itemRef.push(item)

    }
    return(
        <div className="formItemTitle">
             <h1>Grocery Items</h1>
             <input placeholder="list item..." type="text" onChange={handleOnChange} value={title}/>
            <button onClick={createItem} type="button" class="btn btn-primary">Create List Item</button>
        </div>
    );
   
}
export default FormItems;