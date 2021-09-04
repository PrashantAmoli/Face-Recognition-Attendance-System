import './styles/SelectCSSR.css'
import React, { useState } from 'react'

export default function SelectCSSR({ sendCSSR, data }) {
	const [CSSR, setCSSR] = useState({
		course: 'Course',
		semester: 'Semester',
		section: 'Section',
		rollNo: 'Roll No.',
	})
	// To print Roll Numbers
	const nums = Array(80)
	for (let i = 0; i < 80; i++) {
		nums[i] = i + 1
	}

	const num = nums.map((num, i) => {
		return (
			<option key={i + 1} value={i + 1}>
				{i + 1}
			</option>
		)
	})

	// Handle Changes
	const handleChanges = e => {
		setCSSR(prev => {
			if (e.target.name === 'course') {
				return {
					course: e.target.value,
					semester: prev.semester,
					section: prev.section,
					rollNo: prev.rollNo,
				}
			} else if (e.target.name === 'semester') {
				return {
					course: prev.course,
					semester: e.target.value,
					section: prev.section,
					rollNo: prev.rollNo,
				}
			} else if (e.target.name === 'section') {
				return {
					course: prev.course,
					semester: prev.semester,
					section: e.target.value,
					rollNo: prev.rollNo,
				}
			} else if (e.target.name === 'rollNo') {
				return {
					course: prev.course,
					semester: prev.semester,
					section: prev.section,
					rollNo: e.target.value,
				}
			}
		})
	}

	const validateChanges = () => {
		if (
			data.course === CSSR.course &&
			data.semester === CSSR.semester &&
			data.section === CSSR.section &&
			data.rollNo === CSSR.rollNo
		)
			return false
		if (
			CSSR.course === 'Course' ||
			CSSR.semester === 'Semester' ||
			CSSR.section === 'Section' ||
			CSSR.rollNo === 'RollNo'
		) {
			console.log(` validateChanges = false `)
			return false
		}
		console.log('validateChanges=> true')
		return true
	}

	const handleSubmit = e => {
		e.preventDefault()
		// Send data to the parent:App.js
		if (validateChanges() === true) sendCSSR(CSSR)
		else console.log('Invalid Submission! Please try again.')
	}

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div className="box">
					<select defaultValue={CSSR.course} name="course" onChange={handleChanges}>
						<option defaultValue="Course" disabled hidden>
							Course
						</option>
						<option value="BTechCSE">B-Tech CSE</option>
						<option value="BTechME">B-Tech ME</option>
						<option value="BTechCE">B-Tech CE</option>
						<option value="BBA">BBA</option>
						<option value="BCA">BCA</option>
						<option value="BCom">BCom</option>
					</select>

					<select defaultValue={CSSR.semester} name="semester" onChange={handleChanges}>
						<option defaultValue="Semester" disabled hidden>
							Semester
						</option>
						<option value="1">Semester 1</option>
						<option value="2">Semester 2</option>
						<option value="3">Semester 3</option>
						<option value="4">Semester 4</option>
						<option value="5">Semester 5</option>
						<option value="6">Semester 6</option>
						<option value="7">Semester 7</option>
						<option value="8">Semester 8</option>
					</select>

					<select defaultValue={CSSR.section} name="section" onChange={handleChanges}>
						<option defaultValue="Section" disabled hidden>
							Section
						</option>
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="C">C</option>
						<option value="D">D</option>
						<option value="E">E</option>
						<option value="F">F</option>
						<option value="G">G</option>
						<option value="H">H</option>
						<option value="I">I</option>
						<option value="J">J</option>
						<option value="K">K</option>
					</select>

					<select defaultValue={CSSR.rollNo} name="rollNo" onChange={handleChanges}>
						<option defaultValue="Roll No." disabled hidden>
							Roll No.
						</option>
						{num}
					</select>
				</div>
				<button type="submit">SUBMIT</button>
			</form>
		</section>
	)
}
