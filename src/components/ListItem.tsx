import { FC } from "react"
import { ListItemType } from "../types/ListItemType"

type Props = {
  item: ListItemType
}
const ListItem: FC<Props> = ({item}) => {
  return <li>{item.text}</li>
}

export default ListItem
