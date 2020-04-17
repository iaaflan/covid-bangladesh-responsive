import React, { Component } from 'react';
import axios from 'axios';
import AdminCardSection1 from './sections/AdminCardSection1';
import TableSection from './sections/TableSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
import { divisions } from '../../constants';

export default class DashboardPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			districtData: [],
			divisionalCount: [],
			label: {},
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	async fetchData() {
		try {
			const response = await axios.get(
				'https://corona-bd.herokuapp.com/district'
			);
			const divisionalCount = this.getDivisionalCount(
				divisions,
				response.data.data
			);
			this.setState({
				districtData: response.data.data,
				divisionalCount,
			});
		} catch (e) {
			console.log(e);
		}
	}

	getDivisionalCount(divisionList, data) {
		// get total counts for given division
		// if (data.length === 0 || Object.keys(divisionList).length === 0)
		// 	return [];

		const divisionLabels = Object.keys(divisionList);
		let list = [];

		divisionLabels.forEach((division) => {
			const count = data.reduce((acc, item) => {
				if (
					divisionList[division].findIndex((i) => i === item.name) !==
					-1
				) {
					return acc + item.count;
				}
				return acc;
			}, 0);

			list.push({ name: division, count });
		});

		// sort the list
		list = list.sort((a, b) => b.count - a.count);
		return list;
	}

	// Used in side "totalinfectedcomponent"
	countTotal() {
		let total = 0;
		const myList = this.state.districtData;
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
				<AdminCardSection1
					districtData={this.state.districtData}
					divisionalCount={this.state.divisionalCount}
				/>
				<hr />
				<ChartSection1 districtData={this.state.districtData} />
				<TableSection districtData={this.state.districtData} />
				<ChartSection2
					districtData={this.state.districtData}
					divisionalCount={this.state.divisionalCount}
				/>
			</React.Fragment>
		);
	}
}
