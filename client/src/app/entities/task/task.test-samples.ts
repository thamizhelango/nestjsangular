import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 25481,
};

export const sampleWithPartialData: ITask = {
  id: 21906,
  description: 'preheat next',
};

export const sampleWithFullData: ITask = {
  id: 5700,
  title: 'yahoo',
  description: 'worth',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
