function TextSection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 content-center">
      <div className="text-[#AEB6C2] text-5xl leading-relaxed">
        <p>The End.</p>
      </div>
      <p className="flex items-center gap-1 text-[#AEB6C2] justify-self-end sm:self-end">
        © {new Date().getFullYear()}
        <a
          href="https://matheusmb.vercel.app/"
          target="_blank"
          className="underline"
        >
          matheusmb
        </a>
      </p>
    </div>
  );
}

export default TextSection;
