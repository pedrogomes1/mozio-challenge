import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number): { debouncedValue: T } {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    if (typeof value === 'string' && value.trim().length === 0) {
      setDebouncedValue(value)
      return
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return { debouncedValue }
}
