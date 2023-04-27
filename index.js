function maxSumBetweenTwoNegatives(a) {
  var sum = 0;
  var maxSum = 0;
  for (var index = 0; index < a.length; index++) {
    sum = 0;
    if (a[index] >= 0 && a[index - 1] < 0) {
      do {
        sum = sum + a[index];
        index++;
      }
      while (a[index] >= 0);
      if (a[index] < 0)
        if (maxSum < sum) {
          maxSum = sum;
        }
    }
  }
  if (maxSum == 0) {
    for (var x = 0; x < a.length; x++) {
      if (a[x] < 0 && a[x + 1] < 0) {
        return maxSum;
      }
    }
    return -1;
  }
  else {
    return maxSum;
  }
}