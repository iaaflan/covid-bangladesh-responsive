import React, { Component } from 'react';
import axios from 'axios';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from 'mdbreact';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Doughnut } from 'react-chartjs-2';
import { divisions } from '../../../constants';

class ChartSection2 extends Component {
	renderDivisionRows() {
		return this.props.divisionalCount.map((item, index) => (
			<tr key={item.name}>
				<td>{index + 1}</td>
				<td>{item.name}</td>
				{item.count === item.prev_count ? (
					<td>{item.count}</td>
				) : (
					<td>
						{item.count}{' '}
						<span
							style={{
								fontSize: '0.9em',
								display: 'inline-block',
								marginLeft: '6px',
								fontWeight: 500,
								color: 'gray',
							}}
						>
							({item.count - item.prev_count > 0 && '+'}
							{item.count - item.prev_count})
						</span>
					</td>
				)}
			</tr>
		));
	}

	render() {
		const divisionInfo = this.props.divisionalCount;

		const dataDoughnut = {
			labels: divisionInfo.map((item) => item.name),
			datasets: [
				{
					// API CALL
					data: divisionInfo.map((item) => item.count),
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
								{this.renderDivisionRows()}
							</MDBTableBody>
						</MDBTable>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		);
	}
}

export default ChartSection2;
