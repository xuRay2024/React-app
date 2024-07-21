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
  const [person, setPersons] = useState<Persons[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setPersons(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // .finally(() => {
    //   setLoading(false);
    // });

    return () => cancel();
  }, []);

  const deleteUser = (user: Persons) => {
    const originalUsers = [...person];
    setPersons(person.filter((u) => u.id !== user.id));

    userService.deleteUser(user.id).catch((err) => {
      setError(err.message);
      setPersons(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...person];
    const newUser = { id: 0, name: "Ray" };
    setPersons([newUser, ...person]);

    userService
      .addUser(newUser)
      .then(({ data: savedUser }) => setPersons([savedUser, ...person]))
      .catch((err) => {
        setError(err.message);
        setPersons(originalUsers);
      });
  };

  const updateUsers = (user: Persons) => {
    const originalUsers = [...person];
    const updateUser = { ...user, name: user.name + "!" };
    setPersons(person.map((u) => (u.id === user.id ? updateUser : u)));

    userService.updateUser(updateUser).catch((err) => {
      setError(err.message);
      setPersons(originalUsers);
    });
  };

  return (
    <>
      {error && <p className='text-danger'>{error}</p>}
      {isLoading && <div className='spinner-border'></div>}
      <button className='btn btn-primary mb-3' onClick={addUser}>
        Add
      </button>
      <ul className='list-group'>
        {person.map((user) => (
          <li
            key={user.id}
            className='list-group-item d-flex justify-content-between'>
            {user.name}
            <div>
              <button
                className='btn btn-outline-secondary mx-1'
                onClick={() => updateUsers(user)}>
                Update
              </button>
              <button
                className='btn btn-outline-danger'
                onClick={() => deleteUser(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
