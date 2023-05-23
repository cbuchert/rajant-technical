import { FC } from "react"
import { useAppDispatch } from "../app/hooks"
import { ListItemType } from "../types/ListItemType"

type Props = {
  item: ListItemType
}
const ListItem: FC<Props> = ({item}) => {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    dispatch({
      type: "list/deleteItem",
      payload: item.id,
    })
  }

  return <li>{item.text} <button type={"button"} onClick={handleDelete}>x</button></li>
}

export default ListItem
