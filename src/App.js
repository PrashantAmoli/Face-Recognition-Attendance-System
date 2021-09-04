import './App.css'
import React, { useState } from 'react'
import SelectCSSR from './components/SelectCSSR.js'
import FaceDetection from './components/FaceDetection.js'

function App() {
	const [CSSR, setCSSR] = useState({
		course: 'Course',
		semester: 'Semester',
		section: 'Section',
		rollNo: 'Roll No.',
	})
	// const [Attendees, setAttendees] = useState[{}]

	const sendCSSR = data => {
		setCSSR(() => {
			return data
		})
		console.log(CSSR, `App.js = State Updated`)
	}

	return (
		<div>
			<h1>FRAS</h1>
			<SelectCSSR sendCSS={sendCSSR} data={CSSR} />
			<span>{CSSR.course}--</span>
			<span>{CSSR.semester}--</span>
			<span>{CSSR.section}--</span>
			<span>{CSSR.rollNo}</span>
			<FaceDetection data={CSSR} />
		</div>
	)
}

export default App
