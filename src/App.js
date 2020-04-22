import React, { Component } from 'react';
import './index.css';
import DashboardPage from './components/pages/DashboardPage';
import Footer from './components/Footer';
import AlertBox from './components/AlertBox';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAlertBox: true,
		};
		this.timer = null;
	}

	componentDidMount() {
		this.timer = setTimeout(this.hideAlert, 6000);
	}

	componentWillUnmount() {
		if (this.timer) clearTimeout(this.timer);
	}

	hideAlert = () => {
		this.setState({ showAlertBox: false });
	};

	render() {
		return (
			<div className='flexible-content'>
				<DashboardPage></DashboardPage>
				<AlertBox show={this.state.showAlertBox}>
					District-wise data is generally delayed. The count changes
					that are shown are since last 24 hours
				</AlertBox>
				{/* <iframe src="demo_iframe.htm" name="iframe_a"></iframe> */}
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
