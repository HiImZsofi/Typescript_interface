import { Results } from "./results";

export class Football implements Results{
    winner: string;
    date: Date;
    #goalHome : number;
    #goalAway : number;

    constructor(winner: string, date: Date, goalHome : number, goalAway : number){
        this.winner = winner;
        this.date = date;
        this.#goalHome = goalHome;
        this.#goalAway = goalAway;
    }

    result(): string {
        return "Football match: " + this.#goalHome + "-" + this.#goalAway;
    }

    kiir(): void {
        console.log(this.result());
    }
    

}