import Navbar from "../components/header/Navbar";

function Layout(props: any) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
