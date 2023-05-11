import { CSSProperties } from 'react';

export const MuscleType = {
  TRAPEZIUS: 'trapezius',
  UPPER_BACK: 'upper-back',
  LOWER_BACK: 'lower-back',
  CHEST: 'chest',
  LEFT_BICEP: 'left-bicep',
  RIGHT_BICEP: 'right-bicep',
  LEFT_TRICEP: 'left-tricep',
  RIGHT_TRICEP: 'right-tricep',
  FOREARM: 'forearm',
  LEFT_SHOULDER: 'left-shoulder',
  RIGHT_SHOULDER: 'right-shoulder',
  ABS: 'abs',
  OBLIQUES: 'obliques',
  ABDUCTOR: 'adductor',
  ABDUCTORS: 'abductors',
  LEFT_HAMSTRING: 'left-hamstring',
  RIGHT_HAMSTRING: 'right-hamstring',
  LEFT_QUADRICEP: 'left-quadricep',
  RIGHT_QUADRICEP: 'right-quadricep',
  LEFT_CALF: 'left-calf',
  RIGHT_CALF: 'right-calf',
  GLUTEAL: 'gluteal',
  HEAD: 'head',
  NECK: 'neck',
  KNEES: 'knees',
  LEFT_SOLEUS: 'left-soleus',
  RIGHT_SOLEUS: 'right-soleus',
} as const;

export type Muscle = typeof MuscleType[keyof typeof MuscleType];

export const ModelType = {
  POSTERIOR: 'posterior',
  ANTERIOR: 'anterior',
} as const;

type ModelType = typeof ModelType[keyof typeof ModelType];

export interface IExerciseData {
  name: string;
  muscles: Muscle[];
  frequency?: number;
}

export interface IMuscleData {
  exercises: string[];
  frequency: number;
}

export interface IMuscleStats {
  muscle: Muscle;
  data: IMuscleData;
}

export interface IModelProps {
  bodyColor?: string;
  data?: IExerciseData[];
  highlightedColors?: string[];
  onClick?: ((exercise: IMuscleStats) => void) | (() => void);
  style?: CSSProperties;
  svgStyle?: CSSProperties;
  type?: ModelType;
}
