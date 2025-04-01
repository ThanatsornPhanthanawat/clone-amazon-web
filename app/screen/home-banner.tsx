import * as React from "react";

export default function HomeBanner() {
    return (
        <div className="w-full relative">
          <img src="https://m.media-amazon.com/images/I/61AnASun+qL._SX3000_.jpg"
            className="
                      w-full
                      h-[80vh]
                      [mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))]"/>
          <div></div>
        </div>
      );
}