/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

importScripts(
  "/static/scripts/worker.js"
);

workbox.core.setCacheNameDetails({prefix: "emergency-site"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "ef42fc8620d663a99f72f71604b65131"
  },
  {
    "url": "posts/2020-03-19-about-this/index.html",
    "revision": "34cecc943187e4ed7a0ad9351a743da2"
  },
  {
    "url": "posts/2020-03-20-getting-started/index.html",
    "revision": "3f1c2c55f92bc95ff8d454c0f7809672"
  },
  {
    "url": "posts/2024-02-08-starting-post/index.html",
    "revision": "2ef525e2cc578d043274a868529ac7cf"
  },
  {
    "url": "static/scripts/offline.js",
    "revision": "58055ef62a9e5bda8db6a4a388c8e0bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
