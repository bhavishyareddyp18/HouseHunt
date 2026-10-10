import {
  createContext,
  useContext,
  useState
} from "react";

const RecentlyViewedContext =
  createContext();

export const RecentlyViewedProvider =
({

  children

}) => {

  const [recentlyViewed,
    setRecentlyViewed] =
    useState([]);

  const addRecentlyViewed =
  (property) => {

    const filtered =
      recentlyViewed.filter(
        item =>
        item._id !==
        property._id
      );

    setRecentlyViewed([

      property,

      ...filtered

    ].slice(0,10));
  };

  return (

    <RecentlyViewedContext.Provider
      value={{
        recentlyViewed,
        addRecentlyViewed
      }}
    >

      {children}

    </RecentlyViewedContext.Provider>

  );
};

export const useRecentlyViewed =
() =>
useContext(
  RecentlyViewedContext
);