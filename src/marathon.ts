import { Results } from "./results";

export class Marathon implements Results{
    winner: string;
    date: Date;
    runtime : number;

    constructor(winner: string, date: Date, runtime: number){
        this.winner = winner;
        this.date = date;
        this.runtime = runtime;
    }


    result(): string {
        var minute = Math.floor(this.runtime / 60);
        var seconds = this.runtime % minute;
        return "Marathon: " + minute + "m " + seconds + "s";    
    }

    kiir(): void {
        console.log(this.result());
    }
    
}