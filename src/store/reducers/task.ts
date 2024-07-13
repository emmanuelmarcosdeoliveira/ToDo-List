import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tasks from '../../models/Tasks'
import * as enums from '../../utils/enums/tasks'

type TaskState = {
  itens: Tasks[]
}

const initialState: TaskState = {
  itens: [
    {
      id: 1,
      description: 'Estudar JavaScript revendo o módulo 7',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUDED,
      title: 'Estudar JavaScript'
    },
    {
      id: 2,
      description: 'Estudar Material de Apoio',
      priority: enums.Priority.NORMAL,
      status: enums.Status.PEDDING,
      title: 'Estudar TypeScript'
    },
    {
      id: 3,
      description: 'Praticar a construçào de uma LandingPage',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PEDDING,
      title: 'Estudar Bootstrap'
    }
  ]
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((task) => task.id !== action.payload)
    },
    toEdit: (state, action: PayloadAction<Tasks>) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)
      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tasks>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse Nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remove, toEdit, cadastrar } = taskSlice.actions
export default taskSlice.reducer
