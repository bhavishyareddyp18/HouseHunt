import {
  createContext,
  useContext,
  useState
} from "react";

const CompareContext =
  createContext();

export const CompareProvider = ({
  children
}) => {

  const [compareList,
    setCompareList] =
    useState([]);

  const addToCompare =
  (property) => {

    if(
      compareList.length >= 3
    ){

      return;
    }

    const exists =
      compareList.find(
        item =>
        item._id ===
        property._id
      );

    if(exists) return;

    setCompareList([
      ...compareList,
      property
    ]);
  };

  const removeFromCompare =
  (id) => {

    setCompareList(

      compareList.filter(
        item =>
        item._id !== id
      )

    );
  };

  return (

    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare
      }}
    >

      {children}

    </CompareContext.Provider>

  );
};

export const useCompare =
() => useContext(
  CompareContext
);