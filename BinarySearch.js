// Lets understand what a binary search is
// Binary search is a much faster form of search
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
// Binary search only works on sorted arrays

// // Binary search
// // we have a sorted array of numbers
// // we have to find the index of a given number
// // we can use binary search to solve this problem
// Let's implement binary search


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // lets set a variable L to 0 which refers to the first index of the array
    let L = 0
    // lets set a variable H to the last index of the array which is nums.length - 1 
    let H = nums.length -1
    // lets set a condition to check if L is less than or equal to H

    while(L <= H){
        // lets find the middle index of the array
        let M = Math.floor((L+H)/2)
        // lets check if the element at middle index is equal, then the target element is found
        if(nums[M] == target) return M
        // lets check if the element at middle index is less than target, then we can ignore the left half of the array and move 
        // to the right half

        if(nums[M] < target) L = M + 1

        //conversely if the element at middle index is greater than target, then we can ignore the right half of the array and move 
        //to the left half
        else H = M - 1
    }
    // if the element is not found we return -1
    return -1


};