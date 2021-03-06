import { put} from 'redux-saga/effects';
import {
  fetchPostingsAsync,
  addNewPosting
} from './index';
import {
  requestPostingsStart,
  // requestPostingsSuccess,
  requestPostingsError,
} from '../actions/postingActions';
import {
  // createEventChannel,
  firebasePush,
  firebaseSetData
} from '../../services/firebase-data.service'

jest.mock('../../services/firebase-data.service')

describe('Postings saga', () => {
  describe('fetchPostingsAsync', () => {
    // const payload = [
    //   {
    //     address: "XMain Street",
    //     category: "community",
    //     city: "Toronto",
    //     created: 1596814662926,
    //     email: "",
    //     end_date: "12/31/2020",
    //     id: "-ME8ZX4A3UqwBvruUW2C",
    //     organization: "JS Community Center",
    //     phone: "4162221111",
    //     role: "Frontend Developer",
    //     role_description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ab itaque hic dolorem. Sit unde eos dolorem, voluptatum labore ut reprehenderit totam! Laudantium culpa nemo excepturi repellat facere deserunt atque.",
    //     start_date: "8/7/2020",
    //     state: "ON",
    //     website: "https://testorg.com"
    //   }
    // ]

    it('should return postings', () => {
      const generator = fetchPostingsAsync({ category: 'community' });

      expect(generator.next().value).toEqual(
        put(requestPostingsStart())
      );

      // ToDo: Fix test due to recent change in createEventChannel (fka getFirebaseData)
      // expect(generator.next(payload).value).toEqual(
      //   put(requestPostingsSuccess(payload))
      // );
    })

    it('should throw an error', () => {
      const generator = fetchPostingsAsync({ category: 'community' });
      generator.next();
      expect(generator.throw('error').value).toEqual(put(requestPostingsError('error')));
    });
  })
  
  describe('addNewPosting', () => {
    const payload = {
      posting: [
        {
          organization: 'Test Org',
        }
      ]
    }

    it('should create new posting', () => {
      const generator = addNewPosting({ payload});
      
      expect(generator.next().value).toEqual(firebasePush())
      expect(generator.next().value).toEqual(firebaseSetData(payload))
      expect(generator.next().done).toBe(true)
    })
  })
})
