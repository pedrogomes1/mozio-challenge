import { useAppSelector } from './app/hooks'
import { CurrentLocation } from './components/current-Location'
import { Finder } from './components/finder'
import { NearbyLocations } from './components/nearby-locations'

function App() {
  const location = useAppSelector(state => state.location)
  const hasLocationSelected = location.id

  return (
    <main className="flex flex-col min-h-screen justify-center w-[600px] mx-auto">
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
