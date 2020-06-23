/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//     UPER
//     U:
//         > Array of numbers
//         > Target is 2 of those numbers combined
//         > Only one possible solutions of number combinations
//         > return indices of the two numbers
//     P:
//         > create a cache
//         > As i iterate over the array, store each number (key) and its indice (value) in the cache
//         > Find the difference of the target number and my current iteration number
//         > Check to see if that number exists in the cache
//         > r

//     E:
//         > Look at my code
    
//     R:
//         > What was good?
//         > What was bad?
//         > Could i do better?

var twoSum = function(nums, target) {
    let cache = {}
    cache[nums[0]] = 0
    let match = null
    for(var i=1; i < nums.length; i++){
        // number i am looking for
        match = target - nums[i]
        if(match in cache){
            return [cache[match], i]
        }
        cache[nums[i]] = i
    }
    return null
};
