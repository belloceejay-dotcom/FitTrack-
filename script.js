
// ───────── SCREEN SWITCH ─────────
function switchAuthScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ───────── LOGIN ─────────
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Enter username and password!");
    return;
  }

  localStorage.setItem("username", user);

  // go to advanced dashboard
  window.location.href = "dashboard.html";
}

// ───────── SIGNUP ─────────
function signup() {
  let pass = document.getElementById("signup-password").value;
  let confirm = document.getElementById("signup-confirm").value;

  if (!pass || !confirm) {
    alert("Fill all fields!");
    return;
  }

  if (pass !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  alert("Account created!");
  showScreen("login-screen");
}

function showSignup() {
  switchAuthScreen("signup-screen");
}

function showLogin() {
  switchAuthScreen("login-screen");
}

// ───────── LOAD USER ON DASHBOARD ─────────
window.addEventListener("DOMContentLoaded", () => {
  let user = localStorage.getItem("username");

  let nameEl = document.getElementById("dash-name");
  if (user && nameEl) {
    nameEl.textContent = user;
  }
});

// ───────── SIMPLE TRACKERS (optional fallback) ─────────
function saveMeal() {
  let val = parseInt(document.getElementById("calorieInput").value) || 0;
  let current = parseInt(document.getElementById("calories").innerText) || 0;

  document.getElementById("calories").innerText = current + val;
}

function saveWater() {
  let val = parseFloat(document.getElementById("waterInput").value) || 0;
  let current = parseFloat(document.getElementById("water").innerText) || 0;

  document.getElementById("water").innerText = (current + val).toFixed(1);
}

function saveWorkout() {
  let w = document.getElementById("workoutInput").value;
  document.getElementById("workout").innerText = w;
}

function showScreen(screen, btn) {

  document.querySelectorAll('.app-screen').forEach(s => {
    s.classList.add('hidden');
  });

  document.getElementById('screen-' + screen).classList.remove('hidden');

  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
  });

  btn.classList.add('active');
}
function showTab(screen, btn) {

  document.querySelectorAll('.app-screen').forEach(s => {
    s.classList.add('hidden');
  });

  document.getElementById('screen-' + screen).classList.remove('hidden');

  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
  });

  btn.classList.add('active');
}
function toggleUI(mode) {
  document.querySelector('.bottom-nav').style.display =
    mode === 'onboarding' ? 'none' : 'flex';
}
