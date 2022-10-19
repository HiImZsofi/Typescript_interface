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
var _Football_goalHome, _Football_goalAway;
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
}
_Football_goalHome = new WeakMap(), _Football_goalAway = new WeakMap();
