export default (store) => ({
  path: 'custom',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./list').default(store),
        require('./phase').default(store),
        // require('./create').default(store),
      ])
    })
  },
})
