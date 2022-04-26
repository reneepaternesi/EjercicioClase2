var app = new Vue({
    el: "#app",
    data: {
        message: "Hello World!",
        numeroA: 12,
        numeroB: 24,
        numeroC: 42,
    },
    methods: {
        imprimirEnConsola() {
            console.log('Hola coders')
        },
        calculoMat() {
            let a = 21
            let b = 3
            console.log(a*b)
        },
        sumarAyB() {
            return this.numeroA + this.numeroB;
        }
    },
    computed: {
        sumarAyBComputed() {
            return this.numeroA + this.numeroB;
        },
        duplicarC() {
            return this.numeroC * 2;
        }
    }
})