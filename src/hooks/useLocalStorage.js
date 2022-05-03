import React from 'react';

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    try {
      const localStorageTodosItem = localStorage.getItem(itemName);

      let parsedItem;

      if (!localStorageTodosItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageTodosItem);
      }
      setItem(parsedItem);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);

      localStorage.setItem(itemName, stringifiedItem);

      setItem(newItem);
    } catch (error) {
      console.log(error);
    }
  };

  return [item, saveItem];
};

export { useLocalStorage };
