import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

function Card(props) {
  const {
    title,
    description,
    src,
    color,
    onInView,
    textColor,
    front,
    back,
    summary,
    id,
  } = props;
  const container = useRef(null);
  const isInView = useInView(container, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);
  return (
    <div ref={container}>
      <motion.div
        style={{
          backgroundColor: color,
          color: textColor,
        }}
        className={`flex flex-col relative h-auto rounded-3xl p-8 ${
          id === 4 ? "max-w-3xl absolute left-1/2 -translate-x-1/2" : "w-full"
        }`}
      >
        <h2 className="text-center mb-2 text-3xl font-semibold">{title}</h2>

        <div className="flex flex-col-reverse lg:flex-row-reverse gap-16 p-3 lg:p-12">
          {src && (
            <div className="flex-1 relative h-96 rounded-3xl overflow-hidden">
              <motion.div className="w-full h-96">
                <Image
                  width="auto"
                  height="auto"
                  placeholder="blur"
                  src={src}
                  alt={`Screenshot of ${title} project`}
                  className="object-cover hover:scale-105 transition-all duration-300 cursor-none"
                />
              </motion.div>
            </div>
          )}

          <div className="text-lg flex-1">
            <p className="text-base leading-relaxed">{description}</p>
            <div>
              <h3 className="text-xl font-semibold mt-1">
                {src ? "Technologies Used:" : "Technologies:"}
              </h3>

              <p className="text-base mt-2">
                <span className="font-semibold">Front End:</span>{" "}
                {front?.join(", ")}.
              </p>

              {back && (
                <p className="text-base">
                  <span className="font-semibold">Backend:</span>{" "}
                  {back?.join(", ")}.
                </p>
              )}
            </div>
            <div>
              <h4 className="text-xl font-semibold mt-1">
                {src ? "Technical Summary:" : "Summary:"}
              </h4>
              <p className="text-base mt-2 leading-relaxed">{summary}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
