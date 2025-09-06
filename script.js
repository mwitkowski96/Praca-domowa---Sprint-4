const addTask = document.querySelector(".to-do-list-btn");

console.log(addTask);

addTask.addEventListener("click", () => {
  const taskDetails = document.getElementById("to-do-list-input").value;
  if (taskDetails === "") {
    alert("Pole nie moze byc puste");
  } else {
    console.log(taskDetails);
  }
});

// addTask.addEventListener("click", (event) => {
//   // Wartość jest odczytywana w momencie, gdy coś się zmienia
//   const taskDetails = event.target.value;
//   console.log(taskDetails);
// });
