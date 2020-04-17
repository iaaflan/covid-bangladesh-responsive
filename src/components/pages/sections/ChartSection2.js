import React, { Component } from 'react';
import axios from 'axios';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from 'mdbreact';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Doughnut } from 'react-chartjs-2';
import {
	dhakaDivision,
	rajshahiDivision,
	rangpurDivision,
	chittagongDivision,
	khulnaDivision,
	barishalDivision,
	mymensinghDivision,
	sylhetDivision,
} from '../../../constants';

class ChartSection2 extends Component {
	getDataByArray(arrCity) {
		let total = 0;
		const myList = this.props.data;
		let arrData = [];
		const filterdIndex = Object.keys(myList).filter(function(key, index) {
			const item = myList[key];
			return arrCity.find((city) => city === item.name);
		});
		const filterdData = filterdIndex.forEach(function(key) {
			arrData.push(myList[key]);
		});
		arrData.forEach(function(element) {
			total = total + element.count;
			//console.log("getDataByArray ", element.name)
		});
		return total;
	}
	render() {
		const dataDoughnut = {
			labels: [
				'Dhaka',
				'Mymensingh',
				'Sylhet',
				'Rangpur',
				'Rajshahi',
				'Chittagong',
				'Barishal',
				'Khulna',
			],
			datasets: [
				{
					// API CALL
					data: [
						this.getDataByArray(dhakaDivision),
						this.getDataByArray(mymensinghDivision),
						this.getDataByArray(sylhetDivision),
						this.getDataByArray(rangpurDivision),
						this.getDataByArray(rajshahiDivision),
						this.getDataByArray(chittagongDivision),
						this.getDataByArray(barishalDivision),
						this.getDataByArray(khulnaDivision),
					],
					backgroundColor: [
						'#F7464A',
						'#46BFBD',
						'#FDB45C',
						'#949FB1',
						'#4D5360',
						'#1121C1',
						'#7721C1',
						'#BB7A5E',
					],
					hoverBackgroundColor: [
						'#FF5A5E',
						'#5AD3D1',
						'#FFC870',
						'#A8B3C5',
						'#616774',
						'#4421C1',
						'#9921C1',
						'#FFAA5E',
					],
				},
			],
		};

		return (
			<MDBRow className='mb-4'>
				<MDBCol md='12' lg='4' className='mb-4'>
					<MDBCard className='mb-4'>
						<MDBCardHeader>Divisional Chart</MDBCardHeader>
						<MDBCardBody>
							<Doughnut
								data={dataDoughnut}
								height={300}
								options={{ responsive: true }}
							/>
							<br />
							<br />
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
				<MDBCol md='12' lg='8' className='mb-4'>
					<MDBCard className='mb-4'>
						<MDBCardHeader>Division At a Glance</MDBCardHeader>
						<MDBTable hover>
							<MDBTableHead color='blue lighten-5'>
								<tr>
									<th>#</th>
									<th>Division Name</th>
									<th>Covid-19 Positive</th>
								</tr>
							</MDBTableHead>
							<MDBTableBody>
								<tr>
									<td>1</td>
									<td>Dhaka Division</td>
									<td>
										{this.getDataByArray(dhakaDivision)}
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Rangpur Division</td>
									<td>
										{this.getDataByArray(rangpurDivision)}
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Rajshahi Division</td>
									<td>
										{this.getDataByArray(rajshahiDivision)}
									</td>
								</tr>
								<tr>
									<td>4</td>
									<td>Mymensingh Division</td>
									<td>
										{this.getDataByArray(
											mymensinghDivision
										)}
									</td>
								</tr>
								<tr>
									<td>5</td>
									<td>Sylhet Division</td>
									<td>
										{this.getDataByArray(sylhetDivision)}
									</td>
								</tr>
								<tr>
									<td>6</td>
									<td>Khulna Division</td>
									<td>
										{this.getDataByArray(khulnaDivision)}
									</td>
								</tr>
								<tr>
									<td>7</td>
									<td>Barishal Division</td>
									<td>
										{this.getDataByArray(barishalDivision)}
									</td>
								</tr>
								<tr>
									<td>8</td>
									<td>Chittagong Division</td>
									<td>
										{this.getDataByArray(
											chittagongDivision
										)}
									</td>
								</tr>
							</MDBTableBody>
						</MDBTable>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		);
	}
}

export default ChartSection2;
