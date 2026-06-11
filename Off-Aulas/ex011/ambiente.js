// Meu primeiro Leetcode



//  const nums = [2, 7, 11, 15]

//  const target = 9

//  const nums = [3, 2, 4]

//  const target = 6

// const nums = [3, 3]

// const target = 6

function soma(nums, target) {
    const mapa = new Map()

    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i]

        

        if (mapa.has(complemento)) {
            mapa.set(nums[i], i)

            return [mapa.get(nums[i]), nums.indexOf(complemento)]
        }

        mapa.set(nums[i], i)
        
    }
}




console.log(soma(nums, target))