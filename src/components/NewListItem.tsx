import { FC, FormEvent } from "react"
import { useAppDispatch } from "../app/hooks"

const NewListItem: FC = () => {
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

  return <form onSubmit={handleSubmit}>
    <input name={"value"} type="text"/>
    <button type="submit">Add</button>
  </form>
}

export default NewListItem
