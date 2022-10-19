interface Results{
    winner : string;
    date: Date;
    

    result() : string;
    kiir() : void;
}

class Football implements Results{
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

class Marathon implements Results{
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

class Calvinball implements Results{
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

let sports : Results[] = [
    new Football("barca", new Date("2019-01-16"), 1, 2),
    new Football("atleti", new Date("2020-01-16"), 1, 5),
    new Marathon("random1", new Date("2010-12-18"), 130),
    new Marathon("random2", new Date("2010-02-18"), 152),
    new Calvinball("random3", new Date("2017-04-15")),
    new Calvinball("random4", new Date("2013-02-18")),
];

for(let sport of sports){
    sport.kiir();
}