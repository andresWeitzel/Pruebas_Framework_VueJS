const app = new Vue({
    el: '#app',

    data: {
        titulo: 'Clases',

        colorParaEvento: true,

        maquetadoPrincipal: [
            'bg-primary', 'p-3', 'text-white'
        ],
        maquetadoSecundario: [
            'bg-info', 'p-4', 'text-white'
        ],
        nuevoMaquetado: [
            'bg-danger', 'p-5', 'text-white'
        ],
        botones: [
            'btn btn-danger', 'text-white'
        ]


    },
    methods: {
        cambiarColorTextos() {


            this.maquetadoPrincipal = this.nuevoMaquetado;
            this.maquetadoSecundario = this.nuevoMaquetado;

        },

        deshacerColorTextos() {
            this.maquetadoPrincipal = ['bg-primary', 'p-3', 'text-white'];
            this.maquetadoSecundario = ['bg-info', 'p-4', 'text-white'];

        },



    }


})