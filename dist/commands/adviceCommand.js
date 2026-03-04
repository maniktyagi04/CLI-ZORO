"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdviceCommand = void 0;
const axios_1 = __importDefault(require("axios"));
class AdviceCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("advice")
            .description("Random advice")
            .action(() => this.advice());
    }
    async advice() {
        try {
            const res = await axios_1.default.get('https://api.adviceslip.com/advice');
            console.log(res.data.slip.advice);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.AdviceCommand = AdviceCommand;
