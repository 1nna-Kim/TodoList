import React from 'react';
import { Button } from '../Button';
import { FilterButtonsContainer } from './filterButtons.styles';
import { IFilterButtons } from './filterButtons.types';

export const FilterButtons = React.memo(({ active, onChange }: IFilterButtons) => {
  return (
    <FilterButtonsContainer>
      <Button $gradient={active === 'all'} onClick={() => onChange('all')}>
        Все задачи
      </Button>
      <Button $gradient={active === 'active'} onClick={() => onChange('active')}>
        Активные задачи
      </Button>
      <Button $gradient={active === 'completed'} onClick={() => onChange('completed')}>
        Выполненные задачи
      </Button>
    </FilterButtonsContainer>
  );
});
