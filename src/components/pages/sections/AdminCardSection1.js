import React, { Component } from 'react';
import { MDBCard, MDBRow, MDBCol } from 'mdbreact';
import { divisions } from '../../../constants';

export default class AdminCardSection1 extends Component {
	renderDivisionCards() {
		return this.props.divisionalCount.map((item) => (
			<MDBCard key={item.name} className='cascading-admin-card'>
				<div className='admin-up'>
					<h2 style={styles.cardStyle}>{item.name}</h2>
					<div style={styles.divStyle}>
						{item.prev_count === item.count ? (
							<div style={styles.countText}>{item.count}</div>
						) : (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<div style={styles.countText}>{item.count}</div>
								<div
									style={{
										fontSize: '1.1em',
										paddingLeft: '5px',
										color: 'gray',
										fontWeight: 300,
									}}
								>
									{`(${item.count - item.prev_count > 0 &&
										'+'}${item.count - item.prev_count})`}
								</div>
							</div>
						)}
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

const styles = {
	divStyle: {
		textAlign: 'center',
		padding: '5%',
	},
	cardStyle: {
		background: '#98C9C5',
		color: '#fff',
		margin: '0px',
		padding: '3%',
		textAlign: 'center',
	},
	countText: {
		fontSize: '1.6em',
		fontWeight: 300,
	},
};
