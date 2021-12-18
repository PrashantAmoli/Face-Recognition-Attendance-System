import React, { useState, useRef } from 'react'

const StudentData = () => {
	const inputRef = useRef()
	const buttonRef = useRef()
	const formRef = useRef()

	const [StudentID, setStudentID] = useState({ StudentID: 123456789 })

	const handleSubmit = e => {
		e.preventDefault()
		if (inputRef.current.value > 9999999 && inputRef.current.value < 10000000000) {
			setStudentID(prev => {
				if (prev.StudentID !== inputRef.current.value) return { StudentID: inputRef.current.value }
			})
		}
	}

	return (
		<form onClick={handleSubmit} ref={formRef}>
			<input type="number" name="studentID" ref={inputRef} />
			<h2>{JSON.stringify(StudentID)}</h2>
			<button ref={buttonRef}>RUN</button>
		</form>
	)
}

export default StudentData
