import { useAppSelector } from '../app/hooks'
import { NearbyLocations } from './nearby-locations'

export function CurrentLocation() {
  const location = useAppSelector(state => state.location)

  const currentLocationInformationList = [
    { title: 'Country', value: location.country },
    { title: 'Climate', value: location.climate },
    { title: 'Currency', value: location.currency },
  ]

  return (
    <section className="mt-10">
      <p className="text-3xl font-normal">{location.name}</p>
      <p className="my-4 text-xl">{location.description}</p>
      <ul className="flex flex-col gap-3">
        {currentLocationInformationList.map(location => (
          <li key={location.value} className="text-lg">
            <span className="font-extrabold">{location.title}:</span>{' '}
            <span>{location.value}</span>
          </li>
        ))}
      </ul>
      <NearbyLocations />
    </section>
  )
}
