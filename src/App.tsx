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
import ExpenseFilter from "./expense-tracker/componments/ExpenseFilter";
import ExpenseForm from "./expense-tracker/componments/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses01, setExpenses] = useState([
    { id: 1, description: "aa", amount: 6, category: "Unknown" },
    { id: 2, description: "bb", amount: 7, category: "Unknown" },
    { id: 3, description: "cc", amount: 8, category: "Unknown" },
    { id: 4, description: "dd", amount: 9, category: "Unknown" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses01.filter((e) => e.category === selectedCategory)
    : expenses01;

  return (
    <>
      <div>
        <div className='mb-5'>
          <ExpenseForm
            onSubmit={(newexpense) =>
              setExpenses([
                ...expenses01,
                { ...newexpense, id: expenses01.length + 1 },
              ])
            }
          />
        </div>
        <div className='mb-3'>
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
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
