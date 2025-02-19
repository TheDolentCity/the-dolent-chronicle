export function PageDescription({ children } : { children: React.ReactNode }) {
  return (
    <p className="!mt-1 lg:!mt-4 text-base lg:text-xl leading-normal">
      {children}
    </p>
  );
}