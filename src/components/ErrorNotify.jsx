const ErrorNotify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  } else {
    return <h1 style={{ color: "red" }}>{errorMessage}</h1>;
  }
};

export default ErrorNotify;
