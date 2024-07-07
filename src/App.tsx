import { useState } from "react";
import produce from "immer";
import Button from "./componments/Button/Button";
import Alert from "./componments/Alert";
import ListGroup from "./componments/ListGroup";
import Like from "./componments/Like";
import Message from "./Message";
import NavBar from "./componments/NavBar";
import Cart from "./componments/Cart";
import ExpandTexts from "./componments/ExpandTexts";

function App() {
  const handleClick = () => {};

  return (
    <div>
      <ExpandTexts>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
        voluptatibus amet. Hic excepturi quidem ut voluptatem asperiores
        delectus soluta quam, autem, modi rem dolore! Nostrum id laborum labore
        doloremque itaque.
      </ExpandTexts>
    </div>
  );
}

export default App;
