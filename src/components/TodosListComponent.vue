<template>
  <div class="row">
    <div class="col-6 align-items-start">
      <div class="todo-item" v-for="todo in todos" :key="todo.id">
        <div class="subject">
          <div class="title">{{ todo.subject }}</div>
          <div class="actions">
            <i class="icon-standard mdi mdi-pencil-outline" @click="edit(todo)"></i>
            <i class="icon-standard mdi mdi-close-circle-outline" @click="remove(todo)"></i>
          </div>
        </div>
        <div class="tags">
          <div class="tag-item" v-for="(tag, i) in todo.tags" :key="i">{{ tag }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'TodosListComponent',
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  methods: {
    ...mapActions([
      'removeTodo',
      'editTodo'
    ]),
    edit (todo) {
      this.editTodo(todo)
    },
    remove (todo) {
      this.removeTodo(todo)
      Swal.fire('Thanks!', 'Task successfully removed', 'success')
    }
  }
}
</script>

<style scoped>

</style>
