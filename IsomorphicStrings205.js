/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    
    if (s.length != t.length){
        return false
    }
    let lookup = {}
    let newS = s
    
    for (let i = 0; i < s.length; i++){
        if (lookup[s[i]]){
            newS = newS.substring(0, i) + lookup[s[i]] + newS.substring(i+1, s.length)
        }
        else if (!lookup[s[i]] && Object.values(lookup).includes(t[i])){
                 return false
            }
        else {
            newS = newS.substring(0, i) + t[i] + newS.substring(i+1, s.length)
            lookup[s[i]] = t[i]
        }    
    }
    return newS == t
};


// ACCEPTED 