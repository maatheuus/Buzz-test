import MaskText from "./MaskText";

function Paragraph({ paragraph }) {
  return (
    <div className="text-white px-10 flex items-center flex-col my-44">
      <MaskText phrases={paragraph} />
    </div>
  );
}

export default Paragraph;
