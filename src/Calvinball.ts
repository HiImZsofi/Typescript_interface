import { Results } from "./results";

export class Calvinball implements Results{
    #winner: string;
    date: Date;

    constructor(winner: string, date: Date){
        this.#winner = winner;
        this.date = date;
    }

    set winner(winner: string){
        if(winner == "Calvin" || winner == "Hobbes"){
            this.winner = winner;
        }
    }
    result(): string {
        var rnd = Math.random()*100 + 1;
        return "Calvinball: " + rnd + " points";
    }

    kiir(): void {
        console.log(this.result());
    }
    
}
