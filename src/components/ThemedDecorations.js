import React from 'react';

class ThemedDecorations extends React.Component {
	render() {
		const decorationWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
     });
		return (
			<div className="decorations">
        {decorationWithExtraProp}
      </div>
		);
	}
}

export default ThemedDecorations