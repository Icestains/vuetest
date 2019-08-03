import * as mutationTypes from './mutations-types'

export default {
    [mutationTypes.INCREMENT_COUNT](state, payload) {
        state.count += payload.amount
    }
}