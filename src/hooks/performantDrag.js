import { useContext, useEffect, useState } from 'react'
import { DndContext } from 'react-dnd'

/*
React dnd doesnt seem to limit calling translate on every minor mouse move which seems to lag
when using a customer drag layer. This hook really just limits how often we check for the new position
by using setInterval function. This makes the drag experience better

TODO: look into why custom drag layer is lagging more, maybe ask react-dnd github for thier solution but for now this is fine.
*/
const usePerformantDrag = (enabled, fps = 60) => {
  const { dragDropManager } = useContext(DndContext)

  const monitor = dragDropManager.getMonitor()
  const [dragOffsetDiff, setDragOffsetDiff] = useState(monitor.getSourceClientOffset())
  const offsetChangeListener = () => setDragOffsetDiff(monitor.getSourceClientOffset())

  const [intervalId, setIntervalId] = useState()
  const cleanup = () => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  }
  useEffect(() => {
    if (enabled) {
      setIntervalId(
        setInterval(() => {
          offsetChangeListener()
        }, 1000 / fps)
      )
    } else {
      cleanup()
    }
    return cleanup
  }, [enabled])
  return dragOffsetDiff
}

export default usePerformantDrag
