#!/usr/bin/env node
const {Command} = require('commander');
const axios = require('axios');
const program = new Command()

program
.command("greet <name>") 
.action((name) => {console.log(`Hello ${name}`)})

program
.command("add <a> <b>")
.description("Adds two numbers")
.action((a, b) => { console.log(Number(a) + Number(b))})

program 
.command("subtract <a> <b>")
.description("Subtracts two numbers")
.action((a, b) => { console.log(Number(a) - Number(b))})

program
.command("multiply <a> <b>")
.description("Multiplies two numbers")
.action((a, b) => { console.log(Number(a) * Number(b))})

program
.command("square <num>") 
.description("Squares a number")
.action((num) => { console.log(Number(num) * Number(num))})

program
.command("divide <a> <b>")
.description("Divides two numbers")
.action((a, b) => { 
    if (Number(b) === 0) {
        console.log("Error: Division by zero is not allowed.")
    } else {
        console.log(Number(a) / Number(b))
    }
})

program 
.command("power <base> <expo>")
.description("Raises a number to a power")
.action((base, expo) => { console.log(Number(base) ** Number(expo))})

program
.command("cube <n>")  
.description("Cubes a number")
.action((n) => { console.log(Number(n) ** 3)})


program
.command("quote")
.description("Random quote")
.action(async () => {
    try {
        const res = await axios.get('https://zenquotes.io/api/random')
        console.log(res.data[0].q)
    } catch (err) {
        console.log(err)
    }
})

program
.command("joke")
.description("Random joke")
.action(async () => {
    try {
        const res = await axios.get('https://official-joke-api.appspot.com/random_joke')
        console.log(res.data.setup)
        console.log(res.data.punchline)
    } catch (err) {
        console.log(err)
    }
})

program
.command("advice")
.description("Random advice")
.action(async () => {
    try {
        const res = await axios.get('https://api.adviceslip.com/advice')
        console.log(res.data.slip.advice)
    } catch (err) {
        console.log(err)
    }
})

program.parse()