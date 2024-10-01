import { configureStore } from '@reduxjs/toolkit'
import locationReducer from '../features/location'

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
