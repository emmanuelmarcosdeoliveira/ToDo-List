import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tasks'

type FilterState = {
  termo?: string
  criterion: 'prioridade' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  termo: '',
  criterion: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FilterState>) => {
      state.criterion = action.payload.criterion
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filterSlice.actions
export default filterSlice.reducer
