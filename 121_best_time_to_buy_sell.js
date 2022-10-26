/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

    let lowest = prices[0];
    let highest = prices[0];
    let currLow = prices[0]; 
    let currHigh = prices[0];

    for (i = 0; i < prices.length; i++){
        if (prices[i] < currLow){
            currLow = prices[i]
            currHigh = prices[i]
        }
        else if (prices[i] > currHigh){
            currHigh = prices[i]
        }

        if (currHigh-currLow > highest - lowest){
            lowest = currLow; 
            highest = currHigh; 
        }

    console.log(highest + ", " + lowest)
    }


    return highest - lowest; 
    
};

//accepted 