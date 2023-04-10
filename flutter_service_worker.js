"use strict";
const MANIFEST = "flutter-app-manifest";
const TEMP = "flutter-temp-cache";
const CACHE_NAME = "flutter-app-cache";
const RESOURCES = {
  "/flutter/assets/AssetManifest.json": "b3d233c7ec3580a9ffba9c5a0ad51f0e",
  "font/Nanum_Square/NanumSquare_acB.ttf": "a70857e6e4e14337824725c15f2a5e34",
  "font/Nanum_Square/NanumSquare_acEB.ttf": "ed41466c091f92e47aee24c1962d369d",
  "font/Nanum_Square/NanumSquare_acL.ttf": "657050ee382d17287e986b273621ec95",
  "font/Nanum_Square/NanumSquare_acR.ttf": "0e1f2365ab61e1ea88d2fbdef3952fdb",
  "font/Noto_Sans_KR/NotoSansKR-Black.otf": "a60431ba3475772342ed09d6caa1a369",
  "font/Noto_Sans_KR/NotoSansKR-Bold.otf": "38c81d5e8bad31c37c80d10df2bb906f",
  "font/Noto_Sans_KR/NotoSansKR-Light.otf": "4af942da40f1971ac1faa4a27deae858",
  "font/Noto_Sans_KR/NotoSansKR-Medium.otf": "e68e938a2d16e7b9fce4f484e045dc6e",
  "font/Noto_Sans_KR/NotoSansKR-Regular.otf":
    "c3f8d68fe959e359dbf56d591b7865b2",
  "font/Noto_Sans_KR/NotoSansKR-Thin.otf": "7a1459b4b1b98f314334fdc20edef709",
  "icons/icon_barrow.svg": "38ae341b938af04a5cb13d769297253a",
  "icons/icon_call.svg": "5c3487864af400066c1bd6509002dcc9",
  "icons/icon_eye.svg": "f231a633a3ab74536ee6ccd9686e26ad",
  "icons/icon_search.svg": "8aa3da7205b1eb95183c372317965b73",
  "icons/icon_share.svg": "3a17245538b9f2f1a1f18355960be5a6",
  "icons/icon_update.svg": "7da9583171a2c39bf309fb94bb22294c",
  "icons/icon_warrow_s.svg": "0d85ec50ecdf54fefec915fb6a915353",
  "icons/icon_wclose.svg": "f5b9ba59a1ba519f826c61e77bad2bbe",
  "icons/icon_wprofile.svg": "e848596c42cbdf7bffad8cdf7114c86f",
  "icons/next_arrow.svg": "5b9fc936e76f95f074432255feb03ec4",
  "icons/prev_arrow.svg": "d98fb01021cdbb59819804e4ba64df3a",
  "images/background_01.jpg": "933677aaa536240b4c291cb45eeb9380",
  "images/background_02.jpg": "e240bd45d9f6228c23abd9476bff34ce",
  "images/car.png": "ffcde30bb2beb7a6abf25067c6da8cfe",
  "images/car_circle.png": "8b2cb5cc686aa6ce59ebaa15829798ce",
  "images/chart.png": "52fc5e045eca88147f7aa2eb2ef1ec37",
  "images/chart_circle.png": "bc044c07caf29ed161fb1141d7358b34",
  "images/coinbank.png": "db88da539b94a09a892b5e3af4e3e85c",
  "images/crown_circle.png": "971f755de41ec0c6eaf9731955020580",
  "images/heart.png": "9dfbf09baa84ae6de6dce6c7e391db2b",
  "images/home.png": "606efc8d1e859baf6041284962592244",
  "images/icon_price_indigo.png": "6f6382b1b452f681cc2a5b9c0de76d0b",
  "images/icon_price_main.png": "fcd64d1ea6eba5e23351749f54794597",
  "images/icon_price_skyBlue.png": "a179dd18eaaeeb21dced1f2255ae1c81",
  "images/icon_profilefamily.png": "b8daefeebf58021044ccbec4b21436ea",
  "images/icon_step01.png": "3a76af211d13093a18a5fba3f6f1e2b1",
  "images/icon_step02.png": "8fadfba9a7672487a525b6f063b20265",
  "images/icon_step03.png": "72696a0a5c5791860adaef55bf7c931d",
  "images/icon_step04.png": "cdaaec6716201bb7700e693e54e9dd85",
  "images/living_sell_circle.png": "8d60abffa2b8a104e7184f51778d0f5c",
  "images/loading_icon.gif": "cf0bfa798bc75159944fcfe29dea87b2",
  "images/logo.svg": "99d68385d43c295299297c47b725ef0c",
  "images/Logo_header.png": "bfbb3d72fbd029bc33cfafa8c663dc30",
  "images/Logo_header@2x.png": "96e4aecba6d2acb877cbfd84923b4ffd",
  "images/main_visual_01.png": "b7df522c50c8078423dd61df5d896752",
  "images/mapIcon_highway.png": "9b1ab569ee976ba44dd31eb47b08a35e",
  "images/mapIcon_hospital.png": "d5b795fc6d24f02246c39b683fa6ce1a",
  "images/mapIcon_mart.png": "ae18fdf1d2b48d8e6572c5ca342a8f58",
  "images/mapIcon_museum.png": "7424cbe1b5731fa97932d682633121e8",
  "images/mapIcon_park.png": "7562b5a2a64cece17bd7819a6114cc98",
  "images/mapIcon_pharmacy.png": "d8a9667cae9de19c8bce316d54453f99",
  "images/mapIcon_subway.png": "7eb3a681aba4670235962b3f05fb2391",
  "images/mapMarker_end.png": "99267ddf8318188a3ee04723b15f2893",
  "images/mapMarker_start.png": "645973e5ac51756ff1c02bed2447c5ba",
  "images/message.png": "c15a51f0dc872ee25940faf970fe37a1",
  "images/message@2x.png": "4b78b27da29f99c2d8d1b927c5d77192",
  "images/no_image.png": "ae17117fa68e3cc16b97c62887dc73ff",
  "images/park_circle.png": "e00e038f77457433dd6c82ed3a6b7b74",
  "images/profile.jpg": "af29685332d3a22f8e93afcee4363288",
  "/flutter/assets/FontManifest.json": "dbd718842718c6973616c446370038cb",
  "/flutter/assets/fonts/MaterialIcons-Regular.otf":
    "95db9098c58fd6db106f1116bae85a0b",
  "/flutter/assets/NOTICES": "10c804c0b2b103e28644f5cc5b1279ce",
  "/flutter/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf":
    "6d342eb68f170c97609e9da345464e5e",
  "/flutter/assets/packages/fluttertoast/assets/toastify.css":
    "a85675050054f179444bc5ad70ffc635",
  "/flutter/assets/packages/fluttertoast/assets/toastify.js":
    "e7006a0a033d834ef9414d48db3be6fc",
  "/flutter/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css":
    "5a8d0222407e388155d7d1395a75d5b9",
  "/flutter/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html":
    "16911fcc170c8af1c5457940bd0bf055",
  "/flutter/assets/assets/packages/wakelock_web/assets/no_sleep.js":
    "7748a45cd593f33280669b29c2c8919a",
  "/flutter/assets/assets/shaders/ink_sparkle.frag":
    "9f2ab372d83a57c316d048c8b3000485",
  "/flutter/assets/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
  "/flutter/assets/canvaskit/canvaskit.wasm":
    "bf50631470eb967688cca13ee181af62",
  "/flutter/assets/canvaskit/profiling/canvaskit.js":
    "38164e5a72bdad0faa4ce740c9b8e564",
  "/flutter/assets/canvaskit/profiling/canvaskit.wasm":
    "95a45378b69e77af5ed2bc72b2209b94",
  "/flutter/favicon.ico": "44217006b9cc6097ec414818ae8c8d8b",
  "/flutter/favicon.png": "3d34393ad1858a1b73c14ec7c4bbb731",
  "/flutter/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
  "/flutter/icons/Icon-192.png": "7acdc527f02f4fd9ff6c033fb020e94d",
  "/flutter/index.html": "877753c924ddc719cb1b7ee24b0cfeca",
  "/flutter/": "877753c924ddc719cb1b7ee24b0cfeca",
  "/flutter/main.dart.js": "233adbe050ffe38c9121ccfe87b12a4e",
  "/flutter/manifest.json": "1ea993e95a5543c8bdcb91d8c1d49dad",
  "/flutter/version.json": "484177dda86500ddf805c0a4cd36ae5e",
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
  "index.html",
  "assets/AssetManifest.json",
  "assets/FontManifest.json",
];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, { cache: "reload" }))
      );
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(
    (async function () {
      try {
        var contentCache = await caches.open(CACHE_NAME);
        var tempCache = await caches.open(TEMP);
        var manifestCache = await caches.open(MANIFEST);
        var manifest = await manifestCache.match("manifest");
        // When there is no prior manifest, clear the entire cache.
        if (!manifest) {
          await caches.delete(CACHE_NAME);
          contentCache = await caches.open(CACHE_NAME);
          for (var request of await tempCache.keys()) {
            var response = await tempCache.match(request);
            await contentCache.put(request, response);
          }
          await caches.delete(TEMP);
          // Save the manifest to make future upgrades efficient.
          await manifestCache.put(
            "manifest",
            new Response(JSON.stringify(RESOURCES))
          );
          return;
        }
        var oldManifest = await manifest.json();
        var origin = self.location.origin;
        for (var request of await contentCache.keys()) {
          var key = request.url.substring(origin.length + 1);
          if (key == "") {
            key = "/";
          }
          // If a resource from the old manifest is not in the new cache, or if
          // the MD5 sum has changed, delete it. Otherwise the resource is left
          // in the cache and can be reused by the new service worker.
          if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
            await contentCache.delete(request);
          }
        }
        // Populate the cache with the app shell TEMP files, potentially overwriting
        // cache files preserved above.
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put(
          "manifest",
          new Response(JSON.stringify(RESOURCES))
        );
        return;
      } catch (err) {
        // On an unhandled exception the state of the cache cannot be guaranteed.
        console.error("Failed to upgrade service worker: " + err);
        await caches.delete(CACHE_NAME);
        await caches.delete(TEMP);
        await caches.delete(MANIFEST);
      }
    })()
  );
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf("?v=") != -1) {
    key = key.split("?v=")[0];
  }
  if (
    event.request.url == origin ||
    event.request.url.startsWith(origin + "/#") ||
    key == ""
  ) {
    key = "/";
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == "/") {
    return onlineFirst(event);
  }
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return (
          response ||
          fetch(event.request).then((response) => {
            if (response && Boolean(response.ok)) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
        );
      });
    })
  );
});

self.addEventListener("message", (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === "skipWaiting") {
    self.skipWaiting();
    return;
  }
  if (event.data === "downloadOffline") {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request)
      .then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch((error) => {
        return caches.open(CACHE_NAME).then((cache) => {
          return cache.match(event.request).then((response) => {
            if (response != null) {
              return response;
            }
            throw error;
          });
        });
      })
  );
}
