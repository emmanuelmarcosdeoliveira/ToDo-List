import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tasks'

type FilterState = {
  termo: string
  criterio: 'priority' | 'status' | 'all'
  valor?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  termo: '',
  criterio: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = filterSlice.actions
export default filterSlice.reducer
