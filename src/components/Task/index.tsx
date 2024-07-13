import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remove, toEdit } from '../../store/reducers/task'
import TasksClass from '../../models/Tasks'
import { ButtonSalve } from '../../styles'

type Props = TasksClass

const Task = ({
  description: originalDescription,
  priority,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [description, setDescription] = useState('')
  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  function cancelEditting() {
    setEditing(false)
    setDescription(originalDescription)
  }

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
        <S.Description
          disabled={!editing}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <S.ActionBar>
          {editing ? (
            <>
              <ButtonSalve
                onClick={() => {
                  dispatch(
                    toEdit({
                      description,
                      priority,
                      status,
                      title,
                      id
                    })
                  )
                  setEditing(false)
                }}
              >
                Salvar
              </ButtonSalve>

              <S.ButtonCancel onClick={cancelEditting}>Cancelar</S.ButtonCancel>
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
