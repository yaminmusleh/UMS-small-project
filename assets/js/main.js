const getUsers = async () => {
  const response = await axios.get("http://ums12.runasp.net/api/users");
  return response.data;
};

const displayUsers = async () => {
  const result = await getUsers();

  const users = result.users.map((users) => {
    return `
      <div class='col-md-4 fix'>
        <h2>${users.name}</h2>
        <img src="${users.imageUrl}"/>
        <button class="btn bg-danger" onclick="deleteUser(${users.id})">Delete</button>
      </div>
    `;
  });

  document.querySelector(".users .row").innerHTML = users.join("");
};

const deleteUser = async (id) => {
 const response  = await axios.delete(`http://ums12.runasp.net/api/users/${id}`);
};

displayUsers();
