import { cn } from "@/lib/utils";
import Marquee from "./../../components/ui/marquee";

const reviews = [
  {
    name: "Pamela",
    username: "Calzados Alberto",
    body:  "Este software ha transformado la forma en que gestionamos nuestro inventario. Muy fácil de usar.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Walter",
    username: "San Francisco",
    body: "Nos ha ayudado a mejorar la eficiencia de nuestro equipo. Los reportes son muy útiles.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Pamela",
    username: "Calzados Alberto",
    body:  "Este software ha transformado la forma en que gestionamos nuestro inventario. Muy fácil de usar.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Walter",
    username: "San Francisco",
    body: "Nos ha ayudado a mejorar la eficiencia de nuestro equipo. Los reportes son muy útiles.",
    img: "https://avatar.vercel.sh/jill",
  }, {
    name: "Pamela",
    username: "Calzados Alberto",
    body:  "Este software ha transformado la forma en que gestionamos nuestro inventario. Muy fácil de usar.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Walter",
    username: "San Francisco",
    body: "Nos ha ayudado a mejorar la eficiencia de nuestro equipo. Los reportes son muy útiles.",
    img: "https://avatar.vercel.sh/jill",
  },
  
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#f8fffd] md:shadow-b-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f8fffd]  dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f8fffd] dark:from-background"></div>
    </div>
  );
}
