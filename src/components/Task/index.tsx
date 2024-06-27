import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/tasks'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ description, priority, status, title }: Props) => {
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
              <S.ButtonCancel>Remover</S.ButtonCancel>
            </>
          )}
        </S.ActionBar>
      </S.Task>
    </>
  )
}
export default Task
