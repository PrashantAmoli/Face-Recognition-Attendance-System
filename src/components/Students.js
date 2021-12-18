import React, { useRef, useEffect } from 'react'
import './styles/FaceDetection.css'
import * as faceapi from 'face-api.js'

const FaceDetection = ({ data }) => {
	const videoRef = useRef()
	const canvasRef = useRef()

	useEffect(() => {
		const loadModels = async () => {
			const url = process.env.PUBLIC_URL + '/models'
			await faceapi.loadTinyFaceDetectorModel(url).then(() => console.log('T F D loaded'))
			await faceapi.loadFaceLandmarkTinyModel(url).then(() => console.log('F L M loaded'))
			await faceapi.loadFaceExpressionModel(url).then(() => console.log('F E M loaded'))
			await faceapi.loadFaceRecognitionModel(url).then(() => console.log('F R M loaded'))
		}
		loadModels()
		console.log('FaceApi=>', faceapi)
		getVideo()
	}, [])

	const dimensions = {
		width: 900,
		height: 600,
	}

	const getVideo = () => {
		navigator.mediaDevices
			.getUserMedia({ video: { width: 900, height: 600 } })
			.then(stream => {
				videoRef.current.srcObject = stream
			})
			.catch(err => {
				console.error('error:', err)
			})
	}

	const detect = () => {
		setInterval(async () => {
			const useTiny = true
			// .detectSingleFace(videoRef.current, new faceapi.getFaceDetectorOptions())
			const detection = await faceapi
				.detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
				.withFaceLandmarks(useTiny)
				.withFaceExpressions()
				.withFaceDescriptor()

			if (detection) {
				console.log('Descriptor', detection.descriptor)
				console.log('expressions', detection.expressions)
			}

			if (detection !== undefined) {
				faceapi.matchDimensions(canvasRef.current, dimensions)
				const resizedDetections = faceapi.resizeResults(detection, dimensions)
				const minProbability = 0.05
				canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current)
				canvasRef.current.getContext('2d').clearRect(0, 0, dimensions.width, dimensions.height)
				faceapi.draw.drawDetections(canvasRef.current, resizedDetections)
				faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
				faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections, minProbability)
			}
		}, 500)
	}

	const sendFace = () => {}

	return (
		<div className="detection">
			<video autoPlay muted ref={videoRef} onPlay={detect} />
			<canvas ref={canvasRef} />
		</div>
	)
}

export default FaceDetection
