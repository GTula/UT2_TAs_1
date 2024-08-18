function duplicates(nums){
    let numsExist = {};
    let cant = 0;
    nums.forEach((value) => {
        numsExist[value] = (numsExist[value] || 0) + 1;
    });
    for(value in numsExist){
        if(numsExist[value]>=2){
            cant++;
        }
        
    }
    console.log(cant);
}

let nums = [1, 2, 2, 3, 4, 4, 4, 5];
duplicates(nums);