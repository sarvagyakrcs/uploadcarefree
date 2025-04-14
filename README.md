
# 🚀 UploadCareFree

<img src="https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/thumbnail-demo.gif" width="40%" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
<em>Seamless thumbnail loading: Instantly view blurry thumbnails while high-res images load in the background.</em>

---

## 🧠 What is UploadCareFree?

**UploadCareFree** is a blazing-fast, intelligent image processing and delivery service. It simplifies your media workflow by handling image uploads, transformations, and global delivery with smart caching, all powered by Cloudflare Workers and R2.

---

## 💪 Key Features

### 🌍 Progressive Image Loading
- **Instant Thumbnails**: Blurry, low-quality thumbnails load instantly
- **Background High-Res**: Full image loads seamlessly behind the scenes
- **Smooth Transition**: Blurry thumbnail fades into crisp high-res
- **Zero Perceived Latency**: UI feels ultra-fast

### 🔄 Smart Transformations
- Resize: `w=100`, `h=auto`
- Quality: `q=10` to `q=100`
- Effects: `c=bw`, `blur=5`, etc.
- Format: Auto WebP/AVIF for supported browsers
- Smart Crop: AI detects subject & crops accordingly

### 🏠 Delivery Architecture
- **Global CDN**: Cloudflare edge nodes deliver fast everywhere
- **Multi-Tier Cache**: CF Workers + R2 + Origin
- **Cache Miss Handling**: Efficient transformation and fallback
- **Signed URLs**: Optional for secure, controlled delivery

---

## 🤝 How It Works

1. **Upload**: User uploads an image (e.g. `sarvagya-pic.jpg`)
2. **Transform**: CF Worker applies URL-based transformations (`?w=100&q=10`)
3. **Store & Cache**: Transformed versions stored in cache (e.g. `e84e7b...bdb8`)
4. **Deliver**: Global CDN delivers the optimized version to the user

---

## 📊 Use Case Diagrams

### ✨ Case 1: Original Image Request
<p align="center">
  <img src="https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/case-1.png" width="70%" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</p>
<sub align="center">[Client → Worker → R2 (Original) → Deliver]</sub>

### ✨ Case 2: Transformed Image Request
<p align="center">
  <img src="https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/case-2.png" width="70%" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</p>
<sub align="center">[Client → Worker → R2 (Transformed) → Deliver]</sub>

### ✨ Case 3: Cache Hit vs Miss
<p align="center">
  <img src="https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/case-3.png" width="70%" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</p>
<sub align="center">[Client → Worker (Cache Hit ✔️ / Miss ❌) → R2 / Transform → Cache → Deliver]</sub>

---
