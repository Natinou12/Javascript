
// const nums = [2, 7, 11, 15]

// const target = 9

 const nums = [3, 2, 4]

 const target = 6

// const nums = [3, 3]

// const target = 6

function soma(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i]
        

        const res2 = target - complemento

        if (nums.indexOf(complemento)) {
            return [nums.indexOf(res2), nums.indexOf(complemento)]

        }   else if (nums.indexOf(res2) === 0 && nums.indexOf(complemento) === 0) {
            
            return [nums.indexOf(res2) , nums.indexOf(complemento) + 1]
          
        }   else if (nums.indexOf(complemento) === 0) {

            return [nums.indexOf(res2), nums.indexOf(complemento) + 1]
        } else if (nums.indexOf(res2) === 0) {
            
        return [nums.indexOf(res2) + 1, nums.indexOf(complemento) + 2]
        }
        

        

        
        
    }
}



console.log(soma(nums, target))