export const todoDefaultData = {
  id: null,
  subject: '',
  tagsString: '',
  tags: [],
  operation: 'INSERT'
}
export interface Todo {
  id: number | null,
  subject: string,
  tagsString: string,
  tags: Array<string>,
  operation: string
}
export interface State {
  todo: Todo,
  todos: Todo[]
}
