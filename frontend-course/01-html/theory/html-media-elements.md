# Media Elements (Audio and Video)

## Concept

`<audio>` and `<video>` embed media without plugins. Both support `src` or `<source>` children for format fallbacks. Attributes like `controls`, `autoplay`, `loop`, and `muted` control playback. Always provide fallback content for unsupported browsers.

## Why It Matters

Native media elements work across devices, support accessibility (captions), and integrate with the browser's media controls. They replace Flash and plugin-based solutions. Proper use improves performance (preload, poster) and UX.

## Key Concepts

- `controls` – show play/pause, volume, etc.
- `autoplay` – often requires `muted` (browser policies)
- `<source>` – multiple formats for compatibility
- `<track>` – captions/subtitles (WebVTT)
- `poster` – thumbnail for video before play

## Code Example

```html
<video controls width="640" poster="thumbnail.jpg" preload="metadata">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English" />
  <p>Your browser doesn't support video. <a href="video.mp4">Download</a>.</p>
</video>

<audio controls>
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.mp3" type="audio/mpeg" />
  <p>Your browser doesn't support audio.</p>
</audio>
```

## Under the Hood

Browsers decode and render media natively. Format support varies (MP4/H.264 widely supported; WebM/VP9 in most modern browsers). Autoplay is blocked unless video is muted—browsers prevent unexpected sound.

## Common Mistakes

- Relying on a single format (provide fallbacks)
- Autoplay without muted (will be blocked)
- Missing captions for accessibility
- No fallback for unsupported browsers

## Best Practices

- Provide multiple formats (WebM + MP4 for video)
- Add captions with `<track>` for accessibility
- Use `preload="metadata"` or `preload="none"` to save bandwidth
- Include fallback content or download link

## Summary

Audio and video elements embed media natively. Use source for format fallbacks, track for captions, and provide fallback content. Autoplay usually requires muted.
