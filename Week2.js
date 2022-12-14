/* Given five positive integers, 
find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers. */
function miniMaxSum(arr) {
    //sort to get increasing order  
   let newArr =arr.sort((a,b)=>  a- b) //bcoz else 1,10, 100 ,2,3  this is the way it sort ,considers only first place of the integer
   //to get min we need first 4 elements ,so we use slice and then reduce it
   let min = newArr.slice(0,arr.length-1).reduce((a,b)=>a+b) //1,3,5,7 =>nums[arr.length-1] will not be stored
   //last 4 elements
   let max = newArr.slice(1).reduce((a,b)=>a+b) //removes the first element => 3,5,7,9 
   console.log(min, max)
   }

   //////////////////////////////////
/*    Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc */

function caesarCipher(s, k) {
    // Write your code here
  const lowerA = "abcdefghijklmnopqrstuvwxyz"
  const upperA = lowerA.toUpperCase()

  const res = s.split("").map(c => {
    if (lowerA.includes(c)) {
      return lowerA[(lowerA.indexOf(c) + k) % 26]
    } else if (upperA.includes(c)) {
      return upperA[(upperA.indexOf(c) + k) % 26]
    } else {
      return c
    }
  })

  return res.join("")
}