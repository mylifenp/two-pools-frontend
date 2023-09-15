export default async function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>{JSON.stringify({ a: "dlsajflds" })}</div>
    </div>
  );
}
