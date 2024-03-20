// n = 5 
// A[] = {1,3,5,2,2} 
// Output: 
// 3 
// Explanation:  
// equilibrium point is at position 3 as sum of elements before it (1+3) = sum of elements after it (2+2). 

const arr = [1,3,5,2,2]

const equilibrium =(arr)=>{
    
    for(let i = 0; i<arr.length;i++){
        let left = 0
        let right = 0
        if(arr.length === 0){
            return arr[0]
        }
        console.log("Left, Right",left, right)
        for(let j = 0; j<arr.length; j++){
            if(j < i){
                left = left + arr[j]
                console.log("arr[j] < arr[i]", arr[j])
            }else if (j > i){
               right = right + arr[j] 
               console.log("i> j", arr[i])
            }
            if(left === right && left !== undefined && right !== 0){
                // console.log("arr[i]th element", arr[i])
                return arr[i]
            }
        }
    } 
}
equilibrium(arr)