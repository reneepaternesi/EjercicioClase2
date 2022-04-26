var app = new Vue({
    el: "#app",
    data: {
        message: "Hello World!",
        numeroA: 12,
        numeroB: 24,
        numeroC: 42,
        miHTML:"<p>Hola Coders!</p>",
        imageSrc: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc",
        imageAlt: "Gatito",
        textP:"",
        mensaje1: "test",
        mensaje2: "test2",

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
        },
        onClick() {
            alert("Boton Clickeado")
        },
        keyUp(event) {
            this.mensaje1 = event.target.value;
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