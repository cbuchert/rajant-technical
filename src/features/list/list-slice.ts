import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ListItemType } from "../../types/ListItemType"

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
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
})

export const { addItem, removeItem } = listSlice.actions
export default listSlice.reducer
