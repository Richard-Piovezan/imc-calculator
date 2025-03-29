import { useEffect, useState } from "react";
import style from "./ShowResult.module.css"

const ShowResult = ({height, weight}) => {
    const [imcCalculate, setImcCalculate] = useState(null);
    const [imcClassification, setImcClassification] = useState(null);
    
    
    useEffect(() => {
        if (height > 0 && weight > 0) {
            setImcCalculate((weight / (height ** 2)).toFixed(2));
        } else {
            setImcCalculate("- - -");
        }

        if (imcCalculate >= 1 && imcCalculate <= 18.49) {
            setImcClassification("Underweight");
            document.getElementById("imc").style.color = "blue";
            document.getElementById("classification").style.color = "blue";
        } else if (imcCalculate >= 18.5 && imcCalculate <= 24.99) {
            setImcClassification("Normal weight");
            document.getElementById("imc").style.color = "green";
            document.getElementById("classification").style.color = "green";
        } else if (imcCalculate >= 25 && imcCalculate <= 29.99) {
            setImcClassification("Overweight");
            document.getElementById("imc").style.color = "yellow";
            document.getElementById("classification").style.color = "yellow";
        } else if (imcCalculate >= 30 && imcCalculate <= 34.99) {
            setImcClassification("Obesity I");
            document.getElementById("imc").style.color = "orange";
            document.getElementById("classification").style.color = "orange";
        } else if (imcCalculate >= 35 && imcCalculate <= 39.99) {
            setImcClassification("Obesity II");
            document.getElementById("imc").style.color = "red";
            document.getElementById("classification").style.color = "red";
        } else if (imcCalculate >= 40) {
            setImcClassification("Obesity III");
            document.getElementById("imc").style.color = "brown";
            document.getElementById("classification").style.color = "brown";
        } else {
            setImcClassification("- - -")
            document.getElementById("imc").style.color = "";
            document.getElementById("classification").style.color = "";
        }
    }, [height, weight, imcClassification, imcCalculate])
    
    return (
        <>
            <h2>Calculation Result</h2>
            <ul>
                <li>
                    IMC of 
                    <span id="imc" className={style.imc}>
                        {imcCalculate}
                    </span>
                </li>
                <li>
                    Classification
                    <span id="classification" className={style.classification}>
                        {imcClassification}
                    </span>
                </li>
            </ul>
        </>
    )
}

export default ShowResult;