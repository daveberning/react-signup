import { Component } from 'react'
import FormFieldGroup from "./FormFieldGroup";
import './styles.css'

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

  handleOnSubmit(e, props) {
    e.preventDefault()
    props.onClickCallback()
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
        <button className="is-primary is-block" onClick={e => this.handleOnSubmit(e, this.props)}>Sign In</button>
      </form>
    );
  }
}

export default Form;
