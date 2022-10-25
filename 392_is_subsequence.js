/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    
    let str1= s
    let str2 = t

    let count = 0 

    while (count < str2.length){

        if ( str1[count] != str2[count]){
            str2 = str2.substring(0,count) + str2.substring(count+1, str2.length)
        }

        else{
            count +=1;
        }
    }

    console.log(str1 + ", " + str2)

    return str1 == str2; 
};

// Accepted 
