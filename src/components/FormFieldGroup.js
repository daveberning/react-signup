import { Component } from 'react'

class FormFieldGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.input.value
    }
  }

  handleOnChange(e, props) {
    this.setState({value: e})
    props.onChangeCallback({ value: e, key: props.index })
  }

  render() {
    // Creating dynamic tag to future proof form for additional tags like, select, textarea, etc
    const CustomFormElement = `${this.props.input.tag}`

    return (
      <div>
        <label>{this.props.input.label}</label><br />
        <CustomFormElement
          id={this.props.input.id}
          type={this.props.input.type}
          value={this.props.input.value}
          onChange={(e) => this.handleOnChange(e.target.value, this.props)}
        />
      </div>
    );
  }
}

export default FormFieldGroup;
