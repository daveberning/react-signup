import {Component} from 'react'

class Notification extends Component {
  render() {
    if (this.props.hadSubmitAttempt && !this.props.isFormValidated) {
      return (
        <div className="notification show danger">
          <p>All fields are required</p>
        </div>
      )
    } else {
      return (
        <div
          className={`notification ${this.props.passwordConfirmed ? 'success' : 'danger'} ${this.props.isFormDirty ? 'show' : ''}`}>
          <p>Passwords {`${this.props.passwordConfirmed ? 'match' : 'do not match'}.`}</p>
        </div>
      )
    }
  }
}

export default Notification;