import { ModelType, Muscle, IMuscleData } from '../component/metadata';

export const DEFAULT_MUSCLE_DATA: Record<Muscle, IMuscleData> = {
  trapezius: { exercises: [], frequency: 0 },
  'upper-back': { exercises: [], frequency: 0 },
  'lower-back': { exercises: [], frequency: 0 },
  chest: { exercises: [], frequency: 0 },
  'left-bicep': { exercises: [], frequency: 0 },
  'right-bicep': { exercises: [], frequency: 0 },
  'left-tricep': { exercises: [], frequency: 0 },
  'right-tricep': { exercises: [], frequency: 0 },
  forearm: { exercises: [], frequency: 0 },
  'left-shoulder': { exercises: [], frequency: 0 },
  'right-shoulder': { exercises: [], frequency: 0 },
  abs: { exercises: [], frequency: 0 },
  obliques: { exercises: [], frequency: 0 },
  adductor: { exercises: [], frequency: 0 },
  'left-hamstring': { exercises: [], frequency: 0 },
  'right-hamstring': { exercises: [], frequency: 0 },
  'left-quadricep': { exercises: [], frequency: 0 },
  'right-quadricep': { exercises: [], frequency: 0 },
  abductors: { exercises: [], frequency: 0 },
  'left-calf': { exercises: [], frequency: 0 },
  'right-calf': { exercises: [], frequency: 0 },
  gluteal: { exercises: [], frequency: 0 },
  head: { exercises: [], frequency: 0 },
  neck: { exercises: [], frequency: 0 },
  knees: { exercises: [], frequency: 0 },
  'left-soleus': { exercises: [], frequency: 0 },
  'right-soleus': { exercises: [], frequency: 0 },
};

export const DEFAULT_BODY_COLOR = '#B6BDC3';
export const DEFAULT_HIGHLIGHTED_COLORS = ['#81b1d9', '#277abf'];

export const DEFAULT_MODEL_TYPE = ModelType.ANTERIOR;
