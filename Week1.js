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
//////////////////////////////////////////

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


/* Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there. */
let scores=[12,40,24,30,12]
function breakingRecords(scores) {
    let minCount=0;
    let maxCount=0;
    let max =scores[0];
    let min=scores[0];
    for(let score of scores){
       if(score<min){
           min=score
           minCount++
       }else if(score>max){
           max =score
           maxCount++
       }
    }
    return [ maxCount,minCount]

}

console.log(breakingRecords(scores))

//////////////////////////////////

/* You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
x1>x2
The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2  meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO. */
function kangaroo(x1, v1, x2, v2) {
    
  return v2<v1 && (x2-x1)%(v1-v2)===0 ? "YES":"NO" 

}
console.log(0,3,2,5)