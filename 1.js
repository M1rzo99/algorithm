// // // *1 algorithm
// // // const a = 1
// // // const b = 2

// // // summa = a + b
// // // console.log(summa);

// // // *2 algorithm
// // // const a = 300;
// // // const b = 300;
// // // const c = 300;

// // // if (a >= b && a >= c) {
// // //     console.log("A eng kattasi");
// // // } else if (b >= a && b >= c) {
// // //     console.log("B eng kattasi");
// // // } else {
// // //     console.log("C eng kattasi");
// // // }

// // // *3 algorithm

// // // function binarySearch(arr, target) {
// // //     let L = 0;
// // //     let H = arr.length - 1;

// // //     while (L <= H) {
// // //         let m = Math.floor((L + H) / 2); // 3-qadam: o‘rtadagi indeks

// // //         if (arr[m] === target) {
// // //             return m; // 4-qadam: topildi
// // //         } else if (arr[m] < target) {
// // //             L = m + 1; // 5-qadam: pastki chegarani ko‘taramiz
// // //         } else {
// // //             H = m - 1; // 6-qadam: yuqori chegarani pasaytiramiz
// // //         }
// // //     }

// // //     return -1; // 2-qadam: topilmadi
// // // }

// // // // Misol:
// // // const A = [2, 4, 6, 8, 10, 12, 14]; // Saralangan ro‘yxat
// // // const T = 10; // Qidirilayotgan qiymat

// // // const result = binarySearch(A, T);
// // // console.log("Index:", result); // chiqadi: Index: 4

// // // function binarySearch(arr, target) {
// // //     let left = 0;
// // //     let right = arr.length - 1;

// // //     while (left <= right) {
// // //         let mid = Math.floor((left + right) / 2);

// // //         if (arr[mid] === target) {
// // //             return mid; // Topildi
// // //         } else if (arr[mid] < target) {
// // //             left = mid + 1;
// // //         } else {
// // //             right = mid - 1;
// // //         }
// // //     }

// // //     return -1; // Topilmadi
// // // }

// // // // Tartibsiz massiv
// // // const unsortedArray = [12, 4, 8, 15, 3, 10, 6];

// // // // 1. Massivni saralash (o‘sish tartibida)
// // // const sortedArray = unsortedArray.slice().sort((a, b) => a - b); // slice() - original arrayni o‘zgartirmaslik uchun

// // // // 2. Qidiriladigan qiymat
// // // const target = 10;

// // // // 3. Binary search chaqiramiz
// // // const index = binarySearch(sortedArray, target);

// // // // 4. Natijani chiqarish
// // // if (index !== -1) {
// // //     console.log(`${target} elementi saralangan massivda ${index}-indeksta joylashgan.`);
// // //     console.log("Tartiblangan massiv:", sortedArray);
// // // } else {
// // //     console.log(`${target} elementi massivda mavjud emas.`);
// // // }


// // // //2025/07/30
// // // function averageOfUnique(arr) {
// // //     // Unikal qiymatlarni olish (Set yordamida)
// // //     const unique = [...new Set(arr)];

// // //     // Yig'indini hisoblash
// // //     const total = unique.reduce((sum, num) => sum + num, 0);

// // //     // O'rtacha qiymat
// // //     const average = unique.length > 0 ? total / unique.length : 0;

// // //     return average;
// // // }

// // // // Test qilish
// // // const numbers = [4, 2, 5, 2, 4, 6, 7];
// // // const result = averageOfUnique(numbers);

// // // console.log("Unique average:", result);


// // // //2025/07/30 2 si
// // // function mostFrequentChar(str) {
// // //   const frequency = {};
// // //   let maxChar = '';
// // //   let maxCount = 0;

// // //   for (let char of str) {
// // //     // Faqat harflarni ko'rib chiqamiz
// // //     if (char.match(/[a-zA-Z]/)) {
// // //       char = char.toLowerCase(); // Katta-kichik harflarni bir xil ko'rish uchun

// // //       frequency[char] = (frequency[char] || 0) + 1;

// // //       if (frequency[char] > maxCount) {
// // //         maxCount = frequency[char];
// // //         maxChar = char;
// // //       }
// // //     }
// // //   }

// // //   return `${maxChar} → ${maxCount} marta`;
// // // }

// // // // Test
// // // const input = "javascript";
// // // const result = mostFrequentChar(input);

// // // console.log("Eng ko'p uchraydigan harf:", result);

// // // function lengthOfLongestSubstring(s) {
// // //     let seen = new Set();
// // //     let left = 0;
// // //     let maxLen = 0;

// // //     for (let right = 0; right < s.length; right++) {
// // //         while (seen.has(s[right])) {
// // //             seen.delete(s[left]);
// // //             left++;
// // //         }
// // //         seen.add(s[right]);
// // //         maxLen = Math.max(maxLen, right - left + 1);
// // //     }

// // //     return maxLen;
// // // }

// // // // Sinov
// // // console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// // // console.log(lengthOfLongestSubstring("bbbbb")); // 1
// // // console.log(lengthOfLongestSubstring("pwwkew")); // 3

// // // 2025.08.10
// // //algorithms: massivni aylantirish

// // function reverseArray(arr) {
// //     return arr.reverse(); // reversed massivni aylantirish
// // }
// // console.log(reverseArray([1, 2, 3])); // [3, 2, 1]

// // // string ichidagi eng uzun so'zni topish

// // function longestWord(str) {
// //     let words = str.split(" ");
// //     let max = "";
// //     for (let w of words) {
// //         if (w.length > max.length) max = w;
// //     }
// //     return max;
// // }
// // console.log(longestWord("Men React o‘rganishni yaxshi ko‘raman")); // "o‘rganishni"

// // // array ichidagi eng katta sonni topish

// // function maxNumber(arr) {
// //     return Math.max(...arr);
// // }
// // console.log(maxNumber([5, 9, 1, 12, 3])); // 12


// // // array ichidagi eng kichik sonni topish
// // function minNumber(arr) {
// //     return Math.min(...arr);
// // }
// // console.log(minNumber([5, 9, 1, 12, 3])); // 1
// function maxInArray(arr) {
//     return Math.max(...arr);
// }

// // test
// console.log(maxInArray([1, 5, 2, 9, 3])); // 9

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // test
// console.log(reverseString("hello")); // "olleh"

// function isPalindrome(str) {
//     const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return clean === clean.split('').reverse().join('');
// }

// // test
// console.log(isPalindrome("A man a plan a canal Panama")); // true


// 08/17
// Linear Search - har bir elementni bir-bir qarab chiqish orqali qidirish
// Binary Search - kerakli elementni yarmidan qidiradi va kerakli element topilguncha ikkiga bo'linish usulida ishlaydi
// /**
//  * 1..N oralig'ida sirli sonni topish (binary search simulyatsiyasi)
//  * @param {number} secret - o'ylangan son (masalan 45)
//  * @param {number} low    - boshlang'ich pastki chegara (default 1)
//  * @param {number} high   - boshlang'ich yuqori chegara (default 1000)
//  * @returns {{found:boolean, value:number, steps:number}}
//  */
// function findSecret(secret, low = 1, high = 1000) {
//     let L = low,
//         H = high,
//         steps = 0;

//     while (L <= H) {
//         const m = L + ((H - L) >> 1); // o'rta nuqta, overflow-safe
//         steps++;
//         // Qadamni ko'rsatib boramiz:
//         console.log(`#${steps}: L=${L}, H=${H}, m=${m} → ` +
//             (m === secret ? 'found' : (m < secret ? 'm < T, L=m+1' : 'm > T, H=m-1')));

//         if (m === secret) return { found: true, value: m, steps };
//         if (m < secret) L = m + 1;
//         else H = m - 1;
//     }
//     return { found: false, value: -1, steps };
// }

// // Demo: 1..1000 ichida 45 ni topish
// const res = findSecret(45);
// console.log(res); // { found: true, value: 45, steps: 10 }

// 08/18
function lengthOfLongestSubstring(s) {
    const last = new Map(); // belgi -> oxirgi indeks
    let left = 0,
        maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        if (last.has(ch) && last.get(ch) >= left) {
            left = last.get(ch) + 1; // oynani oldinga siljitamiz
        }
        last.set(ch, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

// Test
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // 3 ("wke")

function threeSum(nums) {
    const res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // dublikat i

        let L = i + 1,
            R = nums.length - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]]);
                // dublikatlarni o‘tkazish
                while (L < R && nums[L] === nums[L + 1]) L++;
                while (L < R && nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            } else if (sum < 0) {
                L++;
            } else {
                R--;
            }
        }
    }
    return res;
}

// Test
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]

function topoSort(numNodes, edges) {
    const adj = Array.from({ length: numNodes }, () => []);
    const indeg = Array(numNodes).fill(0);
    for (const [u, v] of edges) {
        adj[u].push(v);
        indeg[v]++;
    }

    const q = [];
    for (let i = 0; i < numNodes; i++)
        if (indeg[i] === 0) q.push(i);

    const order = [];
    let head = 0;
    while (head < q.length) {
        const u = q[head++];
        order.push(u);
        for (const v of adj[u]) {
            if (--indeg[v] === 0) q.push(v);
        }
    }
    return order.length === numNodes ? order : []; // sikl bo‘lsa, bo‘sh
}

// Test
// 0→1, 1→2, 0→2  => mumkin tartib: [0,1,2]
console.log(topoSort(3, [
    [0, 1],
    [1, 2],
    [0, 2]
]));

// Siklli: 0→1, 1→0 => []
console.log(topoSort(2, [
    [0, 1],
    [1, 0]
]));


// 2025/09/05
// 1.

let a = 1
let b = 1
let c = 1

if (a === b && b === c && c === a) {
    console.log(" 3 ta song ham tengdir");

} else if (a >= b && a >= c) {
    console.log("A eng katta son");

} else if (b >= a && b >= c) {
    console.log("B  eng katta son");
} else {
    console.log("C eng katta son");

}

//2.
let v = 1
let t = 2
const summa = v + t
console.log(summa);

// 3.

// start
let N = 4
let fac = 1
for (let i = 1; i <= N; i++) {
    fac *= i
}
console.log(fac);