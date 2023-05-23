import { FC } from "react"
import { RiCloseLine } from "react-icons/ri"
import { useAppDispatch } from "../app/hooks"
import { LIST_ACTIONS } from "../features/list/list-slice"
import { ListItemType } from "../types/ListItemType"
import styles from "./ListItem.module.css"

type Props = {
  item: ListItemType
}
const ListItem: FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    dispatch({
      type: LIST_ACTIONS.DELETE_ITEM,
      payload: item.id,
    })
  }

  return <li className={styles.item}>
    <div className={styles.item}>{item.text}</div>
    <button className={styles.button} type={"button"} onClick={handleDelete}><RiCloseLine className={"h-6 w-6"}/></button>
  </li>
}

export default ListItem
