import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tasks from '../../models/Tasks'
import * as enums from '../../utils/enums/tasks'

const taskSlice = createSlice({
  name: 'task',
  initialState: [
    new Tasks(
      1,
      'Estudar JavaScript',
      enums.Priority.IMPORTANT,
      enums.Status.PEDDING,
      'Rever os métodos map e filter'
    ),
    new Tasks(
      2,
      'Estudar TypeScript',
      enums.Priority.URGENT,
      enums.Status.CONCLUDED,
      'Rever Aula 2 do Módulo'
    ),
    new Tasks(
      3,
      'Estudar React',
      enums.Priority.URGENT,
      enums.Status.PEDDING,
      'Praticar o useEffect'
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = taskSlice.actions
export default taskSlice.reducer
