import Content from "./Content";

function Footer() {
  return (
    <footer
      id="footer"
      aria-labelledby="footer-heading"
      className="relative h-[650px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+650px)] -top-[100vh]">
        <div className="h-[650px] sticky top-[calc(100vh-650px)]">
          <Content />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
