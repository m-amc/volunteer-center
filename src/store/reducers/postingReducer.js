const initState = {
  posting: [
    {
      id: '1',
      address: 'Main St',
      category: 'animals',
      city: 'Toronto',
      created: 1570715483087,
      email: 'hello@center.com',
      end_date: "10/10/2020",
      organization: 'Test Org',
      phone: '4167779999',
      role: 'Administrator',
      start_date: '10/10/2020',
      state: 'ON',
      website: 'https://website.com',
    }
  ]
}

const postingReducer = (state = initState, action) => {
  return state
}

export default postingReducer