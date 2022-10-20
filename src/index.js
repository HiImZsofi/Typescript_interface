"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_goalHome, _Football_goalAway, _Calvinball_winner;
class Football {
    constructor(winner, date, goalHome, goalAway) {
        _Football_goalHome.set(this, void 0);
        _Football_goalAway.set(this, void 0);
        this.winner = winner;
        this.date = date;
        __classPrivateFieldSet(this, _Football_goalHome, goalHome, "f");
        __classPrivateFieldSet(this, _Football_goalAway, goalAway, "f");
    }
    result() {
        return "Football match: " + __classPrivateFieldGet(this, _Football_goalHome, "f") + "-" + __classPrivateFieldGet(this, _Football_goalAway, "f");
    }
    kiir() {
        console.log(this.result());
    }
}
_Football_goalHome = new WeakMap(), _Football_goalAway = new WeakMap();
class Marathon {
    constructor(winner, date, runtime) {
        this.winner = winner;
        this.date = date;
        this.runtime = runtime;
    }
    result() {
        var minute = Math.floor(this.runtime / 60);
        var seconds = this.runtime % minute;
        return "Marathon: " + minute + "m " + seconds + "s";
    }
    kiir() {
        console.log(this.result());
    }
}
class Calvinball {
    constructor(winner, date) {
        _Calvinball_winner.set(this, void 0);
        __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        this.date = date;
    }
    set winner(winner) {
        if (winner == "Calvin" || winner == "Hobbes") {
            this.winner = winner;
        }
    }
    result() {
        var rnd = Math.random() * 100 + 1;
        return "Calvinball: " + rnd + " points";
    }
    kiir() {
        console.log(this.result());
    }
}
_Calvinball_winner = new WeakMap();
let sports = [
    new Football("barca", new Date("2019-01-16"), 1, 2),
    new Football("atleti", new Date("2020-01-16"), 1, 5),
    new Marathon("random1", new Date("2010-12-18"), 27495),
    new Marathon("random2", new Date("2010-02-18"), 15362),
    new Calvinball("random3", new Date("2017-04-15")),
    new Calvinball("random4", new Date("2013-02-18")),
];
for (let sport of sports) {
    sport.kiir();
}
