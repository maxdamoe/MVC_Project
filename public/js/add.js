async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post_title"]').value;
    const post_url = document.querySelector('input[name="post_url"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        post_url,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      console.log(response);
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector(".new_post_form")
    .addEventListener("submit", newFormHandler);
  