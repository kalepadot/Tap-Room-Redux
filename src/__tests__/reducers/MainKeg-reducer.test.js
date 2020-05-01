import MainKegReducer from '../../reducers/MainKeg-reducer';

describe('MainKegReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(MainKegReducer({}, {type: null})).toEqual({});
  });
});