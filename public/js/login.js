async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector("#login_email").value.trim();
    const password = document.querySelector("#login_pass").value.trim();
  
    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json", 
        'Host': 'immense-scrubland-07716.herokuapp.com',
        // 'Accept': 'application/json'
      },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard/");
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#signup_username").value.trim();
    const email = document.querySelector("#signup_email").value.trim();
    const password = document.querySelector("#signup_password").value.trim();
  
    if (username && email && password) {
      const response = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json", 
                    'Host': 'immense-scrubland-07716.herokuapp.com',
                    // 'Accept': 'application/json'
      },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard/");
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document
    .querySelector(".login_form")
    .addEventListener("submit", loginFormHandler);
  
  document
    .querySelector(".signup_form")
    .addEventListener("submit", signupFormHandler);
  