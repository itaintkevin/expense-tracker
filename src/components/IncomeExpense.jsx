import { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"

const styles = {
    container: `w-[300px] flex items-center justify-center shadow-md shadow-gray-400 bg-white mb-5`,
    incomeContainer: `w-1/2 flex flex-col items-center justify-center border-r my-4`,
    incomeTitle: `text-sm uppercase`,
    income: `text-xl text-green-400`,
    expenseContainer: `w-1/2 flex flex-col items-center justify-center border-l my-4`,
    expenseTitle: `text-sm uppercase`,
    expense: `text-xl text-red-600`,
}

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  return ( 
    <div className={styles.container}>
        <div className={styles.incomeContainer}>
            <div className={styles.incomeTitle}>Income</div>
            <div className={styles.income}>+&#8377;{income}</div>
        </div>
        <div className={styles.expenseContainer}>
            <div className={styles.expenseTitle}>Expense</div>
            <div className={styles.expense}>-&#8377;{expense}</div>
        </div>
    </div>
  )
}
