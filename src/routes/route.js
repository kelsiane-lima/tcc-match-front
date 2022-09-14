import { Navigate, Route as ReactDOMRoute } from "react-router-dom";
const Route = ({ isPrivate = false, component: Component, ...rest }) => {
 const auth = true;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!auth ? (
          <Component />
        ) : (
          <Navigate
            to={{
              pathname: isPrivate ? "/" : "/",
            }}
          />
        );
      }}
    />
  );
};

export default Route;