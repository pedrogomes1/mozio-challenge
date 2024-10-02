import { useQuery } from '@tanstack/react-query'
import { fetchNearbyLocations } from '../api/get-nearby-locations'
import type { Location } from '../types/locations'

export function useNearbyLocations(location: Location) {
  const { data, error, isLoading } = useQuery<Location[], Error>({
    queryKey: ['nearbyLocations', location],
    queryFn: () => fetchNearbyLocations(location),
    enabled: !!location.id,
  })

  return { nearbyLocations: data, error, isLoading }
}
