import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: 0
    };
  }

  handleClick = () => {
		if (this.state.formVisibleOnPage === 4){
			this.setState({formVisibleOnPage: 0});
		} else {
			this.setState(prevState => ({
				formVisibleOnPage: prevState.formVisibleOnPage + 1
			}));
		}
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage === 1) {
			currentlyVisibleState = <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
			buttonText = "Yeth";
		}	else if (this.state.formVisibleOnPage === 2){
			currentlyVisibleState = <p>Are you a little tiny baby?</p>
			buttonText = "Goo goo ga ga";
		} else if (this.state.formVisibleOnPage === 3){
			currentlyVisibleState = <p>What's your favorite food?</p>
			buttonText = "Spaghetti";
		} else if (this.state.formVisibleOnPage === 4){
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
		} else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;