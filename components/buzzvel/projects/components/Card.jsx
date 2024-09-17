import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Card({ card }) {
  return (
    <article className="shadow-2xl h-auto rounded-lg bg-white p-4 sm:p-6 flex flex-col gap-y-3 sm:gap-y-5">
      <h1 className="text-lg sm:text-2xl font-serif leading-relaxed text-stone-900 hover:text-stone-700 transition-colors duration-300 hover:animate-pulse">
        <Link
          target="_blank"
          href={card.url}
          className="flex items-center justify-between relative"
          aria-label={`External link to ${card.title}`}
        >
          <span>{card.title}</span>

          <ExternalLink className="w-4 h-4" />
        </Link>
      </h1>
      <div
        key={card.id}
        className="group relative h-52 w-[28rem] rounded-lg overflow-hidden bg-black"
      >
        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={card.src}
            fill
            placeholder="blur"
            className="object-cover"
            alt={`${card?.title} image`}
          />
        </div>
      </div>
      <div>
        <div className="mb-2">
          <h2 className="text-base sm:text-lg font-medium text-stone-950">
            Challenge
          </h2>
          <p className="indent-1 hyphens-auto text-sm sm:text-base leading-snug text-stone-700">
            {card?.description?.challenge}
          </p>
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-medium text-stone-950">
            Solution
          </h2>
          <p className="indent-1 hyphens-auto text-sm sm:text-base leading-snug text-stone-700">
            {card?.description?.solution}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
