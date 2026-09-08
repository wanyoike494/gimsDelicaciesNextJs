# gimsBakery
Gims Bakery Website Repo

# Implementation Plan - Gims Delicacies Website

Creating an attractive, modern, vibrant, and mobile-first marketing website for **Gims Delicacies** (Cakes and Refreshment), owned by Head Chef Alice Njambi. The site highlights products in an interactive catalog, features a dynamic product slide carousel in the Hero section, provides direct WhatsApp ordering & custom quote requests, celebratory animations, social media links, contact details, and a responsive design tailored for 90%+ mobile visitors.

## User Review Required

> [!NOTE]
> - **WhatsApp Direct Ordering**: Clicking "Make Order" on any item opens WhatsApp (`+254724323377`) pre-filled with the item name, price, and inquiry details.
> - **Custom Quote Requests**: Custom cakes (e.g. Wedding, Birthday, Anniversary) feature a "Get Custom Quote" option leading to a modal that formats specific details (layers, flavor, date, guest count) directly into a WhatsApp message.
> - **Pricing in KES**: Products feature representative prices in KES (Kenyan Shillings), with custom items listed as "Quote on Request".

## Proposed Changes

### Core Structure & Styling

#### [MODIFY] [index.html](file:///c:/Users/DELL/Documents/GitHubMain/gimsBakery/index.html)
- Main HTML file containing:
  - **Header & Mobile Navigation Drawer**: Logo display (`assets/logo/IMG-20260706-WA0000.jpg`), navigation links (Home, Menu Catalog, About Chef Alice, Custom Cake Quotes, Contact), top contact bar & social links (Facebook, Instagram, WhatsApp).
  - **Hero Carousel Section**: Interactive auto-sliding product showcase with festive badges, high-resolution product imagery from `assets/`, call-to-action buttons, and smooth transition slides.
  - **Category Highlights Bar**: Quick category jump chips with icons (Cakes, Cookies, Cinnamon Rolls, Donuts, Cupcakes, Samosas, Drinks, Uji Power).
  - **Product Catalog Showcase (Catalog Section/Page)**:
    - Filterable tabs by product category.
    - Real-time product search bar.
    - Product grid with cards showing images from local `assets/` subfolders, titles, descriptions, pricing in KES, and WhatsApp "Make Order" / "Get Quote" buttons.
  - **Custom Cake Quote Generator Modal**: Modal popup for custom order inquiries (Wedding, Anniversary, Graduation, Birthday) allowing users to pick size, flavor, date, and send directly via WhatsApp.
  - **About Chef Alice & Gims Delicacies Section**: Story of Head Chef Alice Njambi, passion for baking, quality ingredients, and signature Uji Power refreshment.
  - **Celebration / Testimonials / Features Section**: Showcase of highlights (Freshly Baked Daily, Custom Designs, Event Delivery, Kenyan Favorites).
  - **Contact & Order Inquiry Form Section**: Complete contact details for Gims Delicacies & Chef Alice Njambi (`gimsdelicacies@gmail.com`, `0724323377`, `alicenjambi@gmail.com`), plus interactive form with WhatsApp integration.
  - **Footer**: Brand summary, quick navigation, product categories, business hours, social media icons, and copyright line: `All rights reserved 2026. Passionately made by Joseph Wanyoike Njoroge` linking to `http://josephwanyoike.com`.
  - **Floating WhatsApp Action Button & Mobile Sticky Bottom Order Bar**.

#### [MODIFY] [global.css](file:///c:/Users/DELL/Documents/GitHubMain/gimsBakery/global.css)
- Custom CSS styles extending Tailwind CSS:
  - Custom color tokens for warm bakery palette (Rose Red `#E11D48`, Warm Gold `#F59E0B`, Cream Vanilla `#FFFBEB`, Rich Cocoa `#451A03`).
  - Confetti and festive sprinkle floating background particle keyframe animations.
  - Carousel transition effects & slide animations.
  - Glassmorphic card styling, hover elevation effects, glowing buttons.
  - Responsive layout fixes and scrollbar polish.

#### [MODIFY] [script.js](file:///c:/Users/DELL/Documents/GitHubMain/gimsBakery/script.js)
- Interactive JavaScript functionality:
  - Product database mapping all items with categories, images from `assets/`, descriptions, prices in KES, and ordering status.
  - Dynamic Hero Slider / Carousel logic with auto-play, manual navigation buttons, and touch-swipe support for mobile.
  - Dynamic Catalog rendering with live category filtering, search input filtering, and pagination/grid layout.
  - WhatsApp Order message builder (`https://wa.me/254724323377?text=...`) encoding order details safely.
  - Custom Quote Modal logic (open, close, form handling, WhatsApp pre-fill).
  - Mobile Menu toggle & smooth scrolling navigation.
  - Celebration confetti toggle effect.

## Verification Plan

### Manual Verification
1. **Hero Carousel**: Test auto-slide, slide buttons, touch swipe on mobile view, and CTA clicks.
2. **Product Catalog**: Test all category filters (All, Cakes, Cookies, Cinnamon Rolls, Donuts, Cupcakes, Samosas, Drinks, Uji Power) and search input. Verify image paths match files in `assets/`.
3. **WhatsApp Ordering**: Click "Make Order" and "Get Quote" buttons on different items to ensure they generate correct WhatsApp URL format targeting `0724323377` with encoded message text.
4. **Mobile Responsiveness**: Test viewport sizes from iPhone SE (375px) up to 4K desktop to ensure bottom nav, drawer, product cards, carousel, and text wrap perfectly.
5. **Footer**: Check all links, social icons, and verify exact copyright text: `All rights reserved 2026. Passionately made by Joseph Wanyoike Njoroge` linking to `http://josephwanyoike.com`.











Listed directory gimsBakery
Listed directory assets
Ran command: `Get-ChildItem -Recurse assets | Select-Object FullName, Length | Format-Table -AutoSize`
Ran command: `Get-ChildItem -Recurse assets -File | Sort-Object Length -Descending | Select-Object -First 15 Name, @{Name="Size (MB)";Expression={[math]::Round($_.Length / 1MB, 2)}}`
Ran command: `(Get-ChildItem -Recurse assets -File | Measure-Object -Property Length -Sum).Sum / 1MB`
Searched for "loading="
Viewed index.html:1-50

Here is a clear breakdown of why your website is currently loading slowly (especially the images) and what steps can be taken to make it run extremely fast.

---

### 1. Why the Website is Loading Slowly

#### 🔴 1. Massive Uncompressed Image File Sizes (Primary Bottleneck)
* **The Problem:** The total size of all images inside your `assets/` directory is **over 234 MB**.
* **Individual File Sizes:** Many individual images (e.g., photos from Unsplash like `rod-long-6SMF42-JTAc-unsplash.jpg` and `aneta-voborilova-PmZXlUasoxg-unsplash.jpg`) are raw, high-resolution camera photos ranging from **4.5 MB to 7.5 MB per single image**!
* **The Impact:** When a user visits the site, their browser is forced to download tens or hundreds of megabytes of raw 4K-resolution image data just to show a small thumbnail or product card on their phone or laptop screen.

#### 🔴 2. Unoptimized File Formats (`.jpg` / `.png`)
* **The Problem:** All images are in standard `.jpg` or `.png` formats.
* **The Impact:** These older formats carry a heavy file size footprint compared to modern web image formats designed specifically for fast website performance.

#### 🔴 3. Eager Loading (Lack of Lazy Loading)
* **The Problem:** The `<img>` tags on the site do not have native lazy loading enabled (`loading="lazy"`).
* **The Impact:** As soon as someone opens the website, the browser immediately tries to download **every single image** on the page all at once—including products way down at the bottom of the page or in inactive categories that the user hasn't even scrolled to yet.

#### 🔴 4. Client-Side Script Overhead in `<head>`
* **The Problem:** The website loads Tailwind CSS via the runtime CDN script (`cdn.tailwindcss.com`) inside the `<head>` section of `index.html`.
* **The Impact:** The browser has to download the entire Tailwind JavaScript engine and compile all the CSS utility classes in real time on the user's device before rendering the page.

---

### 2. How to Fix It & Make the Website Run Super Fast

#### 🚀 Step 1: Resize and Compress the Images (90%+ Speed Improvement)
1. **Resize Dimensions:** Product cards on mobile and desktop screens typically only need to be **500px to 800px wide**, not 4000px+. Scaling down image dimensions to match their actual display size will immediately reduce file sizes drastically.
2. **Compress Quality:** Reducing image quality slightly to **80%–85%** keeps the image looking crisp to human eyes while cutting the file size down from **7 MB to under 150 KB per image**.
3. **Tools You Can Use:**
   - Free online tools: [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/).
   - Automated CLI tools: ImageMagick or Node.js `sharp` script to compress the entire `assets/` folder in one click.

#### 🚀 Step 2: Convert Images to WebP Format
* Convert all `.jpg` and `.png` images to **WebP** (`.webp`).
* WebP provides superior compression over JPEG (usually 30%–50% smaller file size at identical visual quality) and is supported by all modern browsers.

#### 🚀 Step 3: Implement Native Lazy Loading
* Add `loading="lazy"` to images below the visible screen area (the "fold").
* This allows the main page and top banner to load instantly, while menu product images only download when the user actually scrolls down to view them.

#### 🚀 Step 4: Compile Tailwind CSS for Production
* Switch from `cdn.tailwindcss.com` (which is intended for development testing) to a compiled, minified static CSS file generated via Tailwind CLI. This eliminates client-side JavaScript styling compilation during page startup.

#### 🚀 Step 5: Host on a CDN with Caching
* Deploying the website on modern web platforms like **Netlify**, **Vercel**, or behind **Cloudflare** enables automatic browser caching and fast global edge distribution. Returning visitors will have images instantly loaded from their browser cache.