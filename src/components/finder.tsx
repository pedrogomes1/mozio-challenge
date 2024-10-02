import { useState } from 'react'
import AsyncSelect, { type SingleValue } from 'react-select'

import { useAppDispatch } from '../app/hooks'
import { selectLocation } from '../features/location'
import { useDebounce } from '../hooks/useDebounce'
import { useLocations } from '../hooks/useLocations'
import { Spinner } from './ui/spinner'

type SelectInputOption = SingleValue<{
  value: number | null
  label: string
}>

const DEBOUNCE_DELAY_IN_MILLISECONDS = 500

export function Finder() {
  const [inputValue, setInputValue] = useState('')
  const { debouncedValue } = useDebounce(
    inputValue,
    DEBOUNCE_DELAY_IN_MILLISECONDS
  )
  const dispatch = useAppDispatch()
  const { locations, error, isLoading } = useLocations(debouncedValue)

  const options =
    locations?.map(location => ({
      value: location.id,
      label: location.name,
    })) || []

  const handleSelectOption = (option: SelectInputOption) => {
    const currentLocation = locations?.find(
      location => location.name === option?.label
    )

    if (currentLocation) {
      return dispatch(selectLocation(currentLocation))
    }
  }

  const formatNoOptionsMessage = () => {
    if (error) return error.message
    if (debouncedValue && !locations?.length) return 'No options found'

    return <Spinner />
  }

  return (
    <div className="flex-col">
      <div className=" p-10 bg-card rounded-lg">
        <h1 className="mb-2">Location</h1>
        <AsyncSelect
          isClearable
          onInputChange={setInputValue}
          onChange={handleSelectOption}
          options={options}
          isLoading={isLoading}
          loadingMessage={() => <Spinner />}
          menuIsOpen={!!inputValue.length}
          noOptionsMessage={formatNoOptionsMessage}
          placeholder="Search for a location..."
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              minHeight: '45px',
            }),
            noOptionsMessage: baseStyles => ({
              ...baseStyles,
              ...(error?.message && { color: 'red' }),
            }),
          }}
        />
      </div>
    </div>
  )
}
