import { inventory } from './inventory.js';

function showOutcomeInConsole() {
    console.log('1a types');
    const allTypes = inventory.map(tv => tv.type);
    console.log(allTypes);

    console.log('1b: uitverkochte tv’s');
    const soldOut = inventory.filter(tv => tv.originalStock === tv.sold);
    console.log(soldOut);

    console.log("1c: NH3216SMART");
    const nh3216 = inventory.find(tv => tv.type === 'NH3216SMART');
    console.log(nh3216);

    console.log("Geschikt voor sport (100Hz en hoger)");
    const sportSuitability = inventory.map(tv => ({
        name: `${tv.brand} ${tv.name}`,
        suitable: tv.refreshRate >= 100,
    }));
    console.log(sportSuitability);

    console.log("1e: Schermgroottes 65 en groter");
    const largeScreens = inventory.filter(tv => tv.availableSizes.some(size => size >= 65));
    console.log(largeScreens);

    console.log("1F: met ambi")
    const withAmbilight = inventory.filter(tv =>
        tv.options.some(option => option.name === "ambiLight" && option.applicable === true)
    );
    console.log("withAmbilight");



}

export default showOutcomeInConsole;