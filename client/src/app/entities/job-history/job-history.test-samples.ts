import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 4141,
};

export const sampleWithPartialData: IJobHistory = {
  id: 11125,
  startDate: dayjs('2024-08-20T21:59'),
};

export const sampleWithFullData: IJobHistory = {
  id: 10426,
  startDate: dayjs('2024-08-20T09:27'),
  endDate: dayjs('2024-08-20T06:48'),
  language: 'FRENCH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
