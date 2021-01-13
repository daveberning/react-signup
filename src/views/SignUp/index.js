import './SignUp.css';
import { Component } from 'react'
import Form from '../../components/Form'

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
      <div className="signup-form h-100 vertically-centered">
        <h1>Sign In to AAA</h1>
        <p>Please sign in to book your next vacation!</p>
        <div className="card">
          <Form
            fields={this.state.formFields}
            onChangeCallback={e => this.setState({ formFields: e })}
          />
        </div>
      </div>
    );
  }
}

export default SignUpView;
