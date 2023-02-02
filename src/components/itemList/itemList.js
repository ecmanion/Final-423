import React, {useState, useEffect} from "react";
import firebase from "../../utilities/firebase";
import Item from "../item/item";
import "./itemList.css"

function ItemList(){
    const [itemList, setItemList] = useState();

    useEffect(() =>{
        const itemRef =firebase.database().ref('423-final-app');
        itemRef.on('value', (snapshot) =>{
            const items = snapshot.val();
            const itemList = [];
            for (let id in items){
                itemList.push({id, ...items[id] });
            }
            setItemList(itemList);
        });
        
    },
   []);

    return(
        <div className="itemList">
            {itemList ? itemList.map((item, index) => <Item item={item} key={index}/>) : ""}
        </div>
    );
}

export default ItemList;