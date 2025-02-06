



// module.exports = {
//   globDirectory: "build/",  // Ensure the 'build' directory exists and contains files
//   globPatterns: [
//     "**/*.{html,js,css,webp,jpg,png}"  // Match all HTML, JS, CSS, images
//   ],
//   globIgnores: [
//     "**/node_modules/**/*",  // Ignore node_modules
//     "sw.js",  // Ignore the service worker itself
//     "workbox-*.js"  // Ignore workbox-related files
//   ],
//   swDest: "public/sw.js",  // Destination for the generated service worker
//   maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // Set the limit to 5 MB

//   runtimeCaching: [
//     {
//       urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,  // Cache images
//       handler: "CacheFirst",
//       options: {
//         cacheName: "images-cache",
//         expiration: {
//           maxEntries: 50,
//           maxAgeSeconds: 30 * 24 * 60 * 60,  // Cache for 30 days
//         },
//       },
//     },
//     {
//       urlPattern: new RegExp("http://localhost:8080/"),  // Replace with your API endpoint if needed
//       handler: "NetworkFirst",
//       options: {
//         cacheName: "api-cache",
//         networkTimeoutSeconds: 10,  // Fallback to cache if network times out
//       },
//     },
//     {
//       urlPattern: ({ request }) => request.destination === 'image',  // Catch backend images dynamically
//       handler: "CacheFirst",
//       options: {
//         cacheName: "dynamic-images-cache",
//         expiration: {
//           maxEntries: 100,
//           maxAgeSeconds: 7 * 24 * 60 * 60, // Cache backend images for 7 days
//         },
//       },
//     }
//   ],
// };




module.exports = {
  globDirectory: "build/",
  globPatterns: [
    "**/*.{html,js,css,webp,jpg,png,svg}"
  ],
  globIgnores: [
    "**/node_modules/**/*",
    "sw.js",
    "workbox-*.js"
  ],
  swDest: "build/sw.js",
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,  // Cache up to 5MB files

  runtimeCaching: [
    // **Cache static images**
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-images-cache",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 24 * 60 * 60,  // Cache for 60 days
        },
      },
    },

    // **Cache dynamically loaded backend images**
    {
      urlPattern: new RegExp("http://localhost:8080/.*\\.(png|jpg|jpeg|webp|svg)$"),
      handler: "CacheFirst",
      options: {
        cacheName: "backend-images-cache",
        expiration: {
          maxEntries: 150,
          maxAgeSeconds: 30 * 24 * 60 * 60,  // Cache for 30 days
        },
      },
    },

    // **Use NetworkFirst for API requests to avoid errors**
    {
      urlPattern: new RegExp("http://localhost:8080/products"),
      handler: "NetworkFirst",  // ✅ Required to use networkTimeoutSeconds
      options: {
        cacheName: "api-cache",
        networkTimeoutSeconds: 5,  // Required with NetworkFirst
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60,  // Cache API data for 1 day
        },
      },
    },
  ],
};



//workbox generateSW workbox-config.js