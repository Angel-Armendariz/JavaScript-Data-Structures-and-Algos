/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) 
{
    const twoMap = new Map; //create the empty hash map
    for(i=0;i<nums.length;i++){ //iterate over the nums array
        diff = target - nums[i]; //calculate the difference between the target and the current number
        if(twoMap.has(diff)){ //check if the difference is in the hash map
            return [(twoMap.get(diff)),i]; //return the index of the difference and the current index
        }
        else{
            twoMap.set(nums[i], i); //add the current number and index to the hash map
        }
    }
};