import { useLocation, Link } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 text-center">
      <h1 className="text-6xl font-extrabold tracking-tight text-primary mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        Sorry, we couldn’t find the page you were looking for (
        <code className="bg-muted px-2 py-1 rounded text-sm">
          {location.pathname}
        </code>
        ).
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Go Back Home
      </Link>
    </div>
  );
}
