import React from 'react'

const styles = {
    title: `w-[300px] text-2xl sm:text-3xl text-center my-5`
}

export default function Header() {
  return (
    <div className={styles.title}>Expense Tacker</div>
  )
}
