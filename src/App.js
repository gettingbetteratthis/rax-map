import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import pic1 from './1.jpg';
import pic2 from './2.jpg';
import pic3 from './3.jpg';
import pic4 from './4.jpg';
import pic5 from './5.jpg';
import pic6 from './6.jpg';
import pic7 from './7.jpg';
import pic8 from './8.jpg';

const mapContainerStyle = {
	width: '100vw',
	height: '100vh',
};

const center = {
	lat: 59.334394,
	lng: 24.693515,
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

function App() {
	const [img1, setImg1] = useState(true);
	const [img2, setImg2] = useState(true);
	const [img3, setImg3] = useState(true);
	const [img4, setImg4] = useState(true);
	const [img5, setImg5] = useState(true);
	const [img6, setImg6] = useState(true);
	const [img7, setImg7] = useState(true);
	const [img8, setImg8] = useState(true);
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
				center={center}>
				<Marker position={ll1} visible={img1} />
				<Marker position={ll2} visible={img2} />
				<Marker position={ll3} visible={img3} />
				<Marker position={ll4} visible={img4} />
				<Marker position={ll5} visible={img5} />
				<Marker position={ll6} visible={img6} />
				<Marker position={ll7} visible={img7} />
				<Marker position={ll8} visible={img8} />
			</GoogleMap>
		</div>
	);
}

export default App;
