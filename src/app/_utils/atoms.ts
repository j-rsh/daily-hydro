import { atomWithStorage } from 'jotai/utils';

export interface DrinkItem {
    id: number;
    name: string;
    amount: string;
  }
export const dailyGoalAtom = atomWithStorage<number>('dailyGoal', 0);

export const drinkItemsAtom = atomWithStorage<DrinkItem[]>('drinkItems',[]);

export const sumItemsAtom = atomWithStorage<number>('sumItems' ,0);

