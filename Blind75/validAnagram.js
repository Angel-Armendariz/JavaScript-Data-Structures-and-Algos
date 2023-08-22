/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){ //check if the length of the strings match first
        return false;
    }
    //create both of the empty hash maps 
    const hashMapS = new Map();
    const hashMapT = new Map();
    //for the length of the s string with i being the pointer to each letter
    for(let i=0;i<s.length;i++){
        //add key-value pairs to hashmaps
        hashMapS.set(s[i],1+(hashMapS.get(s[i]) || 0)); //if the letter is already in the hash map, increment the count, otherwise set the count to 1
        hashMapT.set(t[i],1+(hashMapT.get(t[i]) || 0));
    }
    //iterate over hashMapS to check if the counts are the same 
    for(let [c,value] of hashMapS){ //iterate over the key-value pairs in the hash map, c is the letter, value is the number of occurrences 
        if(value!==(hashMapT.get(c) || 0)){ //if the count of the current letter is not the same as the count of the same letter in the other string 
            return false;
        }
    }
    return true; //return true if all counts are equal

    
    
};