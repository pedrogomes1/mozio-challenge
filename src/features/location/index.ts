import { createSlice } from '@reduxjs/toolkit'
import type { Location } from '../../types/locations'

const locationInitialState = {
  id: null,
  name: '',
  description: '',
  country: '',
  climate: '',
  currency: '',
  latitude: null,
  longitude: null,
}

const initialState: Location = locationInitialState

const locationSlices = createSlice({
  name: 'location',
  initialState,
  reducers: {
    selectLocation: (_, action) => {
      return action.payload
    },
  },
})

export const { selectLocation } = locationSlices.actions

export default locationSlices.reducer
