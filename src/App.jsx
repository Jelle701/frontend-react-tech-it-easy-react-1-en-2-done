import './App.css';
import { useState } from 'react';

import getTotalSold from './helpers/TotalSold.js';
import getTotalbought from "./helpers/totalbought.js";
import getGoal from "./helpers/Goal.js";

import { inventory, bestSellingTv } from './constants/inventory.js';
import getBestSellerName from './helpers/BestsellerName.js';
import formatPrice from './helpers/BestsellerPrice.js';
import formatSizes from './helpers/BestsellerSizes.js';

import showOutcomeInConsole from './constants/oefenbestand.js';

// ✅ Toegevoegd: icons importeren
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';

const totalSold = getTotalSold(inventory);
const totalBought = getTotalbought(inventory);
const totalGoal = getGoal(inventory);

const bestSellerName = getBestSellerName(bestSellingTv);
const bestSellerPrice = formatPrice(bestSellingTv.price);
const bestSellerSizes = formatSizes(bestSellingTv);

function App() {
    showOutcomeInConsole();

    const [displayedTvs, setDisplayedTvs] = useState([...inventory]);

    const handleSortBySold = () => {
        const sorted = [...displayedTvs].sort((a, b) => b.sold - a.sold);
        setDisplayedTvs(sorted);
    };

    const handleSortByPrice = () => {
        const sorted = [...displayedTvs].sort((a, b) => a.price - b.price);
        setDisplayedTvs(sorted);
    };

    const handleSortByRefreshRate = () => {
        const sorted = [...displayedTvs].sort((a, b) => b.refreshRate - a.refreshRate);
        setDisplayedTvs(sorted);
    };

    return (
        <>
            <h1>Tech it easy dashboard</h1>

            <h2>Verkoopoverzicht</h2>
            <div className="boxes">
                <div className="sold">
                    <p>Aantal verkochte producten: {totalSold}</p>
                </div>
                <div className="bought">
                    <p>Aantal ingekochte producten: {totalBought}</p>
                </div>
                <div className="goal">
                    <p>Aantal te verkopen: {totalGoal}</p>
                </div>
            </div>

            <h2>Best verkochte tv</h2>
            <div className="BestSoldTv">
                <img src={bestSellingTv.sourceImg} alt={bestSellingTv.name} />
                <div className="TextOfBestSoldTv">
                    <p>{bestSellerName}</p>
                    <h2>{bestSellerPrice}</h2>
                    <p>{bestSellerSizes}</p>
                    <p>
                        {bestSellingTv.options.map((option, i) => (
                            <span key={i}>
                                <img
                                    src={option.applicable ? checkIcon : minusIcon}
                                    alt={option.applicable ? 'aanwezig' : 'niet aanwezig'}
                                    className="option-icon"
                                />{' '}
                                {option.name}{' '}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            <section>
                <h2>Alle tv's</h2>
                <button onClick={handleSortBySold}>Meest verkocht eerst</button>
                <button onClick={handleSortByPrice}>Goedkoopste eerst</button>
                <button onClick={handleSortByRefreshRate}>Meest geschikt voor sport eerst</button>

                {displayedTvs.map((tv, index) => (
                    <div key={index} className="BestSoldTv">
                        <img src={tv.sourceImg} alt={tv.name} />
                        <div className="TextOfBestSoldTv">
                            <p>{getBestSellerName(tv)}</p>
                            <h2>{formatPrice(tv.price)}</h2>
                            <p>{formatSizes(tv)}</p>
                            <p>
                                {tv.options.map((option, i) => (
                                    <span key={i}>
                                        <img
                                            src={option.applicable ? checkIcon : minusIcon}
                                            alt={option.applicable ? 'aanwezig' : 'niet aanwezig'}
                                            className="option-icon"
                                        />{' '}
                                        {option.name}{' '}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default App;
