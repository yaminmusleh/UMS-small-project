const createUserform = document.forms["AddUserForm"];

createUserform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(createUserform);

  const response = await axios.post(
    "http://ums12.runasp.net/api/users",
    formData,
  );
});
