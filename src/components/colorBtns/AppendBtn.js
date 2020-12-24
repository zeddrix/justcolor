import React, { Fragment } from 'react';

const AppendBtn = () => {
  return (
    <Fragment>
      <button className="append-btn">
        +
				<span className="tooltiptext">No Duplicating</span>
      </button>
    </Fragment>
  )
}

export default AppendBtn;
