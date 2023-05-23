import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ListItemType } from "../../types/ListItemType"

interface ListState {
  items: ListItemType[];
}

const initialState: ListState = {
  items: [],
}

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ListItemType>) {
      state.items.push(action.payload)
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
})

export const { addItem, removeItem } = listSlice.actions
export default listSlice.reducer
