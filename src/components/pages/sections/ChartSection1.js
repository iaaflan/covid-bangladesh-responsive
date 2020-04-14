import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBRow } from 'mdbreact';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

class ChartSection1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			label: {},
		};
	}
	label = {};

	getChartData() {
		let total = 0;
		const myList = this.props.data;
		const arrObjectKeys = Object.keys(myList);
		let labels = [];
		let tempLabels = arrObjectKeys.map(function(key, index) {
			const item = myList[key];
			return item.name;
		});

		if (tempLabels) labels = tempLabels;
		//console.log('getChartData labels', labels);
		// return total;
		let chartData = [];
		let tempData = arrObjectKeys.map(function(key, index) {
			const item = myList[key];
			return item.count;
		});
		if (tempData) chartData = tempData;
		//console.log('getChartData chartData', chartData);
		const dataBar = {
			labels: labels,
			datasets: [
				{
					label: 'Infected',
					data: chartData,
					backgroundColor: 'rgba(245, 74, 85, 0.5)',
				},
			],
		};

		return dataBar;
	}

	render() {
		const dataBar = this.getChartData();

		const barChartOptions = {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				xAxes: [
					{
						barPercentage: 1,
						gridLines: {
							display: true,
							color: 'rgba(0, 0, 0, 0.01)',
						},
					},
				],
				yAxes: [
					{
						gridLines: {
							display: true,
							color: 'rgba(0, 0, 0, 0.1)',
						},
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		};

		return (
			<MDBRow className='mb-4'>
				<MDBCol md='12' className='mb-4'>
					<MDBCard className='mb-4'>
						<MDBCardBody>
							<Bar
								data={dataBar}
								height={350}
								options={barChartOptions}
							/>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		);
	}
}

export default ChartSection1;
