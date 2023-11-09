import { Navbar } from "@/components";





export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <> 
    <Navbar/>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1>Hello Root Layout Root Name</h1>
        {children}
      </main>
    </>
  );
}