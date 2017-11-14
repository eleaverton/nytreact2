import React from "react";

class SaveButton extends Component {
	
}

handleSaveClick = event => {
  		event.preventDefault();
  		console.log(props);
  		API.saveArticle()

  	}

export const FormBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-success">
    {props.children}
  </button>;
