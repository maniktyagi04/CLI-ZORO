import axios from 'axios'

export class AdviceCommand {
    name;
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
        .command("advice")
        .description("Random advice")
        .action(() => this.advice())
    }

    async advice() {
        try {
            const res = await axios.get('https://api.adviceslip.com/advice')
            console.log(res.data.slip.advice)
        } catch (err) {
            console.log(err)
        }
    }
}