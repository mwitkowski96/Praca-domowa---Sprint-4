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
const inputValue = document.getElementById("to-do-list-input");

function addNewTask() {
  //Stworz nowe elementy:
  const newTask = document.createElement("li");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  const taskDetails = inputValue.value;

  if (taskDetails != "") {
    // console.log(newTaskValue);

    //Przypisz nazwe taska, taka jaka user wpisal w pole input
    newTask.textContent = taskDetails;

    //Przypisz stworzonym elementom klasy CSS.
    newTask.classList.add("tasks-item");
    editButton.classList.add("btn", "tasks-item-btn", "tasks-item-btn--edit");
    deleteButton.classList.add(
      "btn",
      "tasks-item-btn",
      "tasks-item-btn--delete"
    );

    // Dodaje nowo stworzone li do struktury DOM
    tasksList.appendChild(newTask);

    //Pobieram nowo stworzone li, zeby dodac do niego buttony.
    const tasksItem = document.querySelector(".tasks-item");

    // Dodaje nowo stworzone buttony do li.
    tasksItem.appendChild(editButton);
    tasksItem.appendChild(deleteButton);

    //Przypisuje buttonom odpowiednie opisy.
    editButton.textContent = "Edytuj";
    deleteButton.textContent = "Usuń";

    //Czyszcze pole po dodaniu zadania.
    inputValue.value = "";

    return;

    // Jeśli pole tekstowe jest puste, aplikacja wyświetla alert: "Nazwa zadania nie może być pusta."
  } else {
    alert("Nazwa zadania nie może być pusta.");
    return;
  }
}

addTaskBtn.addEventListener("click", addNewTask);
