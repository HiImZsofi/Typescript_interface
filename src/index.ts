interface Results{
    winner : string;
    date: Date;
    

    result() : string;
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
    

}