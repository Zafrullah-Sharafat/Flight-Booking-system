import Header from "./Header";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
}
