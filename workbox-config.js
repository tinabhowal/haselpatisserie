module.exports = {
    globDirectory: "build/",  // Ensure the 'build' directory exists and contains files
    globPatterns: [
      "**/*.{html,js,css,webp,jpg,png}"  // Match all HTML, JS, CSS, images
    ],
    globIgnores: [
      "**/node_modules/**/*",  // Ignore node_modules
      "sw.js",  // Ignore the service worker itself
      "workbox-*.js"  // Ignore workbox-related files
    ],
    swDest: "build/sw.js",  // Destination for the generated service worker
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // Set the limit to 5 MB
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,  // Cache images
        handler: "CacheFirst",
        options: {
          cacheName: "images-cache",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60,  // Cache for 30 days
          },
        },
      },
      {
        urlPattern: new RegExp("https://example-api.com/"),  // Replace with your API endpoint if needed
        handler: "NetworkFirst",
        options: {
          cacheName: "api-cache",
          networkTimeoutSeconds: 10,  // Fallback to cache if network times out
        },
      },
    ],
  };
  