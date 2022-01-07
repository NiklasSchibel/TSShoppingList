import {Item} from "../models/ItemModel";
import {ChangeEventHandler, Dispatch, KeyboardEventHandler, SetStateAction, useState} from "react";
import {Button} from "@mui/material";
// @ts-ignore: or cast to : any
import {v4 as uuid} from 'uuid' ;
import {Input} from '@mui/material';
import {useNavigate} from 'react-router-dom';


interface AddItemProps {
    items: Item[],
    setItems: Dispatch<SetStateAction<Item[]>>
}

// Vorlage TypeScript Funktion:
// function getUserFullName(user: User): string {
//     return `${user.firstName} ${user.lastName}`;
// }

export default function AddItem(props: AddItemProps) {
    let navigate = useNavigate();
    const {items, setItems} = props; //destruction, unnecessary to use "props." below
    const [inputValue, setInputValue] = useState<string>("");

    const handleAddButtonFunc: () => void = // hier steht nur die TypenDeklaration der Funktion
        () => {
            if (checkIfEmpty(inputValue)) {
                return;
            }

            if (checkIfAllreadyExist(inputValue)){
                const newItems: Item[] = [...items];
                // @ts-ignore
                newItems.filter(item => item.name === inputValue)[0].quantity++;
                setItems(newItems);
                setInputValue("");
                return;
            }

            const newItem: Item = {
                id: uuid(),
                name: inputValue,
                quantity: 1,
            };
            const newItems: Item[] = [...items, newItem];
            setItems(newItems);
            setInputValue("");
        }; //ab zweite Zeile steht die eigentliche Funktion

    const checkIfEmpty: (stringInput: string) => boolean = (stringInput) => {
        return stringInput.trim() === "";
    }


    const checkIfAllreadyExist: (stringInput: string) => boolean = (stringInput) =>{
        if (items.filter(item => item.name === stringInput).length===1){
            console.log("gibt es bereits")
            return true;
        } else{
            console.log("gibt es noch nicht");
            return false;
        }
    }

    const keyPressHandler: KeyboardEventHandler<HTMLDivElement>
        = (event) => { //TypenDeklaration von oben klappt nicht! warum??
        if (event.code === "Enter") {
            handleAddButtonFunc();
        }
    };

    const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
        = (event) => {
        setInputValue(event.target.value);
    }

    const handleNavigateButton: () => void = () => {
        navigate(-1);
    }

    return (
        <div className="add-item">
            <div className="App-header">AddItemPage
                <div className='add-item-box'>
                    <Input value={inputValue}
                           onChange={onChangeHandler}
                           onKeyPress={keyPressHandler}
                           placeholder=""
                    />
                    <Button variant="outlined" onClick={handleAddButtonFunc}>AddItem</Button>
                </div>
                <Button className="button-back" onClick={handleNavigateButton}>
                    back
                </Button>
            </div>
        </div>
    )
}