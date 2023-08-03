import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.defaulfPropsUser = {
      firstname: "",
      lastname: "",
      bio: "",
      age: "",
      isHappy: false,
    };
    this.state = this.props.user ? this.props.user : this.defaulfPropsUser;
    this.handleChange = this.handleChange.bind(this);
    this.hadleChecked = this.hadleChecked.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  userAdd = {};

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hadleChecked(e) {
    this.setState({ [e.target.name]: e.target.checked });
  }

  handleClick() {
    this.myForm.reset();
    this.userAdd = this.state;
    if (this.props.user) {
      this.userAdd.id = this.props.user.id;
    }
    this.props.handleAdd(this.userAdd);
    this.setState({ ...this.defaulfPropsUser });
  }

  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          type="text"
          placeholder="Ім'я"
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Прізвище"
          name="lastname"
          value={this.state.lastname}
          onChange={this.handleChange}
        />
        <textarea
          placeholder="Біографія"
          name="bio"
          value={this.state.bio}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Вік"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <label htmlFor="isHappy">Щасливий?</label>
        <input
          type="checkbox"
          id="isHappy"
          name="isHappy"
          checked={this.state.isHappy}
          onChange={this.hadleChecked}
        />
        <button type="button" onClick={this.handleClick}>
          {this.props.user ? "Змінити" : "Додати"}
        </button>
      </form>
    );
  }
}

export default AddUser;