import { FC, FormEvent } from "react"
import { RiAddLine } from "react-icons/ri"
import { z } from "zod"
import { useAppDispatch } from "../app/hooks"
import styles from "./NewListItem.module.css"

const NewListItem: FC = () => {
  const schema = z.string().nonempty("Please enter a value")
  const dispatch = useAppDispatch()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)

    dispatch({
      type: "list/addItem",
      payload: {
        id: new Date().toISOString(),
        text: data.get("value") as string,
      },
    })
  }

  return <form onSubmit={handleSubmit} className={styles.container}>
    <input className={styles.input} name={"value"} type="text"/>
    <button className={styles.submit} type="submit"><RiAddLine className={"h-6 w-6"}/></button>
  </form>
}

export default NewListItem
