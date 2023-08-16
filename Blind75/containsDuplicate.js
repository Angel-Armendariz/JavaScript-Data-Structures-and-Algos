/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mySet = new Set(); //create hashset to store values 
    for(let i=0;i<nums.length;i++){ //create the for loop to check for each value 
        if (mySet.has(nums[i])){ //check if the set has the value 
            return true;
        }
        else{
        mySet.add(nums[i]); //else add the value to the set 
        }
    }
    return false;//return false otherwise 
    
};
