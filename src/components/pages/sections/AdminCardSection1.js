import React, { Component } from 'react';
import { MDBCard, MDBRow, MDBCol } from 'mdbreact';
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
