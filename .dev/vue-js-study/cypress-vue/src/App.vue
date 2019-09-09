<template>
  <div id="app">
    <h3>ToDo List</h3>
    <input id="new-task" type="text" @keyup.enter="addTask" v-model="newTodo">
    <button @click="addTask()">Add task</button>

    <ul>
      <li 
        class="todo" 
        @click="$event.target.classList.toggle('completed')"
        :key="task"
        v-for="(task, index) in tasks">
          {{task}}
          <button class="delete-todo" @click="removeTask(index)">x
          </button>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      newTodo: '',
      tasks: []
    }
  },
  methods: {
    addTask(){
      let task = document.querySelector('#new-task')
      if(task.value.length > 0 && this.tasks.indexOf(task.value < 0)){
        this.tasks.push(this.newTodo)
        this.newTodo = ''
      }
    },
    removeTask(value){
      this.tasks.splice(value, 1)
    }

  }
}
</script>
<style>
#app{
  text-align: center;
}
li.tasks{
  cursor: pointer;
  list-style-type: none;
}
.completed{
  text-decoration: line-through;
}

</style>
