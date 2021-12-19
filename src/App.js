import './App.css'
import React, { useState, useEffect } from 'react'
// import SelectCSSR from './components/SelectCSSR.js'
import StudentData from './components/StudentData.js'
import FaceDetection from './components/FaceDetection.js'
import RefFace from './FaceData/RefFace'

function App() {
	// const [Face, setFace] = useState({ ...RefFace })
	const [Face, setFace] = useState({})
	let [Available, setAvailable] = useState(false)

	useEffect(() => {
		// let data = localStorage.getItem('Prashant')
		// if (data) setAvailable(() => true)
		// setFace(() => {
		// 	return { ...data }
		// })
	}, [])

	return (
		<div>
			<h1>Face Recognition Attendance System</h1>
			<FaceDetection data={Face} available={Available} />
			{/* <StudentData /> */}
			{/* <SelectCSSR sendCSS={sendCSSR} data={CSSR} /> */}
		</div>
	)
}

export default App
