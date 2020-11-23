import Axios from "axios";
import React, { Component, useContext } from "react";

import { withRouter } from "next/router";

import Layout from "../../components/Layout/Layout.component.js";
import UserContext from "../../components/Context/UserContext.component.js";

class Test extends Component {
  //   static async getInitialProps(ctx) {

  constructor(props) {
    super(props);

    this.loadUsers = this.loadUsers.bind(this);

    this.onChangeAddUserName = this.onChangeAddUserName.bind(this);
    this.onClickAddUser = this.onClickAddUser.bind(this);
    this.onChangeEditUserName = this.onChangeEditUserName.bind(this);
    this.onClickEditUser = this.onClickEditUser.bind(this);

    this.onClickDeleteUser = this.onClickDeleteUser.bind(this);

    this.state = {
      users: [],
      usersLoaded: false,
      addUserName: "",
      editUserName: "",
    };
  }
  loadUsers() {
    Axios.get("/api/getAllUsers").then((response) => {
      console.log(response.data.users);
      this.setState({ users: response.data.users, usersLoaded: true });
    });
  }

  onChangeAddUserName(e) {
    this.setState({ addUserName: e.target.value });
  }

  onClickAddUser() {
    Axios.post("/api/addUser", { name: this.state.addUserName }).then(
      (response) => {
        console.log(response.data.users);
        //   this.setState({ data: res });
      }
    );
  }

  onChangeEditUserName(e) {
    this.setState({ editUserName: e.target.value });
  }

  onClickEditUser() {
    Axios.put("/api/editUser", {
      id: "282537018565591553",
      name: this.state.editUserName,
    }).then((response) => {
      console.log(response.data.users);
      //   this.setState({ data: res });
    });
  }

  onClickDeleteUser() {
    Axios.post("/api/deleteUser", {
      id: "282537018565591553",
    }).then((response) => {
      console.log(response.data.users);
      //   this.setState({ data: res });
    });
  }

  render() {
    // console.log(UserContext);
    // const { user } = useContext(UserContext);
    // console.log(user);
    return (
      <Layout>
        <div>
          <h1>This is Test</h1>
          {/* <h3>{user}</h3> */}
          <div>
            <h2>Add User</h2>
            <input
              type="text"
              value={this.state.addUserName}
              placeholder="Name"
              onChange={this.onChangeAddUserName}
            />
            <input
              type="button"
              value="Add User"
              onClick={this.onClickAddUser}
            />
          </div>

          <div>
            <h2>Edit User</h2>
            <input
              type="text"
              value={this.state.editUserName}
              placeholder="Name"
              onChange={this.onChangeEditUserName}
            />
            <input
              type="button"
              value="Edit User"
              onClick={this.onClickEditUser}
            />
          </div>

          <div>
            <h2>Delete User</h2>
            <input
              type="button"
              value="Delete User"
              onClick={this.onClickDeleteUser}
            />
          </div>

          <div>
            <h2>List of Users</h2>
            {this.state.usersLoaded ? (
              <ul>
                {this.state.users.map((user) => {
                  <li>{user.name}</li>;
                })}
              </ul>
            ) : (
              this.loadUsers()
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Test);
