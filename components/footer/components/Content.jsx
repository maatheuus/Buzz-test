import Links from "./Links";
import TextSection from "./TextSection";

function Content() {
  return (
    <div className="bg-black py-8 px-12 h-full w-full flex flex-col justify-between">
      <Links />
      <TextSection />
    </div>
  );
}

export default Content;
