import React       from "react";
import { connect } from "react-redux";

import * as testActions from "actions/test.action.js";


export default connect(
  (state, ownProps) => state.test,
  dispatch => ({
    reset:    testActions.reset(dispatch),
    increase: testActions.increase(dispatch),
    decrease: testActions.decrease(dispatch),
  })
)( function TestComponent({
  // state
  value,

  // Actions
  reset, increase, decrease
}){



  return <h1>
    <button onClick={e => decrease()}title="decrease">-</button>
    <button onClick={e => increase()}title="increase">+</button>
    <button onClick={e => reset()}   title="reset"   >/</button>
    Value: { value }
  </h1>;



} );