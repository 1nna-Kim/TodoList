export interface IFilterButtons {
  active: string;
  onChange: (tab: 'all' | 'active' | 'completed') => void;
}
