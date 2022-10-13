/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    
    let arr1 = s.split("")
    let arr2 = t.split("") 

    while (arr2.length > 0){

        if (arr1[0] == arr2[0]){
            arr1 = arr1.slice(1)
            arr2 = arr2.slice(1)
        }

        else {
            arr2 = arr2.slice(1)
        }

    }

    if (arr1.length == 0){
        return true
    }
    else {
        return false 
    }


};

//accepted