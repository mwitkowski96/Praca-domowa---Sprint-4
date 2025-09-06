// **Treść zadania:**

// Utworzyć interaktywną aplikację do zarządzania listą zadań, która umożliwia dodawanie, edytowanie i usuwanie zadań.

// **Wytyczne:**

// - Dodawanie Zadań:
//     - Użytkownik wpisuje nazwę zadania w pole tekstowe i dodaje je do listy, klikając przycisk "Dodaj zadanie".
//     - Jeśli pole tekstowe jest puste, aplikacja wyświetla alert: "Nazwa zadania nie może być pusta."
//     - Pole tekstowe jest czyszczone po każdym dodaniu zadania.
// - Edytowanie Zadań:
//     - Kliknięcie przycisku "Edytuj" obok zadania zamienia nazwę zadania na pole tekstowe, wraz z istniejącą nazwą zadania i umożliwia modyfikację.
//     - Przycisk "Edytuj" zmienia się na "Zatwierdź zmiany", który służy do zapisania zmienionej nazwy.
//     - Jeśli pole tekstowe jest puste, edycja nie jest zatwierdzona, a użytkownik widzi alert: "Nazwa zadania nie może być pusta."
// - **Usuwanie Zadań:**
//     - Kliknięcie przycisku "Usuń" obok zadania natychmiastowo usuwa zadanie z listy.
// - **Uwaga:**
//     - Do wykonania zadania, przydana może okazać się metoda prepend() lub insertBefore() - odszukaj informacji do czego służy i jeśli wystąpi taka konieczność, użyj jej.

// Załadowanie potrzebnych elementów
const tasksList = document.querySelector(".tasks-list");
const addTaskBtn = document.querySelector(".to-do-list-btn");

function addNewTask() {
  const newTask = document.createElement("li");
  const newTaskValue = document.getElementById("to-do-list-input").value;

  if (newTaskValue != "") {
    // console.log(newTaskValue);
    newTask.textContent = newTaskValue;
    newTask.classList.add("tasks-item");
    tasksList.appendChild(newTask);

    return;

    // Jeśli pole tekstowe jest puste, aplikacja wyświetla alert: "Nazwa zadania nie może być pusta."
  } else {
    alert("Nazwa zadania nie może być pusta.");
  }
}

addTaskBtn.addEventListener("click", addNewTask);
