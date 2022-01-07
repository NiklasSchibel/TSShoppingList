import {Item} from "../models/ItemModel";
import './ShoppingList.scss';
import {Button, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {ChangeEventHandler, MouseEventHandler } from "react";

interface ShoppingListProps{
    items: Item[],
}

export default function ShoppingList(props: ShoppingListProps) {
    const {items} = props; //destruction, unnecessary to use "props." below

    const handleRemoveButtonFunc = (item: Item) => {

        return;
    }


    //großer Unterschied ob nur die Funktion aufgerufen wird siehe in items.map onClick Button, hier wird nur die Funktion aufgerufen
    //in dem AddItem tsx. wird nicht nur die Funktion aufgerufen ... checke den Unterschied noch nicht

    return (
        <div>
            <div>ShoppingList</div>
            <div className="item-list">
                {items.map((item: Item, index) => (
                    <div className='item-container' key={index}>
                        <div className='quantity'>
                            <span className="number-size"> {item.quantity}x </span>
                        </div>
                        <div className="item">{item.name}</div>
                        <Button variant="outlined" onClick={() => {handleRemoveButtonFunc(item)}} startIcon={<DeleteIcon />}>
                            remove
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}