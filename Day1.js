/* There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are. */

let n=7;
let arr=[1,2,1,2,1,3,2]

const sockMerchant=(n,arr)=>{

    let pairs=0
    let set=new Set()
    for(let sock of arr){
        if(!set.has(sock)){
            set.add(sock)
        }else{
            set.delete(sock)
            pairs++
        }
        }
     
        
    return pairs
}

console.log(sockMerchant(n,arr))

/* Given an array of integers, find the sum of its elements.
Function Description
Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
simpleArraySum has the following parameter(s):
ar: an array of integers */
let ar=[5,3,4,2]

let countArraySum=(ar)=>{
    return ar.reduce((sum,a)=>{return sum+=a},0)
}
console.log(countArraySum(ar))
