import React, {useState} from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import ShoppingList from "./pages/ShoppingList";
import AddItem from "./pages/AddItem";
import {Item} from "./models/ItemModel";

// wichtig: schreibe für jede einzelne Komponente ihr eigenes Interface, mit dieser wird der Parameter props, typisiert
// übersichtlich wenn die porps anschließend wieder destructed werden

const item1: Item = {
    id: "1",
    name: "Brot",
    quantity: 2,
}

const item2: Item = {
    id: "2",
    name: "Bier",
    quantity: 2,
}

interface AppProps {

}

export default function App(props: AppProps) {
    const [items, setItems] = useState<Item[]>([
        item1,
        item2,
    ]);


    return (
        <div className="App App-header">
            <Routes>
                <Route path="*" element={<Main/>}/>
                <Route path="/Main" element={<Main/>}/>
                <Route path="/AddItem" element={<AddItem
                    items={items}
                    setItems={setItems}
                />}/>
                <Route path="/ShoppingList" element={<ShoppingList
                    items={items}
                />}/>
            </Routes>
        </div>
    );
}

