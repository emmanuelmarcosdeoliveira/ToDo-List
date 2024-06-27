import { useState } from 'react'
import * as S from './styles'

type Props = {
  title: string
  priority: string
  status: string
  description: string
}

const Task = ({ description, priority, status, title }: Props) => {
  const [editing, setEditing] = useState(false)
  return (
    <>
      <S.Task>
        <S.Title>{title}</S.Title>
        <S.Tag priority={priority}>{priority}</S.Tag>
        <S.Tag status={status}> {status}</S.Tag>
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
