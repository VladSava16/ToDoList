export interface Todo{
  text: string;
  id: string;
  completed: boolean;
  category: string; 
}

export type FilterBy = 0 | 1 | 2;
export type SortOrder = 0 | 1 | 2;