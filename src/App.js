import { useState } from 'react';
import './App.css';
import Button from './Componente/Button';
import Input from './Componente/Input';

function App() {
    const [number, setNumber] = useState(0);

    const increment = () => {
        if (number < 10) {
            setNumber(number + 1);
        }
    }

    const decrement = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    }

    return (
        <>
            <Button text="-" actionOnClick={decrement} />
            <Input number={number} />
            <Button text="+" actionOnClick={increment} />
        </>
    );
}

export default App;
