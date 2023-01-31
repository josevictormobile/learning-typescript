//Author: José Victor - Eu marco a autoria apenas porque fiz esse commit em outra conta
//Tipos básicos
let id: number = 5
let company: string = 'Uma string'
let validado: boolean = true
let x: any = 1

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Algo']

//Tupla
let person: [number, string, boolean] = [1, 'José', true]

//Array de Tupla
let colaborador: [number, string][]

colaborador = [
    [1, 'José'],
    [2, 'Maria'],
    [3, 'Marcos']
]

//Union
let union: string | number 
union = 'posso ser uma string'
union = 5

//Enum
enum direcoes1 {
    Cima,
    Baixo,
    Esquerda,
    Direita
}

enum direcoes2 {
    Cima = 'Cima',
    Baixo = 'Baixo',
    Esquerda = 'Esquerda',
    Direita = 'Direita'
}

//Objetos
type User = {
    id: number,
    nome: string
}

// const user: User = {
//     id: 1,
//     nome: 'José'
// }

const user: {
    id: number,
    nome: string
} = {
    id:1,
    nome: 'José'
}


//Type Assertion
let cid: any = 1
//let clienteId = <string>cid
let clienteId = cid as number

//Funções
function addNum(x: number, y: number): number {
    return x + y
}

//Void
function log(mensagem: string | number): void {
    console.log(mensagem)
}

//Interfaces
interface IUser {
    readonly id: number
    nome: string
    age?: number

    metodoDuplicar(x: number): number
}

const user1: IUser = {
    id: 1,
    nome: 'José',

    metodoDuplicar(x: number): number {
        return x * 2
    }
}

//user1.id = 7

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

//console.log(brad.register())

// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

strArray.push(1) 