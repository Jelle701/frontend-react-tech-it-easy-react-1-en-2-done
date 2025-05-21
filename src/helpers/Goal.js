function getGoal (inventory){
    return inventory.reduce((acc, tv) => acc + (tv.originalStock - tv.sold),0);
}
export default getGoal;
