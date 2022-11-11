import { useContext  } from "react"
import { GlobalContext } from "../context/GlobalContext"
import Transaction from "./Transaction";

const styles = {
    container: `w-[300px] flex flex-col mb-5`,
    title: `text-lg uppercase border-b border-slate-600 mt-5`,
    list: `my-5`,
    listItem: `flex justify-between shadow-md shadow-gray-400 bg-white border-r-8 border-green-400 p-2 my-2`,
    listItemType: ``,
    amount: ``
}

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  
  return (
    <div className={styles.container}>
        <div className={styles.title}>History</div>
        <ul className={styles.list}>
            {transactions.map((transaction) => (
                <Transaction key={transaction.id} transaction={transaction}/>
            ))}
        </ul>
    </div>
  )
}
