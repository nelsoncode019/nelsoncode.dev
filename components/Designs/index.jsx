import { useState } from "react";

function Designs() {
  const [MoveLeft, setMoveLeft] = useState(1000);
  return (
    <>
      <div className="relative rounded-xl overflow-auto">
        <div
          id="my-slide"
          className="my-designs relative w-full flex gap-6 snap-x scroll-mandatory overflow-x-auto pb-14"
        >
          <div className="snap-center shrink-0">
            <div className="shrink-0" />
          </div>
          <div className="rounded-md snap-center flex justify-center p-5 bg-pink-700 shrink-0">
            <video
              className=" text-center"
              muted
              autoPlay={"autoplay"}
              preLoad="auto"
              loop
              width={1150}
            >
              <source src="/restaurantx.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="rounded-md snap-center flex justify-center p-5 bg-pink-700 shrink-0">
            <video
              className=" text-center"
              muted
              autoPlay={"autoplay"}
              preLoad="auto"
              loop
              width={1150}
            >
              <source src="/restaurantx.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="rounded-md snap-center flex justify-center p-5 bg-pink-700 shrink-0">
            <video
              className=" text-center"
              muted
              autoPlay={"autoplay"}
              preLoad="auto"
              loop
              width={1150}
            >
              <source src="/restaurantx.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="snap-center shrink-0">
            <div className="shrink-0 w-4 sm:w-48" />
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setMoveLeft((v) => v + 1000);
          document.getElementById("my-slide").scrollTo({
            left: MoveLeft,
            behavior: "smooth",
          });
        }}
      >
        click
      </button>
    </>
  );
}

export default Designs;
