import React from "react";
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";
import "./LoadingIndicator.css";

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="loader">
        <Loader type="ThreeDots" color="rgba(119, 190, 246, 0.3)" />
      </div>
    )
  );
};

export default LoadingIndicator;
