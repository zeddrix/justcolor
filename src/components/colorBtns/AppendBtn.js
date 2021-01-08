import React, { Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { showAppendModal } from '../../actions/modalActions';
import AppendModal from '../modals/AppendModal';

const AppendBtn = () => {
  const dispatch = useDispatch();

  const toggleShowAppendModal = useSelector(
    (state) => state.toggleShowAppendModalState.show
  );

  return (
    <Fragment>
      <button className="append-btn" onClick={() => dispatch(showAppendModal())}>+</button>
      {toggleShowAppendModal && <AppendModal />}
    </Fragment>
  );
};

export default AppendBtn;
