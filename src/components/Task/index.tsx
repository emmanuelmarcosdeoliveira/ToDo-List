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
        <S.Tag>{priority}</S.Tag>
        <S.Tag>{status}</S.Tag>
        <S.Description value={description} />
        <S.ActionBar>
          {editing ? (
            <>
              <S.Button>Salvar</S.Button>
              <S.Button onClick={() => setEditing(false)}>Cancelar</S.Button>
            </>
          ) : (
            <>
              <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
              <S.Button>Remover</S.Button>
            </>
          )}
        </S.ActionBar>
      </S.Task>
    </>
  )
}
export default Task
