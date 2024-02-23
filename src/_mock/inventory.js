import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

export const inventory = [...Array(24)].map((_, index) => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    ID: faker.random.alphaNumeric(8),
    status: sample(['active', 'banned']),
    role: sample([
      'Chief',
      'Lieutenant',
      'Front Desk',
      'Officer',
    ]),
  }));
  