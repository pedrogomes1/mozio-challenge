import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectLocation } from '../features/location'
import { useNearbyLocations } from '../hooks/useNearbyLocations'
import type { Location } from '../types/locations'
import { Spinner } from './ui/spinner'

export function NearbyLocations() {
  const location = useAppSelector(state => state.location)
  const dispatch = useAppDispatch()
  const { nearbyLocations, isLoading } = useNearbyLocations(location)

  if (isLoading) {
    return (
      <div className="flex justify-start mt-10 ml-3">
        <Spinner />
      </div>
    )
  }

  const handleSelectNearbyLocation = (option: Location) => {
    dispatch(selectLocation(option))
  }

  return (
    <div>
      <h1 className="mt-10 mb-5 text-3xl font-normal">Nearby Locations</h1>
      <ul className="flex gap-2 flex-wrap">
        {nearbyLocations?.map(location => (
          <li key={location.id} className="min-w-fit">
            <button
              type="button"
              className="bg-violet-700 p-3 rounded-lg text-white uppercase transition-opacity opacity-90 hover:opacity-100"
              onClick={() => handleSelectNearbyLocation(location)}
            >
              {location.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
