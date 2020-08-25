import React, { Component, Fragment } from 'react';
import './HomeComponent.styles.css';
import { Link } from 'react-router-dom';
class HomeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let homePageStyles = {
			'background-color': '#000',
			'background-image':
				"linear-gradient(to right, #000 40%, transparent 58%),url('https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg')",
			'background-position': 'right top',
			height: '100vh',
		};

		return (
			<Fragment>
				{/* container start here */}
				<section className="mainBlock" style={homePageStyles}>
					<div className="container">
						<div className="left">
							<h1 className="">Welcome to Prime Video</h1>
							<p>
								Join Prime to watch the latest movies, TV shows and
								award-winning Amazon Originals
							</p>

							<Link to="/register">
								<button className="merch-button" style={{ width: '24%' }}>
									Start your 30-day free trial
								</button>
							</Link>
						</div>
					</div>
				</section>

				<section className="entertain-section">
					<div className="entertain-wrapper">
						<div className="entertain-wrapper-div">
							<div>
								<h1>Great Entertainment</h1>
								<p>
									With your Prime membership, you have access to exclusive
									Amazon Originals, blockbuster Bollywood movies, regional
									movies and more.
								</p>
							</div>
							<Link to="/login">
								<button className="merch-button">Get started</button>
							</Link>
						</div>
					</div>
				</section>

				<section className="membership-section">
					<div className="membership-wrapper">
						<div className="membership-wrapper-div">
							<div>
								<h1>One membership, many benefits</h1>
								<p>
									Your Prime membership now also includes ad-free music along
									with unlimited free, fast delivery on eligible items,
									exclusive access to deals & more.
								</p>
							</div>
							<Link to="/login">
								<button className="merch-button">Get started</button>
							</Link>
						</div>
					</div>
				</section>

				<section className="firestick-section">
					<div className="firestick-wrapper">
						<div className="firestick-wrapper-div">
							<div>
								<h1>Even better with Fire TV Stick</h1>
								<p>
									The biggest movies and TV shows are always better on a big
									screen. Simply plug in your Amazon Fire TV Stick and stream on
									any HDTV. Press the voice button on the remote and say the
									name of the title you want to watch to find it in seconds.
								</p>
							</div>
							<Link to="/login">
								<button className="merch-button">Get started</button>
							</Link>
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className="benifits-section">
					<div className="benifits-wrapper">
						<div className="benifits-wrapper-div">
							<div className="benifits-item">
								<div>
									<img src="PV_Benefits_Devices.png" alt="Benefits_Devices" />
								</div>
								<div>
									<h2>Watch anywhere</h2>
								</div>
								<div>
									<p>
										Enjoy from the web or with the Prime Video app on your
										phone, tablet, or select Smart TVs — on up to 3 devices at
										once.
									</p>
								</div>
							</div>
							<div className="benifits-item">
								<div>
									<img
										src="PV_Benefits_Download_IN.jpg"
										alt="Benefits_Download"
									/>
								</div>
								<div>
									<h2>Download and go</h2>
								</div>
								<div>
									<p>
										Watch offline on the Prime Video app when you download
										titles to your iPhone, iPad, Tablet, or Android device.
									</p>
								</div>
							</div>
							<div className="benifits-item">
								<div>
									<img src="300x300_Tile_1.png" alt="Tile_1" />
								</div>
								<div>
									<h2>Data Saver</h2>
								</div>
								<div>
									<p>
										Control data usage while downloading and watching videos on
										select phones or tablets.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Freindly section */}
				<section className="freindly-section">
					<div className="freindly-wrapper">
						<div className="freindly-wrapper-div">
							<div>
								<h1>Family Friendly</h1>
								<p>
									With easy to use Parental Controls and a dedicated kids page,
									enjoy secure, ad-free kids entertainment. Kids can enjoy
									popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota
									Bheem.
								</p>
							</div>
							<Link to="/login">
								<button className="merch-button">Get started</button>
							</Link>
						</div>
					</div>
				</section>

				<footer className="footer-section">
					<img src="amazon_video_light._SY32_FMpng_.png" alt="footerLogo" />
					<div>
						<ul style={{ textDecoration: 'none' }}>
							<li>
								<a href="/#" style={{ textDecoration: 'none' }}>
									Terms and Privacy Notice
								</a>
							</li>
							<li>
								<a href="/#" style={{ textDecoration: 'none' }}>
									Send us feedback
								</a>
							</li>
							<li>
								<a href="/#" style={{ textDecoration: 'none' }}>
									Help
								</a>
							</li>
							<li>
								<p>© 1996-2020, Amazon.com, Inc. or its affiliates</p>
							</li>
						</ul>
					</div>
				</footer>
			</Fragment>
		);
	}
}

export default HomeComponent;
