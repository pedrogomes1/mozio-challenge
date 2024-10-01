import { useQuery } from '@tanstack/react-query'
import { fetchNearbyLocations } from '../api'
import type { Location } from '../types/locations'

export function useNearbyLocations(location: Location) {
  const { data, error, isLoading } = useQuery<Location[], Error>({
    queryKey: ['nearbyLocations'],
    queryFn: () => fetchNearbyLocations(location),
    enabled: !!location.id,
  })

  return { data, error, isLoading }
}
