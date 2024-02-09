<script lang="ts">
interface ITasks {
  id: number
  name: string
  done: boolean
}

interface Data {
  newTask: string
  tasks: ITasks[]
}

export default {
  name: 'TodoList',
  data(): Data {
    return {
      newTask: '',
      tasks: [],
    }
  },
  methods: {
    onCreateNewTask() {
      this.tasks = [
        {
          id: new Date().getTime(),
          name: this.newTask,
          done: false,
        },
        ...this.tasks,
      ]
      this.newTask = ''
    },
    onDeleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
  },
}
</script>

<template>
  <div>
    <!-- create task form -->
    <div class="createNewTask">
      <span>
        <input v-model="newTask" type="text" class="inputTask" />
        <button type="button" class="buttonAdd" @click="onCreateNewTask">
          Create new task
        </button>
      </span>
    </div>

    <!-- task table -->
    <div class="taskTable">
      <table>
        <tr v-for="task in tasks" :key="task.id">
          <td>
            <input v-model="task.done" type="checkbox" />
          </td>
          <td>
            <p :style="task.done && { textDecoration: 'line-through' }">
              {{ task.name }}
            </p>
          </td>
          <td>
            <button
              type="button"
              class="buttonDelete"
              @click="onDeleteTask(task.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
#todoListß {
  text-align: center;
}
.creatNewTask {
  margin-bottom: 10px;
}
.creatNewTask .inputTask {
  width: 300px;
  height: 28px;
}
.creatNewTask .buttonAdd {
  height: 28px;
  margin-left: 10px;
}
.taskTable table {
  background-color: aliceblue;
  margin: 0px auto;
  width: 420px;
}
.taskTable p {
  text-align: left;
}
</style>
