import {Item} from "../models/ItemModel";
import './ShoppingList.scss';
import {Button} from "@mui/material";
// @ts-ignore
import { AccessAlarm, DeleteIcon } from '@mui/icons-material';

interface ShoppingListProps{
    items: Item[],
}

export default function ShoppingList(props: ShoppingListProps) {
    const {items} = props; //destruction, unnecessary to use "props." below
    return (
        <div>
            <div>ShoppingList</div>
            <div className="item-list">
                {items.map((item, index) => (
                    <div className='item-container' key={index}>
                        <div className='quantity'>
                            <span className="number-size"> {item.quantity}x </span>
                        </div>
                        <div className="item">{item.name}</div>
                        <Button variant="outlined" startIcon={<DeleteIcon/>}>
                            Delete
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}