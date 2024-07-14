import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { alterarStatus, remove, toEdit } from '../../store/reducers/task'
import TasksClass from '../../models/Tasks'
import { Button, ButtonSalve } from '../../styles'
import * as enums from '../../utils/enums/tasks'

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

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(alterarStatus({ id, finalizado: evento.target.checked }))
  }

  return (
    <>
      <S.Task>
        <label htmlFor={title}>
          <input
            type="checkbox"
            id={title}
            checked={status === enums.Status.CONCLUDED}
            onChange={alteraStatusTarefa}
          />
          <S.Title>
            {' '}
            {editing && <em style={{ color: '#C23616' }}>Editando: </em>}
            {title}
          </S.Title>
        </label>
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
              <Button onClick={() => setEditing(true)}>Editar</Button>
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
