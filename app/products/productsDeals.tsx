"use client";
import * as React from "react";


export default function ProductsDeals() {
    const deals1= [
        {
            discount: "21% off",
            title: "SAMSUNG Galaxy S24 FE AI Phone, 256GB Unlocked Android Smartphone, High-Res 50MP Camera, Long Battery Life, Brighter Display Screen, US Version, 2024, US 1 Yr Manufacturer Warranty, Graphite",
            isLimited: true,
            imageUrl: "https://www.amazon.com/SAMSUNG-Unlocked-Smartphone-High-Res-Manufacturer/dp/B0DCLGFD1D?ref=dlx_deals_dg_dcl_B0DCLGFD1D_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "40% off",
            title: "OLANLY Bathroom Rugs 30x20, Extra Soft Absorbent Chenille Bath Rugs, Rubber Backing Quick Dry, Machine Washable Bath Mats for Bathroom Floor, Tub and Shower, Home Decor Accessories, Grey",
            isLimited: true,
            imageUrl: "https://www.amazon.com/OLANLY-Bathroom-Absorbent-Chenille-Non-Slip/dp/B0CFGYFCYL?ref=dlx_deals_dg_dcl_B0CFGYFCYL_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "30% off",
            title: "Shark NV352 Navigator Lift Away Upright Vacuum, Hepa Filter, Anti-Allergen Technology, Swivel Steering, Ideal for Carpet, Stairs, & Bare Floors, with Wide Upholstery & Crevice Tools, Lavender",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Shark-Navigator-Lift-Away-Anti-Allergy-NV352/dp/B004Q4DRJW?ref=dlx_deals_dg_dcl_B004Q4DRJW_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "25% off",
            title: "LEVOIT Cordless Vacuum Cleaner, Stick Vac with Tangle-Resistant Design, Up to 50 Minutes, Powerful Suction, Rechargeable, Lightweight, and Versatile for Carpet, Hard Floor, Pet Hair, LVAC-200",
            isLimited: true,
            imageUrl: "https://www.amazon.com/LEVOIT-Tangle-Resistant-Rechargeable-Lightweight-Versatile/dp/B0CB6B2JWG?ref=dlx_deals_dg_dcl_B0CB6B2JWG_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "22% off",
            title: "Bissell Cleanview XR Pet 300W Cordless Vacuum with Removable Battery, 3797V",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Bissell-Cleanview-Cordless-Removable-3797V/dp/B0C544R2J7?ref=dlx_deals_dg_dcl_B0C544R2J7_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "24% off",
            title: "Sperax Walking Vibration Pad with APP, 3 in 1 Under Desk Treadmill, 2.5HP Low Noise Walking Treadmill Pad with Remote Control,Portable Treadmills for Home Office",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Walking-Treadmill-Vibration-Control-Portable/dp/B0DFM5VSWF?ref=dlx_deals_dg_dcl_B0DFM5VSWF_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "24% off",
            title: "G4Free Yoga Pants Women Wide Leg Pants with Pockets High Waist Stretch Dress Casual Sweatpants Petite/Regular/Tall",
            isLimited: true,
            imageUrl: "https://www.amazon.com/G4Free-Straight-Sweatpants-Stretch-Business/dp/B0C7ZBNWL5?ref=dlx_deals_dg_dcl_B0C7ZBNWL5_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "37% off",
            title: "6 Pack Extra Heavy Duty Large Moving Bags with Strong Zipper & Comfortable Handles, Sturdy & Durable Clothes Storage Bags Totes Bins, Blue Packing Moving Boxes for College Supplies, Dark Blue",
            isLimited: true,
            imageUrl: "https://www.amazon.com/G4Free-Straight-Sweatpants-Stretch-Business/dp/B0C7ZBNWL5?ref=dlx_deals_dg_dcl_B0C7ZBNWL5_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "27% off",
            title: "BISSELL® Little Green® Max Pet SmartMix Portable Carpet and Upholstery Deep Cleaner, Car/Auto Detailer, with SmartMix Technology, Self-Cleaning Tough Stain Tool and Pet Hair Removal Tool, 38572",
            isLimited: true,
            imageUrl: "https://www.amazon.com/BISSELL%C2%AE-Upholstery-Technology-Self-Cleaning-38572/dp/B0D4MQXZVP?ref=dlx_deals_dg_dcl_B0D4MQXZVP_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "31% off",
            title: "AXV Vibration Plate Fitness Platform Exercise Machine Vibrating Lymphatic Drainage Shaking Full Body Shaker Workout Vibrate Stand Shake Board Sport Gym for Weight Loss Fat Burner for Women Men",
            isLimited: true,
            imageUrl: "https://www.amazon.com/AXV-Vibration-Exercise-Platform-Wellness/dp/B098FFTRMK?ref=dlx_deals_dg_dcl_B098FFTRMK_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "20% off",
            title: `Cumbor 29.7-46" Baby Gate for Stairs, Toddler Safety Essentials for The House, Auto Close Dog Gate for Doorways, Mom's Choice Awards Winner-Easy Install Pressure Mounted Pet Gates for Dogs, White`,
            isLimited: true,
            imageUrl: "https://www.amazon.com/Winner-Cumbor-29-5-46-Install-Pressure-Hardware/dp/B07MLFKP1G?ref=dlx_deals_dg_dcl_B07MLFKP1G_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "23% off",
            title: "LOAAO 60”X40“ RGB LED Bathroom Mirror with Lights, Large, Anti-Fog, Dimmable Smart Lighted Bathroom Vanity Mirror, Multiple Light Modes, RGB Backlit + Front Light, Memory Function, Tempered Glass",
            isLimited: true,
            imageUrl: "https://www.amazon.com/LOAAO-Bathroom-Anti-Fog-Dimmable-Multiple/dp/B0BXRX715D?ref=dlx_deals_dg_dcl_B0BXRX715D_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "30% off",
            title: "Shark HV322 Rocket Deluxe Pro Corded Stick Vacuum with LED Headlights, XL Dust Cup, Lightweight, Perfect for Pet Hair Pickup, Converts to a Hand Vacuum, with Pet Attachments, Bordeaux/Silver",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Shark-HV322-Headlights-Lightweight-Attachments/dp/B00NGVF4II?ref=dlx_deals_dg_dcl_B00NGVF4II_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "21% off",
            title: `TP-Link Tri-Band WiFi 7 BE10000 Whole Home Mesh System (Deco BE63) - 6-Stream 10 Gbps, 4X 2.5G Ports Wired Backhaul, 4X Smart Internal Antennas, VPN, AI-Roaming, MU-MIMO, HomeShield (3-Pack)
Visit the TP-Link Store`,
            isLimited: true,
            imageUrl: "https://www.amazon.com/TP-Link-wifi-7-mesh-system/dp/B0CN8QLS4K?ref=dlx_deals_dg_dcl_B0CN8QLS4K_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "38% off",
            title: `VALSOLE Heavy Duty Support Pain Relief Orthotics - 220+ lbs Plantar Fasciitis High Arch Support Insoles for Men Women, Flat Feet Orthotic Insert, Work Boot Shoe Insole, Absorb Shock with Every Step`,
            isLimited: true,
            imageUrl: "https://www.amazon.com/VALSOLE-Heavy-Support-Relief-Orthotics/dp/B0BM63Y76W?ref=dlx_deals_dg_dcl_B0BM63Y76W_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "30% off",
            title: "KuaiLu Flip Flops for Women with Arch Support Yoga Mat Comfortable Summer Beach Walking Thong Cushion Sandals Slip On Indoor Outdoor",
            isLimited: true,
            imageUrl: "https://www.amazon.com/KuaiLu-Support-Comfortable-Walking-Sandals/dp/B0C5ZYLRVY?ref=dlx_deals_dg_dcl_B0C5ZYLRVY_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "21% off",
            title: `Google TV Streamer 4K - Fast Streaming Entertainment on Your TV with Voice Search Remote - Watch Movies, Shows, Live TV, and Netflix in 4K HDR - Smart Home Control - 32 GB of Storage - Porcelain`,
            isLimited: true,
            imageUrl: "https://www.amazon.com/Google-Streamer-Streaming-Entertainment-Porcelain/dp/B0D8WJYSF9?ref=dlx_deals_dg_dcl_B0D8WJYSF9_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "25% off",
            title: "Xiaoxuemeng Womens Baggy Wide Leg Pants Casual Elastic Waisted Palazzo Harem Pants with Pockets",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Xiaoxuemeng-Elastic-Waisted-Palazzo-Pockets/dp/B0CR181FF6?ref=dlx_deals_dg_dcl_B0CR181FF6_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "15% off",
            title: "voenxe Seamless Women Underwear Thongs,No Show Ladies Thong,No Line Workout Breathable Comfortable Panties,Soft Undies,5-Pack",
            isLimited: true,
            imageUrl: "https://www.amazon.com/VOENXE-Seamless-Thongs-Underwear-Basics/dp/B081VSHZZV?ref=dlx_deals_dg_dcl_B081VSHZZV_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "21% off",
            title: "Ninja Fit Compact Personal Blender, Portable Blender for-Smoothies, Shakes, Food Prep, and Frozen Blending, 700-Watt Base, (2) 16-oz. Cups and Spout Lids, Black QB3001SS",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Ninja-Personal-Smoothies-Blending-700-Watt/dp/B01FHOWYA2?ref=dlx_deals_dg_dcl_B01FHOWYA2_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "27% off",
            title: "Samsung Galaxy Tab A9+ Plus 11” 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable, Kids Friendly Design, US Version, 2024, Silver",
            isLimited: true,
            imageUrl: "https://www.amazon.com/SAMSUNG-Android-Speakers-Upgraded-Chipset/dp/B0CLFH7CCV?ref=dlx_deals_dg_dcl_B0CLFH7CCV_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "20% off",
            title: "EHEYCIGA Orthopedic Dog Beds for Extra Large Dogs, Waterproof Memory Foam XL Pet Bed with Sides, Non-Slip and Egg-Crate Foam Big Dog Couch Bed with Washable Removable Cover, Grey",
            isLimited: true,
            imageUrl: "https://www.amazon.com/EHEYCIGA-Waterproof-Orthopedic-Egg-Crate-Removable/dp/B0BDLGZCTY?ref=dlx_deals_dg_dcl_B0BDLGZCTY_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "40% off",
            title: "ANRABESS Womens Summer Casual Sleeveless Romper Loose Spaghetti Strap Overalls Shorts Jumpsuit with Pockets 2025 Clothes",
            isLimited: true,
            imageUrl: "https://www.amazon.com/ANRABESS-Spaghetti-Jumpsuit-Sleeveless-A948-heise-L/dp/B0BXH15XQZ?ref=dlx_deals_dg_dcl_B0BXH15XQZ_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "17% off",
            title: "YESNO Women Casual Loose Bohemian Floral Dress with Pockets Short Sleeve Long Maxi Summer Beach Swing Dress EJF",
            isLimited: true,
            imageUrl: "https://www.amazon.com/YESNO-Casual-Bohemian-Floral-Pockets/dp/B0C6QW3BLV?ref=dlx_deals_dg_dcl_B0C6QW3BLV_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
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
            imageUrl: "https://www.amazon.com/Worx-WG163-Cordless-Batteries-Included/dp/B018S68U40?ref=dlx_deals_dg_dcl_B018S68U40_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "15% off",
            title: "Majestic Pure Eucalyptus Essential Oil | 100% Pure and Natural Eucalyptus Oil | Premium Grade Essential Oils for Hair Care, Home Diffusers, Aromatherapy, Massage and Humidifiers | 4 Fl Oz (Pack of 2)",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Majestic-Pure-Eucalyptus-Essential-Therapeutic/dp/B07NS6C8Y9?ref=dlx_deals_dg_dcl_B07NS6C8Y9_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "44% off",
            title: `baleaf Women's 8"/ 5"/ 3" Biker Shorts High Waist Yoga Workout Gym Running Volleyball Spandex Shorts with Pockets`,
            isLimited: true,
            imageUrl: "https://www.amazon.com/BALEAF-Womens-Workout-Control-Pockets/dp/B074SHQ18W?ref=dlx_deals_dg_dcl_B074SHQ18W_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "28% off",
            title: "Dagacci Scrubs Medical Uniform Women and Man Scrubs Set Medical Scrubs Top and Pants",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Dagacci-Medical-Uniform-Woman-Unisex/dp/B00FT73DJY?ref=dlx_deals_dg_dcl_B00FT73DJY_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "20% off",
            title: `PRETTYGARDEN Women's Summer Floral Boho Dress Wrap V Neck Short Sleeve Ruffle A-Line Flowy Maxi Wedding Guest Dresses`,
            isLimited: true,
            imageUrl: "https://www.amazon.com/PRETTYGARDEN-Womens-Bohemian-Dresses-Apricot/dp/B09V7DPV8W?ref=dlx_deals_dg_dcl_B09V7DPV8W_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "20% off",
            title: "Autel Scanner MaxiCOM MK808S: 2025 Bidirectional Tool as MK808BT Pro MX808S M808Z, Function as MaxiCheck MX900, 28+ Service, Active Test, All System Diagnose, Injector Coding, FCA Autoauth Android 11",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Autel-MaxiCOM-MK808-Diagnostic-Diagnosis/dp/B0744B55QV?ref=dlx_deals_dg_dcl_B0744B55QV_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "20% off",
            title: "WIHOLL Womens Short Sleeve V Neck Dolman Tops with Side Shirring Loose Fit Shirts",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Womens-Tshirts-Business-Outfits-Clothing/dp/B08RMSWHQN?ref=dlx_deals_dg_dcl_B08RMSWHQN_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "25% off",
            title: "COSORI Air Fryer 9-in-1, Compact & Large 6-Qt, Fast Turbo Modes, 90-450°F Even Results, Precision Heating, Up to 95% Less Oil*, Roast, Bake, Dry, Reheat, Frozen, Broil, Proof, 120V, TurboBlaze, Grey",
            isLimited: true,
            imageUrl: "https://www.amazon.com/COSORI-Compact-Recipes-Dehydrate-Dishwasher/dp/B0C33CHG99?ref=dlx_deals_dg_dcl_B0C33CHG99_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "83% off",
            title: `Wireless Earbuds, Bluetooth 5.4 Ear Buds with Multifunctional Touch Screen, 48H Bass Stereo Headphones with ANC/ENC Noise Cancelling/Transparency Mode, IPX7 Earphones with 5 EQ Modes for iOS Android`,
            isLimited: true,
            imageUrl: "https://www.amazon.com/Bluetooth-Multifunctional-Headphones-Cancelling-Transparency/dp/B0DZC4MC8M?ref=dlx_deals_dg_dcl_B0DZC4MC8M_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "22% off",
            title: "Keurig K-Express Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, Warm Stone",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Keurig-K-Express-Coffee-Single-Brewer/dp/B0CT43D46H?ref=dlx_deals_dg_dcl_B0CT43D46H_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "25% off",
            title: "JBL Go 3 Eco - Portable Mini Bluetooth Speaker, big audio and punchy bass, IP67 waterproof and dustproof, 5 hours of playtime, Made in part with recycled materials (Eco Blue)",
            isLimited: true,
            imageUrl: "https://www.amazon.com/JBL-Eco-Bluetooth-Built-Waterproof/dp/B0BT2V6KNM?ref=dlx_deals_dg_dcl_B0BT2V6KNM_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "20% off",
            title: `The Honest Company Clean Conscious Multi-Use Wipes | Hypoallergenic + Unscented for Sensitive Skin | Over 99% Water, Compostable, Plant Based, Baby Wipes | Pattern Play, 288 Count`,
            isLimited: true,
            imageUrl: "https://www.amazon.com/Company-Conscious-Plant-Based-Hypoallergenic-Dermatologist/dp/B07B14D6MD?ref=dlx_deals_dg_dcl_B07B14D6MD_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "25% off",
            title: "WYZE Cam Pan v3 Indoor/Outdoor IP65 1080P 360° Pan/Tilt/Zoom Wi-Fi Smart Home Security Camera with Motion Tracking for Baby & Pet, Color Night Vision, Works with Alexa & Google Assistant, White",
            isLimited: true,
            imageUrl: "https://www.amazon.com/WYZE-IP65-Rated-Security-Compatible-Assistant/dp/B0B9TWY11Q?ref=dlx_deals_dg_dcl_B0B9TWY11Q_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "15% off",
            title: "FDW 5 Inch Gel Memory Foam Mattress Medium-Firm Mattress for Pressure Relief & Cooler Sleep Mattress for Kid Adults CertiPUR-US Certified Mattress in a Box, King",
            isLimited: true,
            imageUrl: "https://www.amazon.com/FDW-Inch-Gel-Medium-Firm-CertiPUR-US/dp/B0C1BJKFQ5?ref=dlx_deals_dg_dcl_B0C1BJKFQ5_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "31% off",
            title: "Shark Pet Cordless Stick Vacuum with XL Dust Cup, LED Headlights, Removable Handheld Vac, Crevice Tool, Portable Vacuum for Household Pet Hair, Carpet and Hard Floors, 40min Runtime, Grey, IX141",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Shark-Lightweight-Rechargeable-Removable-IX141/dp/B07S652B12?ref=dlx_deals_dg_dcl_B07S652B12_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "33% off",
            title: "WYZE Cam v4, 2.5K WiFi Security Camera, Indoor/Outdoor Cameras for Home Security, Pet Camera/Baby Monitor, Motion Activated Spotlight/Siren, Color Night Vision, 2-Way Audio, Works with Alexa & Google",
            isLimited: true,
            imageUrl: "https://www.amazon.com/WYZE-Security-Activated-Spotlight-Enhanced/dp/B0CJWJ8RYR?ref=dlx_deals_dg_dcl_B0CJWJ8RYR_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "20% off",
            title: "Philips Avent Natural Glass Baby Bottles with Natural Response Nipples (Medium Flow, Flow 3), 8oz, 4-Pack, SCY913/04",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Philips-Natural-Response-SCY913-04/dp/B098YVB8BX?ref=dlx_deals_dg_dcl_B098YVB8BX_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "88% off",
            title: "Wireless Earbuds, 2025 Bluetooth 5.4 Headphones Hi-Fi Stereo 3D Bass Ear Buds, 4 ENC Noise Cancelling Mic, 36Hrs USB-C in-Ear Earphones, IP7 Waterproof Workout Sport for Laptop Pad Android iOS, Black",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Bluetooth-Headphones-Cancelling-Earphones-Waterproof/dp/B0DXV8464F?ref=dlx_deals_dg_dcl_B0DXV8464F_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "36% off",
            title: "Instant Pot Vortex Plus 6QT XL Air Fryer, 6-in-1, Broils, Dehydrates, Crisps, Roasts, Reheats, Bakes for Quick Easy Meals, 100+ In-App Recipes, Dishwasher-Safe, from the Makers of Instant Pot, Black",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Instant-Vortex-Plus-Air-Fryer/dp/B07VHFMZHJ?ref=dlx_deals_dg_dcl_B07VHFMZHJ_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "26% off",
            title: "Mesh Screen with Magnetic Closure-Keeps Bugs Out Let Breeze in, Heavy Duty - Pet and Kid Friendly, Works with Front, Sliding Doors (38 x 82 Inch)",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Magnetic-Screen-Closure-Keeps-Breeze-Heavy/dp/B09YKX9DS7?ref=dlx_deals_dg_dcl_B09YKX9DS7_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "33% off",
            title: "Wireless Earbuds 75hrs Bluetooth 5.4 Headphone Sport, 2025 Bluetooth Earbuds Stereo Deep Bass Over Ear Bud with Earhooks, ENC Noise Cancelling Mic, IPX7 Waterproof Earphone for Workout/Running",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Wireless-Bluetooth-Headphone-Cancelling-Waterproof/dp/B0CSXV3GK4?ref=dlx_deals_dg_dcl_B0CSXV3GK4_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "28% off",
            title: "Womens Summer Tops Crewneck Short Sleeve Shirts Casual Chiffon Blouses Flowy Lace Hem Boho Clothing Trendy 2025",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Falechay-Tops-Crewneck-Blouses-Women/dp/B0BZVDKXD8?ref=dlx_deals_dg_dcl_B0BZVDKXD8_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "25% off",
            title: "JBL Tune 510BT - Bluetooth headphones with up to 40 hours battery, microphone for call, foldable and comfortable, Android and iOs compatible (White)",
            isLimited: true,
            imageUrl: "https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B08WM298TV?ref=dlx_deals_dg_dcl_B08WM298TV_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        },
        {
            discount: "33% off",
            title: "Momcozy Breast Pump Hands Free Upgraded Mobile Flow | M9, App Discreet Control with Personalized Multi-Modes & 15 Levels, Wearable Breast Pump 24mm, 2 Pack Cozy Red",
            isLimited: true,
            imageUrl: "https://www.amazon.com/Momcozy-Personalized-Multi-Modes-Independent-Breastmilk/dp/B0D7C5QDNF?ref=dlx_deals_dg_dcl_B0D7C5QDNF_dt_sl14_82_pi&pf_rd_r=YC2F9NCDWW0D41W2WR48&pf_rd_p=2c9e4cdf-afd8-4712-a7ef-440abc8b6c82"
        }
    ]

    return (
        <div></div>
    );
}