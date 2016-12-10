export default (store) => ({
  path: 'myCustomTrip',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../container/custom/MyCustomTripPage').default)
    })
  },
  onEnter: require('../../utils/authRequired').default(store),
})
