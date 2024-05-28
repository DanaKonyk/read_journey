import { useSearchParams } from 'react-router-dom';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectBook = searchParams.get('book') ?? 'all';

  const changeBook = newBook => {
    searchParams.set('book', newBook);
    setSearchParams(searchParams);
  };

  return { selectBook, changeBook };
};
