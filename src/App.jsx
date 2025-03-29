import React, { useState } from "react";
import FormFill from "./components/FormFill";
import ShowResult from "./components/ShowResult";

import style from "./components/FormFill/FormFill.module.css"

function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    const heightValue = parseFloat(e.target.height.value);
    const weightValue = parseFloat(e.target.weight.value);

    if (isNaN(heightValue) && isNaN(weightValue)) {
      alert("Please fill in all fields to proceed.");
      document.getElementById("height").style.border = "2px solid red";
      document.getElementById("weight").style.border = "2px solid red";
    } else if (isNaN(heightValue) && (!isNaN(weightValue))) {
      alert("Please fill the height field to proceed");
      document.getElementById("height").style.border = "2px solid red";
      document.getElementById("weight").style.border = "";
    } else if (isNaN(weightValue) && (!isNaN(heightValue))) {
      alert("Please fill the weight field to proceed");
      document.getElementById("weight").style.border = "2px solid red";
      document.getElementById("height").style.border = "";
    } else {
      setHeight(heightValue);
      setWeight(weightValue);
      document.getElementById("weight").style.border = "";
      document.getElementById("height").style.border = "";
    }
  }

  return (
    <div className="container">
      <h1>IMC CALCULATOR</h1>
      <form onSubmit={submit}>
        <div className={style.formInputContainer}>
          <label htmlFor="height">Enter the height:</label>
          <input id="height" type="number" step={0.01} placeholder="example: 1.80" />
          <span>Meters</span>
        </div>
        <div className={style.formInputContainer}>
          <label htmlFor="weight">Enter the weight:</label>
          <input id="weight" type="number" placeholder="example: 80" />
          <span>Kilogramas</span>
        </div>
        <button type="submit">CALCULATE</button>
      </form>
      <ShowResult height={height} weight={weight} />
    </div>
  )
}

export default App
