"use client";
import * as React from "react";



export default function ProductsDeals() {
    const deals1 = [
        {
            discount: "21% off",
            title: "SAMSUNG Galaxy S24 FE AI Phone, 256GB Unlocked Android Smartphone, High-Res 50MP Camera, Long Battery Life, Brighter Display Screen, US Version, 2024, US 1 Yr Manufacturer Warranty, Graphite",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/51SG-FYxj7L._AC_SX679_.jpg"
        },
        {
            discount: "40% off",
            title: "OLANLY Bathroom Rugs 30x20, Extra Soft Absorbent Chenille Bath Rugs, Rubber Backing Quick Dry, Machine Washable Bath Mats for Bathroom Floor, Tub and Shower, Home Decor Accessories, Grey",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/91MTW21x7pL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "30% off",
            title: "Shark NV352 Navigator Lift Away Upright Vacuum, Hepa Filter, Anti-Allergen Technology, Swivel Steering, Ideal for Carpet, Stairs, & Bare Floors, with Wide Upholstery & Crevice Tools, Lavender",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/61bAoS2cjML.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "25% off",
            title: "LEVOIT Cordless Vacuum Cleaner, Stick Vac with Tangle-Resistant Design, Up to 50 Minutes, Powerful Suction, Rechargeable, Lightweight, and Versatile for Carpet, Hard Floor, Pet Hair, LVAC-200",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71iS-sWLrNL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "22% off",
            title: "Bissell Cleanview XR Pet 300W Cordless Vacuum with Removable Battery, 3797V",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/616khde2emL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "24% off",
            title: "Sperax Walking Vibration Pad with APP, 3 in 1 Under Desk Treadmill, 2.5HP Low Noise Walking Treadmill Pad with Remote Control,Portable Treadmills for Home Office",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/61IPFmLRgSL._AC_SX569_.jpg"
        },
        {
            discount: "24% off",
            title: "G4Free Yoga Pants Women Wide Leg Pants with Pockets High Waist Stretch Dress Casual Sweatpants Petite/Regular/Tall",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/51FbAdOJGaL._AC_SX522_.jpg"
        },
        {
            discount: "37% off",
            title: "6 Pack Extra Heavy Duty Large Moving Bags with Strong Zipper & Comfortable Handles, Sturdy & Durable Clothes Storage Bags Totes Bins, Blue Packing Moving Boxes for College Supplies, Dark Blue",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71LhLQnOL0L._AC_SX679_.jpg"
        },
        {
            discount: "27% off",
            title: "BISSELL® Little Green® Max Pet SmartMix Portable Carpet and Upholstery Deep Cleaner, Car/Auto Detailer, with SmartMix Technology, Self-Cleaning Tough Stain Tool and Pet Hair Removal Tool, 38572",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/816mdjJvtbL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "31% off",
            title: "AXV Vibration Plate Fitness Platform Exercise Machine Vibrating Lymphatic Drainage Shaking Full Body Shaker Workout Vibrate Stand Shake Board Sport Gym for Weight Loss Fat Burner for Women Men",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71YbxlRF6GL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "20% off",
            title: `Cumbor 29.7-46" Baby Gate for Stairs, Toddler Safety Essentials for The House, Auto Close Dog Gate for Doorways, Mom's Choice Awards Winner-Easy Install Pressure Mounted Pet Gates for Dogs, White`,
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/81lRWmHI72L._SX425_.jpg"
        },
        {
            discount: "23% off",
            title: "LOAAO 60”X40“ RGB LED Bathroom Mirror with Lights, Large, Anti-Fog, Dimmable Smart Lighted Bathroom Vanity Mirror, Multiple Light Modes, RGB Backlit + Front Light, Memory Function, Tempered Glass",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71YF9V0VtIL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "30% off",
            title: "Shark HV322 Rocket Deluxe Pro Corded Stick Vacuum with LED Headlights, XL Dust Cup, Lightweight, Perfect for Pet Hair Pickup, Converts to a Hand Vacuum, with Pet Attachments, Bordeaux/Silver",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71SO3KUpQmL._AC_SX679_.jpg"
        },
        {
            discount: "21% off",
            title: `TP-Link Tri-Band WiFi 7 BE10000 Whole Home Mesh System (Deco BE63) - 6-Stream 10 Gbps, 4X 2.5G Ports Wired Backhaul, 4X Smart Internal Antennas, VPN, AI-Roaming, MU-MIMO, HomeShield (3-Pack)
Visit the TP-Link Store`,
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71ge0-JxeQL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "38% off",
            title: `VALSOLE Heavy Duty Support Pain Relief Orthotics - 220+ lbs Plantar Fasciitis High Arch Support Insoles for Men Women, Flat Feet Orthotic Insert, Work Boot Shoe Insole, Absorb Shock with Every Step`,
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/61vsd7S9FuL._AC_SY675_.jpg"
        },
        {
            discount: "30% off",
            title: "KuaiLu Flip Flops for Women with Arch Support Yoga Mat Comfortable Summer Beach Walking Thong Cushion Sandals Slip On Indoor Outdoor",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/711w31jqoCL._AC_SX675_.jpg"
        },
        {
            discount: "21% off",
            title: `Google TV Streamer 4K - Fast Streaming Entertainment on Your TV with Voice Search Remote - Watch Movies, Shows, Live TV, and Netflix in 4K HDR - Smart Home Control - 32 GB of Storage - Porcelain`,
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/81c-Cr-WmoL._AC_SX425_.jpg"
        },
        {
            discount: "25% off",
            title: "Xiaoxuemeng Womens Baggy Wide Leg Pants Casual Elastic Waisted Palazzo Harem Pants with Pockets",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71cmg5qVSYL._AC_SY550_.jpg"
        },
        {
            discount: "15% off",
            title: "voenxe Seamless Women Underwear Thongs,No Show Ladies Thong,No Line Workout Breathable Comfortable Panties,Soft Undies,5-Pack",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71Srgj0Jr5L._AC_SX522_.jpg"
        },
        {
            discount: "21% off",
            title: "Ninja Fit Compact Personal Blender, Portable Blender for-Smoothies, Shakes, Food Prep, and Frozen Blending, 700-Watt Base, (2) 16-oz. Cups and Spout Lids, Black QB3001SS",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/41AYJxrq-+L._SX342_SY445_.jpg"
        },
        {
            discount: "27% off",
            title: "Samsung Galaxy Tab A9+ Plus 11” 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable, Kids Friendly Design, US Version, 2024, Silver",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/61h+qeD-qfL._AC_SY300_SX300_.jpg"
        },
        {
            discount: "20% off",
            title: "EHEYCIGA Orthopedic Dog Beds for Extra Large Dogs, Waterproof Memory Foam XL Pet Bed with Sides, Non-Slip and Egg-Crate Foam Big Dog Couch Bed with Washable Removable Cover, Grey",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71UVgdOvzoL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "40% off",
            title: "ANRABESS Womens Summer Casual Sleeveless Romper Loose Spaghetti Strap Overalls Shorts Jumpsuit with Pockets 2025 Clothes",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/61xMVqEDG1L._AC_SY679_.jpg"
        },
        {
            discount: "17% off",
            title: "YESNO Women Casual Loose Bohemian Floral Dress with Pockets Short Sleeve Long Maxi Summer Beach Swing Dress EJF",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/6143sj3-jPL._AC_SX522_.jpg"
        }
    ]

    const offers = [
        {
            imageUrl: "https://m.media-amazon.com/images/I/11uvoXZXHqL.jpg",
            title: "Save on Outlet"
        },
        {
            imageUrl: "https://m.media-amazon.com/images/I/31rHQDvX+ML.jpg",
            title: "Deals just for you"
        },
        {
            imageUrl: "https://m.media-amazon.com/images/I/51U+xEjVxIL.jpg",
            title: "Over 25% off Amazon Brands"
        },
        {
            imageUrl: "https://m.media-amazon.com/images/I/3127Ktc+A0L.jpg",
            title: "Over 50% off Electronics"
        },
        {
            imageUrl: "https://m.media-amazon.com/images/I/21tyMdUOK5L.jpg",
            title: "Lighning deals over 50% off"
        },
        {
            imageUrl: "https://m.media-amazon.com/images/I/11sEd8U0vqL.jpg",
            title: "Over 70% off Women's Fashion"
        },
        {
            imageUrl: "https://m.media-amazon.com/images/I/11sEd8U0vqL.jpg",
            title: "Beauty under $25"
        },
    ]

    const deals2 = [
        {
            discount: "29% off",
            title: `Worx String Trimmer Cordless GT3.0 20V PowerShare 12" Edger & Weed Trimmer (2 Batteries & Charger Included) WG163`,
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/51NJEhSAjnL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "15% off",
            title: "Majestic Pure Eucalyptus Essential Oil | 100% Pure and Natural Eucalyptus Oil | Premium Grade Essential Oils for Hair Care, Home Diffusers, Aromatherapy, Massage and Humidifiers | 4 Fl Oz (Pack of 2)",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/41wmWMkPbfL._SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "44% off",
            title: `baleaf Women's 8"/ 5"/ 3" Biker Shorts High Waist Yoga Workout Gym Running Volleyball Spandex Shorts with Pockets`,
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/51i9uRh7YBL._AC_SX522_.jpg"
        },
        {
            discount: "28% off",
            title: "Dagacci Scrubs Medical Uniform Women and Man Scrubs Set Medical Scrubs Top and Pants",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/51JlhiMfqAL._AC_SX679_.jpg"
        },
        {
            discount: "20% off",
            title: `PRETTYGARDEN Women's Summer Floral Boho Dress Wrap V Neck Short Sleeve Ruffle A-Line Flowy Maxi Wedding Guest Dresses`,
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/81C9uGB15vL._AC_SY679_.jpg"
        },
        {
            discount: "20% off",
            title: "Autel Scanner MaxiCOM MK808S: 2025 Bidirectional Tool as MK808BT Pro MX808S M808Z, Function as MaxiCheck MX900, 28+ Service, Active Test, All System Diagnose, Injector Coding, FCA Autoauth Android 11",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/8170QM0j5qL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "20% off",
            title: "WIHOLL Womens Short Sleeve V Neck Dolman Tops with Side Shirring Loose Fit Shirts",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71QAxtKSS9L._AC_SY679_.jpg"
        },
        {
            discount: "25% off",
            title: "COSORI Air Fryer 9-in-1, Compact & Large 6-Qt, Fast Turbo Modes, 90-450°F Even Results, Precision Heating, Up to 95% Less Oil*, Roast, Bake, Dry, Reheat, Frozen, Broil, Proof, 120V, TurboBlaze, Grey",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/81YlVdZBmaL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "83% off",
            title: `Wireless Earbuds, Bluetooth 5.4 Ear Buds with Multifunctional Touch Screen, 48H Bass Stereo Headphones with ANC/ENC Noise Cancelling/Transparency Mode, IPX7 Earphones with 5 EQ Modes for iOS Android`,
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71Lh9YmSxXL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "22% off",
            title: "Keurig K-Express Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, Warm Stone",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/61vGnLbDW4L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "25% off",
            title: "JBL Go 3 Eco - Portable Mini Bluetooth Speaker, big audio and punchy bass, IP67 waterproof and dustproof, 5 hours of playtime, Made in part with recycled materials (Eco Blue)",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71PhFLta18L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "20% off",
            title: `The Honest Company Clean Conscious Multi-Use Wipes | Hypoallergenic + Unscented for Sensitive Skin | Over 99% Water, Compostable, Plant Based, Baby Wipes | Pattern Play, 288 Count`,
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/516lkVEyIHL._SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "25% off",
            title: "WYZE Cam Pan v3 Indoor/Outdoor IP65 1080P 360° Pan/Tilt/Zoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet, Color Night Vision, Works with Alexa & Google Assistant, White",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/51DkvoYXSyL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "15% off",
            title: "FDW 5 Inch Gel Memory Foam Mattress Medium-Firm Mattress for Pressure Relief & Cooler Sleep Mattress for Kid Adults CertiPUR-US Certified Mattress in a Box, King",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71XiLWwgvUL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "31% off",
            title: "Shark Pet Cordless Stick Vacuum with XL Dust Cup, LED Headlights, Removable Handheld Vac, Crevice Tool, Portable Vacuum for Household Pet Hair, Carpet and Hard Floors, 40min Runtime, Grey, IX141",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/614k7pH47+L._AC_SY300_SX300_.jpg"
        },
        {
            discount: "33% off",
            title: "WYZE Cam v4, 2.5K WiFi Security Camera, Indoor/Outdoor Cameras for Home Security, Pet Camera/Baby Monitor, Motion Activated Spotlight/Siren, Color Night Vision, 2-Way Audio, Works with Alexa & Google",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/61meTi8SRlL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "20% off",
            title: "Philips Avent Natural Glass Baby Bottles with Natural Response Nipples (Medium Flow, Flow 3), 8oz, 4-Pack, SCY913/04",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/41IFAkfCZOL._SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "88% off",
            title: "Wireless Earbuds, 2025 Bluetooth 5.4 Headphones Hi-Fi Stereo 3D Bass Ear Buds, 4 ENC Noise Cancelling Mic, 36Hrs USB-C in-Ear Earphones, IP7 Waterproof Workout Sport for Laptop Pad Android iOS, Black",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71n2YvR2wFL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "36% off",
            title: "Instant Pot Vortex Plus 6QT XL Air Fryer, 6-in-1, Broils, Dehydrates, Crisps, Roasts, Reheats, Bakes for Quick Easy Meals, 100+ In-App Recipes, Dishwasher-Safe, from the Makers of Instant Pot, Black",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71orgjq5TYL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "26% off",
            title: "Mesh Screen with Magnetic Closure-Keeps Bugs Out Let Breeze in, Heavy Duty - Pet and Kid Friendly, Works with Front, Sliding Doors (38 x 82 Inch)",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71GI7jn5JwL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "33% off",
            title: "Wireless Earbuds 75hrs Bluetooth 5.4 Headphone Sport, 2025 Bluetooth Earbuds Stereo Deep Bass Over Ear Bud with Earhooks, ENC Noise Cancelling Mic, IPX7 Waterproof Earphone for Workout/Running",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71NMUHszF4L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "28% off",
            title: "Womens Summer Tops Crewneck Short Sleeve Shirts Casual Chiffon Blouses Flowy Lace Hem Boho Clothing Trendy 2025",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71TtkME3P4L._AC_SY679_.jpg"
        },
        {
            discount: "25% off",
            title: "JBL Tune 510BT - Bluetooth headphones with up to 40 hours battery, microphone for call, foldable and comfortable, Android and iOs compatible (White)",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/51EUjPMn6UL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        },
        {
            discount: "33% off",
            title: "Momcozy Breast Pump Hands Free Upgraded Mobile Flow | M9, App Discreet Control with Personalized Multi-Modes & 15 Levels, Wearable Breast Pump 24mm, 2 Pack Cozy Red",
            isLimited: true,
            imageUrl: "https://m.media-amazon.com/images/I/71sk4bMjQUL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        }
    ]

    return (
        <div className="w-[84%] ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 box-border">
                    {deals1.map((item, index) => (
                        <div
                            key={index}
                            className=" overflow-hidden flex flex-col">
                            <div className="relative w-full h-[250px]">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="object-contain object-contain w-full h-full bg-[#f7f7f7] p-3"
                                />
                            </div>
                            <div className="text-white border-red ">{item.discount} <span className="text-gray-500">Limited time deal</span></div>
                            <div className="text-black mt-1 line-clamp-2">{item.title}</div>
                        </div>
                    ))}
                </div>
        </div>
    );
}