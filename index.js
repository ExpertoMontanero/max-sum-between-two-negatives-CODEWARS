function maxSumBetweenTwoNegatives(a) {
  //variables for actuall sum and maxSum
  var sum = 0;
  var maxSum = 0;
  //iterating and summing loop
  for (var index = 0; index < a.length; index++) {
    sum = 0;
    if (a[index] >= 0 && a[index - 1] < 0) {
      do {
        //temporary suming
        sum = sum + a[index];
        index++;
      }
      //condition to stop summing 
      while (a[index] >= 0);
      if (a[index] < 0)
        if (maxSum < sum) {
          maxSum = sum;
        }
    }
  }
  //if summ is 0
  if (maxSum == 0) {
    for (var x = 0; x < a.length; x++) {
      //checking if it s because of 0 between minus numbers or lack of pair of minus numbers in array
      if (a[x] < 0 && a[x + 1] < 0) {
        //returning maxSum as 0
        return maxSum;
      }
    }
    //returning -1 if there is not at least 2 minus numbers in array
    return -1;
  }
  else {
    //returning max sum if it is not 0
    return maxSum;
  }
}
