import { useQuery } from '@tanstack/react-query'
import { fetchLocations } from '../api/get-locations'
import type { Location } from '../types/locations'

const STALE_TIME_IN_MILLISECONDS = 25000

export function useLocations(inputSearch: string) {
  const { data, error, isLoading } = useQuery<Location[], Error>({
    queryKey: ['locations', inputSearch],
    queryFn: () => fetchLocations(inputSearch),
    enabled: !!inputSearch.length,
    retry: false,
    staleTime: STALE_TIME_IN_MILLISECONDS,
  })

  return { locations: data, error, isLoading }
}
