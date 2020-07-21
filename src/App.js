import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { geolocated } from 'react-geolocated';
import pic1 from './1.jpg';
import pic2 from './2.jpg';
import pic3 from './3.jpg';
import pic4 from './4.jpg';
import pic5 from './5.jpg';
import pic6 from './6.jpg';
import pic7 from './7.jpg';
import pic8 from './8.jpg';
import './index.css';

const mapContainerStyle = {
	width: '100%',
	height: '100%',
};

const options = {
	disableDefaultUI: true,
	zoomControl: true,
};

const ll1 = {
	lat: 59.335221,
	lng: 24.696972,
};
const ll2 = {
	lat: 59.334936,
	lng: 24.696339,
};

const ll3 = {
	lat: 59.332802,
	lng: 24.694472,
};

const ll4 = {
	lat: 59.332693,
	lng: 24.69268,
};

const ll5 = {
	lat: 59.33359,
	lng: 24.69106,
};

const ll6 = {
	lat: 59.335467,
	lng: 24.690824,
};

const ll7 = {
	lat: 59.336167,
	lng: 24.691468,
};

const ll8 = {
	lat: 59.33574,
	lng: 24.692552,
};

function App(props) {
	const [img1, setImg1] = useState(false);
	const [img2, setImg2] = useState(false);
	const [img3, setImg3] = useState(false);
	const [img4, setImg4] = useState(false);
	const [img5, setImg5] = useState(false);
	const [img6, setImg6] = useState(false);
	const [img7, setImg7] = useState(false);
	const [img8, setImg8] = useState(false);

	const handleCloseOverlay = (ev) => {
		ev.preventDefault();
		setImg1(false);
		setImg2(false);
		setImg3(false);
		setImg4(false);
		setImg5(false);
		setImg6(false);
		setImg7(false);
		setImg8(false);
	};

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: 'AIzaSyBuqJwALXawnLryoAwguukKYN4GmWQmGCA',
	});

	if (loadError) return 'Error, sorry Rax';
	if (!isLoaded) return 'Still Loading';
	return (
		<div className='App'>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={17}
				center={{
					// lat: props?.coords?.latitude || 59.334394,
					// lng: props?.coords?.longitude || 24.693515,
					lat: 59.335235,
					lng: 24.696992,
				}}
				options={options}>
				<Marker
					position={{
						// lat: props?.coords?.latitude || 59.334394,
						// lng: props?.coords?.longitude || 24.693515,
						lat: 59.335335,
						lng: 24.696892,
					}}
					options={{
						icon: {
							url: require('./sai.svg'),
							scaledSize: {
								width: 40,
								height: 40,
							},
						},
					}}
				/>

				<Marker position={ll1} onClick={() => setImg1(true)} />
				<Marker position={ll2} onClick={() => setImg2(true)} />
				<Marker position={ll3} onClick={() => setImg3(true)} />
				<Marker position={ll4} onClick={() => setImg4(true)} />
				<Marker position={ll5} onClick={() => setImg5(true)} />
				<Marker position={ll6} onClick={() => setImg6(true)} />
				<Marker position={ll7} onClick={() => setImg7(true)} />
				<Marker position={ll8} onClick={() => setImg8(true)} />
				{img1 && (
					<div className='img-container'>
						<button className='close' onClick={handleCloseOverlay}>
							X
						</button>

						<img src={pic1} alt='pic1' />
					</div>
				)}
				{img2 && (
					<div className='img-container'>
						<button className='close' onClick={handleCloseOverlay}>
							X
						</button>

						<img src={pic2} alt='pic1' />
					</div>
				)}
				{img3 && (
					<div className='img-container'>
						<button className='close' onClick={handleCloseOverlay}>
							X
						</button>

						<img src={pic3} alt='pic1' />
					</div>
				)}
				{img4 && (
					<div className='img-container'>
						<button className='close' onClick={handleCloseOverlay}>
							X
						</button>

						<img src={pic4} alt='pic1' />
					</div>
				)}
				{img5 && (
					<div className='img-container'>
						<button className='close' onClick={handleCloseOverlay}>
							X
						</button>

						<img src={pic5} alt='pic1' />
					</div>
				)}
				{img6 && (
					<div className='img-container'>
						<button className='close' onClick={handleCloseOverlay}>
							X
						</button>

						<img src={pic6} alt='pic1' />
					</div>
				)}
				{img7 && (
					<div className='img-container'>
						<button className='close' onClick={handleCloseOverlay}>
							X
						</button>

						<img src={pic7} alt='pic1' />
					</div>
				)}
				{img8 && (
					<div className='img-container'>
						<button className='close' onClick={handleCloseOverlay}>
							X
						</button>

						<img src={pic8} alt='pic1' />
					</div>
				)}
			</GoogleMap>
		</div>
	);
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: true,
		maximumAge: 0,
		timeout: Infinity,
	},
	watchPosition: true,
	userDecisionTimeout: 10000,
})(App);
