import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

export const auditLog = [...Array(24)].map((_, index) => ({
    id: faker.string.uuid(),
    Date: faker.date.between('2020-01-01', '2024-12-31'),
    name: faker.person.fullName(),
    ID: faker.random.alphaNumeric(8),
    description: sample([
      'Created an account on 2/11/2024 at 09:30am PST',
      'Checked out APX 8000 Radio on 2/13/2024 at 08:24am PST',
      'Returned APX 8000 Radio on 2/15/2024 at 20:24pm PST',
    ]),
  }));
  