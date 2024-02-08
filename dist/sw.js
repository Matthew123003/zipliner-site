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
    "revision": "ea876d640b79d4d9501a68f59e73bcd0"
  },
  {
    "url": "posts/2020-03-19-about-this/index.html",
    "revision": "a714babea2c9a1202b18c78ea4ffcc5a"
  },
  {
    "url": "posts/2020-03-20-getting-started/index.html",
    "revision": "4d58d5b82dd0eb56de6fe52b3517c985"
  },
  {
    "url": "posts/2020-03-22-example-post/index.html",
    "revision": "27293be2dd1b45df7bf203286e92ebc8"
  },
  {
    "url": "static/scripts/offline.js",
    "revision": "58055ef62a9e5bda8db6a4a388c8e0bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
