

export const increment = ( state ) => {
    state.count++
    state.lastMutation = 'increment'
}

export const incrementBy = ( state, val ) => {
    state.count += val
    state.lastMutation = 'incrementBy ' + val
    state.lastRandomInt = val
}

export const reset = ( state ) => {
    state.count = 0
    state.lastMutation = 'reset'
}

export const setIsLoading = (state, val) => {
    state.isLoading = val
    state.lastMutation = 'isLoading ' + val
}