/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
        
    let obj = {}
    let count = 0;

    for (let i = 0; i < s.length; i++ ){
        if (obj[s[i]]){
            obj[s[i]] = obj[s[i]] + 1
        }
        else {
            obj[s[i]] = 1
        }
    }

   let evens = Object.values(obj).filter( x => x % 2 == 0)
   let odds = Object.values(obj).filter( x => x % 2 != 0)
   let evenCount = 0;
   let oddCount = 0; 
   if (evens.length > 0){
        evenCount = evens.reduce( (a,b) => a + b) 
   }

   if (odds.length > 0){
       oddCount = odds.reduce( (a,b) => a + b) + 1 - odds.length; 
   } 
    

    return(evenCount + oddCount)


};

//accepted; 