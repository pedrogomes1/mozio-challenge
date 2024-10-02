import type { Location } from '../types/locations'
import { findClosest } from '../utils/calculateDistance'
import { locations } from './fake-data'

const FETCH_DELAY_IN_MILLISECONDS = 2000

export const fetchNearbyLocations = (
  location: Location
): Promise<Location[]> => {
  console.log('fetchNearbyLocations args (location)', location)

  return new Promise(resolve => {
    setTimeout(() => {
      const nearbyLocations = findClosest(locations, location)
      resolve(nearbyLocations)
    }, FETCH_DELAY_IN_MILLISECONDS)
  })
}
