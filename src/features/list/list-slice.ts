import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ListItemType } from "../../types/ListItemType"

export const LIST_ACTIONS = {
  ADD_ITEM: "list/addItem",
  DELETE_ITEM: "list/deleteItem",
}

export interface ListState {
  items: ListItemType[];
}

const initialState: ListState = {
  items: [
    {
      id: new Date().toISOString(),
      text: "Item 1",
    }
  ],
}

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ListItemType>) {
      state.items = [...state.items, action.payload]
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
})

export const { addItem, deleteItem } = listSlice.actions
export default listSlice.reducer
