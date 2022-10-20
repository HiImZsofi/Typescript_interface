
import type { Results } from './results';
import { Football } from './football';
import { Calvinball } from './Calvinball';
import { Marathon } from './marathon';







let sports : Results[] = [
    new Football("barca", new Date("2019-01-16"), 1, 2),
    new Football("atleti", new Date("2020-01-16"), 1, 5),
    new Marathon("random1", new Date("2010-12-18"), 27495),
    new Marathon("random2", new Date("2010-02-18"), 15362),
    new Calvinball("random3", new Date("2017-04-15")),
    new Calvinball("random4", new Date("2013-02-18")),
];

sports.sort((a: Results, b: Results) => a.date > b.date ? 1 : -1);
console.log(sports);

for(let sport of sports){
    sport.kiir();
}