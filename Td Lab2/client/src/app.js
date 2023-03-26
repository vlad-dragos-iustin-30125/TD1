function run() {
  new Vue({
    el: "#app",
    data: {
      users: [],
      usersService: null,
      formUserCity: "",
      formUserName: "",
    },
    created: async function () {
      this.usersService = users();
      //this.usersService.post({name:"TESST", city:"Cluj"}).then((response) => {this.users=response.data.data});
      this.usersService.get().then((response) => {
        this.users = response.data;
        console.log(this.users);
      });
    },
    methods: {},
  });
}
const button = document.getElementById("btnDeleteUser");
button.addEventListener("click", handleDeleteUser);

async function handleDeleteUser(event) {
  this.usersService = users();
  await this.usersService.deleteUser();
}

async function handleAddUser() {
  this.usersService = users();
  const user = { name: this.formUserName, city: this.formUserCity };
  await this.usersService.post(user);
}

function handleChangeCity(event) {
  this.formUserCity = event.target.value;
}

document.addEventListener("DOMContentLoaded", () => {
  run();
});
