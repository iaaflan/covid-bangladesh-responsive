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
			totalPositive: null,
			totalDeath: null,
			totalRecovered: null,
			positive24: null,
			death24: null,
			recovered24: null,
			lastUpdate: '',
		};
	}

	componentDidMount() {
		this.fetchData();
		this.fetchCount();
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
				lastUpdate: response.data.updated_on,
			});
		} catch (e) {
			console.log(e);
		}
	}

	async fetchCount() {
		try {
			const response = await axios.get(
				'https://corona-bd.herokuapp.com/stats'
			);
			const { data } = response;
			this.setState({
				totalDeath: data.death.total,
				totalPositive: data.positive.total,
				totalRecovered: data.recovered.total,
				positive24: data.positive.last24,
				death24: data.death.last24,
				recovered24: data.recovered.last24,
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
			// const count = data.reduce((acc, item) => {
			// 	if (
			// 		divisionList[division].findIndex((i) => i === item.name) !==
			// 		-1
			// 	) {
			// 		return acc + item.count;
			// 	}
			// 	return acc;
			// }, 0);
			let count = 0;
			let prev_count = 0;

			data.forEach((item) => {
				if (
					divisionList[division].findIndex((i) => i === item.name) !==
					-1
				) {
					count += item.count;
					prev_count += item.prev_count;
				}
			});

			list.push({ name: division, count, prev_count });
		});

		// sort the list
		list = list.sort((a, b) => b.count - a.count);
		return list;
	}

	render() {
		const increaseStyle = { color: 'gray', fontSize: '0.8em' };
		return (
			<React.Fragment>
				<br />
				<h1 style={{ textAlign: 'center' }}>
					<span>
						<b>Covid Bangladesh</b>
					</span>{' '}
					- Statistics
				</h1>
				<h4 style={{ textAlign: 'center' }}>
					Positive:{' '}
					<b>
						{this.state.totalPositive}{' '}
						<span style={increaseStyle}>
							(+{this.state.positive24})
						</span>
					</b>
					&nbsp; Death:{' '}
					<b>
						{this.state.totalDeath}{' '}
						<span style={increaseStyle}>
							(+{this.state.death24})
						</span>
					</b>
				</h4>
				<h4 style={{ textAlign: 'center' }}>
					Recovered:{' '}
					<b>
						{this.state.totalRecovered}{' '}
						<span style={increaseStyle}>
							(+{this.state.recovered24})
						</span>
					</b>
				</h4>
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
