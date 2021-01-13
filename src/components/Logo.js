import {Component} from 'react'
import CompanyLogo from './../assets/aaa-logo.png'

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="logo">
        <img src={CompanyLogo} alt=""/>
      </div>
    );
  }
}

export default Logo;
