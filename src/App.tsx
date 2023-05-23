import React, { FC } from "react"
import styles from "./App.module.css"
import List from "./components/List"
import NewListItem from "./components/NewListItem"

const App: FC = () => (
  <div className={styles.app}>
    <h1 className={styles.heading}>Rajant Take Home Assessment - Lists</h1>
    <List/>
    <NewListItem/>
  </div>
)

export default App
