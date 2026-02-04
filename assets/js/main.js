const getUsers = async () => {
  const response = await axios.get("https://ums12.runasp.net/api/users");
  return response.data;
};

const displayUsers = async () => {
  try {
    const result = await getUsers();

    const users = result.users.map((users) => {
      return `
      <div class='col-md-4 fix'>
        <h2>${users.name}</h2>
        <img src="${users.imageUrl}"/>
        <button class="btn bg-danger" onclick="deleteUser(${users.id})">Delete</button>
        <a href='./details.html?userId=${users.id}' class='btn btn-outline-info'>Details</a>
        </div>
    `;
    });

    document.querySelector(".users .row").innerHTML = users.join("");
    
  } 
  catch (error) {
   
    document.querySelector(".err-message").classList.remove("d-none");
  }
  finally{
    document.querySelector(".spinner-grow").classList.add("d-none");
  }
};

const deleteUser = async (id) => {
  const response = await axios.delete(
    `https://ums12.runasp.net/api/users/${id}`,
  );
};

displayUsers();
