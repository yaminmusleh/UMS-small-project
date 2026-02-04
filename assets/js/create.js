const createUserform = document.forms["AddUserForm"];
createUserform.image.addEventListener("change", () => {
  const file = createUserform.image.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    document.querySelector(".preview").setAttribute("src", e.target.result);
  };
});

createUserform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(createUserform);

  const response = await axios.post(
    "https://ums12.runasp.net/api/users",
    formData,
  );
});
