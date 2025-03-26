function submitName() {
 const name = document.getElementById('userName').value;
 if (name.trim() !== "") {
   // Save the name in localStorage so it can be used on the next page
   localStorage.setItem('userName', name);
   // Redirect to the welcome page
   window.location.href = 'welcome.html';
 } else {
   alert("Please enter your name!");
 }
}
