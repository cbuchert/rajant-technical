import { FC } from "react"
import { useAppDispatch } from "../app/hooks"
import { ListItemType } from "../types/ListItemType"
import styles from "./ListItem.module.css"

type Props = {
  item: ListItemType
}
const ListItem: FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    dispatch({
      type: "list/deleteItem",
      payload: item.id,
    })
  }

  return <li className={styles.item}>
    <div className={styles.item}>{item.text}</div>
    <button className={styles.button} type={"button"} onClick={handleDelete}>x</button>
  </li>
}

export default ListItem
