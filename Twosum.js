// Two sum problem
// we have target and an array of numbers
// suppose theres an array of numbers [2,7,11,15] and target is 9
// we have to find the index of numbers whose sum is equal to target
// in this case the index of 2 and 7 is 0 and 1



// Solution 
// we can solve this problem using brute force approach
// we can use two loops and check the sum of each element with all other elements
// if the sum is equal to target we can return the index of both elements
// this approach will take O(n^2) time complexity
// so we will try alternative approach

// we can use hash map to solve this problem

// what we can do is think conversely, first we take target and subtract each element from target
// and store the result in hash map
// then we can check if the element is present in hash map
// if it is present we can return the index of both elements

// this approach will take O(n) time complexity as we are using hash map to store the result and loop through the array only once

// lets implement this

function TwoSums(nums, target) {
    // create a hash map
    let hash = {};
    // looping
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        // check if the element is present in hash map
        if(hash[target-n] !== undefined){
            // if present return the index of both elements in an array
            return [hash[target-n], i]; // first is index of element present in hash map and second is index of current element
        }
        // if not present store the result in hash map
        hash[n] = i; // key is element and value is index, i.e putting key value in hashmap

        
    }
    // what is no solution is present, we return an empty array
    return [];
    
    
}