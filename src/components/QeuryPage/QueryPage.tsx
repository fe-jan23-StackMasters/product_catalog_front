import { useSearchParams } from 'react-router-dom';
import './QueryPage.scss';

export const Querypage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  window.console.log(query);

  return (
    <h1
      onClick={() => {
        searchParams.set('query', 'Apple iphone 13 pro');
      }}
    >Test</h1>
  );
};
