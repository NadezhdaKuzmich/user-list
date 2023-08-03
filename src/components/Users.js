import React from "react";
import User from "./User";

class Users extends React.Component {
  render() {
    if (this.props.users.length > 0)
      return (
        <div>
          {this.props.users.map((user) => (
            <User key={user.id} user={user} handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit} />
          ))}
        </div>
      );
    else
      return (
        <div className="user">
          <h3>Немає користувачів</h3>
        </div>
      );
  }
}

export default Users;