import { useAppSelector } from './app/hooks'
import { CurrentLocation } from './components/current-Location'
import { Finder } from './components/finder'
import { NearbyLocations } from './components/nearby-locations'

function App() {
  const location = useAppSelector(state => state.location)

  return (
    <main className="flex flex-col min-h-screen justify-center w-[600px] mx-auto">
      <Finder />
      {location.name && <CurrentLocation />}
      <NearbyLocations />
    </main>
  )
}

export default App
