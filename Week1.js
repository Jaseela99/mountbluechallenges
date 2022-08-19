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
console.log(kangaroo(0,3,2,5))

//////////////////////////
/* Staircase detail
This is a staircase of size 4 :
   #
  ##
 ###
####
Its base and height are both equal to n . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size n . */

function staircase(n) {
for(let i=1;i<=n;i++){
    console.log(" ".repeat(n-i)+"#".repeat(i))
}
}

staircase(8)

/////////////////////////////
/* Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points. */

function compareTriplets(a, b) {
    // Write your code here
    let count =[0,0]
    for(let i=0;i<a.length;i++){
        if(a[i]>b[i]){
           count[0]++ 
        }else if(b[i]>a[i]){
            count[1]++
        }else if(a[i]===b[i]){
            count
        }
    }
    return count

}

/////////////////////////////////////////

/* The previous challenges covered Insertion Sort, which is a simple and intuitive sorting algorithm with a running time of . In these next few challenges, we're covering a divide-and-conquer algorithm called Quicksort (also known as Partition Sort). 
This challenge is a modified version of the algorithm that only addresses partitioning. 
pivot=a[0] numbers less than pivot should be aligned left and greater than to the right */

let a=[4,3,5,7,2]
function quickSort(arr) {
    // Write your code here
    let left=[]
    let right=[]
    let equal=[]
for(let i=0;i<arr.length;i++){
    if(arr[0]>arr[i]){
        left.push(arr[i])
    }else if(arr[0]<arr[i]){
        right.push(arr[i])
    }else if(arr[i]===arr[0]){
        equal.push(arr[i])
    }
}
    let sorted=left.concat(equal)
    return sorted.concat(right)
}
/* function quickSort(arr) {
    // Write your code here
    let sorted=[arr[0]]
for(let i=0;i<arr.length;i++){
    if(arr[0]>arr[i]){
        sorted.unshift(arr[i])
    }else if(arr[i]>arr[0]){
        sorted.push(arr[i])
    }
}
    return sorted
} */
console.log(quickSort(a))

////////////////////////////////////////////

/* Two friends Anna and Brian, are deciding how to split the bill at a dinner.
 Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion.
  You must determine if his calculation is correct. */
let bill=[3,7,8,9]
let k=2 //index in bill that anna doesntt eat
let b=14//money annna gave
  function bonAppetit(bill, k, b) {
    // Write your code here
let result = ''
    bill.splice(k,1)
    const billCost = bill.reduce((previous, next) => previous+next, 0) / 2
    if (billCost == b){
        result = 'Bon Appetit'
    } else {
        result = b - billCost
    }
    console.log(result)
}
//////////////////////////////////////


/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
 Print the decimal value of each fraction on a new line with 6 places after the decimal. */

 function plusMinus(arr) {
    // Write your code here
    let posCount=0;
    let negCount=0;
    let zeroCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            negCount++
        }else if(arr[i]>0){
            posCount++
        }else if(arr[i]===0){
            zeroCount++
        }
    }
    console.log(posCount/arr.length)
    console.log(negCount/arr.length)
    console.log(zeroCount/arr.length)

}

///////////////////////////////////////////
/* Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
Lily decides to share a contiguous segment of the bar selected such that:
The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate. */

function birthday(s, d, m) {
    // Write your code here
 let reducer = (a, c) => a + c;
let count=0;
for(let i=0; i<s.length; i++){
    let temp = s.slice(i, m+i);
    if(temp.reduce(reducer) == d){
        count++;
    }
        }
        return count;
}