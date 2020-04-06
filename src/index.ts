import { performance } from 'perf_hooks'

/**
 * Measure precise time in Node.js
 * @example
 * ```javascript
 * const end = timer()
 * // ... do something
 * const duration = end()
 * console.log(duration, 'ms elapsed')
 * ```
 */
export = () => {
  const start = performance.now()
  return () => {
    const end = performance.now()
    return end - start
  }
}
