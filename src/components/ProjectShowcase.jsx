import { useRef } from "react";
import MoreExperience from "./MoreExperience";
import WorkSmarter from "./WorkSmarter";
import NothingBenefit from "./NothingBenefit";

export default function ProjectShowcase() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -1000,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative flex justify-center items-center gap-4 pt-5">
      {/* Scroll Left Button */}
      <button
        onClick={() => scroll("left")}
        className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        Left
      </button>

      {/* Scrollable Projects */}
      <div
        className="flex gap-4 overflow-x-hidden snap-x w-11/12 rounded-3xl"
        ref={scrollContainerRef}
      >
        <MoreExperience />
        <WorkSmarter />
        <NothingBenefit />
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={() => scroll("right")}
        className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        Right
      </button>
    </div>
  );
}
