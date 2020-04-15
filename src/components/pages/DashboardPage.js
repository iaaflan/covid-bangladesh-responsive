import React, { Component } from 'react';
import axios from 'axios';
import AdminCardSection1 from './sections/AdminCardSection1';
import TableSection from './sections/TableSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';

export default class DashboardPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			label: {},
		};
	}
	componentDidMount() {
		axios
			.get('https://corona-bd.herokuapp.com/district')
			.then((response) => {
				//console.log(response.data.data);
				this.setState({ data: response.data.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	// Used in side "totalinfectedcomponent"
	countTotal() {
		let total = 0;
		const myList = this.state.data;
		Object.keys(myList).forEach(function(key, index) {
			total = total + myList[key].count;
		});
		return total;
	}
	render() {
		return (
			<React.Fragment>
				<br />
				<h1 style={{ textAlign: 'center' }}>
					<span>
						<b>Covid Bangladesh</b>
					</span>{' '}
					- Statistics
				</h1>
				<h2 style={{ textAlign: 'center' }}>
					Total Infected: <b>{this.countTotal()}</b>
				</h2>
				<br />
				<br />
				<AdminCardSection1 data={this.state.data} />
				<hr />
				<ChartSection1 data={this.state.data} />
				<TableSection data={this.state.data} />
				<ChartSection2 data={this.state.data} />
			</React.Fragment>
		);
	}
}
