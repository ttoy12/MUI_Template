import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  ID: faker.random.alphaNumeric(8),
  status: sample(['active', 'banned']),
  role: sample([
    'Chief',
    'Lieutenant',
    'Front Desk',
    'Officer',
  ]),
}));
