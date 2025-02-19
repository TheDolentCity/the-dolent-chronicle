export function PageDescription({ children } : { children: React.ReactNode }) {
  return (
    <p className="!mt-0 lg:!mt-4 text-lg lg:text-xl leading-normal">
      {children}
    </p>
  );
}