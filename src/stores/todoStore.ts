// // src/stores/todoStore.ts
// import { defineStore } from 'pinia';
// import { ref, computed } from 'vue';

// let id = 0;

// export const useTodoStore = defineStore('todo', () => {
//   const todos = ref([
//     { id: id++, titre: 'Apprendre le HTML', contenu: "la base du web", Catégorie: "basique" },
//     { id: id++, titre: 'Apprendre le JavaScript', contenu: "la base du dynamisme", Catégorie: "js" },
//     { id: id++, titre: 'Apprendre Vue', contenu: "la base du framework", Catégorie: "dev" }
//   ]);

//   const newTodo = ref({ titre: '', contenu: '', Catégorie: '' });

//   function addTodo() {
//     if (newTodo.value.titre.trim() && newTodo.value.contenu.trim() && newTodo.value.Catégorie.trim()) {
//       todos.value.push({ ...newTodo.value, id: id++ });
//       newTodo.value = { titre: '', contenu: '', Catégorie: '' };
//     }
//   }

//   function removeTodo(todo:any) {
//     todos.value = todos.value.filter((t) => t.id !== todo.id);
//   }
// function update(todo:any){
//     newTodo.value=todo
//     return removeTodo(todo);
// }
//   return {
//     todos,
//     newTodo,
//     addTodo,
//     removeTodo,
//     update
//   };
// });
