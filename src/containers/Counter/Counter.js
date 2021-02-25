import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import asyncFunc from "./userAction";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <div className="buttonContainer">
        <button
          className="btnList"
          onClick={() => this.props.onStoreResult(this.props.ctr)}
        >
          Store Result
        </button>
        <button className="btnList" onClick={() => this.props.onGetUser()}>
          Get User
        </button>
        </div>
        
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li
              className="storeList"
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
        <div className="userContainer">
          {this.props.getUsers.map((strResult) => (
            <div className="userList" key={strResult.id}>
              <p>{strResult.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
    getUsers: state.api.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () =>
      dispatch({
        type: actionTypes.INCREMENT,
      }),
    onDecrementCounter: () =>
      dispatch({
        type: actionTypes.DECREMENT,
      }),
    onAddCounter: () =>
      dispatch({
        type: actionTypes.ADD,
      }),
    onSubtractCounter: () =>
      dispatch({
        type: actionTypes.SUBTRACT,
      }),
    onStoreResult: (result) =>
      dispatch({
        type: actionTypes.STORE_RESULT,
        result: result,
      }),
    onDeleteResult: (id) =>
      dispatch({
        type: actionTypes.DELETE_RESULT,
        resultEId: id,
      }),
    onGetUser: () =>
      asyncFunc().then((result) => {
        // console.log("In onGetUser");
        var newData = result;
        dispatch({
          type: actionTypes.GET_USERS,
          data: newData,
        });
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
