import * as React from "react";

export default function HomeBanner() {
  return (
    <div className="w-full relative max-w-[1500px] my-[0px] mx-auto object-contain">
      <img src="https://m.media-amazon.com/images/I/61AnASun+qL._SX3000_.jpg"
        className="w-full h-full"/>
      <div className="
                        absolute 
                        bottom-0 
                        left-0 
                        w-full 
                        h-[70%]
                        bg-gradient-to-b from-transparent to-[#E3E6E6]"></div>


      <div className="
                        grid
                        grid-cols-12
                        gap-[20px]
                        top-[40%]
                        px-[20px]
                        absolute
                        w-full
                        ">
        <div className="
                          grid
                          col-span-12
                          bg-[#F5F6F6]
                          text-center
                          inline-block
                          py-[10px]
                          text-sm
                          ">Additional customs documents are required for your destination. <span>Please click here to learn more.</span></div>
        <div className="
                          grid
                          bg-white
                          min-w-[343px]
                          box-border
                          pt-[20px]
                          pb-[15px]
                          col-span-12
                          md:col-span-6
                          lg:col-span-3">
          <div className="
                            mx-[20px]
                            text-xl
                            font-bold">Gaming accessories</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-[auto_auto]">
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                className="w-full" />
              <div className="text-sm">Headsets</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                className="w-full" />
              <div className="text-sm">Computer mice</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                className="w-full" />
              <div className="text-sm">Keyboards</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                className="w-full" />
              <div className="text-sm">Chairs</div>
            </div>
          </div>
          <div className="
                          mx-[20px]
                          text-sm
                          text-[#2162a1]
                          ">See more</div>
        </div>
        <div className="
                          grid
                          bg-white
                          min-w-[343px]
                          box-border
                          pt-[20px]
                          pb-[15px]
                          col-span-12
                          md:col-span-6
                          lg:col-span-3">
          <div className="
                            mx-[20px]
                            text-xl
                            font-bold">FREE Shipping to Thailand</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-2">
            <div className="
                            grid
                            col-span-full">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/1460058_2528408_us_gw_pc_single_category_card_1x_379x304_us-en._SY304_CB609924360_.jpg"
                className="w-full h-full mb-[30px]" />
            </div>
          </div>
          <div className="
                          mx-[20px]
                          pt-[10px]
                          text-sm
                          text-[#2162a1]
                          ">Learn more</div>
        </div>
        <div className="
                          grid
                          bg-white
                          min-w-[343px]
                          box-border
                          pt-[20px]
                          pb-[15px]
                          col-span-12
                          md:col-span-6
                          lg:col-span-3">
          <div className="
                            mx-[20px]
                            text-xl
                            font-bold">Shop for your home essentials</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-[auto_auto]">
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg"
                className="w-full" />
              <div className="text-sm">Cleaning Tools</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg"
                className="w-full" />
              <div className="text-sm">Home Storage</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg"
                className="w-full" />
              <div className="text-sm">Home Decor</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_1x._SY116_CB563137408_.jpg"
                className="w-full" />
              <div className="text-sm">Bedding</div>
            </div>
          </div>
          <div className="
                          mx-[20px]
                          text-sm
                          text-[#2162a1]
                          ">Discover more in Home</div>
        </div>
        <div className="
                          grid
                          bg-white
                          min-w-[343px]
                          box-border
                          pt-[20px]
                          pb-[15px]
                          col-span-12
                          md:col-span-6
                          lg:col-span-3">
          <div className="
                            mx-[20px]
                            text-xl
                            font-bold">Get your game on</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-2">
            <div className="
                            grid
                            col-span-full">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg"
                className="w-full h-full mb-[30px]" />
            </div>
          </div>
          <div className="
                          mx-[20px]
                          pt-[10px]
                          text-sm
                          text-[#2162a1]
                          ">Shop gaming</div>
        </div>
        <div className="
                          grid
                          bg-white
                          min-w-[343px]
                          box-border
                          pt-[20px]
                          pb-[15px]
                          col-span-12
                          md:col-span-6
                          lg:col-span-3">
          <div className="
                            mx-[20px]
                            text-xl
                            font-bold">Shop deals in Fashion</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-[auto_auto]">
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"
                className="w-full" />
              <div className="text-sm">Jeans under $50</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg"
                className="w-full" />
              <div className="text-sm">Tops under $25</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg"
                className="w-full" />
              <div className="text-sm">Dresses under $30</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg"
                className="w-full" />
              <div className="text-sm">Shoes under $50</div>
            </div>
          </div>
          <div className="
                          mx-[20px]
                          text-sm
                          text-[#2162a1]
                          ">See all deals</div>
        </div>
        <div className="
                          grid
                          bg-white
                          min-w-[343px]
                          box-border
                          pt-[20px]
                          pb-[15px]
                          col-span-12
                          md:col-span-6
                          lg:col-span-3">
          <div className="
                            mx-[20px]
                            text-xl
                            font-bold">Top categories in Kitchen appliances</div>
          <div className="
                            my-[0px]
                            mx-[20px]
                            grid
                            grid-cols-3
                            gap-[10px]">
            <div className="
                            h-[144px]
                            w-full
                            col-span-3">
              <img src="https://m.media-amazon.com/images/I/313wAT6Iy2L._SY160_.jpg"
                className="w-full" />
              <div className="text-sm">Cooker</div>
            </div>
            <div className="
                            h-[120px]
                            w-full
                            flex
                            flex-col">
              <img src="https://m.media-amazon.com/images/I/21W7-lndINL._SY75_.jpg"
                className="w-full h-[75px]" />
              <div className="text-sm">Coffee</div>
            </div>
            <div className="
                            h-[120px]
                            w-full
                            flex
                            flex-col">
              <img src="https://m.media-amazon.com/images/I/21B-NkA9p-L._SY75_.jpg"
                className="w-full h-[75px]" />
              <div className="text-sm">Pots and Pans</div>
            </div>
            <div className="
                            h-[120px]
                            w-full
                            flex
                            flex-col">
              <img src="https://m.media-amazon.com/images/I/217GQ1a2QzL._SY75_.jpg"
                className="w-full h-[75px]" />
              <div className="text-sm">Kettles</div>
            </div>
          </div>
          <div className="
                          mx-[20px]
                          text-sm
                          text-[#2162a1]
                          ">Explore all products in Kitchen</div>
        </div>
        <div className="
                          grid
                          bg-white
                          min-w-[343px]
                          box-border
                          pt-[20px]
                          pb-[15px]
                          col-span-12
                          md:col-span-6
                          lg:col-span-3">
          <div className="
                            mx-[20px]
                            text-xl
                            font-bold">New home arrivals under $50</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-[auto_auto]">
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg"
                className="w-full" />
              <div className="text-sm">Kitchen & dining</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg"
                className="w-full" />
              <div className="text-sm">Home improvement</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg"
                className="w-full" />
              <div className="text-sm">Décor</div>
            </div>
            <div className="
                            h-[144px]
                            w-[144px]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_1x._SY116_CB555960040_.jpg"
                className="w-full" />
              <div className="text-sm">Bedding & Bath</div>
            </div>
          </div>
          <div className="
                          mx-[20px]
                          text-sm
                          text-[#2162a1]
                          ">Shop the latest from Home</div>
        </div>
        <div className="
                          grid
                          bg-white
                          min-w-[343px]
                          box-border
                          pt-[20px]
                          pb-[15px]
                          col-span-12
                          md:col-span-6
                          lg:col-span-3">
          <div className="
                            mx-[20px]
                            text-xl
                            font-bold">Fill your basket with joy</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-2">
            <div className="
                            grid
                            col-span-full">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Easter25/Fuji_Desktop_SingleImageCard_Easter25_1X_EN._SY304_CB548389703_.jpg"
                className="w-full h-full mb-[30px]" />
            </div>
          </div>
          <div className="
                          mx-[20px]
                          pt-[10px]
                          text-sm
                          text-[#2162a1]
                          ">Shop for Easter</div>
        </div>
      </div>
    </div>
  );
}