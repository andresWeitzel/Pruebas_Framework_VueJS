const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Utilizando Vue.js y Bootstraap',

        frutas: ['Manzana', 'Pera', 'Melon', 'Sandia', 'Tomate'],

        objetosFrutas: [
            { nombre: 'Manzana', estado: 'Stock' },
            { nombre: 'Pera', estado: 'Sin Stock' },
            { nombre: 'Melon', estado: 'Stock' },
            { nombre: 'Sandia', estado: 'Sin Stock' },
            { nombre: 'Tomate', estado: ' Stock' },

        ]
    }

})