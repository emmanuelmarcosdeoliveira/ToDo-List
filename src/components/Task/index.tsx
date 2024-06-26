import * as S from './styles'

const Task = () => {
  return (
    <>
      <S.Task>
        <S.Title>Nome da Tarefa</S.Title>
        <S.Tag>importante</S.Tag>
        <S.Tag>pendente</S.Tag>
        <S.Description>lorem </S.Description>
        <S.ActionBar>
          <S.Button>Editar</S.Button>
          <S.Button>Remover</S.Button>
        </S.ActionBar>
      </S.Task>
    </>
  )
}
export default Task
