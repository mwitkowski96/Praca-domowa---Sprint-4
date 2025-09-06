// Manipulacja tablicą
// Naucz się manipulować elementami tablicy, wymieniając miejscami pierwszy i ostatni element.

// const { type } = require("os");

// Zdefiniuj zmienną const numbers i przypisz do niej tablicę liczb [1, 2, 3, 4, 5].
// Napisz kod, który zamieni miejscami pierwszy i ostatni element tej tablicy.
// Wyświetl zmodyfikowaną tablicę w konsoli.

// const numbers = [1, 2, 3, 4, 5];

// numbers.shift(numbers[0]);

// numbers.unshift(numbers[numbers.length - 1]);

// numbers.pop();

// numbers.push(1);

// console.log(numbers);

// numbers[numbers.length - 1] = 1;
// numbers[0] = 5;

// console.log(numbers);

// Znajdź wartość minimalną
// Twoim zadaniem jest znalezienie najmniejszej wartości w tablicy liczb bez użycia wbudowanych funkcji, takich jak Math.min().

// Utwórz zmienną numbers, która będzie zawierać tablicę liczb: [5, 9, 2, 8, 1]. JEST

// Utwórz zmienną minValue , która będzie służyła do przechowywania minimalnej wartości tablicy. JEST

// Napisz kod, który zastosuje pętle for do przejścia przez wszystkie elementy tablicy i wyszuka najmniejszą wartość.

// Wyświetl znalezioną wartość minimalną w konsoli.

// const numbers = [5, 9, 2, 8, 1];

// let minValue = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < minValue) {
//     minValue = numbers[i];
//   }
// }

// console.log(minValue);

// Odwracanie kolejności elementów
// Twoim zadaniem jest odwrócenie kolejności elementów w tablicy bez użycia wbudowanych metod do odwracania.

// Zdefiniuj zmienną const names i przypisz do niej tablicę zawierającą imiona: ["Jan", "Kazimierz", "Roman", "Zbyszek", "Gustaw"].

// Użyj pętli for do odwrócenia kolejności tablicy bez definiowania nowej tablicy.

// Wyświetl zmodyfikowaną tablicę w konsoli.

// const names = ["Jan", "Kazimierz", "Roman", "Zbyszek", "Gustaw"];

// for (let i = 0; i < names.length / 2; i++) {
//   // 1. Zapisz wartość elementu z początku tablicy.
//   let temp = names[i];

//   // 2. W miejsce elementu z początku wstaw element z końca.
//   names[i] = names[names.length - 1 - i];

//   // 3. W miejsce elementu z końca wstaw element, który zapisałeś w temp.
//   names[names.length - 1 - i] = temp;
// }

// console.log(names); // Otrzymasz: ["Gustaw", "Zbyszek", "Roman", "Kazimierz", "Jan"]

// Unikalna lista wartości z tablicy
// W wielu przypadkach dane zawierają duplikaty, a usunięcie powtarzających się wartości jest istotnym krokiem w ich przetwarzaniu. W tym zadaniu celem jest utworzenie nowej tablicy zawierającej tylko unikalne elementy z podanej listy liczb.

// Utwórz zmienną const numbers i przypisz do niej tablicę liczb zawierającą powtarzające się wartości [1, 2, 2, 3, 4, 4, 5, 5].
// const numbers = [1, 2, 2, 3, 4, 4, 5, 5];

// // Utwórz zmienną const uniqeValues, która przechowuje pustą tablicę.

// const uniqueValues = [];

// // Przejdź przez elementy tablicy numbers i dodaj do tablicy uniqeValues tylko te liczby, które jeszcze się w niej nie znajdują.

// for (let i = 0; i < numbers.length; i++) {
//   let count = 0;

//   // sprawdzamy ile razy numbers[i] występuje w tablicy
//   for (let j = 0; j < numbers.length; j++) {
//     if (numbers[i] === numbers[j]) {
//       count++;
//     }
//   }

//   // jeśli występuje tylko raz → dodajemy do uniqueValues
//   if (count === 1) {
//     uniqueValues.push(numbers[i]);
//   }
// }

// console.log(uniqueValues);

// Unikalna lista wartości z tablicy
// W wielu przypadkach dane zawierają duplikaty, a usunięcie powtarzających się wartości jest istotnym krokiem w ich przetwarzaniu. W tym zadaniu celem jest utworzenie nowej tablicy zawierającej tylko unikalne elementy z podanej listy liczb.

// Utwórz zmienną const numbers i przypisz do niej tablicę liczb zawierającą powtarzające się wartości [1, 2, 2, 3, 4, 4, 5, 5].

// const numbers = [1, 2, 2, 3, 4, 4, 5, 5];

// // Utwórz zmienną const uniqeValues, która przechowuje pustą tablicę.

// const uniqueValues = [];

// // Przejdź przez elementy tablicy numbers i dodaj do tablicy uniqeValues tylko te liczby, które jeszcze się w niej nie znajdują.

// for (let i = 0; i < numbers.length; i++) {
//   // Ustawiam licznik na 0,
//   let count = 0;

//   // sprawdzamy czy index o wartosci i jest rowny indeksowi o wartosci j z tablicy numbers.
//   for (let j = 0; j < numbers.length; j++) {
//     // jesli 1 = 1 to do licznika = 0 dodaj 1.
//     if (numbers[i] === numbers[j]) {
//       count++;
//       console.log(
//         `${numbers[i]} rowne jest ${numbers[j]}, wiec ustawiam licznik count na ${count}`
//       );
//     }
//   }

//   console.log(`Licznik count to: ${count}`);

//   // jeśli 1 jest rowne 1 to dodaj index i z tablicy numbers do tablicy uniqueValues.
//   if (count === 1) {
//     console.log(
//       `Licznik count ${count} jest rowny 1 więc wpycham ${numbers[i]} do tablicy uniqueValues`
//     );
//     uniqueValues.push(numbers[i]);
//   } else {
//     console.log(
//       `Licznik count ${count} NIE jest rowny 1 więc NIE wpycham ${numbers[i]} do tablicy uniqueValues`
//     );
//   }
// }

// console.log(uniqueValues);

// import fs from "fs";
// import path from "path";

// const filePath = path.join(__dirname, "..", "./document.html");
// const htmlContent = fs.readFileSync(filePath, "utf8");
// const scriptPath = path.join(__dirname, "..", "./script.js");
// const scriptContent = fs.readFileSync(scriptPath, "utf8");

// function addScript(scriptContent) {
//   const script = document.createElement("script");
//   script.type = "text/javascript";
//   script.appendChild(document.createTextNode(scriptContent));
//   document.body.appendChild(script);
// }

// const app = document.getElementById("app");
// if (app) {
//   app.innerHTML = htmlContent;
//   app.style.cssText = "background-color: white !important; width:100%; height:100vh !important";
// }

// addScript(scriptContent);

// Usuń ostatni element tablicy, jeśli jest liczbą parzystą.

// // Zdefiniuj zmienną numbers zawierającą tablicę liczb [1, 2, 3, 4].
// const numbers = [1, 2, 3, 4];

// // Sprawdź, czy ostatni element tablicy jest liczbą parzystą.
// numbers[numbers.length - 1] % 2 === 0 ? numbers.pop() : console.log(false);

// // Jeśli tak, usuń go za pomocą nowo odpowiedniej metody tablicowej.

// // Wyświetl zmodyfikowaną tablicę.
// console.log(numbers);

// // Zobacz cele zadania

// Dodaj elementy do tablicy
// Dodaj nowy element na początku tablicy tylko wtedy, gdy długość pierwszego elementu przekracza określoną liczbę znaków.

// Utwórz tablicę words z elementami ['samochód', 'drzewo'].
// const words = ["samochód", "drzewo"];

// // Sprawdź długość pierwszego elementu tej tablicy.
// console.log(words[0].length);

// // Jeśli pierwszy element ma więcej niż 5 znaków, dodaj róża na początku tablicy.
// words[0].length > 5
//   ? words.unshift("róża") && console.log(`${words[0]} ma wiecej znakow niz 5`)
//   : false;

// console.log(words);

// Naucz się usuwać elementy z tablicy, sprawdzając najpierw ich typ, a następnie zawartość, jeśli są ciągiem znaków.

// Usuń element z tablicy jeśli spełnia on określone kryteria.

// Utwórz zmienną elements zawierającą tablicę składającą się z pięciu elementów: ciągu znaków "Apple", liczby 1, obiektu z kluczem name i wartością "Banana", ciągu znaków "Orange" oraz ciągu znaków "Apricot".

// const elements = ["Apple", 1, { name: "Banana" }, "Orange", "Apricot"];

// console.log(elements);

// // Sprawdź, czy pierwszy element tablicy jest ciągiem znaków.

// // Jeśli tak, sprawdź, czy jego pierwsza litera to 'A'.
// if (typeof elements[0] === "string") {
//   console.log("Tak pierwszy obiekt to string");
//   if (elements[0][0] == "A") {
//     elements.shift(0);
//   }
// } else {
//   console.log("Pierwszy element to nie string");
// }

// console.log(elements);

// // Jeśli oba warunki są spełnione, usuń ten element z tablicy.

// // Wyświetl wynikową tablicę.

// // Aby wykonać zadanie, zastosuj odpowiednią logikę, ponieważ testowane będą różne tablice.

// Suma elementów tablicy
// Oblicz sumę elementów tablicy i dodawaj nowy element na podstawie tej sumy.

// Zdefiniuj zmienną numbers zawierającą tablicę z elementami 1, 2 ,"Ala", 3, “4”

// const numbers = [1, 2, "Ala", 3, "4"];

// let sum = 0;
// let newNumber = 10;

// // Oblicz sumę tylko typowo numerycznych elementów tablicy (czyli tych, które mają typ number). Przypisz wynik do zmiennej sum.
// for (let i = 0; i < numbers.length; i++) {
//   if (typeof numbers[i] === "number") {
//     sum += numbers[i];
//   }
// }

// console.log(sum);

// Jeśli sum < 10, wykonaj następujące operacje:
// if (sum < 10) {
//   // Jeśli ostatni element tablicy nie jest liczbą, zastąp go zmienną newNumber.
//   if (typeof numbers[numbers.length - 1] !== "number") {
//     numbers[numbers.length - 1] = newNumber;

//     // console.log(`${typeof numbers[numbers.length - 1]} to nie ${"number"}`);
//   } else {
//     // console.log(typeof numbers[numbers.length - 1]);
//     numbers.push(newNumber);
//   }
// }
// // console.log(sum);
// console.log(numbers);

// Jeśli ostatni element tablicy nie jest liczbą, zastąp go zmienną newNumber.

// Jeśli ostatni element tablicy jest liczbą, dodaj newNumber na końcu tablicy.

// Jeśli sum >= 10, nie modyfikuj tablicy.

// Wyświetl zmodyfikowaną tablicę.

// Uwaga: rozwiązanie musi być odporne na różne dane wejściowe – testy mogą podmieniać zawartość tablicy i wartość newNumber.

// function findMax(array) {
//   let maxValue = array[0];
//   for (let i = 0; i < array.length; i++) {
//     array[i] > maxValue ? (maxValue = array[i]) : false;
//   }

//   return maxValue;
// }

// console.log(findMax([-10, -20, -3, -7, -5]));

// function calculateAverage(arr) {
//   let sum = 0;
//   //start your code here
//   if (arr.length !== 0) {
//     // console.log("Tablica nie jest pusta");
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//   } else {
//     return 0;
//     console.log("Tablica jest pusta");
//   }

//   let result = sum / arr.length;

//   console.log(sum);
//   console.log(result);

//   //end your code here
//   return result;
// }

// calculateAverage([1, 6]);

// function isPalindrome(str) {
//   let tempArr1 = [];
//   let tempArr2 = [];

//   // start your code here
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     tempArr1.push(str[i]);
//   }

//   for (let i = str.length - 1; i >= 0; i--) {
//     // console.log(str[i]);
//     tempArr2.push(str[i]);
//   }

//   const stringFromArr1 = tempArr1.join("");
//   const stringFromArr2 = tempArr2.join("");

//   return stringFromArr1 === stringFromArr2;

//   // console.log(stringFromArr1);
//   // console.log(stringFromArr2);

//   //end your code here
//   // return result;
// }

// isPalindrome("kajak");

// function isPalindrome(str) {
//   const reversedStr = str.split("").reverse().join("");

//   return str === reversedStr;
// }

// Napisz funkcję w JavaScript, która odwraca kolejność słów w podanym zdaniu.

// Przykładowe wartości argumentów
// sentence: "To jest przykład zdania"
// Przykładowy wynik
// "zdania przykład jest To"

// function reverseSentence(sentence) {
//   //start your code here
//   const reversedSentence = sentence.split(" ").reverse().join(" ");
//   //end your code here

//   let result = reversedSentence;
//   return result;
// }

// const book = {
//   ["title"]: "Władca Pierścieni",
//   ["author"]: "J.R.R. Tolkien",
//   ["year"]: 1954,
// };

// console.log(book);

// const book = {};

// book["title"] = "Władca Pierścieni";
// book["author"] = "J.R.R. Tolkien";
// book["year"] = 1954;

// console.log(book);

// const book = {
//   title: "Mały Książę",
// };

// book.author = "Antoine de Saint-Exupéry";
// book["year"] = 1943;

// console.log(book);

// const book = {
//   title: "1984",
//   author: "George Orwell",
//   year: 1949,
//   publisher: "Secker & Warburg",
// };

// delete book["year"];

// console.log(book);

// const books = [
//   {
//     title: "Wtadca Pierscieni",
//     author: "J.R.R. Tolkien",
//     year: 1954,
//     inPrint: true,
//   },
//   { title: "Harry Potter", author: "J.K. Rowling", year: 1997, inPrint: true },
//   { title: "Kod Da Vinci", author: "Dan Brown", year: 2003, inPrint: true },
// ];

// for (let i = 0; i < books.length; i++) {
//   console.log(books[i]["year"]);

//   if (books[i]["year"] < 2000) {
//     books[i]["inPrint"] = false;
//   } else {
//     delete books[i]["year"];
//   }
// }

// console.log(books);

// function getElement(id) {
//   return document.getElementById(id);
// }

// getElement("example");

// function getElementsWithClass(className) {
//   return Array.from(document.getElementsByClassName(className));
// }

// getElementsWithClass("dupa");

// function findAllElementsBySelector(selector) {
//   return Array.from(document.querySelectorAll(selector));
// }

// console.log(findAllElementsBySelector(".dupa"));

// const addListItem = () => {
//   // Kod do dodania elementu
//   const ulList = document.getElementById("myList");

//   const liItem = document.createElement("li");

//   ulList.appendChild(liItem);
//   console.log(ulList);
// };

// addListItem();

// const removeLastItem = () => {
//   // Uzupełnij odpowiednim kodem
//   const ulList = document.getElementById("myList");
//   const lastItem = ulList.lastElementChild;

//   ulList.removeChild(lastItem);
// };

// removeLastItem();

// const addMultipleItems = () => {
//   // Uzupełnij odpowiednim kodem
//   const myList = document.getElementById("myList");

//   for (let i = 0; i < 3; i++) {
//     const newLi = document.createElement("li");

//     myList.appendChild(newLi);
//   }
// };

// addMultipleItems();

// const removeSecondItem = () => {
//   // Uzupełnij odpowiednim kodem

//   const myList = document.getElementById("myList").childNodes;

//   const arrayList = Array.from(myList);

//   const secondItem = arrayList[3];

//   secondItem.remove();
// };

// removeSecondItem();

// const list = document.getElementsByTagName("li");

// list.remove();

// const updateWelcomeMessage = () => {
//   let element = document.querySelector("#welcome-message");

//   element.innerText = "Witaj na naszej stronie!";
// };

// updateWelcomeMessage();

// const findFirstDescription = () => {
//   let description = document.querySelector(".description");

//   console.log(description);
// };

// findFirstDescription();

// const changeAllLi = () => {
//   let allLi = document.querySelectorAll(".item");

//   for (let i = 0; i < allLi.length; i++) {
//     allLi[i].textContent += " - sprawdź teraz!";
//     console.log(allLi[i].textContent);
//   }
// };

// changeAllLi();

// const checker = () => {
//   // let myList = document.querySelector("#tasks");

//   let myListItems = document.querySelectorAll("#tasks > li");

//   // console.log(myList);
//   // console.log(myListItems);

//   for (let i = 0; i < myListItems.length; i++) {
//     if (myListItems[i].textContent.match("niezakończone")) {
//       myListItems[i].textContent = "do zrobienia";
//       // console.log(myListItems[i].textContent);
//     }

//     // console.log(myListItems[i].textContent.match("zakończone"));
//   }
// };

// checker();

// const addText = () => {
//   let myItems = document.querySelectorAll(".comment");

//   console.log(myItems);

//   for (let i = 0; i < myItems.length; i++) {
//     myItems[i].textContent += " 30-04-2024";
//   }
// };

// addText();

// const adjustFontSize = () => {
//   // Zbieram elementy p.
//   const paragraphs = document.querySelectorAll("p");

//   //Przechodze przez kazdy znaleziony paragraf.
//   for (const paragraph of paragraphs) {
//     // Wywoluje dlugosc kazdego z tekstow
//     const textLength = paragraph.textContent.length;

//     //Ustal podstawową wielkość czcionki na 12 pikseli dla paragrafów zawierających do 50 znaków.
//     if (textLength <= 50) {
//       paragraph.style.fontSize = `13px`;
//     } else if (textLength > 50) {
//       const additionalPixels = Math.floor((textLength - 50) / 10);
//       fontSize = 13 + additionalPixels;
//       paragraph.style.fontSize = `${13 + additionalPixels}`;
//     }

//     // Zwiększaj wielkość czcionki proporcjonalnie do długości tekstu.
//     // Długość tekstu powyżej 50 znaków zwiększa rozmiar czcionki o 1 piksel na każde 10 znaków.

//     // 6. Zastosuj obliczoną wielkość czcionki, używając jednostki 'px'.
//   }
// };

// // Wywołaj funkcję, aby skrypt dostosował czcionki na stronie.
// adjustFontSize();

// const adjustFontSize = () => {
//   const paragraphs = document.querySelectorAll("p");

//   // console.log(paragraphs);

//   for (let i = 0; i < paragraphs.length; i++) {
//     let textLength = paragraphs[i].textContent.length;
//     let fontSize = 12;

//     if (textLength <= 50) {
//       paragraphs[i].style.fontSize = `${fontSize}px`;
//     } else {
//       const additionalPixels = Math.ceil((textLength - 50) / 10);
//       fontSize += additionalPixels;
//       paragraphs[i].style.fontSize = `${fontSize}px`;
//     }
//   }
// };
// adjustFontSize();

// // } else if (textLength >= 51 && textLength <= 60) {
// //   additionalPixels = 1;
// //   fontSize += additionalPixels;
// //   paragraphs[i].style.fontSize = `${fontSize}px`;
// // }

// const button = document.querySelector("#hoverButton");

// button.addEventListener("mouseover", () => {
//   alert("Najechaleś na przycisk!");
// });

const inputField = document.getElementById("inputField");

inputField.addEventListener("keydown", (event) => {
  // console.log(`Wcisnieto klawisz: ${event.key}`);
  if (event.key === "Enter") {
    alert("Wciśnięto klawisz Enter!");
  }
});
