class Alumno {
    constructor (
        codigo,
        nombre,
        nota1,
        nota2,
        nota3,
        nota4
    ) {
        this.codigo = codigo
        this.nombre = nombre
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.nota4 = nota4
    }

    promedio () {
        return (this.nota1*0.15) + (this.nota2*0.2) + (this.nota3*0.25) + (this.nota4*0.4)
    }

    condicion () {
        const promedio = this.promedio()
        if (promedio >=12 ) return 'APROBADO'
        return 'DESAPROBADO'
    }

    obsequio () {
        const promedio = this.promedio()
        if (promedio > 17) return 'Ganaste una mochila'
        return 'Obsequio no disponible'
    }
}
const persona = new Alumno('109', 'Cecilia', 12,13,14,15)
console.log(persona, 'persona')
console.log(persona.condicion(), 'persona condicion')
console.log(persona.promedio(), 'persona promedio')
console.log(persona.obsequio(), 'persona obsequio')

class Form {
    constructor() {
        this.element = document.querySelector('.js-form')
    }

    loadEvents () {
        this.element.addEventListener('submit', handleSubmitForm, false)
    }

    handleSubmitForm () {
        
    }
}