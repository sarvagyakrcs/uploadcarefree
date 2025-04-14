<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>UploadCareFree</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f9f9f9;
      color: #333;
      line-height: 1.6;
      margin: 0;
      padding: 2rem;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
    }

    h1, h2, h3 {
      color: #111;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      margin-top: 2rem;
      font-size: 1.8rem;
    }

    h3 {
      margin-top: 1.5rem;
      font-size: 1.4rem;
    }

    p, li {
      font-size: 1rem;
    }

    ul {
      padding-left: 1.5rem;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.05);
      margin: 1rem 0;
      transition: transform 0.3s ease;
    }

    img:hover {
      transform: scale(1.02);
    }

    blockquote {
      font-style: italic;
      color: #555;
      border-left: 4px solid #ccc;
      padding-left: 1rem;
      margin: 1.5rem 0;
    }

    hr {
      border: none;
      border-top: 1px solid #ddd;
      margin: 2rem 0;
    }

    code {
      background-color: #eee;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-size: 0.95rem;
    }
  </style>
</head>
<body>
  <h1>🚀 UploadCareFree</h1>

  <img src="https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/thumbnail-demo.gif" alt="Thumbnail Demo">
  <blockquote>Seamless thumbnail loading: Instantly view blurry thumbnails while high-res images load in the background.</blockquote>

  <hr />

  <h2>🧠 What is UploadCareFree?</h2>
  <p><strong>UploadCareFree</strong> is a blazing-fast, intelligent image processing and delivery service. It simplifies your media workflow by handling image uploads, transformations, and global delivery with smart caching, all powered by Cloudflare Workers and R2.</p>

  <hr />

  <h2>💪 Key Features</h2>

  <h3>🌍 Progressive Image Loading</h3>
  <ul>
    <li><strong>Instant Thumbnails</strong>: Blurry, low-quality thumbnails load instantly</li>
    <li><strong>Background High-Res</strong>: Full image loads seamlessly behind the scenes</li>
    <li><strong>Smooth Transition</strong>: Blurry thumbnail fades into crisp high-res</li>
    <li><strong>Zero Perceived Latency</strong>: UI feels ultra-fast</li>
  </ul>

  <h3>🔄 Smart Transformations</h3>
  <ul>
    <li>Resize: <code>w=100</code>, <code>h=auto</code></li>
    <li>Quality: <code>q=10</code> to <code>q=100</code></li>
    <li>Effects: <code>c=bw</code>, <code>blur=5</code>, etc.</li>
    <li>Format: Auto WebP/AVIF for supported browsers</li>
    <li>Smart Crop: AI detects subject & crops accordingly</li>
  </ul>

  <h3>🏠 Delivery Architecture</h3>
  <ul>
    <li><strong>Global CDN</strong>: Cloudflare edge nodes deliver fast everywhere</li>
    <li><strong>Multi-Tier Cache</strong>: CF Workers + R2 + Origin</li>
    <li><strong>Cache Miss Handling</strong>: Efficient transformation and fallback</li>
    <li><strong>Signed URLs</strong>: Optional for secure, controlled delivery</li>
  </ul>

  <hr />

  <h2>🤝 How It Works</h2>
  <ol>
    <li><strong>Upload</strong>: User uploads an image (e.g. <code>sarvagya-pic.jpg</code>)</li>
    <li><strong>Transform</strong>: CF Worker applies URL-based transformations (<code>?w=100&q=10</code>)</li>
    <li><strong>Store & Cache</strong>: Transformed versions stored in cache (e.g. <code>e84e7b...bdb8</code>)</li>
    <li><strong>Deliver</strong>: Global CDN delivers the optimized version to the user</li>
  </ol>

  <hr />

  <h2>📊 Use Case Diagrams</h2>

  <h3>✨ Case 1: Original Image Request</h3>
  <img src="https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/case-1.png" alt="Case-1">
  <p>[Client → Worker → R2 (Original) → Deliver]</p>

  <h3>✨ Case 2: Transformed Image Request</h3>
  <img src="https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/case-2.png" alt="Case-2">
  <p>[Client → Worker → R2 (Transformed) → Deliver]</p>

  <h3>✨ Case 3: Cache Hit vs Miss</h3>
  <img src="https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/case-3.png" alt="Case-3">
  <p>[Client → Worker (Cache Hit ✔️ / Miss ❌) → R2 / Transform → Cache → Deliver]</p>
</body>
</html>
