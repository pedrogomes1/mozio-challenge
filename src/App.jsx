import { useAppSelector } from './app/hooks'
import { CurrentLocation } from './components/current-location'
import { Finder } from './components/finder'
import { NearbyLocations } from './components/nearby-locations'

function App() {
  const location = useAppSelector(state => state.location)
  const hasLocationSelected = location.id

  return (
    <main className="flex flex-col min-h-screen justify-center w-[650px] mx-auto max-sm:w-auto max-sm:mx-8 max-sm:py-8">
      <Finder />
      {hasLocationSelected && (
        <>
          <CurrentLocation />
          <NearbyLocations />
        </>
      )}
    </main>
  )
}

export default App
