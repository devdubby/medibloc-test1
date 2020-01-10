import React, { Component } from "react";
import TemplatePresenter from "./TemplatePresenter";

class TemplateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  onRegister = (inputUser) => {
    const { users } = this.state;
    this.setState({ 
      users: [...users, inputUser]
    });
  };

  onDelete = async id => {
    const { users } = this.state;

    if (!window.confirm("정말 삭제 하시겠습니까?")) return;

    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
    this.setState({ users });
  };

  onModify = async (id, address) => {
    const { users } = this.state;

    const index = users.findIndex(user => user.id === id);
    users[index].address = address;
    this.setState({ users });
  }

  render() {
    const { users } = this.state;

    return (
      <TemplatePresenter 
        users={users}
        onRegister={this.onRegister}
        onDelete={this.onDelete}
        onModify={this.onModify}
      />
    );
  }
}

export default TemplateContainer;