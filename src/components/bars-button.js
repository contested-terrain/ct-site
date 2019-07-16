import React, { useState } from "react"
import cn from "classnames"

import styles from "./bars-button.module.css"

const HEIGHT_TO_WIDTH_RATIO = 1 / 14
const MARGIN_TO_WIDTH_RATIO = 1 / 4

const Bar = ({ id, width, height, color }) => {
  return (
    <div
      className={cn(styles.bar, styles[id])}
      style={{
        width,
        height,
        backgroundColor: color,
      }}
    />
  )
}

const BarsButton = ({ fill, size, clickHandler }) => {
  const [isToggled, setIsToggled] = useState(false)

  const padding = Math.round(0.083 * size)
  const barWidth = size - padding * 2
  const barHeight = Math.round(size * HEIGHT_TO_WIDTH_RATIO)

  return (
    <div
      className={cn(styles.base, { [styles.toggled]: isToggled })}
      style={{ width: size, height: size, padding: `${padding}px` }}
      onClick={e => {
        if (clickHandler) {
          clickHandler(e)
        }

        setIsToggled(!isToggled)
      }}
    >
      {["top", "middle", "bottom"].map(v => (
        <Bar
          key={v}
          id={v}
          width={barWidth}
          height={barHeight}
          color="#000000"
        />
      ))}
    </div>
  )
}

export default BarsButton
