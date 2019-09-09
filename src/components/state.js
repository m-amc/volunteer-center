const today = new Date();

const stateData =  {
    postings: [],
    id: '',
    organization: '',
    address: '',
    state: 'ON',
    city: 'Toronto',
    phone: '',
    website: '',
    email: '',
    category: '',
    role: '',
    role_description: '',
    start_date: new Date(),
    end_date: new Date(),
    created: Date.now(),
    isManagement: false,
    isNoResult: false,
    headerButtonText: 'Post Opportunities',
    filteredCategory: ''
}

export default stateData;