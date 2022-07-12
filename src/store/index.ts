import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { State, todoDefaultData } from '@/interfaces/interfaces'
export const key: InjectionKey<Store<State>> = Symbol('')
export default createStore<State>({
  state: {
    todo: { ...todoDefaultData },
    todos: []
  },
  getters: {
    getTodo (state) {
      return state.todo
    },
    getTodos (state) {
      return state.todos
    }
  },
  mutations: {
    editTodo (state, payload) {
      state.todo = { ...payload, operation: 'UPDATE' }
    },
    addTodo (state) {
      state.todos = [...state.todos, state.todo]
    },
    removeTodo (state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id)
    },
    saveTodo (state) {
      state.todo.operation = 'UPDATED'
      state.todos = state.todos.map((todo) => todo.id === state.todo.id ? state.todo : todo)
    },
    resetTodo (state) {
      state.todo = { ...todoDefaultData }
    },
    updateTodoSubject (state, payload) {
      state.todo.subject = payload
    },
    updateTodoTag (state, payload) {
      state.todo.tagsString = payload
      state.todo.tags = payload.trim().replace(/\s/g, '').split(',')
    }
  },
  actions: {
    editTodo ({ commit }, payload) {
      commit('editTodo', payload)
    },
    addTodo ({ dispatch, commit }) {
      commit('addTodo')
      dispatch('resetTodo')
    },
    removeTodo ({ dispatch, commit }, payload) {
      commit('removeTodo', payload)
      dispatch('resetTodo')
    },
    updateTodo ({ commit }, payload) {
      commit(`updateTodo${payload.field}`, payload.data)
    },
    saveTodo ({ dispatch, commit }) {
      commit('saveTodo')
      dispatch('resetTodo')
    },
    resetTodo ({ commit }) {
      commit('resetTodo')
    }
  }
})
