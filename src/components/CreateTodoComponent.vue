<template>
  <div class="row">
    <div class="col-6">
      <div class="form-container">
        <div class="row align-items-center">
          <div class="col-4">
            <label for="subject" class="col-form-label">Subject</label>
          </div>
          <div class="col">
            <input :value="todo.subject" type="text" id="subject" class="form-control" name="Subject" placeholder="specify subject" @input="updateField">
          </div>
        </div>
        <div class="row my-2 align-items-center">
          <div class="col-4">
            <label for="tags" class="col-form-label">Tags list</label>
          </div>
          <div class="col">
            <input :value="todo.tagsString" type="text" id="tags" class="form-control" name="Tag" placeholder="specify it with comma ','" @input="updateField">
          </div>
        </div>
        <div class="row my-2">
          <div class="col-8"></div>
          <div class="col">
            <button class="btn btn-outline-theme w-100" v-if="todo.operation === 'INSERT'" v-on:click="createData">
              <i class="mdi mdi-plus-thick"></i> Add todo
            </button>
            <button class="btn btn-outline-theme w-100" v-else v-on:click="saveData">
              <i class="mdi mdi-check-circle"></i> Save todo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Swal from 'sweetalert2'
export default {
  name: 'CreateTodoComponent',
  computed: {
    ...mapState({
      todo: state => state.todo
    }),
    validateForm () {
      return this.todo.subject.trim() !== '' && this.todo.tagsString.trim() !== ''
    }
  },
  methods: {
    ...mapActions([
      'addTodo',
      'updateTodo',
      'saveTodo'
    ]),

    updateField (e) {
      this.updateTodo({
        field: e.target.name,
        data: e.target.value
      })
    },
    createData () {
      if (this.validateForm === true) {
        this.addTodo()
      } else { Swal.fire('Error', 'Please input all data', 'error') }
    },
    saveData () {
      if (this.validateForm === true) {
        this.saveTodo()
      } else { Swal.fire('Error', 'Please input all data', 'error') }
    }
  }
}
</script>

<style scoped>

</style>
