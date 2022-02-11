import React from "react";

class ProfileStatus extends React.Component {
  state = {
    aditMode: false,
    status: this.props.status,
  };

  editStatus = () => {
    this.setState({ aditMode: true });
  };

  deEditStatus = () => {
    this.setState({ aditMode: false });
    this.props.updateUserStatus(this.state.status);
  };

  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value,
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate");
    // debugger;
    let a = this.state;
    let b = this.props;
  }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  render() {
    return (
      <>
        {!this.state.aditMode ? (
          <div>
            <span onClick={this.editStatus.bind(this)}>
              {this.state.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deEditStatus.bind(this)}
              value={this.state.status}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
