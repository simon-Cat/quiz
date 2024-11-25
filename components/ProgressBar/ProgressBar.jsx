import Style from "@/components/ProgressBar/ProgressBar.module.css"
import { useEffect, useState, useRef } from "react"

const ProgressBar = ({ max, currentProgress }) => {
  const progressRef = useRef(null)
  const [currentLabelPositon, setCurrentLabelPositon] = useState(0)

  useEffect(() => {
    resizeHandler()
  }, [currentProgress])

  useEffect(() => {
    window.addEventListener("resize", () => resizeHandler())
    resizeHandler()
    return window.removeEventListener("resize", resizeHandler)
  })

  const resizeHandler = () => {
    const progressWidth = progressRef.current?.offsetWidth
    const newLabelPosition = (progressWidth / max) * currentProgress

    setCurrentLabelPositon(newLabelPosition)
  }

  return (
    <div className={Style.progressBarContainer}>
      <div className={Style.progressBarContainer__labels}>
        <label
          id="labelMinimum"
          htmlFor="progress"
          className={Style.progressBarContainer__label}
        >
          0
        </label>
        <label
          id="labelMaximum"
          htmlFor="progress"
          className={Style.progressBarContainer__label}
        >
          {max}
        </label>
      </div>
      <progress
        ref={progressRef}
        id="progress"
        className={Style.progressBarContainer__progress}
        max={max}
        value={currentProgress}
      ></progress>
      <label
        id="labelCurrent"
        htmlFor="progress"
        style={{ transform: `translateX(${currentLabelPositon}px)` }}
        className={Style.progressBarContainer__label}
      >
        {currentProgress === 0 || currentProgress >= max
          ? null
          : currentProgress}
      </label>
    </div>
  )
}

export default ProgressBar
