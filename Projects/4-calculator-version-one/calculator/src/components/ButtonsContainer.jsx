import styles from './ButtonsContainer.module.css'

const ButtonsContainer=()=>{

  const buttonNames=['C',
  '+',
  '-',
  '*',
  '/',
  '=',
  '7',
  '8',
  '9',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '0',
  '.'];
return(
<div className={styles.buttonsContainer}>
  {buttonNames.map((buttonNames)=>(<button key={styles.button} className={styles.button}>{buttonNames}</button>))}
      
      </div>
);
}

export default ButtonsContainer;