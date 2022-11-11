import { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"

const styles = {
    container: `flex items-center shadow-md shadow-gray-400 my-2`,
    listItemIncome: `w-full flex justify-between bg-white border-l-8 border-green-400 p-2`,
    listItemExpense: `w-full flex justify-between bg-white border-l-8 border-red-600 p-2`,
    listItemType: ``,
    amount: ``,
    button: `w-[30px] h-full hover:bg-red-600 bg-red-200 hover:text-white p-2`,
}

export default function Transaction({transaction}) {
  const sign = transaction.amount < 0 ? '-' : '+'; 
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
    <li className={transaction.amount < 0 ? styles.listItemExpense : styles.listItemIncome}>
        <div className={styles.listItemType}>{transaction.text}</div>
        <div className={styles.amount}>{sign}&#8377;{Math.abs(transaction.amount)}</div>
    </li>
    <button onClick={() => deleteTransaction(transaction.id)}className={styles.button}>X</button>
    </div>
  )
}
