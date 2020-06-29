const app = new Vue({
    el: '#app',

    data: {
        titulo: 'Metodos',
        input: '',
        lamparas: 10,



    },
    methods: {
        msj() {
            alert('Gracias!!');
        },
        aumentar() {
            this.lamparas++;

        },
        disminuir() {
            this.lamparas--;

        },

    }


})