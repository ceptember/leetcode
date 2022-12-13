var minCostClimbingStairs = function(cost) {
    let lowestCosts = [cost[0], cost[1]]  
  
      for (let i = 2; i < cost.length; i++){
          lowestCosts[i] = cost[i] + Math.min(lowestCosts[i-1], lowestCosts[i-2] )   
      }
  
      return(Math.min(lowestCosts[lowestCosts.length-1], lowestCosts[lowestCosts.length-2] ))
  
  };
  
  // IMPORTANT- Constraints: 2 <= cost.length <= 1000