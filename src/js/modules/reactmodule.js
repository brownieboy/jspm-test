import React from '../libs/react-with-addons-min.js';

class MyReactModule extends React.component {
  constructor(props){
    super(props);
  }
  
  render() {
      console.log("this.props = " + JSON.stringify(this.props));
      return <span>Hi there</span>;
  }
  

}

export default MyReactModule;