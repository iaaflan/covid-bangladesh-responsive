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
					<MDBIcon fab icon='github' className='mr-3' />
				</a>
				<p
					className='text-center'
					style={{ color: 'rgba(255, 255, 255, 0.8)' }}
				>
					All data provided by{' '}
					<a
						href='https://github.com/ahmedsadman/covid19-bd'
						target='_blank'
						rel='noopener noreferrer'
					>
						covid19-bd
					</a>
					, a public API created by&nbsp;
					<a
						href='https://github.com/ahmedsadman'
						target='_blank'
						rel='noopener noreferrer'
					>
						Ahmed Sadman
					</a>
				</p>
			</div>
			<p className='footer-copyright mb-0 py-3 text-center'>
				Created using{' '}
				<a
					rel='noopener noreferrer'
					target='_blank'
					href='https://www.MDBootstrap.com'
				>
					{' '}
					MDBootstrap.com{' '}
				</a>
			</p>
		</MDBFooter>
	);
};

export default Footer;
