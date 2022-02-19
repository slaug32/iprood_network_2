import React from "react";

type PropsType = {
  status: string;
  updateUserStatus: (status: string) => void;
};

class ProfileStatus extends React.Component<PropsType> {
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

  onStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: event.currentTarget.value,
    });
  };

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
