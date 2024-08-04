import { useEffect, useRef, useState } from "react";
import produce, { original } from "immer";
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
import ProductList from "./componments/ProductList";
import { CanceledError } from "./services/api-client";
import userService, { Persons } from "./services/user-service";

function App() {
  // const content = "内容";
  const Title = "标题";

  const flag = true;

  return <div title={Title}>{Title}</div>;
}

export default App;
