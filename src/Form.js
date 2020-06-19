import React from "react";

export default function Form(props) {
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    errors,
    disabled,
  } = props;

  return (
    <form className="FormDiv" onSubmit={onSubmit}>
      <div>
        <h2>Get Started</h2>
      </div>

      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms}</div>
      </div>

      <label className="form-labels">
        Name: &nbsp;
        <input
          value={values.name}
          onChange={onInputChange}
          name="name"
          type="text"
        />
      </label>
      <br />

      <label className="form-labels">
        Size:&nbsp;
        <select name="size" value={values.size} onChange={onInputChange}>
          <option value=""></option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra Large">Extra Large</option>
        </select>
      </label>
      <br />

      <label>
        Pepperoni&nbsp;
        <input
          onChange={onCheckboxChange}
          value={values.pepperoni}
          name="pepperoni"
          type="checkbox"
        />
      </label>
      <br />

      <label>
        Pineapple&nbsp;
        <input
          onChange={onCheckboxChange}
          value={values.pineapple}
          name="pineapple"
          type="checkbox"
        />
      </label>
      <br />

      <label>
        Banana Peppers&nbsp;
        <input
          onChange={onCheckboxChange}
          value={values.bananaPeppers}
          name="bananaPeppers"
          type="checkbox"
        />
      </label>
      <br />

      <label>
        Green Pepper&nbsp;
        <input
          onChange={onCheckboxChange}
          value={values.greenPepper}
          name="greenPepper"
          type="checkbox"
        />
      </label>
      <br />

      <label className="form-labels">
        Special Instructions:&nbsp;
        <input
          value={values.special}
          onChange={onInputChange}
          name="special"
          type="text"
        />
      </label>
      <br />

      <button disabled={disabled}>Add to Order!</button>
      <br />
    </form>
  );
}
