import { zodResolver } from "@hookform/resolvers/zod"
import { FC, useEffect } from "react"
import { useForm } from "react-hook-form"
import { RiAddLine } from "react-icons/ri"
import { z } from "zod"
import { useAppDispatch } from "../app/hooks"
import { LIST_ACTIONS } from "../features/list/list-slice"
import styles from "./NewListItem.module.css"

const NewListItem: FC = () => {
  const schema = z.object({
    text: z.preprocess((u: unknown) => typeof u === "string" ? u.trim() : u, z.string()
    .nonempty("Please enter a valid list item.")),
  })
  type FormSchemaType = z.infer<typeof schema>

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
     reset({text: ""})
    }
  }, [isSubmitSuccessful, reset])

  const dispatch = useAppDispatch()
  const onSubmit = ({ text }: FormSchemaType) => {
    dispatch({
      type: LIST_ACTIONS.ADD_ITEM,
      payload: {
        id: new Date().toISOString(),
        text,
      },
    })
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
    <div className={styles.container}>
      <input className={styles.input} type="text" {...register("text")}/>
      <button
        className={"rounded px-6 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white hover:text-blue-50 transition-colors duration-200 flex justify-center"}
        type="submit"><RiAddLine className={"h-6 w-6"}/>
      </button>
    </div>
    <p className={"text-md text-red-400 ml-6 mt-2"}>{errors.text?.message}&nbsp;</p>
  </form>
}

export default NewListItem
