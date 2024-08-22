import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 20631,
};

export const sampleWithPartialData: IEmployee = {
  id: 19697,
  phoneNumber: 'raffle indeed',
  salary: 3661,
};

export const sampleWithFullData: IEmployee = {
  id: 5294,
  firstName: 'Lucio',
  lastName: 'Marks',
  email: 'Nicholaus0@gmail.com',
  phoneNumber: 'ha',
  hireDate: dayjs('2024-08-20T11:56'),
  salary: 21400,
  commissionPct: 19483,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
