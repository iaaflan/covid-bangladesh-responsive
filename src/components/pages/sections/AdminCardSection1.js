import React, { Component } from 'react';
import { MDBCard, MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios';

const cardStyle = {
	background: '#98C9C5',
	color: '#fff',
	margin: '0px',
	padding: '3%',
	textAlign: 'center',
};

const divStyle = {
	textAlign: 'center',
	padding: '5%',
};
export default class AdminCardSection1 extends Component {
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
		const dhakaDivision = [
			'Dhaka City',
			'Dhaka (District)',
			'Faridpur',
			'Gazipur',
			'Gopalganj',
			'Kishoreganj',
			'Madaripur',
			'Manikganj',
			'Munshigonj',
			'Narayanganj',
			'Narshingdi',
			'Rajbari',
			'Shariatpur',
			'Tangail',
		];

		const rangpurDivision = [
			'Dinajpur',
			'Gaibandha',
			'Kurigram',
			'Lalmonirhat',
			'Nilphamari',
			'Panchagarh',
			'Rangpur',
			'Thakurgaon',
		];

		const chittagongDivision = [
			'Chattogram',
			'Cox’s bazar',
			'Cumilla',
			'B. Baria',
			'Laksmipur',
			'Chandpur',
			'Bandarban',
			'Feni',
			'Khagrachhari',
			'Noakhali',
			'Rangamati',
		];

		const barishalDivision = [
			'Barguna',
			'Barishal',
			'Bhola',
			'Jhalokathi',
			'Potuakhali',
			'Kushtia',
		];

		const khulnaDivision = [
			'Bagerhat',
			'Chuadanga',
			'Jashore',
			'Jhenaidah',
			'Khulna',
			'Kushtia',
			'Magura',
			'Meherpur',
			'Narail',
			'Satkhira',
		];

		const sylhetDivision = [
			'Hobiganj',
			'Moulovi Bazar',
			'Sunamganj',
			'Sylhet',
		];

		const mymensinghDivision = [
			'Jamalpur',
			'Mymensingh',
			'Netrokona',
			'Sherpur',
		];

		const rajshahiDivision = [
			'Bogura',
			'Jaipurhat',
			'Naogaon',
			'Natore',
			'Chapainawabganj',
			'Pabna',
			'Rajshahi',
			'Sirajganj',
		];

		return (
			<MDBRow className='mb-4'>
				<MDBCol xl='3' md='10' className='mb-r'>
					<MDBCard className='cascading-admin-card'>
						<div className='admin-up'>
							<h2 style={cardStyle}>Dhaka</h2>
							<div style={divStyle}>
								<h4>
									{/* API CALL */}
									{this.getDataByArray(dhakaDivision)}
								</h4>
							</div>
						</div>
						<br></br>
					</MDBCard>

					<MDBCard className='cascading-admin-card'>
						<div className='admin-up'>
							<h2 style={cardStyle}>Rangpur</h2>
							<div>
								<h4 style={divStyle}>
									{/* API CALL */}
									{this.getDataByArray(rangpurDivision)}
								</h4>
							</div>
						</div>
						<br></br>
					</MDBCard>
				</MDBCol>

				<MDBCol xl='3' md='6' className='mb-r'>
					<MDBCard className='cascading-admin-card'>
						<div className='admin-up'>
							<h2 icon='chart-line' style={cardStyle}>
								Mymensingh
							</h2>
							<div>
								<h4 style={divStyle}>
									{this.getDataByArray(mymensinghDivision)}
								</h4>
							</div>
						</div>
						<br></br>
					</MDBCard>

					<MDBCard className='cascading-admin-card'>
						<div className='admin-up'>
							<h2 icon='chart-line' style={cardStyle}>
								Rajshahi
							</h2>
							<div>
								<h4 style={divStyle}>
									{this.getDataByArray(rajshahiDivision)}
								</h4>
							</div>
						</div>
						<br></br>
					</MDBCard>
				</MDBCol>
				<MDBCol xl='3' md='6' className='mb-r'>
					<MDBCard className='cascading-admin-card'>
						<div className='admin-up'>
							<h2 icon='chart-pie' style={cardStyle}>
								Sylhet
							</h2>
							<div>
								<h4 style={divStyle}>
									{this.getDataByArray(sylhetDivision)}
								</h4>
							</div>
						</div>
						<br></br>
					</MDBCard>

					<MDBCard className='cascading-admin-card'>
						<div className='admin-up'>
							<h2 icon='chart-pie' style={cardStyle}>
								Khulna
							</h2>
							<div>
								<h4 style={divStyle}>
									{this.getDataByArray(khulnaDivision)}
								</h4>
							</div>
						</div>
						<br></br>
					</MDBCard>
				</MDBCol>
				<MDBCol xl='3' md='6' className='mb-r'>
					<MDBCard className='cascading-admin-card'>
						<div className='admin-up'>
							<h2 icon='chart-pie' style={cardStyle}>
								Barishal
							</h2>
							<div>
								<h4 style={divStyle}>
									{this.getDataByArray(barishalDivision)}
								</h4>
							</div>
						</div>
						<br></br>
					</MDBCard>
					<MDBCard className='cascading-admin-card'>
						<div className='admin-up'>
							<h2 icon='chart-pie' style={cardStyle}>
								Chittagong
							</h2>
							<div>
								<h4 style={divStyle}>
									{this.getDataByArray(chittagongDivision)}
								</h4>
							</div>
						</div>
						<br></br>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		);
	}
}
