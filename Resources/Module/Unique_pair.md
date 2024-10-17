# Find Unique Pairs that Sum to a Target

## Problem Statement

You are given an array of integers `nums` and a target integer `target`. Your task is to find all **unique pairs** of numbers in the array whose sum equals the target. You should return the pairs in the form of an array of arrays. Each pair should be sorted in **ascending order**, and the output should not contain duplicate pairs.

## Example

### Input:

```plaintext
nums = [2, 7, 11, 15, 3, 6, 2, 7]
target = 9
```

### Output:

```plaintext
[[2, 7], [3, 6]]
```

### Explanation:

- The number pairs that sum up to 9 are `[2, 7]` and `[3, 6]`.
- The result is returned in ascending order, and duplicates (like the second `[2, 7]`) are removed.

## Requirements

1. Each pair of numbers should add up to the target value.
2. The pairs should be returned in an array of arrays.
3. Each pair should be sorted in ascending order.
4. The output should not contain duplicate pairs.
5. Time complexity should be as optimal as possible.

## Solution Approach

The problem can be solved using a **Set** to track elements and their complements. By iterating through the array once, we can:

1. Check if the complement of the current number (i.e., `target - num`) has already been seen.
2. If the complement exists, form a pair and add it to the result.
3. Use another set to ensure that no duplicate pairs are added to the result.

### Pseudocode:

```
1. Initialize an empty set `seen` to store numbers that have been processed.
2. Initialize an empty set `usedPairs` to store unique pairs.
3. Loop through each number in the array:
   - Calculate the complement (i.e., `target - num`).
   - If the complement exists in `seen`:
     - Form a pair [smaller, larger] and add it to the result if it hasn't been added already.
   - Add the current number to `seen`.
4. Return the result.
```

### Time Complexity:

- The algorithm runs in O(n) time, where `n` is the length of the array, because each element is processed once, and set lookups are O(1).

## Solution Example

### JavaScript Code:

```javascript
function findPairs(nums, target) {
  let result = [];
  let seen = new Set(); // To track numbers we have already processed
  let usedPairs = new Set(); // To track unique pairs

  for (let num of nums) {
    let complement = target - num;

    if (seen.has(complement)) {
      let pair = [Math.min(num, complement), Math.max(num, complement)];
      let pairStr = pair.toString();

      // Ensure the pair is unique
      if (!usedPairs.has(pairStr)) {
        result.push(pair);
        usedPairs.add(pairStr); // Mark this pair as used
      }
    }

    seen.add(num); // Add the current number to the set of seen numbers
  }

  return result;
}

// Example usage:
console.log(findPairs([2, 7, 11, 15, 3, 6, 2, 7], 9));
// Output: [[2, 7], [3, 6]]
```

# Code Explanations

## 1. Function: `findPairs(nums, target)`

### Описание:

Эта функция находит все уникальные пары чисел в массиве `nums`, сумма которых равна целевому значению `target`. Результатом является массив всех таких уникальных пар, представленных в виде массива массивов.

### Шаги выполнения:

1. **Инициализация:**

   - `result` — массив для хранения пар чисел.
   - `seen` — множество для отслеживания чисел, с которыми уже работали.
   - `usedPairs` — множество для хранения уникальных пар чисел, чтобы избежать дублирования.

2. **Цикл по массиву:**

   - Для каждого числа `num` из массива вычисляем его дополнение `complement` (разница между `target` и текущим числом).
   - Если дополнение уже есть в множестве `seen`, то это означает, что мы нашли пару чисел.
   - Создаётся отсортированная пара чисел и добавляется в `result`, если такая пара ещё не была использована.

3. **Возвращение результата:**
   - Функция возвращает массив найденных уникальных пар.

### Пример использования:

```javascript
console.log(findPairs([2, 7, 11, 15, 3, 6, 2, 7], 9));
// Вывод: [[2, 7], [3, 6]]
```
