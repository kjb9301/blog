import { useState } from 'react';

function useCategory() {
  const [selectedCtg, setSelectedCtg] = useState('');

  const onClickCategory = (value: string) => {
    setSelectedCtg(value);
  };

  return {
    selectedCtg,
    onClickCategory,
  };
}

export default useCategory;