var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tasks = [
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
var lista = [];
var tarea = { id: 1, title: 'Hacer tarea', completed: false };
// 4
var addTask = function (list, task) {
    return __spreadArray(__spreadArray([], list, true), [task], false);
};
// 5
var completeTask = function (list, id) {
    return list.map(function (item) {
        if (item.id === id)
            item.completed = true;
        return item;
    });
};
console.log("completeTask", completeTask(tasks, 2));
// 6
var filterTasks = function (list, filter) {
    return list.filter(function (item) { return item.completed === filter; });
};
console.log("Filter tasks", filterTasks(tasks, true));
// 7
var printTaskList = function (list) {
    list.forEach(function (item) {
        console.log(item.title, item.completed);
    });
};
console.log('Print tasks');
printTaskList(tasks);
// 8
var runApp = function () {
    var myList = [
        { id: 1, title: 'This is an example', completed: false },
    ];
    var getList = function () {
        return myList;
    };
    var addTask = function (task) {
        myList = __spreadArray(__spreadArray([], myList, true), [task], false); // Update the myList variable here
        return myList;
    };
    var completeTask = function (id) {
        myList.forEach(function (item) {
            if (item.id === id) {
                item.completed = true;
            }
        });
        return myList;
    };
    var filterTasks = function (filter) {
        return myList.filter(function (item) { return item.completed === filter; });
    };
    return {
        getList: getList,
        addTask: addTask,
        completeTask: completeTask,
        filterTasks: filterTasks
    };
};
// 9
var newList = runApp();
newList.addTask({ id: 2, title: 'Another task', completed: false });
newList.completeTask(2);
console.log(newList.getList());
console.log(newList.filterTasks(true));
