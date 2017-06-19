import React from 'react';

class Invitation extends React.Component {
	render() {
		return (
			<div className="invite">
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
		);
	}
}

export default Invitation