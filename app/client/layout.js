import SideNav from "../layout/SideNav";
export default function RootLayout({ children }) {
  return (
    <div>
      <SideNav></SideNav>
      <div className="ms-20">{children}</div>
    </div>
  );
}
