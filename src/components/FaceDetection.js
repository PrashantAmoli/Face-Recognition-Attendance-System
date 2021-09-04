import React, { useRef, useState, useEffect } from 'react'

const FaceDetection = ({ data }) => {
	const videoRef = useRef()
	// const [CSSR, setCSSR] = useState({})
	useEffect(() => {
		// setCSSR(state => {
		// 	return data
		// })
		console.log('FaceDetection=> useEffect ran')
		getVideo()
	}, [data])

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({ video: { width: 500 } })
			.then(stream => {
				let video = videoRef.current
				video.srcObject = stream
				video.play()
			})
			.catch(err => {
				console.error('error:', err)
			})
	}

	const stopVideo = () => {
		let video = videoRef.current
		let stream = video.srcObject
		let tracks = stream.getTracks()

		for (let i = 0; i < tracks.length; i++) {
			var track = tracks[i]
			track.stop()
		}

		video.srcObject = null
	}

	// let bool = false
	// const toggleVideo = () => {
	// 	bool === true ? false : true
	// 	if (bool === true) getVideo()
	// 	else stopVideo()
	// }

	return (
		<div>
			<video ref={videoRef} />
			{/* <button onClick={toggleVideo}>Toggle📷</button> */}
			{/* <canvas /> */}
		</div>
	)
}

export default FaceDetection
