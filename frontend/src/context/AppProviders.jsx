import {

  WishlistProvider

} from "./WishlistContext";

import {

  CompareProvider

} from "./CompareContext";

import {

  RecentlyViewedProvider

} from "./RecentlyViewedContext";

function AppProviders({

  children

}) {

  return (

    <WishlistProvider>

      <CompareProvider>

        <RecentlyViewedProvider>

          {children}

        </RecentlyViewedProvider>

      </CompareProvider>

    </WishlistProvider>

  );
}

export default AppProviders;