function getTotalbought (inventory){
    return inventory.reduce((acc, tv) => acc + tv.originalStock, 0);
}
export default getTotalbought;
