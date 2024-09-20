import Header from "../layout/Header";
export default function RootLayout({ children }) {
  return (
    <div className="max-w-screen-xl flex flex-col min-h-[100vh] mx-auto px-4 sm:px-6 lg:px-8">
      <Header></Header>
      {children}
    </div>
  );
}
