import type { Location } from '../types/locations'
import { locations } from './fake-data'

const FETCH_DELAY_IN_MILLISECONDS = 2000

export const fetchLocations = (inputValue: string): Promise<Location[]> => {
  const input = inputValue.toLowerCase()

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === 'fail') {
        return reject({ message: 'Failed to find locations' })
      }

      const matchingLocations = locations.filter(item =>
        item.name.toLowerCase().includes(input)
      )

      resolve(matchingLocations)
    }, FETCH_DELAY_IN_MILLISECONDS)
  })
}
