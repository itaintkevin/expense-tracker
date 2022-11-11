import { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"

const styles = {
    container: `w-[300px] flex flex-col mb-5`,
    title: `text-lg uppercase border-b border-slate-600`,
    form: `my-5`,
    transaction: `flex flex-col`,
    transactionLabel: `text-sm`,
    transactionInput: `shadow-md shadow-gray-400 text-gray-600 my-2 p-2`,
    amount: `flex flex-col`,
    amountLabel: `text-sm`,
    amountInput: `shadow-md shadow-gray-400 text-gray-600 my-2 p-2`,
    button: `w-full text-center text-white font-semibold bg-violet-500 shadow-md shadow-gray-400 py-2 my-5 `
}

export default function AddTransaction() {

  const [text, setText] = useState(""); 
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
    }

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  }

  return (
    <div className={styles.container}>
        <div className={styles.title}>Add new transaction</div>
        <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.transaction}>
            <label 
                htmlFor="text"
                className={styles.transactionLabel}
            >Transaction</label>
            <input 
                className={styles.transactionInput} 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                type="text" 
                placeholder="Enter text..." 
            />
        </div>
        <div className={styles.amount}>
            <label 
                htmlFor="amount"
                className={styles.amountLabel}
            >Amount</label>
            <input 
                className={styles.amountInput} 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                type="amount" 
                placeholder="Enter amount..." 
            />
        </div>
        <button className={styles.button}>Add transaction</button>
        </form>
  </div>
  )
}
