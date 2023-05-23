import { FC } from "react"
import { connect } from "react-redux"
import { ListState } from "../features/list/list-slice"
import { ListItemType } from "../types/ListItemType"
import ListItem from "./ListItem"

type Props = {
  items: ListItemType[]
}

const List: FC<Props> = ({ items }) => {
  return <ol>
    {items.length} items
    {items.map((item) => <ListItem item={item} key={item.id}/>)}
  </ol>
}

function mapStateToProps(state: { list: ListState }) {
  return {
    items: state.list.items,
  }
}

export default connect(mapStateToProps)(List)
