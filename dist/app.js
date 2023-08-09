"use strict";
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
// 3
let lista = [];
let tarea = { id: 1, title: 'Hacer tarea', completed: false };
// 4
const addTask = (list, task) => {
    return [...list, task];
};
// 5
const completeTask = (list, id) => {
    return list.map(item => {
        if (item.id === id)
            item.completed = true;
        return item;
    });
};
console.log("completeTask", completeTask(tasks, 2));
// 6
const filterTasks = (list, filter) => {
    return list.filter(item => item.completed === filter);
};
console.log("Filter tasks", filterTasks(tasks, true));
// 7
const printTaskList = (list) => {
    list.forEach(item => {
        console.log(item.title, item.completed);
    });
};
console.log('Print tasks');
printTaskList(tasks);
// 8
const runApp = () => {
    let myList = [
        { id: 1, title: 'This is an example', completed: false },
    ];
    const getList = () => {
        return myList;
    };
    const addTask = (task) => {
        myList = [...myList, task]; // Update the myList variable here
        return myList;
    };
    const completeTask = (id) => {
        myList.forEach((item) => {
            if (item.id === id) {
                item.completed = true;
            }
        });
        return myList;
    };
    const filterTasks = (filter) => {
        return myList.filter(item => item.completed === filter);
    };
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
