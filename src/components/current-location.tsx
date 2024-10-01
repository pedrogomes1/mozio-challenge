import { useAppSelector } from '../app/hooks'
import { NearbyLocations } from './nearby-locations'

export function CurrentLocation() {
  const location = useAppSelector(state => state.location)

  return (
    <section>
      <p>{location.name}</p>
      <p>{location.description}</p>
      <ul>
        <li className="font-bold">
          <span>Country:</span> <span>{location.country}</span>
        </li>

        <li className="font-bold">
          <span>Climate:</span> <span>{location.climate}</span>
        </li>

        <li className="font-bold">
          <span>Currency:</span> <span>{location.currency}</span>
        </li>
      </ul>
      <h1 className="mt-10 mb-10">Nearby Locations</h1>

      <NearbyLocations />
    </section>
  )
}
