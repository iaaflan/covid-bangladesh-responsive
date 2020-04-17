import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';

const Footer = () => {
	return (
		<MDBFooter
			style={{ margin: '0 auto' }}
			color='cyan'
			className='text-center font-small darken-3'
		>
			<div className='pt-1'>
				<MDBBtn
					outline
					color='white'
					rel='noopener noreferrer'
					tag='a'
					href='https://github.com/Aflan-63/covid-bangladesh-responsive'
					target='_blank'
				>
					Source Code
				</MDBBtn>
				<hr className='my4' />
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginRight: '8%',
					}}
				>
					<div>
						<a
							href='https://www.linkedin.com/in/ifazahmed'
							rel='noopener noreferrer'
							target='_blank'
						>
							<MDBIcon fab icon='linkedin' className='mr-3' />
						</a>
						<a
							href='https://github.com/Aflan-63'
							rel='noopener noreferrer'
							target='_blank'
						>
							<MDBIcon fab icon='github' />
						</a>
					</div>
					<div style={{ fontSize: '1.1em' }} className='pb-3'>
						Aflan
					</div>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginRight: '20px',
					}}
				>
					<div>
						<a
							href='https://www.linkedin.com/in/ahmed-sadman'
							rel='noopener noreferrer'
							target='_blank'
						>
							<MDBIcon fab icon='linkedin' className='mr-3' />
						</a>
						<a
							href='https://github.com/ahmedsadman'
							rel='noopener noreferrer'
							target='_blank'
						>
							<MDBIcon fab icon='github' />
						</a>
					</div>
					<div style={{ fontSize: '1.1em' }} className='pb-3'>
						Samyo
					</div>
				</div>
			</div>

			<p className='footer-copyright py-3 text-center'>
				<span
					className='text-center'
					style={{
						color: 'rgba(255, 255, 255, 0.8)',
						margin: 0,
						padding: 0,
					}}
				>
					All data provided by the public API{' '}
					<a
						href='https://github.com/ahmedsadman/covid19-bd'
						target='_blank'
						rel='noopener noreferrer'
					>
						covid19-bd
					</a>
				</span>
			</p>
		</MDBFooter>
	);
};

export default Footer;
