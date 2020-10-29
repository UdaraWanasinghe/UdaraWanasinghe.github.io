'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aaafa928a4f8616604eca12d830fe765",
"manifest.json": "60091747cc42c4f25033351cba54fc65",
"main.dart.js": "974f625480c934ee87ff6b5c1a0adbc5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/fonts/FaSolid.otf": "f0687ede510cb0a3482f6b6e29a7a4d5",
"assets/fonts/FaRegular.otf": "87c83fb3d7725b404b4758641c3a1571",
"assets/fonts/FaBrands.otf": "1777120fa322c110e424ef10b6ee936a",
"assets/fonts/FaLight.otf": "bc704d2328e23682da83b27fec13cb8e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/AssetManifest.json": "42e97e82ea03cd3a0b88536d7b81ba90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/images/livedictionary6.jpg": "e25d64aa6581d052776e5fe118000321",
"assets/images/fitnesslanka9.jpg": "6ca2c98f7b15e330b1ea7639e636bf8f",
"assets/images/drivingexam3.png": "c6c465f47deff1601610dad0c43c2493",
"assets/images/awesomepagetransitions.gif": "000064e2d966945a81d1943c9924e733",
"assets/images/flutterpaginator.gif": "7961f7138a1d78609a540d736101890f",
"assets/images/tradesbarn0.png": "f18247b70c5b3707bbf807775aaf37af",
"assets/images/drivingexam9.png": "93992794fbbb1ac0db0774408a332fc3",
"assets/images/drivingexam5.png": "be4f8af8da0ea1bea3130abadc43c874",
"assets/images/fitnesslanka5.jpg": "61f79b2592669d3cabf84539d55330e4",
"assets/images/tradesbarn1.png": "ae372df80e105d00811e918f3c76f23d",
"assets/images/livedictionary8.jpg": "f0ff4aa3b084fb2c37c434311014c572",
"assets/images/livedictionary2.jpg": "f89871cac8e83d041be017d3d8554237",
"assets/images/tradesbarn3.png": "2834e527feebebede941ed1c307590d4",
"assets/images/livedictionary5.jpg": "e2c1f7865caf7fbc07d74fd01f0c1b90",
"assets/images/fitnesslanka3.jpg": "2f2772943b4e017b2f6b793f5ffb1d4f",
"assets/images/storyswiper.gif": "c222fbc1e11455fadbe298932ae0b364",
"assets/images/livedictionary1.png": "3bbd33241cc9e1095131d7ebb8cc56ab",
"assets/images/drivingexam2.png": "3127f51bf321cf07f78dd53ed009b1c3",
"assets/images/livedictionary4.png": "f899e9320370a54b062507dc6370612d",
"assets/images/drivingexam7.png": "15413b9ec31b446780e7cdf2ad3a2d2b",
"assets/images/livedictionary0.jpg": "a5e668359f20374a5ec458d4c553bd04",
"assets/images/fitnesslanka11.jpg": "a4ba7801075f08ce2647c994900da391",
"assets/images/drivingexam1.png": "c37a6692e1b0bee75d2aa60a2ae7f720",
"assets/images/tradesbarn2.png": "28e2caefc283ddb32303f20e0c1d19b1",
"assets/images/tradesbarn6.png": "7c7e71dc6a3d2c2b611846b1ca414cc3",
"assets/images/fitnesslanka6.jpg": "e37cfa25a54eff9efe24d58dc9a47e93",
"assets/images/drivingexam8.png": "387643910dc3a6a2818b23979e5c063e",
"assets/images/tradesbarn4.png": "e9db5e51e9a8fb981fe33734699d3105",
"assets/images/fitnesslanka10.jpg": "5ac4bc520bbaa6add05583a08a20cd75",
"assets/images/fitnesslanka4.jpg": "a6de72e81be7ada2577e116343b43507",
"assets/images/me.jpg": "17675cf4869c572de69334ef9114c80e",
"assets/images/drivingexam4.png": "e39e4bd25a8b6dd5af66b6eee17e4604",
"assets/images/drivingexam6.png": "d9cf83e78b7339b10429d394f8659434",
"assets/images/university.png": "ee402aed2d6345e92bb288354dfc0e86",
"assets/images/livedictionary3.png": "90559dfecf99216be16ca0c35c533902",
"assets/images/fluttercarouselslider.gif": "189d00783f37199170c6ae29a4be59ab",
"assets/images/fitnesslanka7.jpg": "478791b5b34ae3c53fd321d0ceac2264",
"assets/images/tradesbarn5.png": "6ea6d5e259bc89aa26bafa7790a85078",
"assets/images/fitnesslanka1.jpg": "0c72a9b90821740925197f9cf3fcd12a",
"assets/images/school.png": "23e5664c4be294c16a3676e84e95b1b7",
"assets/images/livedictionary7.jpg": "319851a7ae21836fff0e39620e935fd6",
"assets/images/drivingexam0.png": "42c16ac73be7521fb20217e506825d36",
"assets/images/fitnesslanka8.jpg": "07cbdf3f8acf305ac50aa901642a06bb",
"assets/images/fitnesslanka2.jpg": "1388bcc71de4273543ccbf99424d745f",
"assets/images/fitnesslanka0.jpg": "4981d6925b1b614f39b271b42886c17f",
"assets/FontManifest.json": "4f1372d48986d16acad7de047063c606",
"assets/NOTICES": "610a432270669b9bbeb5d7e3635b3cfc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "602b5f96b0466511b7c6d8d57b05010e",
"/": "602b5f96b0466511b7c6d8d57b05010e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
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
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
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
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
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
