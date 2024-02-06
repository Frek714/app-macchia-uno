import React, {Component} from 'react';

class CustomNavbvarClass extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      linkActive: 1,
    }
    
    this.handleClickNavLink = this.handleClickNavLink.bind(this);
  }
  
  handleClickNavLink = (idNav) => {
    this.setState({
      ...this.state,
      linkActive: idNav
    })
  }
  
  render() {
    
    return (
      <div className="text-emerald-300 w-full flex justify-center">
        <ul className="flex">
          {
            this.props.links.map(link => <li
              className={`mr-5 cursor-pointer ${this.state.linkActive === link.id ? "text-amber-950" : "text-emerald-300"}`}
              onClick={() => this.handleClickNavLink(link.id)}
            >
              {link.link}
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default CustomNavbvarClass;