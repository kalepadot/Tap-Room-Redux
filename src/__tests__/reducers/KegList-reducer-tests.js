import KegListReducer from '../../reducers/KegList-reducer';

describe('KegListReducer', () => {

let action;
const kegData = {
  name: "I'd Rather Be Smokin Cat Nip Pale Ale",
  brand: "Princess Haru's Brewery",
  // image: BeerImage,
  price: "$4.20",
  alcoholPercent: "8%",
  inventory: 124,
  id: 666
};
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(KegListReducer({}, {type: null})).toEqual({});
  });
});

  test('Should successfully add new keg data to MasterKegList', () => {
    const { name, brand, price, alcoholPercent, inventory, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      inventory: inventory,
      id: id
    };
    
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        inventory: inventory,
        id: id
      }
    });
  });