import { useAutoAnimate } from "@formkit/auto-animate/react"
import { FC } from "react"
import { connect } from "react-redux"
import { ListState } from "../features/list/list-slice"
import { ListItemType } from "../types/ListItemType"
import { pluralize } from "../utils/pluralize"
import styles from "./List.module.css"
import ListItem from "./ListItem"

type Props = {
  items: ListItemType[]
}

const List: FC<Props> = ({ items }) => {
  const [ animationParent ] = useAutoAnimate()

  return <div className={"mb-10"}>
    <p className={"text-md text-slate-400 ml-6 mb-4"}>
      {items.length} {pluralize("item", items.length)}
    </p>
    <ol className={styles.items} ref={animationParent}>
      {items.map((item) => <ListItem item={item} key={item.id}/>)}
    </ol>
  </div>
}

function mapStateToProps(state: { list: ListState }) {
  return {
    items: state.list.items,
  }
}

export default connect(mapStateToProps)(List)
