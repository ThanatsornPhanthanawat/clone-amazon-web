import * as React from "react";


export default function HomeBanner() {
  return (
    <div className="w-full relative max-w-[2000px] my-[0px] mx-auto object-contain">
      <div className="relative w-full h-full">
        <img src="https://m.media-amazon.com/images/I/61AnASun+qL._SX3000_.jpg"
        className="w-full h-full object-cover  " />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent to-[#E3E6E6] pointer-events-none"></div>
      </div>
      
      


      <div className="
                        grid
                        grid-cols-12
                        gap-[20px] 
                        -mt-[23%]
                        px-[20px]
                        w-full
                        relative z-20
                        ">
        <div className="
                          grid
                          col-span-12
                          bg-[#F5F6F6]
                          text-center
                          inline-block
                          py-[10px]
                          text-sm
                          ">Additional customs documents are required for your destination. <span className="text-sm text-[#2162a1] cursor-pointer hover:underline hover:text-black">Please click here to learn more.</span></div>
        {/* card in grid */}
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
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                className="w-full" />
              <div className="text-sm">Headsets</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                className="w-full" />
              <div className="text-sm">Computer mice</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                className="w-full" />
              <div className="text-sm">Keyboards</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
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
                          cursor-pointer
                          hover:text-black
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
                className="w-full mb-[10px]" />
            </div>
          </div>
          <div className="
                          mx-[20px]
                          pt-[10px]
                          text-sm
                          text-[#2162a1]
                          cursor-pointer
                          hover:text-black
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
                            gap-[10px]
                            grid-cols-[auto_auto]">
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg"
                className="w-full" />
              <div className="text-sm">Cleaning Tools</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg"
                className="w-full" />
              <div className="text-sm">Home Storage</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg"
                className="w-full" />
              <div className="text-sm">Home Decor</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
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
                          cursor-pointer
                          hover:text-black
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
                className="w-full mb-[10px]" />
            </div>
          </div>
          <div className="
                          mx-[20px]
                          pt-[10px]
                          text-sm
                          text-[#2162a1]
                          cursor-pointer
                          hover:text-black
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
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"
                className="w-full" />
              <div className="text-sm">Jeans under $50</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg"
                className="w-full" />
              <div className="text-sm">Tops under $25</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg"
                className="w-full" />
              <div className="text-sm">Dresses under $30</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
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
                          cursor-pointer
                          hover:text-black
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
                          cursor-pointer
                          hover:text-black
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
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg"
                className="w-full" />
              <div className="text-sm">Kitchen & dining</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg"
                className="w-full" />
              <div className="text-sm">Home improvement</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg"
                className="w-full" />
              <div className="text-sm">Décor</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
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
                          pt-[20px]
                          cursor-pointer
                          hover:text-black
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
                className="w-full  mb-[30px]" />
            </div>
          </div>
          <div className="
                          mx-[20px]
                          pb-[5px]
                          text-sm
                          text-[#2162a1]
                          cursor-pointer
                          hover:text-black
                          ">Shop for Easter</div>
        </div>
        <div className="
                        w-full
                        p-[15px]
                        grid 
                        col-span-12
                        box-border
                        bg-white
                        ">
          <div className="text-xl font-semibold">Related to items you've viewed <span className="mx-[10px] pt-[10px] text-sm text-[#2162a1] cursor-pointer hover:underline hover:text-black">See more</span></div>
          <div className="
                          mt-[10px]
                          flex
                          gap-[10px]
                          w-full
                          h-full
                          box-border
                          py-[10px]
                          overflow-hidden">
            <div className="flex w-full gap-[15px] overflow-x-auto">
              <div className="
                            flex
                            shrink-0
                            flex-row
                            w-[25%]
                            h-full
                            items-center
                            box-border
                            p-[10px]
                            gap-[20px]
                            ">
                <img src="https://m.media-amazon.com/images/I/51MFV5nBS0L._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/51uouFuPZHS._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/91Va3C+b4DL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/71p+W+wl3rL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/51kqCg10TfL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/71poS4-x2zL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/61Sdhvb15YL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/61UL9MFYNBL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/61eA9YXk70L._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/71jeMoVG3PL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/614NUVZPYfL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/61aX0VSlRmL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/91mUfiMlv6L._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/61icCFPImqL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/717VTsbfcIL._AC_SY200_.jpg" className="h-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="
                        w-full
                        p-[15px]
                        grid 
                        col-span-12
                        box-border
                        bg-white
                        ">
          <div className="text-xl font-semibold">Top picks for Thailand</div>
          <div className="
                          mt-[10px]
                          flex
                          gap-[10px]
                          w-full
                          h-full
                          box-border
                          py-[10px]
                          overflow-hidden">
            <div className="flex w-full gap-[15px] overflow-x-auto">
              <div className="
                            flex
                            shrink-0
                            flex-row
                            w-[40%]
                            h-full
                            items-center
                            box-border
                            p-[10px]
                            gap-[20px]
                            ">
                <img src="https://m.media-amazon.com/images/I/71OuUjX5o9L._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/71mL0rwKWNL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/41wrAKTQ06L._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/71qG6KHBljL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/71zoaJ6d1tL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/714X1CPGDnL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/71gckdU0LaL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/51Znue5IuDL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/81vNkK3cq6L._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/81CO1q9Zt-L._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/51-U5dEbEBL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/311njq5mJyL._AC_SY200_.jpg" className="h-full" />
                <img src="https://m.media-amazon.com/images/I/51-Wp+mA5fL._AC_SY200_.jpg" className="h-full" />
              </div>
            </div>
          </div>
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
                            font-bold">Plug in with Electronics</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-[auto_auto]">
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Headphones._SY116_CB549022351_.jpg"
                className="w-full" />
              <div className="text-sm">Headphones</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Tablets._SY116_CB549022351_.jpg"
                className="w-full" />
              <div className="text-sm">Tablets</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Gaming._SY116_CB549022351_.jpg"
                className="w-full" />
              <div className="text-sm">Gaming</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Speakers._SY116_CB549022351_.jpg"
                className="w-full" />
              <div className="text-sm">Speakers</div>
            </div>
          </div>
          <div className="
                          mx-[20px]
                          text-sm
                          text-[#2162a1]
                          pt-[20px]
                          cursor-pointer
                          hover:text-black
                          ">Discover more</div>
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
                            font-bold">Gear up to get fit</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-[auto_auto]">
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Clothing._SY116_CB549022351_.jpg"
                className="w-full" />
              <div className="text-sm">clothing</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Trackers._SY116_CB549022351_.jpg"
                className="w-full" />
              <div className="text-sm">Trackers</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Equipment._SY116_CB549022351_.jpg"
                className="w-full" />
              <div className="text-sm">Equipment</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_1x_Deals_Fitness._SY116_CB549022351_.jpg"
                className="w-full" />
              <div className="text-sm">Deals</div>
            </div>
          </div>
          <div className="
                          mx-[20px]
                          text-sm
                          text-[#2162a1]
                          pt-[20px]
                          cursor-pointer
                          hover:text-black
                          ">Discover more</div>
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
                            font-bold">Toys for all ages</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-[auto_auto]">
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/RideOn._SY116_CB545223412_.jpg"
                className="w-full" />
              <div className="text-sm">Ride on's</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/BuildingConstruction._SY116_CB545223412_.jpg"
                className="w-full" />
              <div className="text-sm">Building & construction</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/DollDoll_House._SY116_CB545223412_.jpg"
                className="w-full" />
              <div className="text-sm">Dolls & Doll Houses</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAUOct2024/SwimmingPool._SY116_CB545223412_.jpg"
                className="w-full" />
              <div className="text-sm">Swimming pools</div>
            </div>
          </div>
          <div className="
                          mx-[20px]
                          text-sm
                          text-[#2162a1]
                          pt-[20px]
                          cursor-pointer
                          hover:text-black
                          ">See all</div>
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
                            font-bold">Level up your beauty routine</div>
          <div className="
                            my-[10px]
                            mx-[20px]
                            grid
                            grid-cols-[auto_auto]">
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Make-up._SY116_CB558654384_.jpg"
                className="w-full" />
              <div className="text-sm">Makeup</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Brushes._SY116_CB558654384_.jpg"
                className="w-full" />
              <div className="text-sm">Brushes</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Sponges._SY116_CB558654384_.jpg"
                className="w-full" />
              <div className="text-sm">Sponges</div>
            </div>
            <div className="
                            h-full
                            w-[90%]
                            flex
                            flex-col">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Mirrors._SY116_CB558654384_.jpg"
                className="w-full" />
              <div className="text-sm">Mirrors</div>
            </div>
          </div>
          <div className="
                          mx-[20px]
                          text-sm
                          text-[#2162a1]
                          pt-[20px]
                          cursor-pointer
                          hover:text-black
                          ">See more</div>
        </div>
      </div>
      
      
    </div>

  );
}