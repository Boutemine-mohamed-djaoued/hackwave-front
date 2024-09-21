import AgentSideNav from "../layout/AgentSideNav";
export default function RootLayout({ children }) {
  return (
    <div>
      <AgentSideNav></AgentSideNav>
      <div className="ms-20">{children}</div>
    </div>
  );
}
