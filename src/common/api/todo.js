export default (apiEngine) => ({
  // list: () => new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(apiEngine.get('/api/todo'));
  //   }, 5000);
  // }),
  list: () => apiEngine.get('/api/todos'),
  create: (todo) => apiEngine.post('/api/todos', { data: todo }),
  update: (id, todo) => apiEngine.put(`/api/todos/${id}`, { data: todo }),
  remove: (id) => apiEngine.del(`/api/todos/${id}`),
})
