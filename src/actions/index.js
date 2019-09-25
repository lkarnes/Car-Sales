export const AddFeatureAction = feature => {
    console.log('in action', feature)
    return {
        type: 'ADD_FEATURE',
        payload: feature
    }
}

export const removeFeatureAction = feature => {
    console.log(feature)
    return {
        type: 'REMOVE_FEATURE',
        payload: feature
    }
}