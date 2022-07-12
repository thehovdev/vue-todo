<template>
  <div class="container todos">
    <CreateTodoComponent/>
    <TodosListComponent/>
  </div>
</template>

<script>
import CreateTodoComponent from '@/components/CreateTodoComponent'
import TodosListComponent from '@/components/TodosListComponent'
export default {
  name: 'TodosComponent',
  components: { CreateTodoComponent, TodosListComponent }
}
</script>

<style scoped>

</style>
