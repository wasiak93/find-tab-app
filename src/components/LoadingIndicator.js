import React from "react";
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="loader">
        <Loader type="ThreeDots" />
      </div>
    )
  );
};

export default LoadingIndicator;
