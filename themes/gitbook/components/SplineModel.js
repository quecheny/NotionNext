import { useEffect, useRef } from 'react'
import { Application } from '@splinetool/runtime'

const SplineModel = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const app = new Application(canvas)
    app.load('https://prod.spline.design/ZbFP9YN8QVMyEenj/scene.splinecode')
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="canvas3d"
      style={{ width: '100%', height: '100%' }}
    ></canvas>
  )
}

export default SplineModel
