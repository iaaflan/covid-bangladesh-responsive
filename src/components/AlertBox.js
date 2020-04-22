import React from 'react';

const AlertBox = (props) => {
	if (props.show) {
		return <div style={styles.container}>{props.children}</div>;
	}
	return null;
};

const styles = {
	container: {
		zIndex: 100,
		bottom: 0,
		left: 0,
		right: 0,
		position: 'fixed',
		height: 'auto',
		padding: '0.5% 2%',
		color: 'white',
		textAlign: 'center',
		backgroundColor: 'rgba(7, 47, 95, 0.9)',
		boxShadow: '2px 2px 3px gray',
		fontSize: '90%',
	},
};

export default AlertBox;
