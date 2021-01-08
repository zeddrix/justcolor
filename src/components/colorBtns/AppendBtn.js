import React, { Fragment } from 'react';
import { useDispatch } from "react-redux";
import { showAppendModal } from '../../actions/modalActions';

const AppendBtn = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <button className="append-btn" onClick={() => dispatch(showAppendModal())}>+</button>
    </Fragment>
  );
};

export default AppendBtn;
