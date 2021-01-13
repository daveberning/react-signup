import { Component } from 'react'
import FormFieldGroup from "./FormFieldGroup";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.fields
    }
  }

  handleOnChange(e, props) {
    this.props.fields[e.key].value = e.value
    props.onChangeCallback(this.props.fields)
  }

  render() {
    return (
      <form>
        {this.props.fields.map((field, i) => {
          return (
            <FormFieldGroup
              input={field}
              key={i}
              index={i}
              onChangeCallback={(e) => this.handleOnChange(e, this.props)}
            />
          )
        })}
        <button>Sign Up</button>
      </form>
    );
  }
}

export default Form;
