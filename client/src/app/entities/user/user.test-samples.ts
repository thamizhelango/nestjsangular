import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'c2ddb72d-267a-437a-aab9-836694407c6f',
  login: 'K',
};

export const sampleWithPartialData: IUser = {
  id: '3e56e04f-0966-42fe-9967-d89c4787e3cb',
  login: 'c6vtv',
};

export const sampleWithFullData: IUser = {
  id: '9db0f92c-9a07-4ed8-b314-290e791dd183',
  login: 'x',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
