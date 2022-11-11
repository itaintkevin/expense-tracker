import { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"

const styles = {
    container: `w-[300px] flex flex-col my-5`,
    title: `text-lg uppercase`,
    balance: `text-4xl`
}
export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            Your Balance
        </div>
        <div className={styles.balance}>
            &#8377;{total}
        </div>
    </div>
  )
}
