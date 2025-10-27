export function PageTitle({ children } : { children: React.ReactNode }) {
  return (
    <a href="/" className="no-underline">
      <h1 className="!m-0 text-3xl lg:text-5xl tracking-tight font-normal">
        {children}
      </h1>
    </a>
  );
}