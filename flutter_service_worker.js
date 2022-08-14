'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "25fcf51ba403581ca57ca67a43d88444",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c6fbe4bbfd4baac3c20b49ae33c35d68",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "72dfbfc7022bfb9959022144c4ab8778",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de8155e3afcbac11ebbfd5a66b1edfb0",
".git/logs/refs/heads/main": "f4691db45621b58abb7f443c475b5cbc",
".git/logs/refs/remotes/origin/main": "311451969fea2090e873795e6c834b8a",
".git/objects/01/2fd15e51e0ee127f7b8d1e56a6a253166b781e": "09bafa25c82c4938a02c34f42bd9ed7f",
".git/objects/06/968f61840ddc82546b3ab6d0f323eb15ba4987": "0b429449ad0a525297c020838a98cee5",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/812887ac64d37bffc5f9732c8ced793d2a842b": "aede8ef22c5573f620b5d8dd805b0ed9",
".git/objects/0c/b14e7b158cf1903bbce1725e491c885254d5d0": "a7dbd3eab5debc75fb0a1cf0bb3a73aa",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/16/76c7ef73643df9c3429752be08f381f961c4cb": "8d8a185b652c8e88f107bcf99e7b2062",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/1a/d27ca21ae9b99c331f11933cb9c211c2f84f9f": "042fee4391e1d9c8d675becc28365898",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1f/2bd26d4f904c250a7705fcef23d5cd707321b1": "e0a71feeeffa8bfec0a8b590ecb01990",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/1dd83fb117af56dde4cdd9a8bca01346cfc860": "0bdb8ff582543468396efbbfcc9925d7",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/309c8e6de4228646e6e25354a5a29874772871": "3facf01e7c3614e6c446a2da2a3c0af5",
".git/objects/29/d55d736f67ff3dcbeba44db615b766339d9226": "18aaf01c7004b74ed0a90555ab50c6ca",
".git/objects/2b/d343c5c9bbbba7d9533fd7aafd18884bd19a32": "d501b7fa4e1caf5973bf2c9cb8e75b66",
".git/objects/2d/90e7d1548831c17f74c5af8e474d4ede237ad6": "4fa0a37078b57dd3add4df8a2500d2cb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/bb36cb0d60ee134113029ac0da7543042cca0c": "706b2614afd3c5a15928cdadf8d1ed3d",
".git/objects/33/a9dca836bd82e6bd0090917a5e50ce56490edc": "8c3460f785ab2e1859a5c137235efb66",
".git/objects/33/c3e15f8d650efe6bce18623924a86c937233fc": "b527c58a0dedac2f2cca52b29d317f2e",
".git/objects/34/e43838bccd51ca59f07e38de552ede52d6a54d": "b675815f156a2aeef1a58a518a2cbe70",
".git/objects/38/0fc43d0c000b1e4d6a4e225bffc70f0b1c2b46": "0d2ff72dac674fc0d73b5d7786280fa5",
".git/objects/47/69dd5d11dd0f55f05abd068585b79fbda5a692": "1e2af78a957bec98b9d065d80d9f0616",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/49/963a1d2b1489155bc9137ac5408b8cceb6c32b": "a8981e823226f49ec4b5fcfa241dca44",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5e/fa844c3c1188f788e1a3de9f713ee4756f5cf2": "e3d6cec959c04df240d8a8f1ef054836",
".git/objects/60/820929753cb13d30fbbcc64de0baab3873bb73": "602dbb3ce3d940acf8c21dea8ed243d3",
".git/objects/61/9a3ae86b59bc1f37f2d328bbd9720112db3768": "dfc8b47668938a7f080fdc9a66b362cc",
".git/objects/63/9832f30b5b52012197105edc5174404e8988fb": "f0bc444f8cb1b22a7a1cb634fb055b57",
".git/objects/65/970244593eb60139a3b12cc2e9b95d56fb3aed": "719af61503d8dfc90415c86b8385ca26",
".git/objects/67/b9e70fd45ac2c92fa59148d53ffe50d786f681": "3d9ceb5a712ea78ad646903f8c25d872",
".git/objects/69/95c983c7e2827c45c7a4644e61e9e0f4fa31e3": "452d55e88fcdf465937039464fcccaa7",
".git/objects/69/d7209f7b192f403862d7c92e34b257feddf119": "486ce4b8963483c042d5d185af280407",
".git/objects/71/ec14ff1da9613b84ec7fd8ff0d7e7dc66a96e1": "43bd640d7569dfa7aa53b737d99ce437",
".git/objects/75/b4517eb611c1311962ecc46b9e61fd498e2473": "5a6c9c1f2a8e9e6cf4bc3ba3587b9506",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/65190c00eae7e693705c565070d8b624e59f7c": "cb0d164959c39b3ac49160497f743f8c",
".git/objects/78/7a0b5ca4583a2bab1a2c25b56ca72fbbfc2a78": "52e165dc33389db78f4b44af682fb64e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/70089b72a97361a918c7779be92bb56c4d8f99": "9328d5cb8e4406c5944ce4de8f1e02ae",
".git/objects/82/4277bde3b6eb74b2f38bd5d01d1cdc3fdea2ae": "1f5c752ab8a45e28337774f2122a1231",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/94/dfb5d36c7503461908827138b85490d47427e1": "2738fdfdff7f21941f94cdfe80102392",
".git/objects/96/ee6bfecb5a31264c4d8510e0a876b0f4360ae3": "d46c2577f72eb6e60bd1ed705ad049db",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/397e9bdf4cee94a4f6cc4328611d1d17d6057e": "948c2d58df4845bb94785599a51278cb",
".git/objects/a4/5ed8e29ef53c2494006db0996feb172919ded4": "0de6310190d8c39e0cfa2d78280e104a",
".git/objects/a5/a26b0e5c1ba7e171bb0e84deec80e0154b449c": "66c073d2e7a9c62a48caf36b4ab59efa",
".git/objects/a8/eacfae2a86619470f7483a7b4c084160d97637": "5d78ac8d8f58c22c511c766879a0914f",
".git/objects/af/ac3af465c67a6527e2fa01f94a6693381c7c91": "c361bc173c49e7897667d8c62ee6d024",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/ba/883d7c6a1817b3605b62fe827be26a6022604e": "cf9c477eeb8a828242e7776a7fa59558",
".git/objects/bf/2d7e58e579186bb5be9fce9a22dafecb7ff4f8": "841020675153698c7faf8abeefaecb50",
".git/objects/c1/17bde43d2a160de464f5fe6c449041c920d007": "7ff1b997dc72f97f2472f594a0b86523",
".git/objects/c2/50c9b6f73a4041d7bf7ce99bd6449109a6b486": "91766f0ddcf67d66c0b320fa774abb47",
".git/objects/c6/9936db54edeb26288e44fbf702d573e3e459e4": "12b4c89e147242abc08b79e623c279f6",
".git/objects/c9/5f3ce3f9664e299fd27be508ba0228c98da9e5": "180e3ff419b473176a76ae41cf2cffc5",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/9efa487cdbe6279b15cc60760d323c8600ec86": "5740920f6441acca92efa53930d38c8e",
".git/objects/d4/0f0fd4235f343c556007e3454efbdb93fc9f97": "92400fa68a5710828ab8b0d24ffb24b0",
".git/objects/d6/cc43d41c3376b279f0d6f87224c538c6cf2307": "1345603d7447d04e867ab84f199ba304",
".git/objects/d8/dfbac795570fdfb6205813ba84c97f4608e73a": "3c8dc2ca453cce7937336b7d63a4c7a9",
".git/objects/db/de3dc14a2595698250d678be4537f96abeed46": "9205f1d84ba2a7c48e860a03371249c8",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/a1da91c47f25db8542ddeb2d348028656190a6": "38c80e28f29d221648bd6cb8f70a7280",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ed/f37fe01bee4183782a53b14befa83da3ace4a2": "f1bc52f8f139ab01f14a43eb891b4b12",
".git/objects/f3/28020548442a4613b3ad3dab65a256f26e4ec2": "e45aadfeb6e7604a1fe97fcd972639d8",
".git/objects/f6/8ae9ce5ea164366d729f32479d2730de3837e8": "f5a814061f74f99d929489048bb9bf3b",
".git/objects/f7/101faacbb4b500bb91551c993361581ac5615b": "25bb17af8c223971e18d97b08558343c",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/ORIG_HEAD": "25f7bdf13dfb1f3833ddb94405b54617",
".git/refs/heads/main": "f23e99e2c07b1c9e5104afa9d9f50a96",
".git/refs/remotes/origin/main": "f23e99e2c07b1c9e5104afa9d9f50a96",
"assets/AssetManifest.json": "61b401742f9f120fb589f0828000fb0c",
"assets/assets/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/Auth%2520Ui.jpg": "4bc861eba24be2d969e2d990c784feee",
"assets/assets/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/breezy.png": "bfb4b131a398b0425b05a4a340ea64c5",
"assets/assets/dashboard.png": "185db33eb9de1ff09f858cf01fd283a8",
"assets/assets/e%2520commerce%2520Coures%2520.jpg": "9c9acd77578272060587c21ddb3281f6",
"assets/assets/Fashion%2520week.jpg": "1be96017836996fa4e25c13d2712913f",
"assets/assets/fastfood.png": "b93729df743dcc5a60abe78b7290cea9",
"assets/assets/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/FOOD%2520COURES.jpg": "29c94f96b5b465b8be9843e41371e257",
"assets/assets/grocery.png": "b57bbd23043a8d24c5fe38d998055cf5",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/music.png": "0cc1ac4844c4f2f7724d230169e48646",
"assets/assets/my.jpg": "d04fe70837cbe9429c28308cd0cc6fdb",
"assets/assets/my.png": "05bf1a58705ab5c38c0288bd4d74acbd",
"assets/assets/news.png": "e149a1b0b27a359ecb2eee14545d8af6",
"assets/assets/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/splash.png": "06de42ecb8a3bd30adbc05870fd239d6",
"assets/assets/task.png": "6991868f5e14fa653896148190280e67",
"assets/assets/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/work.png": "88895650b9ccc69bd7ee9f07f700f572",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "863a5f32285ebd62b79520fffa71ece7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "4c53387bf284789ef081bd9c4dfaacf6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "19727aa4452e04f3fdf1ed1c3a306706",
"/": "19727aa4452e04f3fdf1ed1c3a306706",
"main.dart.js": "dc378d72a7ac3ce5ab83360e473b65e3",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
