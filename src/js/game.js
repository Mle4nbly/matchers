export function listSorting (heroList) {
    heroList.sort((a, b) => {
        if (a.health > b.health) {
            return -1;
        }
        if (a.health < b.health) {
            return 1;
        }

        return 0;
    })

    return heroList;
}