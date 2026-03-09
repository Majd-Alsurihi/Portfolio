

## Problem Analysis

The glass blur CSS is actually identical across all sections now (all use `.glass-surface`). The real issues are:

1. **Ugly body background**: The warm orange/yellow radial gradients added in the last edit look bad and need to be removed.
2. **Why blur looks invisible on lower sections**: `backdrop-filter: blur()` only blurs content *behind* the element. The `ParticleBackground` canvas (z-0) provides visual texture, but with only ~80 small particles spread across the full page height, lower sections have very little behind them to blur. The hero looks good because particles cluster near the top and the profile photo adds contrast.

The navbar looks blurry because the hero content (text, image, particles) sits behind it, giving the blur something to act on.

## Solution

Two changes to fix this properly:

### 1. Replace the body background
Remove the warm radial gradients entirely. Replace with a clean, neutral textured background using soft cool/neutral tones that provide enough visual variation for `backdrop-filter` to be perceptible across the full page — without being "warm" or orange.

```css
body {
  background:
    radial-gradient(ellipse at 20% 10%, rgba(200, 200, 210, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 30%, rgba(180, 190, 210, 0.2) 0%, transparent 40%),
    radial-gradient(ellipse at 40% 60%, rgba(210, 210, 220, 0.25) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(190, 195, 210, 0.2) 0%, transparent 45%),
    linear-gradient(180deg, #f8f8fa 0%, #f0f0f4 50%, #f5f5f8 100%);
  background-attachment: fixed;
}
```

### 2. Boost ParticleBackground visibility
Increase particle count and canvas opacity so there is more visual texture behind every section for the blur to act upon. This is the critical piece — without background texture, blur is mathematically invisible.

- Increase particle count from `~80` to `~120`
- Increase canvas opacity from `0.8` to `1.0`
- Slightly increase particle size range

### Files to edit
- `src/index.css` — replace body background gradients
- `src/components/ParticleBackground.tsx` — boost particle density and opacity

