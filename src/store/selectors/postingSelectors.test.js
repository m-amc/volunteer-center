import {
  selectAllPostings,
  selectActivePostings
} from './postingSelectors';

const mockPostings = [
  {
    id: 'posting_1',
    role: 'role_1',
    organization: 'org_1',
    start_date: '8/1/2020',
    end_date: '8/30/2020',
    category: "community"
  },
  {
    id: 'posting_2',
    role: 'role_2',
    organization: 'org_2',
    start_date: '8/1/2020',
    end_date: '8/1/2020',
    category: "healthcare"
  }
]

const mockState = {
  postings: {
    currentFilter: "",
    postings: [...mockPostings]
  }
}
  ;
const getMockState = mockState => mockState

describe('postingSelectors', () => {
  describe('selectAllPostings', () => {
    it('should return all postings', () => {
      expect(selectAllPostings(getMockState(mockState))).toEqual([
        {
          id: 'posting_1',
          role: 'role_1',
          organization: 'org_1',
          start_date: '8/1/2020',
          end_date: '8/30/2020',
          category: "community"
        },
        {
          id: 'posting_2',
          role: 'role_2',
          organization: 'org_2',
          start_date: '8/1/2020',
          end_date: '8/1/2020',
          category: "healthcare"
        }
      ])
    })
  })
  describe('selectActivePostings', () => {
    it('should return all active postings', () => {
      expect(selectActivePostings(getMockState(mockState))).toEqual([
        {
          id: 'posting_1',
          role: 'role_1',
          organization: 'org_1',
          start_date: '8/1/2020',
          end_date: '8/30/2020',
          category: "community"
        }
      ])
    })
  })
})