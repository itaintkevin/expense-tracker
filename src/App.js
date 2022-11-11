import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalContext'

const styles = {
  container: `h-full sm:h-screen w-screen flex flex-col items-center justify-center bg-gray-100`,
}

function App() {
  return (
    <GlobalProvider>
      <div className={styles.container}>
        <Header/>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
