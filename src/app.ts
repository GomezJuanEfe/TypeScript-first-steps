
// 1
type Task = {id: number, title: string, completed: boolean};

// 2
type TaskList = Task[];

// 3
let lista: TaskList = [];
let tarea: Task = {id: 1, title: 'Hacer tarea', completed: false}

// 4
const addTask = (list:TaskList, task:Task): TaskList => {
  return [...list, task];
}

// 5
const completeTask = (list:TaskList, id:number): TaskList => {
  return list.map(task => 
    task.id === id ? {...task, completed: true} : task
  )
}

// 6
const filterTasks = (list:TaskList, filter:boolean): TaskList => {
  return list.filter(item => item.completed === filter);
}

// 7
const printTaskList = (list:TaskList): void => {
  list.forEach( item => {
    console.log(`Titulo: ${item.title} | Completed: ${item.completed}`);
  });
}

// 8
const runApp = (): void => {
  let tasks = [
    { id: 1, title: 'Completar taller de TypeScript', completed: false },
    { id: 2, title: 'Estudiar programación funcional', completed: false },
    { id: 3, title: 'Preparar presentación sobre TypeScript', completed: true },
    { id: 4, title: 'Leer libro de TypeScript avanzado', completed: false },
    { id: 5, title: 'Resolver ejercicios de TypeScript', completed: false },
    { id: 6, title: 'Hacer ejercicio', completed: true },
    { id: 7, title: 'Comprar víveres', completed: false },
    { id: 8, title: 'Llamar al médico', completed: false },
    { id: 9, title: 'Limpiar la casa', completed: true },
    { id: 10, title: 'Actualizar el CV', completed: false }
  ];

  const task1: Task = { id: 11, title: 'Correguir prueba de TypeScript', completed: false };
  const task2: Task = { id: 12, title: 'Actualizar perfil LinkedIn', completed: false };

  tasks = addTask(tasks, task1);
  tasks = addTask(tasks, task2);

  tasks = completeTask(tasks, 1);

  const completedTasks = filterTasks(tasks, true);

  printTaskList(completedTasks);

  console.log(tasks);
};

// 9
runApp();