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
import Form from "./componments/Form";
import ExpenseList from "./expense-tracker/ExpenseList";

function App() {
  const [expenses01, setExpenses] = useState([
    { id: 1, description: "aa", amount: 6, category: "Unknow" },
    { id: 2, description: "bb", amount: 7, category: "Unknow" },
    { id: 3, description: "cc", amount: 8, category: "Unknow" },
    { id: 4, description: "dd", amount: 9, category: "Unknow" },
  ]);

  return (
    <>
      <div>
        <ExpenseList
          expenses={expenses01}
          onDelete={(id) => setExpenses(expenses01.filter((e) => e.id !== id))}
        />
      </div>
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
