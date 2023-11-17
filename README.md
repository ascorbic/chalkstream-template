<div align="center">
  
<img src="https://github.com/ascorbic/chalkstream/assets/213306/00028368-0adc-4665-93b4-f74612c4a96a" width="128" height="128" alt="Chalkstream" />

# Chalkstream

## Serverless live streaming

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/ascorbic/chalkstream-template"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

</div>

Chalkstream is an open source, self-hosted live streaming "server" that runs on
serverless edge functions. You can stream right from the browser, with a public
link to share with your friends. It uses Netlify Edge Functions to ingest and
serve HLS streams, and the chunks are stored in Netlify Blobs. Control your own
data.

## How it works

HLS is a streaming protocol created by Apple that doesn't require a special
server to stream. It works by splitting the video into small chunks, and serving
them in a playlist. Chalkstream does this encoding in the browser using a
WebAssembly build of FFmpeg. This is a lot quicker if your browser natively
supports H.264 (most except Firefox). Otherwise your computer needs to be quite
fast if it is to handle real-time encoding. The chunks are then uploaded to
Netlify Blobs. Netlify Edge Functions handle the ingest and generating the
dynamic playlist.

**[See a demo](https://chalkstream-astro.netlify.app/)**

When you load the broadcast page it generates a random stream ID, and once you
start streaming you can share a page with the live stream. HLS streams can be
played in any modern browser, either natively or via Media Source Extensions and
Hls.js. Players such as Video.js and react-player make this easy - see
[the demo sites](https://github.com/ascorbic/chalkstream/tree/main/sites) for
examples.

## Usage

This template is an Astro site, with a streaming page and a playback page. There
is no authentication. Anyone with the link can stream to the site, and anyone
with the link can watch the stream. You can set up your own access control, or
use the Netlify Identity widget to add authentication: see
[the Netlify docs](https://docs.netlify.com/visitor-access/identity/) for more
information on enabling identity, then see
[the Chalkstream docs](https://github.com/ascorbic/netlify) for details on
adding auth to the streams.

### Deploying

The easiest way to deploy is to click the "Deploy to Netlify" button above.
Otherwise clone this repo and then locally use the Netlify CLI to deploy.

### Local development

To run the site locally, you'll need to install the Netlify CLI:

```bash
npm install -g netlify-cli
```

Then run the following commands:

```bash
netlify dev
```

This runs the Astro dev server, as well as the local Netlify edge functions and
blob store server.

### Copyright

Copyright Matt Kane 2023. Chalkstream is released under the MIT license.
