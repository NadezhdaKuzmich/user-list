import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstname: "Марійка",
          lastname: "Шевчук",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          age: 40,
          isHappy: true,
        },
        {
          id: 2,
          firstname: "Дмитро",
          lastname: "Коваль",
          bio: "Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.",
          age: 22,
          isHappy: false,
        },
      ],
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
  }

  editUser(user) {
    let allUsers = this.state.users;
    allUsers[user.id - 1] = user;
    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] });
    });
    console.log(allUsers);
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }

  render() {
    return (
      <div>
        <Header title="Список користувачів" />
        <main>
          <Users
            users={this.state.users}
            handleDelete={this.deleteUser}
            handleEdit={this.editUser}
          />
        </main>
        <aside>
          <AddUser handleAdd={this.addUser} />
        </aside>
      </div>
    );
  }
}

export default App;