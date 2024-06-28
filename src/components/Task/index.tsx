import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/reducers/task'

import * as S from './styles'

import TasksClass from '../../models/Tasks'

type Props = TasksClass

const Task = ({ description, priority, status, title, id }: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  return (
    <>
      <S.Task>
        <S.Title>{title}</S.Title>
        <S.Tag parameter="Priority" priority={priority}>
          {priority}
        </S.Tag>
        <S.Tag parameter="Status" status={status}>
          {' '}
          {status}
        </S.Tag>
        <S.Description value={description} />
        <S.ActionBar>
          {editing ? (
            <>
              <S.ButtonSalve>Salvar</S.ButtonSalve>
              <S.ButtonCancel onClick={() => setEditing(false)}>
                Cancelar
              </S.ButtonCancel>
            </>
          ) : (
            <>
              <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
              <S.ButtonCancel onClick={() => dispatch(remove(id))}>
                Remover
              </S.ButtonCancel>
            </>
          )}
        </S.ActionBar>
      </S.Task>
    </>
  )
}
export default Task
