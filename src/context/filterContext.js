import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const filterContext = createContext();

export const useFilterName = () => {
  const context = useContext(filterContext);
  if (!context) throw new Error('Name Provider is missing');
  return context;
};

export const FilterNameProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [valueName, setValueName] = useState('reactjs');

  //UseLocalStorage
  const [post, setPost] = useLocalStorage('POST_FAVORITES', []);

  const apiFetch = async (name) => {
    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?query=${name}&page=0`
      );
      const dataJSON = await response.json();

      setData(dataJSON.hits);
    } catch (error) {
      console.log(error);
    }
  };

  const apiMoreHits = async (name) => {
    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?query=${name}&page=${page}`
      );
      const dataJSON = await response.json();

      return dataJSON.hits;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMoreData = async () => {
    const moreHits = await apiMoreHits(valueName);
    setData([...data, ...moreHits]);

    setPage(page + 1);
  };

  useEffect(() => {
    apiFetch(valueName);
  }, [valueName]);

  console.log('data', data);

  return (
    <filterContext.Provider
      value={{
        valueName,
        setValueName,
        data,
        fetchMoreData,
        post,
        setPost,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};
