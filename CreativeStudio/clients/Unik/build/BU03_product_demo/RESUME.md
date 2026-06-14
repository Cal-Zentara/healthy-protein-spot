# BU03 Product Video — Resume Notes (June 13, 2026)

## What it is
2-clip product video for BU03 pull-on uniform pants. 16:9 WIDE (Amazon). ~12s per clip, ~24s total + end card. Pants are the hero. Recess + soccer concept.

## Approach (LOCKED)
- Feed the 4 KID PHOTOS directly to Seedance as @Image1-4. NO storyboard contact sheet (that caused a moving-sheet opening + zipper hallucination).
- Tests: `seedance_2_0 --mode fast` (18 credits), 480p, 16:9, --duration 12. Finals: `--mode std` + 720p.
- Images: nano_banana_2. CLI only, never MCP. Cost-check first (free).

## Kid refs (on Desktop)
- @Image1 navy: `C:/Users/Aesth/Desktop/BU03 Blue 1.png` (white boy)
- @Image2 grey: `C:/Users/Aesth/Desktop/hf_20260614_004308_582cd7c1-36bc-4b91-93a6-6f6680e27c53.png` (Black teen — diversity swap)
- @Image3 green: `C:/Users/Aesth/Desktop/HunterGreen.png` (Asian, BLACK polo — Cal said LEAVE AS IS)
- @Image4 khaki: `C:/Users/Aesth/Desktop/hf_20260613_211456_41531058-1782-4025-a71a-f3d9a3d9c49e.png` (white boy)

## Audio (drumline, in this folder)
- `BU03_drumline_full_24s.mp3` — real track, marry over final 24s
- `BU03_drumline_clip1_0to12.mp3` — @Audio1 for clip 1
- `BU03_drumline_clip2_12to24.mp3` — @Audio1 for clip 2

## CLIP 2 — DONE / LOCKED
- Final = `clip2_combined_7plus5.mp4` (also Desktop `BU03 Clip2 Combined.mp4`). 864x496, 12s.
- = Test5[0 to 7s] + Test4[7 to 12s], hard cut, drumline laid over.
- one-kid-per-shot SOLVED the extra-kid clone. Beats: navy solo soccer kick → grey kneel-trap → green dribble → grey/khaki close detail → navy charges camera (others far back, exactly 4).
- Prompt: `clip2_range_demo_prompt.txt` (one kid per shot version).

## CLIP 1 — LOCKED to 3 beats (June 13 evening)
- Concept: navy boy SOLO at recess, building to the play. Pants hero.
- Prompt `clip1_fit_demo_prompt.txt` (~2,687 ch): burst out the doorway → ONE quick waist tug (the single pants close-up) → run flat-out to the monkey bars and leap up to grab the first bar. No ball, no middle "crouch/cut" (a crouch mid-run read as a freeze — "mid stop").
- Best draft: `clip1_clean_test4.mp4` (navy ref + `clip1_audio_first12.mp3`). Cal: "the flow is good enough."
- Audio fed = first 12s of Desktop `BU03 Drumline 24s.mp3`, cut to `clip1_audio_first12.mp3`. (Raw gen audio is the model's own — always marry the real track in post before showing Cal.)

## End card — BUILT + LOCKED (reusable for ALL Amazon videos)
- `../../assets/end-card/unik_amazon_endcard_doodle_16x9.mp4` (1820x1024, 3s, silent). Cream card + blue "unik"/"Built for the School Day"/"available at amazon" + 4 blue doodles (pencil TL, apple TR, open book BL, ruler BR) popping in with boil.
- Build files: `../../outputs/endcard-doodle/` (index.html + render.cjs + frames). Re-render: `node render.cjs full` then stitch at 30fps.
- For this 480p draft I scaled it to 864x496 (`endcard_doodle_864.mp4`). For the 720p final use the 1820x1024 master scaled to 1280x720.

## Current full draft
- `BU03_full_doodle_endcard.mp4` (also Desktop `BU03 FULL doodle endcard.mp4`) = clip1 + clip2 + doodle end card, 27s, drumline (`drumline_27s.mp3`) over the whole thing. Sent to Thuy + Ben June 13.

## Assembly plan (after both clips final at 720p)
1. Strip gen audio from each clip.
2. Hard cut clip1 + clip2 (24s).
3. Marry `BU03_drumline_full_24s.mp3` over the whole thing (cuts on the beat).
4. Append EndCard (fitted to 16:9).
5. unik watermark (locked FFmpeg filter in client CLAUDE.md): top-right, 74px, 0.5 opacity, white removed, from t=1.2s. Logo `assets/logo/unik_logo.png`.
6. Deliver final + copy to Desktop.

## Hard rules reminders
- Never gen without Cal's explicit "go/run it/fire it". Writing prompts != permission.
- Open every gen + copy to Desktop + log to tracker (pipe --json to node tracker/log-from-json.js).
- Kid safety: no isolated rear/backside closeups or low-up-the-seat angles; full-body eye-level walk-aways OK. No skirt lifts (N/A, pants).
- No held camera stare; kids always in motion; no row/lineup; no zipper/button/belt/denim; exactly 4 kids.
