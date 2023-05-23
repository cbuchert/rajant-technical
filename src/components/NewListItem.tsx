import { FC, FormEvent } from "react"
import { RiAddLine } from "react-icons/ri"
import { z } from "zod"
import { useAppDispatch } from "../app/hooks"
import { LIST_ACTIONS } from "../features/list/list-slice"
import styles from "./NewListItem.module.css"

const NewListItem: FC = () => {
  const schema = z.string()
  .nonempty("Please enter a value")
  const dispatch = useAppDispatch()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)

    dispatch({
      type: LIST_ACTIONS.ADD_ITEM,
      payload: {
        id: new Date().toISOString(),
        text: data.get("value") as string,
      },
    })
  }

  return <form onSubmit={handleSubmit} className={styles.container}>
    <input className={styles.input} name={"value"} type="text"/>
    <button
      className={"rounded px-6 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white hover:text-blue-50 transition-colors duration-200"}
      type="submit"><RiAddLine className={"h-6 w-6"}/></button>
  </form>
}

export default NewListItem
