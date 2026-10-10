import { ErrorBoundary as EB } from "react-error-boundary";

function ErrorFallback({ error }) {

  return (
    <div className="alert alert-danger">
      Something went wrong: {error.message}
    </div>
  );

}

export default function ErrorBoundary({ children }) {

  return (
    <EB FallbackComponent={ErrorFallback}>
      {children}
    </EB>
  );

}