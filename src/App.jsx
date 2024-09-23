import React                  from "react";
import { createStore }        from 'redux';
import { Provider }           from 'react-redux';              // Redux store provider
import combineSectionReducers from "combine-section-reducers"; // Combines state branches into single reducer
import { RouterProvider }     from "react-router-dom";



import router        from "./router.jsx";
import * as reducers from "./store";

const store = createStore(combineSectionReducers(reducers));

export default () => {
  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>;
}