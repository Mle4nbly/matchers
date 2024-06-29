import { listSorting } from "../js/game.js";


test("heroList are equal result", () => {
    const heroList = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const result = listSorting(heroList);
    const resultList = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    expect(result).toEqual(resultList);
});

test("heroList are equal result", () => {
    const heroList = [
        {name: 'мечник', health: 100},
        {name: 'маг', health: 50},
        {name: 'лучник', health: 100},
    ];
    const result = listSorting(heroList);
    const resultList = [
        {name: 'мечник', health: 100},
        {name: 'лучник', health: 100},
        {name: 'маг', health: 50},
    ];
    expect(result).toEqual(resultList);
});