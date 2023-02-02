import React from "react";
import firebase from "../../utilities/firebase";
import "./item.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faCheckCircle} from "@fortawesome/free-solid-svg-icons"



function Item ({ item }){
    const completeItem = () =>{
     const itemRef = firebase.database().ref('423-final-app').child(item.id);

     itemRef.update({
     complete: !item.complete,
    })
    }

    const deleteItem = () =>{
        const itemRef = firebase.database().ref('423-final-app').child(item.id);

        itemRef.remove();
    }
 
    

    return( 
    <div class="d-flex justify-content-center m-2 col-12 align-items-center container-fluid">
        <h5  className={item.complete ? 'complete':'incomplete' }>{item.title}</h5>
        <button class="col-1 d-flex justify-content-around align-items-center" onClick={completeItem} className={item.complete ? 'show-button' : 'hide-button'}><FontAwesomeIcon icon={faCheckCircle}/>Complete</button>
        <button class="col-1 d-flex justify-content-around align-items-center" onClick={completeItem} className={item.complete ? 'hide-button' : 'show-button'}>Incomplete</button> 
        <button className="delete" type="button" onClick={deleteItem} class="btn btn-danger"><FontAwesomeIcon icon={faTrash}/>Delete</button>
    </div>
    );
}
export default Item;