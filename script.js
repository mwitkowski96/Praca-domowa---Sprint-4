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

// Osobna funkcja do tworzenia elementow HTML i przypisywania im klasy.
function createElement(tagName, value) {
  if (tagName === "") {
    console.log("Nie podano tagu albo klasy!");
  } else {
    element = document.createElement(tagName);
    element.textContent = value;
  }

  return element;
}

// Osobna funkcja do handlowania taskami.
function tasksHandler() {
  // Sprawdzenie, czy pole nie jest puste
  if (inputValue.value === "") {
    alert("Nazwa zadania nie może być pusta.");
    return; // Zakończ funkcję, jeśli pole jest puste
  }

  //Tworze nowe elementy:

  // const newTask = createElement("li", inputValue.value);
  const newTask = createElement("li", "");
  const newTaskDetails = createElement("span", inputValue.value);
  const newEditButton = createElement("button", "Edytuj");
  const newDeleteButton = createElement("button", "Usuń");

  //Przypisuje im odpowiednie wartosci
  newTask.classList.add("tasks-item");
  newEditButton.classList.add("btn", "tasks-item-btn", "tasks-item-btn--edit");
  newDeleteButton.classList.add(
    "btn",
    "tasks-item-btn",
    "tasks-item-btn--delete"
  );

  // Dodaje nowo stworzone elementy do struktury DOM
  tasksList.append(newTask);
  newTask.append(newTaskDetails, newEditButton, newDeleteButton);

  //Czyszcze pole po dodaniu zadania.
  inputValue.value = "";

  // - Edytowanie Zadań:
  //     - Kliknięcie przycisku "Edytuj" obok zadania zamienia nazwę zadania na pole tekstowe, wraz z istniejącą nazwą zadania i umożliwia modyfikację.

  newEditButton.addEventListener("click", () => {
    //Sprawdzam stan przycisku

    const isEditing = newEditButton.textContent === "Zatwierdź zmiany";

    if (!isEditing) {
      // Tryb "Edytuj"
      const currentValue = newTaskDetails.textContent;

      // Tworzymy nowe pole input
      const editInput = createElement("input");
      editInput.value = currentValue;
      editInput.classList.add("edit-input"); // Dodaje klase, zeby go potem wyszukac.

      // Zamieniam span na input, zeby moc w nim pisac
      newTask.replaceChild(editInput, newTaskDetails);

      // Zmieniam tekst przycisku, ktory pomoze mi zdefiniowac "tryb" pracy.
      newEditButton.textContent = "Zatwierdź zmiany";
    } else {
      // Tryb "Zatwierdź zmiany"
      // Znajdujemy istniejące pole input
      const editInput = newTask.querySelector(".edit-input");
      const newText = editInput.value;

      if (newText.trim() === "") {
        //Trymuje, zeby wywalic biale znaki,
        alert("Nazwa zadania nie może być pusta.");
        return;
      }

      newTaskDetails.textContent = newText;

      // Zamieniam input z powrotem na span
      newTask.replaceChild(newTaskDetails, editInput);

      // Zmieniam tekst przycisku przy tym jednoczesnie jego tryb pracy.
      newEditButton.textContent = "Edytuj";
    }
  });

  // Funkcjonalnosc usuwania

  newDeleteButton.addEventListener("click", () => {
    newTask.remove();
  });
}

addTaskBtn.addEventListener("click", () => {
  tasksHandler();
});
