const app = new Vue({
    el: '#app',

    data: {
        titulo: 'Propiedades Computed',
        contador: 0

    },
    computed: {
        colorBarras() {
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador <= 15,
                'bg-danger': this.contador > 15
            }
        }

    },
    methods: {



    }


})