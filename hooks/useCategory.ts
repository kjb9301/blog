import { useState } from 'react';
import {useDispatch} from 'react-redux'

import {setCategory} from '../store/modules/category'

function useCategory() {
  const [selectedCtg, setSelectedCtg] = useState('');
  const dispatch = useDispatch();

  const onClickCategory = (value: string) => {
    setSelectedCtg(value);
    dispatch(setCategory(value))
  };

  return {
    selectedCtg,
    onClickCategory,
  };
}

export default useCategory;