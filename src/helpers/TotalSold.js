import {inventory} from "../constants/inventory.js";

function getTotalSold(inventory) {
    return inventory.reduce((acc, tv) => acc + tv.sold, 0);
}
 export default getTotalSold;