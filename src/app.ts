const tasks = [
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
const completeTask = (list:TaskList, id:number):TaskList => {
  return list.map(item => {
    if (item.id === id) item.completed = true;
    return item
  })
}

console.log("completeTask", completeTask(tasks, 2));

// 6
const filterTasks = (list:TaskList, filter:boolean):TaskList => {
  return list.filter(item => item.completed === filter);
}

console.log("Filter tasks", filterTasks(tasks, true));

// 7
const printTaskList = (list:TaskList): void => {
  list.forEach( item => {
    console.log(item.title, item.completed);
  });
}

console.log('Print tasks')
printTaskList(tasks);

// 8
const runApp = (): any => {
  let myList: TaskList = [
    { id: 1, title: 'This is an example', completed: false },
  ];

  const getList = () => {
    return myList;
  }
  const addTask = (task: Task): TaskList => {
    myList = [...myList, task]; // Update the myList variable here
    return myList;
  };

  const completeTask = (id: number): TaskList => {
    myList.forEach((item) => {
      if (item.id === id) {
        item.completed = true
      }
    });
    return myList
  };

  const filterTasks = (filter:boolean):TaskList => {
    return myList.filter(item => item.completed === filter);
  }


  return {
    getList,
    addTask,
    completeTask,
    filterTasks
  };
};

// 9
const newList = runApp();

newList.addTask({ id: 2, title: 'Another task', completed: false });
newList.completeTask(2);

console.log(newList.getList());

console.log(newList.filterTasks(true));
