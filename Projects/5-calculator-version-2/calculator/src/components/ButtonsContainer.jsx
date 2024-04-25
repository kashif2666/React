/* eslint-disable react/prop-types */
import styles from './ButtonsContainer.module.css'

const ButtonsContainer=({ onButtonClick })=>{

  const buttonNames=["C",
  "+",
  "-",
  "*",
  "/",
  "%",
  "=",
  ".",
  "**",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0"];
return(
<div className={styles.buttonsContainer}>
  {buttonNames.map((buttonNames)=>(
  <button onClick={()=>onButtonClick(buttonNames)} key={styles.button} className={styles.button} >
    {buttonNames}
    </button>))}
      
      </div>
);
}

export default ButtonsContainer;