import React, { Component } from 'react';
import { MDBCard, MDBRow, MDBCol } from 'mdbreact';
import { divisions } from '../../../constants';

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
	renderDivisionCards() {
		return this.props.divisionalCount.map((item) => (
			<MDBCard key={item.name} className='cascading-admin-card'>
				<div className='admin-up'>
					<h2 style={cardStyle}>{item.name}</h2>
					<div style={divStyle}>
						<h4>{item.count}</h4>
					</div>
				</div>
				<br></br>
			</MDBCard>
		));
	}

	render() {
		const renderedCardList = this.renderDivisionCards();
		return (
			<MDBRow className='mb-4'>
				<MDBCol xl='3' md='10' className='mb-r'>
					{renderedCardList.slice(0, 2)}
				</MDBCol>

				<MDBCol xl='3' md='6' className='mb-r'>
					{renderedCardList.slice(2, 4)}
				</MDBCol>
				<MDBCol xl='3' md='6' className='mb-r'>
					{renderedCardList.slice(4, 6)}
				</MDBCol>
				<MDBCol xl='3' md='6' className='mb-r'>
					{renderedCardList.slice(6)}
				</MDBCol>
			</MDBRow>
		);
	}
}
