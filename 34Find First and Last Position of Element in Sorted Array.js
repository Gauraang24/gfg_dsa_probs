/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


//Test Case 01
// Nums = [5,7,7,8,8,10], target = 8
// O/p  = [3,4]

//Test Case 02
// Nums = [5,7,7,8,8,10], target = 6
// O/p  = [-1,-1]

//Test Case 03
// Nums = [], target = 0
// O/p  = [-1,-1]

var searchRange = function(nums, target) {
    if(nums.length === 0){
        return [-1,-1]
    }else{
    let ttt = []
    for(let i =0; i<nums.length; i++){
        
        if(nums[i]=== target){
            ttt.push(i)
        }
    }

    return ttt.length !== 0 ? [ttt[0], ttt[ttt.length-1]] : [-1,-1]}
}

