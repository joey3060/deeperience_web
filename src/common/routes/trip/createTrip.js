export default (store) => ({
  path: 'createTrip',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../container/trip/CreateTripPage/').default)
    })
  },
  onEnter: require('../../utils/authRequired').default(store),
})
