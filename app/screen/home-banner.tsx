import * as React from "react";

export default function HomeBanner() {
    return (
        <div className="w-full relative">
          <img src="https://m.media-amazon.com/images/I/61AnASun+qL._SX3000_.jpg"
            className="
                      w-full
                      h-[80vh]
                      object-cover"/>
          <div className="
                        absolute 
                        bottom-0 
                        left-0 
                        w-full 
                        h-[70%]
                        bg-gradient-to-b from-transparent to-[#E3E6E6]"></div>

          
          <div className="
                        grid
                        grid-cols-[auto]
                        gap-[20px]
                        top-[40%]
                        px-[20px]
                        absolute">
            <div className="
                          flex
                          bg-[#F5F6F6]
                          flex-wrap">Additional customs documents are required for your destination. <span>Please click here to learn more.</span></div>              
            <div className="
                          flex
                          bg-white
                          flex-col
                          w-[343px]
                          box-border
                          pt-[20px]
                          pb-[15px]">
              <div className="
                            mx-[20px]
                            text-xl
                            font-bold">Title</div>
              <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-[auto]
                            auto-cols-auto">
                <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" 
                        className="w-full" />
                  <div className="text-sm">Headsets</div>
                </div>
              </div>
              <div className="
                          mx-[20px]
                          text-sm
                          text-[#2162a1]
                          ">See more</div>
            </div>
          </div>
        </div>
      );
}