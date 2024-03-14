import { TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-5">
      <TopMenu />
      {children}
    </main>
  );
}
