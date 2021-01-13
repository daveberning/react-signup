import './SignUp.css';
import { Component } from 'react'
import Form from '../../components/Form'
import Notification from "../../components/Notification";

class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormDirty: false,
      hadSubmitAttempt: false,
      formFields: [
        { tag: 'input', type: 'text', id: 'username', label: 'Username', value: '' },
        { tag: 'input', type: 'password', id: 'password', label: 'Password', value: '' },
        { tag: 'input', type: 'password', id: 'confirmPassword', label: 'Confirm Password', value: '' }
      ]
    }
  }

  onChange(e) {
    this.setState({ formFields: e })
    this.setState({ isFormDirty: true })
  }

  handleOnSubmit(e) {
    this.setState({ hadSubmitAttempt: true })
    this.isFormValidated()
  }

  isPasswordConfirmed() {
    const password = this.state.formFields.filter(f => f.id === 'password')[0].value
    const confirmPassword = this.state.formFields.filter(f => f.id === 'confirmPassword')[0].value
    return (password && confirmPassword) && (password === confirmPassword)
  }

  isFormValidated() {
    return this.state.formFields.filter(f => f.value).length > 0
  }

  render() {
    return (
      <div className="signup-form h-100 vertically-centered">
        <h1>Sign In to AAA</h1>
        <p>Please sign in to book your next vacation!</p>
        <div className="card">
          <Form
            fields={this.state.formFields}
            onChangeCallback={e => this.onChange(e)}
            onClickCallback={() => this.handleOnSubmit()}
          />
          <Notification
            passwordConfirmed={this.isPasswordConfirmed()}
            isFormDirty={this.state.isFormDirty}
            isFormValidated={this.isFormValidated()}
            hadSubmitAttempt={this.state.hadSubmitAttempt}
          />
        </div>
      </div>
    );
  }
}

export default SignUpView;
