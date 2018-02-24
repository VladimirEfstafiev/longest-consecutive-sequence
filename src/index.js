module.exports =function longestConsecutiveLength(nums) {
    let numsObj={},longestCL=0;
    for(let i in nums){
        numsObj[nums[i]]="";

    }
    for(let key in numsObj){
        if(!numsObj.hasOwnProperty(key-1)){
            let length=1,k=key;
            while (numsObj.hasOwnProperty(+k+1)){
                k++;
                length++;
            }
            longestCL=longestCL>length?longestCL:length;
        }

    }
    return longestCL;
}
