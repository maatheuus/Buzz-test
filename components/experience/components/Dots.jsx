function Dots({ imgIndex, setImgIndex, projects }) {
  return (
    <div className="mt-4 flex w-full justify-center gap-5" aria-hidden="true">
      {projects.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            tabIndex="0"
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-100" : "bg-neutral-800"
            }`}
          />
        );
      })}
    </div>
  );
}

export default Dots;
