import { useRouteError } from "react-router-dom";

interface RouteErrorResponse {
  message: string;
  statusText: string;
}

export default function RouteError() {
  const error = useRouteError() as RouteErrorResponse;
  console.error(error);

  return (
    <div id="RouteError">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
