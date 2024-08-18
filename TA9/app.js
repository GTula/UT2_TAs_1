function getOdds(nums){
    let odds = nums.filter(odd => odd%2!=0)
    console.log(odds);
    return odds;
}

let nums = [1,2,5,65,354,76,434,87,434,321];
getOdds(nums);