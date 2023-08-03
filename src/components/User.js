import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "./AddUser";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditForm: false,
    };
  }

  user = this.props.user;

  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp
          className="delete-icon"
          onClick={() => this.props.handleDelete(this.user.id)}
        />
        <IoHammerSharp
          className="edit-icon"
          onClick={() => {
            this.setState({
              isEditForm: !this.state.isEditForm,
            });
          }}
        />
        <h3>
          {this.user.firstname} {this.user.lastname}
        </h3>
        <p className="user-text">{this.user.bio}</p>
        <b>{this.user.isHappy ? "Щаслив :)" : "Бувало краще :("}</b>

        {this.state.isEditForm && (
          <AddUser user={this.user} handleAdd={this.props.handleEdit} />
        )}
      </div>
    );
  }
}

export default User;