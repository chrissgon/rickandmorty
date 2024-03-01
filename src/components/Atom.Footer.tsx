export default function AtomFooter() {
  return (
    <>
      <hr />
      <footer className="flex flex-col items-center gap-2 text-center pb-10">
        <img
          src="/logo.svg"
          alt="Perfect UI Logo"
          width="90"
          height="16"
          className="logo"
        />
        <p className="text-secondary">
          © {new Date().getFullYear()} Rick and Morty
        </p>
      </footer>
    </>
  );
}
