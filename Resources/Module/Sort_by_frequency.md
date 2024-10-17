# Sort Array by Frequency

## Problem Statement

You are given an array of integers `nums`. Your task is to sort the elements of the array in **decreasing order based on the frequency** of each element. If two elements have the same frequency, the one with the smaller value should come first.

## Example

### Input:

```plaintext
nums = [4, 5, 6, 5, 4, 3]
```

### Output:

```plaintext
[4, 4, 5, 5, 3, 6]
```

### Explanation:

- The number 4 appears twice, the number 5 appears twice, the number 3 appears once, and the number 6 appears once.
- Since 4 and 5 have the same frequency, 4 comes before 5 because it is smaller.
- 3 and 6 appear once, and 3 comes before 6 due to its smaller value.

## Requirements:

1. Sort the elements in decreasing order based on frequency.
2. For elements with the same frequency, the smaller value should come first.

## Solution Approach:

To solve this problem:

1. Use a hash map to count the frequency of each element.
2. Sort the elements based on the frequency. For elements with the same frequency, sort by their value.
3. Reconstruct the array using the sorted data.

## Solution Example:

### JavaScript Code:

```javascript
function sortByFrequency(nums) {
  // Create a map to count frequencies of elements
  const frequencyMap = new Map();

  // Count the frequency of each element
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Sort the array first by frequency (descending) then by value (ascending)
  return nums.sort((a, b) => {
    const freqA = frequencyMap.get(a);
    const freqB = frequencyMap.get(b);

    // Sort by frequency in descending order
    if (freqA !== freqB) {
      return freqB - freqA;
    }
    // If frequencies are the same, sort by value in ascending order
    return a - b;
  });
}

// Example usage:
console.log(sortByFrequency([4, 5, 6, 5, 4, 3]));
// Output: [4, 4, 5, 5, 3, 6]
```

### Time Complexity:

- Counting frequencies takes O(n) time, where `n` is the length of the array.
- Sorting the array takes O(n log n) time, so the overall time complexity is **O(n log n)**.
