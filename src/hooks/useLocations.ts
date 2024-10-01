import { useQuery } from '@tanstack/react-query'
import { fetchFakeData } from '../api'
import type { Location } from '../types/locations'

const STALE_TIME_IN_MILLISECONDS = 25000

export function useLocations(inputSearch: string) {
  const { data, error, isLoading } = useQuery<Location[], Error>({
    queryKey: ['fakeData', inputSearch],
    queryFn: () => fetchFakeData(inputSearch),
    enabled: !!inputSearch.length,
    staleTime: STALE_TIME_IN_MILLISECONDS,
  })

  return { locations: data, error, isLoading }
}
