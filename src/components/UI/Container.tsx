export default function Container({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-10 ${className}`}>
      {children}
    </div>
  );
}
