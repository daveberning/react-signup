import './Signup.css';
import { Component } from 'react'
import Form from './../../components/Form'

class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: [
        { tag: 'input', type: 'text', id: 'username', label: 'Username', value: '' },
        { tag: 'input', type: 'password', id: 'password', label: 'Password', value: '' },
        { tag: 'input', type: 'password', id: 'confirmPassword', label: 'Confirm Password', value: '' }
      ]
    }
  }

  isPasswordConfirmed() {
    const password = this.state.formFields.filter(f => f.id === 'password')[0].value
    const confirmPassword = this.state.formFields.filter(f => f.id === 'confirmPassword')[0].value
    return (password && confirmPassword) && (password === confirmPassword)
  }

  render() {
    return (
      <div className="signup">
        <Form
          fields={this.state.formFields}
          onChangeCallback={e => this.setState({ formFields: e })}
        />
      </div>
    );
  }
}

export default SignUpView;
