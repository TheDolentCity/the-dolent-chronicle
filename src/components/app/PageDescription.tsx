export function PageDescription({ children } : { children: React.ReactNode }) {
  return (
    <p className="!m-0 text-sm md:text-base lg:text-xl leading-normal">
      {children}
    </p>
  );
}