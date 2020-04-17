import React, { Component } from 'react';
import {
	MDBCard,
	MDBCardBody,
	MDBTable,
	MDBTableBody,
	MDBTableHead,
	MDBRow,
	MDBCol,
} from 'mdbreact';
import axios from 'axios';
import { divisions } from '../../../constants';
const centerText = {
	textAlign: 'center',
};

export default class TableSection extends Component {
	getDivisionalData(cityArr) {
		// cityArr -> cities contained in a division
		// find the data related to the cities in the given cityArr
		// returns list in format [{name: 'Dhaka', count: 20}...]
		const data = this.props.districtData;
		if (data.length === 0) return [];

		const infectedCityList = data.filter(
			(item) => cityArr.findIndex((i) => i === item.name) !== -1
		);

		// add the remaining cities with a 0 count, for padding purpose
		const zeroCountList = [];
		cityArr.forEach((cityName) => {
			if (infectedCityList.findIndex((i) => i.name === cityName) === -1) {
				const obj = {};
				obj['name'] = cityName;
				obj['count'] = 0;
				obj['id'] = cityName;
				zeroCountList.push(obj);
			}
		});
		return [...infectedCityList, ...zeroCountList];
	}

	renderTableRows(division) {
		// division -> cities to render
		// renders the rows with the cities inside the division
		const cityList = this.getDivisionalData(division);
		if (cityList.length === 0) return null;

		return cityList.map((item, index) => (
			<tr key={item.id}>
				<td>{index + 1}</td>
				<td>{item.name}</td>
				<td>{item.count}</td>
			</tr>
		));
	}

	render() {
		return (
			<div>
				<MDBRow className='mb-4'>
					<MDBCol md='4'>
						<MDBCard>
							<MDBCardBody>
								<h4 style={centerText}>Dhaka Division</h4>
								<MDBTable hover>
									<MDBTableHead color='blue-grey lighten-4'>
										<tr>
											<th>#</th>
											<th>District Name</th>
											<th>Covid-19 Positive</th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{this.renderTableRows(divisions.Dhaka)}
									</MDBTableBody>
								</MDBTable>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol md='4' className='mb-4'>
						<MDBCard>
							<MDBCardBody>
								<h4 style={centerText}>Chittagong Division</h4>
								<MDBTable hover>
									<MDBTableHead color='blue lighten-5'>
										<tr>
											<th>#</th>
											<th>District Name</th>
											<th>Covid-19 Positive</th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{this.renderTableRows(
											divisions.Chittagong
										)}
									</MDBTableBody>
								</MDBTable>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol md='4' className='mb-4'>
						<MDBCard>
							<MDBCardBody>
								<h4 style={centerText}>Khulna Division</h4>
								<MDBTable hover>
									<MDBTableHead color='blue lighten-5'>
										<tr>
											<th>#</th>
											<th>District Name</th>
											<th>Covid-19 Positive</th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{this.renderTableRows(divisions.Khulna)}
									</MDBTableBody>
								</MDBTable>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>

				<MDBRow className='mb-4'>
					<MDBCol md='6'>
						<MDBCard>
							<MDBCardBody>
								<h4 style={centerText}>Rajshahi Division</h4>
								<MDBTable hover>
									<MDBTableHead color='blue-grey lighten-4'>
										<tr>
											<th>#</th>
											<th>District Name</th>
											<th>Covid-19 Positive</th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{this.renderTableRows(
											divisions.Rajshahi
										)}
									</MDBTableBody>
								</MDBTable>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol md='6' className='mb-4'>
						<MDBCard>
							<MDBCardBody>
								<h4 style={centerText}>Rangpur Division</h4>
								<MDBTable hover>
									<MDBTableHead color='blue lighten-5'>
										<tr>
											<th>#</th>
											<th>District Name</th>
											<th>Covid-19 Positive</th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{this.renderTableRows(
											divisions.Rangpur
										)}
									</MDBTableBody>
								</MDBTable>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
				<MDBRow className='mb-4'>
					<MDBCol md='4' className='mb-4'>
						<MDBCard>
							<MDBCardBody>
								<h4 style={centerText}>Barishal Division</h4>
								<MDBTable hover>
									<MDBTableHead color='blue lighten-5'>
										<tr>
											<th>#</th>
											<th>District Name</th>
											<th>Covid-19 Positive</th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{this.renderTableRows(
											divisions.Barishal
										)}
									</MDBTableBody>
								</MDBTable>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol md='4'>
						<MDBCard>
							<MDBCardBody>
								<h4 style={centerText}>Sylhet Division</h4>
								<MDBTable hover>
									<MDBTableHead color='blue-grey lighten-4'>
										<tr>
											<th>#</th>
											<th>District Name</th>
											<th>Covid-19 Positive</th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{this.renderTableRows(divisions.Sylhet)}
									</MDBTableBody>
								</MDBTable>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol md='4' className='mb-4'>
						<MDBCard>
							<MDBCardBody>
								<h4 style={centerText}>Mymensingh Division</h4>
								<MDBTable hover>
									<MDBTableHead color='blue lighten-5'>
										<tr>
											<th>#</th>
											<th>District Name</th>
											<th>Covid-19 Positive</th>
										</tr>
									</MDBTableHead>
									<MDBTableBody>
										{this.renderTableRows(
											divisions.Mymensingh
										)}
									</MDBTableBody>
								</MDBTable>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</div>
		);
	}
}
