import style from './FormFill.module.css';


const FormFill = () => {

    return (
        <>
            <h1>IMC CALCULATOR</h1>
            <form>
                <div className={style.formInputContainer}>
                    <label htmlFor="height">Enter the height:</label>
                    <input id="height" type="number" placeholder="Example: 1.81" />
                    <span>Meters</span>
                </div>
                <div className={style.formInputContainer}>
                    <label htmlFor="weight">Enter the weight:</label>
                    <input id="weight" type="number" placeholder="Example: 80" />
                    <span>Kilogramas</span>
                </div>
                <button onClick={e => e.preventDefault()} type="submit">CALCULATE</button>
            </form>
        </>
    )
}

export default FormFill;