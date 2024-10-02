import type { Location } from '../types/locations'

const RADIUS_EARTH_IN_KM = 6371
const QUANTITY_NEARBY_LOCATIONS_TO_DISPLAY = 5

export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  return RADIUS_EARTH_IN_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export const findClosest = (
  locations: Location[],
  locationSelected: Location
) => {
  const { latitude, longitude } = locationSelected

  if (!latitude || !longitude) {
    throw new Error('Missing fields latitude and longitude')
  }

  const closestLocations = locations
    .filter(loc => loc.id !== locationSelected.id)
    .map(loc => ({
      ...loc,
      distance: calculateDistance(
        latitude,
        longitude,
        loc.latitude || 0,
        loc.longitude || 0
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, QUANTITY_NEARBY_LOCATIONS_TO_DISPLAY)

  return closestLocations
}
