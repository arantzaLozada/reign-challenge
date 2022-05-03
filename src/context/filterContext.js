import { createContext, useContext, useEffect, useState } from 'react';

const filterContext = createContext();

export const useFilterName = () => {
  const context = useContext(filterContext);
  if (!context) throw new Error('Name Provider is missing');
  return context;
};

export const FilterNameProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [valueName, setValueName] = useState('reactjs');

  const apiFetch = async (name, page) => {
    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?query=${name}&page=${page}`
      );
      const dataJSON = await response.json();

      setData(dataJSON.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiFetch(valueName, page);
  }, [valueName]);

  console.log('data', data);

  return (
    <filterContext.Provider
      value={{
        valueName,
        setValueName,
        data,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};
