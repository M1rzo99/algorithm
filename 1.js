// *1 algorithm
// const a = 1
// const b = 2

// summa = a + b
// console.log(summa);

// *2 algorithm
// const a = 300;
// const b = 300;
// const c = 300;

// if (a >= b && a >= c) {
//     console.log("A eng kattasi");
// } else if (b >= a && b >= c) {
//     console.log("B eng kattasi");
// } else {
//     console.log("C eng kattasi");
// }

// *3 algorithm

// function binarySearch(arr, target) {
//     let L = 0;
//     let H = arr.length - 1;

//     while (L <= H) {
//         let m = Math.floor((L + H) / 2); // 3-qadam: o‘rtadagi indeks

//         if (arr[m] === target) {
//             return m; // 4-qadam: topildi
//         } else if (arr[m] < target) {
//             L = m + 1; // 5-qadam: pastki chegarani ko‘taramiz
//         } else {
//             H = m - 1; // 6-qadam: yuqori chegarani pasaytiramiz
//         }
//     }

//     return -1; // 2-qadam: topilmadi
// }

// // Misol:
// const A = [2, 4, 6, 8, 10, 12, 14]; // Saralangan ro‘yxat
// const T = 10; // Qidirilayotgan qiymat

// const result = binarySearch(A, T);
// console.log("Index:", result); // chiqadi: Index: 4

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Topildi
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Topilmadi
}

// Tartibsiz massiv
const unsortedArray = [12, 4, 8, 15, 3, 10, 6];

// 1. Massivni saralash (o‘sish tartibida)
const sortedArray = unsortedArray.slice().sort((a, b) => a - b); // slice() - original arrayni o‘zgartirmaslik uchun

// 2. Qidiriladigan qiymat
const target = 10;

// 3. Binary search chaqiramiz
const index = binarySearch(sortedArray, target);

// 4. Natijani chiqarish
if (index !== -1) {
    console.log(`${target} elementi saralangan massivda ${index}-indeksta joylashgan.`);
    console.log("Tartiblangan massiv:", sortedArray);
} else {
    console.log(`${target} elementi massivda mavjud emas.`);
}