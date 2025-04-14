
# UploadCareFree - Architecture

<img src="https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/thumbnail-demo.gif" width="40%" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
<em>Seamless thumbnail loading: Instantly view blurry thumbnails while high-res images load in the background.</em>

## How It Works

1. **Request**: Client requests an image with optional transform parameters
2. **Processing**: UploadCareFree processes the request at the edge
3. **Delivery**: Original or transformed image is delivered globally
4. **Caching**: Results are cached for future requests

---

## Architecture Diagrams

### Case 1: Original Image Request

1. When a client requests the original image (`/sarvagya-pic.jpg`), the Cloudflare Worker forwards the request directly to R2 storage, retrieving and delivering the original image with no transformations.
![Case-1](https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/case-1.png)



### Case 2: Transformed Image with Cache Hit

When a client requests a transformed image (`/sarvagya-pic.jpg?w=100&q=10&c=bw`), the system:
1. Generates a unique hash (`e84e7b7d5893f945e254da7b3a55bdb8`)
2. Checks for this hash in the cache (found!)
3. Delivers the pre-transformed image immediately
![Case-2](https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/case-2.png)


### Case 3: Transformed Image with Cache Miss

When requesting a new transformation:
1. Worker receives request for `/sarvagya-pic.jpg?w=100&q=10&c=bw`
2. Generates hash but finds no cached version
3. Retrieves original image from R2
4. Applies transformations to create new variant
5. Stores result with hash identifier
6. Delivers transformed image to client
7. Next time, this becomes a cache hit
![Case-3](https://pub-346c29ff168c445d97ca92055740a2ff.r2.dev/case-3.png)


---

## Technical Benefits

- **Reduced Origin Load**: Origin servers only handle initial uploads
- **Bandwidth Savings**: Optimized images reduce data transfer
- **Global Performance**: Edge processing minimizes latency
- **Developer Simplicity**: URL parameters instead of complex APIs
- **Cost Efficiency**: Pay only for storage and bandwidth used

---

## Implementation

UploadCareFree leverages Cloudflare's global infrastructure:
- **Workers**: Handle request logic and transformations
- **R2 Storage**: Stores original and transformed images
- **KV**: Manages metadata and caching information
- **Cache API**: Provides additional performance layer

The architecture eliminates complex setups while delivering enterprise-grade image performance for websites and applications of any size.
---
## Key Features

### Smart Image Loading
- **Instant Preview Delivery**: Blurry thumbnails load instantly
- **Background Loading**: Full images load behind the scenes
- **Smooth Transitions**: Blur-to-clear loading feels magical
- **Global Edge Network**: Images served from 275+ locations worldwide

### Simple Transformations
- **Resize**: `w=100`, `h=200` for dimensions
- **Quality**: `q=80` for compression level
- **Effects**: `c=bw` for black and white, more options available
- **Format**: Auto-selects optimal format for each browser
- **Smart Crop**: Intelligently focuses on image subject

### Architecture Highlights
- **Cloudflare Integration**: Workers + R2 storage
- **Three-tier Caching**: Browser, edge, and cloud storage
- **Hash-based Storage**: Content-addressed for efficient retrieval
- **On-demand Processing**: Transform only when needed
- **URL-based Control**: Simple parameters control everything

---