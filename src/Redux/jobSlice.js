import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    jobs: [],
    selectedJob: {},
    applicationForm: {}
}

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJobs: (state, action) => {
            state.jobs = (action.payload)
        },
        selectJob: (state, action) => {
            state.selectedJob = action.payload
        },
        setApplicationForm: (state, action) => {
            state.applicationForm = action.payload
        }
    }
})

export const { addJobs, selectJob, setApplicationForm } = jobSlice.actions

export default jobSlice.reducer