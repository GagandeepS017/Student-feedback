document.getElementById("personal").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const namePattern = /^[A-Za-z]+$/;
    const firstName = document.getElementById("firstName").value;
    const middleInitial = document.getElementById("middleInitial").value;
    const lastName = document.getElementById("lastName").value;
  
    if (!namePattern.test(firstName) || !namePattern.test(middleInitial) || !namePattern.test(lastName)) {
      alert("First, Middle and Last Name must contain only alphabets.");
      return;
    }
  
    const matriculation = document.getElementById("matriculation").value;

    if (!/^[0-9]+$/.test(matriculation)) {
      alert("Matriculation number must contain only digits.");
      return;
    }
  
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert("Form submitted successfully!");
  });
  