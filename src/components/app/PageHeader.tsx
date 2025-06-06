export function PageHeader({ children } : { children: React.ReactNode }) {
  return (
    <h1 className="relative !m-0 !mb-1 lg:!mb-4 text-3xl lg:text-5xl tracking-tight font-normal">
      {children}
    </h1>
  );
}