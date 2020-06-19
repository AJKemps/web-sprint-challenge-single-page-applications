import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Form from "./Form";
import Order from "./Order";
import * as Yup from "yup";
import formSchema from "./formSchema";
import axios from "axios";
import { Header, BodyContainer, FormContainer } from "./Styles";

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  pineapple: false,
  bananaPeppers: false,
  greenPepper: false,
  special: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};

const initialPizzaList = [];

const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pizzaList, setPizza] = useState(initialPizzaList);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    Yup.reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
      returned from yup (that we created in our schema) */
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      pineapple: formValues.pineapple,
      bananaPeppers: formValues.bananaPeppers,
      greenPepper: formValues.greenPepper,
      special: formValues.special.trim(),
    };

    postNewPizza(newPizza);
  };

  const postNewPizza = (newPizza) => {
    axios
      .post("https://reqres.in/api/users", newPizza)
      .then((res) => {
        setPizza([res.data, ...pizzaList]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Post error:", err);
      })
      .finally(() => {
        console.log("pizzaList:", pizzaList);
        setFormValues(initialFormValues);
      });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <BodyContainer>
        <Header>
          <header>
            <h1>Big Al's Pizza Parlor</h1>

            <nav>
              <Link to="/">Home</Link>
              <Link to="/pizza">Order Pizza</Link>
            </nav>
          </header>
        </Header>
      </BodyContainer>

      <Switch>
        <Route path="/pizza">
          <BodyContainer>
            <FormContainer>
              <Form
                values={formValues}
                onInputChange={onInputChange}
                onCheckboxChange={onCheckboxChange}
                onSubmit={onSubmit}
                errors={formErrors}
                disabled={disabled}
              />
            </FormContainer>

            {pizzaList.map((user) => {
              return <Order key={user.id} details={user} />;
            })}
          </BodyContainer>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
