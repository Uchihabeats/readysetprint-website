# ReadySetPrint landing page

The static website source is in `src/` and is linked to the Vercel project `readysetprint`.

The deployed page references its six existing PNG assets from the immutable Vercel deployment that supplied this source snapshot. The repository can become fully self-contained by adding those original PNG files under `src/assets/` and restoring the relative asset paths; the Vercel file-download connector truncates these large binaries.
