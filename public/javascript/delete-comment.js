async function deleteFormHandler(event) {
  event.preventDefault();
  // get  the corresponding  comment id
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/comments/${id}`, {
    method: "DELETE", // use DELETE  route  method
    body: JSON.stringify({
      comment_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/"); // show the dashboard with comment deleted
  } else {
    alert(response.statusText);
  }
}
// Call the eventlistener function when delete button is clicked
document
  .querySelector(".delete-comment-btn")
  .addEventListener("click", deleteFormHandler);
