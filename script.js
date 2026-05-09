function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if(user && pass) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    alert("Welcome " + user + "!");
  } else {
    alert("Enter username and password!");
  }
}

function showWorkout() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("workout-screen").classList.remove("hidden");
}

function showMeal() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("meal-screen").classList.remove("hidden");
}

function showWater() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("water-screen").classList.remove("hidden");
}

function backToDashboard() {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById("dashboard").classList.remove("hidden");
}

function saveWorkout() {
  let workout = document.getElementById("workoutInput").value;
  document.getElementById("workout").innerText = workout;
  backToDashboard();
}

function saveMeal() {
  let calories = parseInt(document.getElementById("calorieInput").value);
  let current = parseInt(document.getElementById("calories").innerText);
  document.getElementById("calories").innerText = current + calories;
  backToDashboard();
}

function saveWater() {
  let water = parseFloat(document.getElementById("waterInput").value);
  let current = parseFloat(document.getElementById("water").innerText);
  document.getElementById("water").innerText = (current + water).toFixed(1);
  backToDashboard();
}
function showSignup() {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("signup-screen").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signup-screen").classList.add("hidden");
  document.getElementById("login-screen").classList.remove("hidden");
}

function signup() {
  let fullname = document.getElementById("fullname").value;
  let username = document.getElementById("signup-username").value;
  let email = document.getElementById("signup-email").value;
  let mobile = document.getElementById("signup-mobile").value;
  let pass = document.getElementById("signup-password").value;
  let confirm = document.getElementById("signup-confirm").value;

  if(fullname && username && email && mobile && pass && confirm) {
    if(pass === confirm) {
      alert("Account created for " + fullname + "!");
      showLogin(); // balik sa login screen
    } else {
      alert("Passwords do not match!");
    }
  } else {
    alert("Please fill out all fields!");
  }
}
