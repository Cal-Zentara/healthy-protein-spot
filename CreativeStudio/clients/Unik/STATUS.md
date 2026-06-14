# STATUS — UNIK (client)

*Last updated: 2026-06-14*

**June 14 — COPYWRITING STRATEGY built + locked, and the first repurposed IG Reel made from the Amazon video. Long teaching session: Cal learning copywriting, applied live to UNIK.**

- **Copywriting strategy LOCKED** → new doc `docs/production/copywriting-strategy.md` (also linked in CLAUDE.md Doc Map + Next Steps #0). Built by applying the Sabri playbook (`../../COPYWRITING-PLAYBOOK.md`) + the customer-voice research (`docs/facts/customer-voice-research.md`).
- **The spine: "buy once, done for the year."** Durability, from the #1 mom pain (re-buying pants in November when knees blow out). One spine ridden the WHOLE back-to-school season (mid-June to late August), NOT changed weekly — different hooks underneath it. Promise stays narrow + sharp; the PRODUCT spreads across the whole line (pants "busted knees", polo "still white in May", dress "survived every recess"). ⚠️ Condition: confirm with Thuy/Ben the pants actually hold up before going all-in.
- **Repurposing system locked:** one video → ~5 posts by changing the cut / shape / format / hook. Proven today on the BU03 Amazon pants video → a Facebook widescreen post + a finished vertical IG Reel, zero new credits. (Memory: `feedback_repurpose_one_video.md`.)
- **BUILT: the Monday Week 2 pants durability IG Reel.** `build/BU03_product_demo/clip1_FULL_reel_v3.mp4` + Desktop `UNIK Pants IG Reel FINAL.mp4`. Center-cropped clip 1 to vertical 9:16 (footage is single-kid-centered, crops clean), animated school-paper hook ("Busted knees by November? Not these pants."), unik watermark (74px, Cal kept it as-is), blue vertical end card (`unik_end_card.png`), drumline across all 15s with fade. 16:9 Amazon cut → Facebook; this vertical → IG (separate surfaces don't compete, researched).
- **NEW reusable tool: the animated hook-overlay engine** at `outputs/hook-overlay/` (index.html + render.cjs). Cream ruled notebook paper + handwritten question + blue marker that draws a circle around the answer + tick in the red margin + apple doodle — matches the doodle end card. Built as code (Playwright transparent frames → ffmpeg overlay), zero credits, reskinnable for any post. Cal rejected the flat ffmpeg text box ("a 4th grade youtuber can do this") — always build hooks with this engine now. (Memory: `reference_hook_overlay_engine.md`.)
- **Research done (5 agents each, 2 runs, Brave, MEDIUM reliability — marketing blogs not Instagram's own data):** (1) a widescreen FEED post + a vertical REEL the same day do NOT compete (separate ranking surfaces) — post both; no real penalty for posting 2x/day, only mild attention-split for two of the SAME format. (2) pros' apparent "volume" is mostly Stories + repurposing, not 5 fresh posts; small-account sweet spot is 3-5 strong posts/week + light Stories; steal batching + repurposing + engagement-over-follower-count.
- **Week 2 sharpened (frame stays — 4 reels + found message):** Mon pants durability (BUILT) · Tue cute flip (keep, add school-paper hook) · Wed polo re-angled to "Still white in May" · Thu POV 7:42am (keep) · Fri found message (keep). Clip 2 "colors" reel banked for Week 3. Add a light Stories layer all week.
- **Credits this session: 0** (all FFmpeg + code; no gens).
- **NEXT:** Thuy/Ben durability gut-check → build Tue flip + Wed polo reels (reuse the hook engine) → cut clip 2 "colors" reel → lock sharpened Week 2 into the live roadmap.

---

*Last updated: 2026-06-13 (evening)*

**June 13 (evening) — BU03 clip 1 reworked to a clean 3-beat run. Reusable Amazon doodle end card BUILT + LOCKED. Full 27s draft cut, sent to Thuy + Ben.**

- **Clip 1 LOCKED to 3 beats (most natural recess move wins):** burst out the doorway → one quick waist tug (the single pants close-up) → run flat-out to the monkey bars and leap up to grab the first bar. Killed the mid-clip "crouch/cut" beat — dropping into a crouch mid-run read as a freeze ("mid stop"). Lesson: every middle beat that isn't pure forward motion risks reading as a stop; a kid just running to a target is the most natural and most reliable. Prompt at `build/BU03_product_demo/clip1_fit_demo_prompt.txt` (~2,687 ch, navy boy solo, no ball). Best draft: `clip1_clean_test4.mp4`.
- **Clip 2 stays LOCKED** (one-kid-per-shot combine, `clip2_combined_7plus5.mp4`). One kid per shot solved the extra-kid clone for good.
- **Audio truth re-confirmed for Cal (he kept hearing "wrong audio"):** the raw Seedance test plays the model's OWN auto-generated soundtrack, never your track. @Audio1 only shapes the pacing during gen. The real drumline is married on in FFmpeg post. Now I marry the real track onto every test before sending so Cal judges with correct audio. Audio fed = first 12s of `C:\Users\Aesth\Desktop\BU03 Drumline 24s.mp3`, cut to `clip1_audio_first12.mp3`.
- **⚠️ REUSABLE AMAZON DOODLE END CARD — BUILT + LOCKED (June 13).** Cal's cream card ("unik" + "Built for the School Day" + "available at amazon") extended to 16:9, with 4 hand-drawn blue doodles popping in around the text (pencil top-left, apple top-right, open book bottom-left, ruler bottom-right) using the doodle-reel engine (HTML + boil + Playwright render). ZERO credits. Saved to `assets/end-card/unik_amazon_endcard_doodle_16x9.mp4` (+ still `unik_amazon_endcard_card_16x9.png`); build files at `outputs/endcard-doodle/`. Documented in client CLAUDE.md as the end card for ALL Amazon/widescreen videos.
- **Full draft cut delivered:** `BU03 FULL doodle endcard.mp4` on Desktop — clip1 (12s) + clip2 (12s) + doodle end card (3s) = 27s, drumline over the whole thing, fades out. Cal is sending it to Thuy + Ben for opinions.
- **Credits this session: 54** (3 Seedance fast 480p 12s clip-1 tests at 18cr each). End card + all assembly = 0 credits (code/FFmpeg).
- **NEXT:** get Thuy + Ben notes → 720p std finals of both clips → drop the full-res (1820x1024) end card in → strip gen audio, hard-cut clip1+clip2, marry full drumline → unik watermark → deliver + Desktop copy.

---

*Last updated: 2026-06-13*

**June 13 — BU03 product video reworked through a long iteration with Cal. Landed on GROUNDED ACTION at recess. Music made + cut. Two new studio hard rules.**

- **Where it landed after many passes:** a fast, energetic PRODUCT video, pants as hero, action GROUNDED at recess. (A kid jumping in an empty void read as fake AI; grounding it in a real place with a real reason fixed it.) Look = "clean and real": bright even daylight, TRUE accurate color, real kid, not glossy AI, not posed. Dropped the old "documentary / film grain / warm available light" language because warm uneven light shifts the pant colors, and color is the whole point (esp. clip 2). Both prompts overwritten + saved at `build/BU03_product_demo/`, ~2500+ chars each. The June 12 "calm version / boring / escalation pending" note below is SUPERSEDED.
- **Clip 1 (`clip1_fit_demo_prompt.txt`, ~2507 ch) — younger boy, NAVY, recess playground.** 4 beats: pull-on waistband snap → sprints onto the blacktop → leaps off the play-structure step (lands, waistband holds) → crouches to grab a ball and springs up (stretch/recover) → skids to a stop, hands in pockets, full clean read.
- **Clip 2 (`clip2_range_demo_prompt.txt`, ~2525 ch) — THREE friends at recess, each a different color (green/grey/khaki).** Was one kid morphing colors; Cal agreed that's weak (a fast layup is the worst moment to read a color). Now: 3 boys crouched at a start line (the three colors clear in a row = the color display) → explode into a sprint → one goes up for a layup → all three skid to a stop together. **Cal is generating 2 MORE kids himself** (for grey + khaki; the teen ref wears green). Kid spec given to him: cute, ages ~8-12, slim/average build (NO husky — it's a product video), face must match body/age (no creepy old-face-on-little-body), boys, varied looks. The navy hero (clip 1) stays solo.
- **Music DONE.** Cal made the track in Suno (retro funk, his pick from style prompts I wrote): `C:\Users\Aesth\Downloads\Chrome Dance Floor.mp3` (90s). I cut it (saved in the build folder): `BU03_audio_full_24s.mp3` (continuous track to marry over the final assembly), `BU03_audio_clip1_0to12.mp3` + `BU03_audio_clip2_12to24.mp3` (the two @Audio1 feeds, one per clip).
- **Cat & Jack research (5 agents).** Target-exclusive ($3B, #1 US kids brand, no standalone ads — Cal noticed this in the Ad Library). They run TWO video types: (1) clean PRODUCT-PAGE video = model on grey + on-screen TEXT feature callouts + logo, calm by design, works muted (the "boring" one Cal found); (2) high-energy BRAND TV = kids dancing to pop music. Messaging order: fun → value → durability (their 1-yr "made to last" guarantee is the signature). Reframing insight: AI video is WEAKEST copying a clean studio shoot (looks fake), STRONGEST at grounded real action — so lean into grounded action, not a fake studio.
- **TWO new studio CLAUDE.md HARD RULES locked (June 13):** (1) every video prompt comes with a BEAT BREAKDOWN stated SEPARATELY for Cal, NEVER written into the gen prompt (no "Beat 1 / HELD" labels — the prompt stays clean cinematic prose). (2) Every ACTION must be GROUNDED in a real place with a real reason — floating action in a void reads as fake AI.
- **NEXT (nothing generated yet — Mon June 15 was the BU03 deadline):** Cal sends the 2 new kid refs → set up gen (clip 2 = 3 kid refs + 3 pant flats; clip 1 = navy boy + navy flat) → 480p 16:9 tests first → Cal approves → 720p finals → strip gen audio, hard-cut clip1+clip2, marry `BU03_audio_full_24s.mp3` over the whole thing (cuts on the beat, librosa) → unik watermark + end card. Optional post text callouts (Cat & Jack style, pulled from the live listing + Thuy-approved).

---

*Last updated: 2026-06-12 (morning)*

**June 12 (evening) — BU03 reframed as a PRODUCT video (Thuy: band style is content, not product). Music workflow fixed.**

- **Thuy's call: the band/auditorium style is a CONTENT video, NOT a product video.** Pivoted to a true product demo for the pull-on pants. TWO clips, 12s each, WIDE 16:9 (for Amazon), two boys Cal supplied (younger boy white-polo/navy, Asian teen black-polo/green), four flat pant photos (navy, grey, khaki, green) as refs. ALL four colors must show.
- **Product-video research (4 agents, Brave): the format is the SENSORY DEMO** — feature → fit-in-motion → detail closeup → proof → CTA, built for MUTE (68% watch muted, 60% drop after 30s). Competitors (French Toast, H&M) don't make their own product videos — clean brand demo is an open lane.
- **TWO prompts WRITTEN + saved to `build/BU03_product_demo/`:** `clip1_fit_demo_prompt.txt` (2546 chars — navy, waistband pull-on → hallway walk → desk sit/bend) and `clip2_range_demo_prompt.txt` (2638 chars — teen, green→grey→khaki color swaps in one continuous walk). Both pants-as-hero, waist-height framing, @Audio1 sound block. NOT generated.
- **⚠️ Open: Cal called the calm demo "boring." The SAVED prompts are still the calm version.** Proposed escalation "One school day, zero mercy" (clip1 races the bell; clip2 = stairs two-at-a-time / doorframe jump / [drop the basketball-catch beat, highest gen-risk] → step out school doors as the durability payoff). Rated 7.5/10 (AI-risk 6 — fast motion smears). Awaiting Cal's go before rewriting the prompts to this energy. Still 100% product, just not lifeless.
- **DATA VALIDATES THE PRODUCT VIDEO (Meta Business Suite screenshot, last 90 days, June 12):** the single best post in the window is the June 8 "Unik pull on pants. Comfy elastic" PRODUCT reel — 448 reach, 736 views, 121 3-sec views. Beats everything. Product reels cluster high/steady (girls polo 320, white shirt 294, safari 259). Found messages are flatlining (today's "Be honest" got 2 IG / 3 FB; bus-stop 10-15). Lesson: product reels = reliable reach winner, comedy = shares, found message slot needs rethink.
- **MUSIC WORKFLOW researched + locked (see `MUSIC-WORKFLOW.md`, new file).** Re-checked after Cal pushed back: Higgsfield users with "baked-in music" use MUSIC-FIRST from an outside tool (Suno), uploaded as @Audio1, then VIDEO is shaped to it — confirmed by Higgsfield's own K-Pop case study. Seedance does NOT compose usable music to follow. Rule now hard-locked in studio CLAUDE.md + memory (`feedback_music_in_prompts.md`): never describe music in a prompt, feed @Audio1 + sound block at end, marry real track in FFmpeg post, sync cuts 1-2 frames BEFORE the beat (librosa for beat times). Hall Pass Bounce is the planned track.

---

**June 12 (evening) — Meta token DISCONNECTED at Cal's request. Stats scripts deleted.**

- **Cal asked to disconnect the Meta token connected to his account. DONE.** Deleted `.env` (held UNIK_PAGE_TOKEN) plus the 5 Meta scripts: `fb-stats.ps1`, `ig-stats.ps1`, `ig-deep2.ps1`, `ig-followers.ps1`, `check-token.ps1`. `tt-stats.ps1` (TikTok, not Meta) left in place. Nothing local can reach Meta now.
- **No more automated Meta stats pulls.** For the stats-first rule going forward: Cal screenshots Meta Business Suite (published-posts screen) and we read the numbers off that. Do NOT try to run the deleted scripts. Buffer MCP still works for what posted (not reach).
- **Optional, Cal's to do:** revoke the "unik" app (ID ...666845) at facebook.com → Settings → Business Integrations to fully scrub it Meta-side. Not urgent — token's gone so the app is inert.
- **Posting via Buffer is untouched** — Cal scoped this to the tokens only, not posting.

---

**June 12 (afternoon) — Week 2 rebuilt as REEL WEEK. Pants comedy concepts banked.**

- **New cadence locked by Cal: 4-5 reels a week, different format each, always one true product reel.** Week 2 on the live roadmap (commits 8239364 + 15a3dea, pushed): Mon BU03 band video, Tue Flip haul reel, Wed polo hallway product ad (flagship polo's first own ad), Thu POV 7:42am chaos reel, Fri found message (image). Uniform-count topic bumped to late July haul window. Report card graphic (made) = weekend bonus.
- **Auditorium master prompt WRITTEN, saved to `build/BU03_master_prompt_v2_auditorium.txt`.** Changes from v1: auditorium stage block (worn wood, red curtain, stage lights, stage lip), ages stated on kid 1 (age 5 dancer) and kid 2 (age 7 bass), blanket body-matches-face line. Cal is building the two new kid refs HIMSELF; when done, swap into reference set. NOT generated yet.
- **Trend research (5 agents, Brave): mostly noise. Two keepers:** (1) reality TV dramatization trend — dramatic reality-show audio over mundane footage, see @bomanizer on TikTok, perfect skin for the Thu POV reel; (2) before/after pants Sept vs June — sensible but NO viral precedent in kids clothing, it's a judgment bet. Cat & Jack virality = warranty hack, not transferable.
- **Pants comedy concepts banked (convenience + peace of mind, emotion = CALM, all listing-factual).** Passed the "delete the product, does the joke die?" test: **"We have five more"** (kid comes home destroyed, mom calmly opens drawer of 5 identical pants, under $15) and **"3-second tutorial"** (how to dress your kid: pull on, done, awkward empty 12 seconds). Borderline: "The Silence" (silence = disaster, but kid dressed himself — needs hard text hook). Rejected as not product-obvious: Calm Mom chaos, Dad Handoff. Wild-spectacle bank: Testing Facility (NASA lab tests pants, deadpan kid scientist), nature-documentary recess, pants-outlive-everything year montage, mom's slow-mo mud puddle nightmare.
- **Thuy offered to pay Cal's $850/yr AI subscription** ("we are family") — Cal deferred to keep the future pay conversation clean. Her quote, proof of value for that conversation: "you are spending real time and real efforts. I think you getting involved had already helped me focus more on Unik's online present." (WhatsApp, June 12.)

---

**June 12 (midday) — BREAKTHROUGH: first shares ever. Squirrel reel = new best post.**

- **Squirrel comedy reel (June 11) got 13 SHARES on Instagram** — the account's first shares EVER (the breakthrough metric from the stats-first rule). Also 295 reach IG + 294 reach FB + 258 on the safari dress crosspost day. Source: Meta Business Suite published-posts screen, June 12. Old best-ever reach was 172.
- **Lesson locked: wild absurd spectacle + confident kid + casual product tie-in caption = the share engine.** Deadpan alone gets reach (durability, Egypt); WILD gets shares. The squirrel reel was the wild-ugc format.
- **Full Week 1 leaderboard (Meta Business Suite, June 12, FB+IG combined):** squirrel reel 589 (295 IG + 294 FB, 13 shares); Egypt meme 460 (334 FB + 126 IG); durability reel 448; safari dress 258; bus stop found message 25 (15 IG + 10 FB); Stain WANTED carousel 21 (9 IG + 12 FB). Reels are 10-25x everything else. Statics still near zero (Friday post: 2-3 reach in first hour, early).
- **Thuy is posting her own AI videos now** — a Kling motion-control video (FB, June 12 4:12pm) and a dancing cat "Friday vibes" post (FB+TikTok, with hashtags). She's using her own subscription. Roadmap posts and her posts now share the feed.
- Tracker Google auth FIXED (read test passed June 12).

---

**June 12 (morning) — Thuy's BU03 verdict: content video, not product video. Re-gen direction LOCKED.**

- **Thuy reviewed the BU03 band draft on WhatsApp.** Not suited as a product video (she'll handle product videos herself); she likes the concept and wants it salvaged as a fun CONTENT video. Cal owns content.
- **Locked changes (one go, per Cal):** (1) fix KID 1 only — he reads as a "gremlin" / old face on a little body; make him cuter with body proportions matching the face, state the age explicitly in the prompt. (2) KEEP the chubby/husky kid — Thuy: "he looks the most interesting in the video." (3) New setting: **school auditorium stage look** (Thuy's pick, Cal agreed "sounds fun"). White background plan is dead for this video.
- **New hard rule saved to CLAUDE.md:** no husky kids in PRODUCT videos (separate SKU, BU03H = Husky), allowed in content videos; no creepy small kids ever — always state age + proportionate bodies. Thuy also OK'd using flat product photos to generate model pictures.
- **NEXT:** rebuild the master frame (auditorium stage + fixed kid 1 + same cast otherwise) → 480p clip re-tests → Cal approves → finals. Nothing generated yet, waiting on Cal's go.
- **Friday post status:** ready to go at 11am Pacific, but ⚠️ Meta API is having an outage this morning (Buffer status page: FB/IG/Threads publishing + analytics affected, ongoing 2hrs as of ~9am). Check status before posting; push later in the day if still down.

---

**June 11 (late night) — Friday post built and ready. Hook shapes saved. ⚠️ Meta token LOST.**

**June 11 (late night) — Friday post built and ready. Hook shapes saved. ⚠️ Meta token LOST.**

- **Friday June 12 post READY:** "You're a little excited too" community static. Image exported to 1080x1350: Desktop `UNIK-Friday-Excited-Post.png` + `ZentaraHQ/clients/Unik/graphics/question-cover-final.png`. Trimmed caption locked in `caption-pack.md` (short rule + bracket tags, no hashtags). Post 11am Pacific, all 3 platforms. Judge on comments.
- **⚠️ Meta page token GONE — stats scripts broken.** Something overwrote `.env` (only BUFFER_ACCESS_TOKEN survives plus a stray fragment line). `UNIK_PAGE_TOKEN` is missing, so fb-stats / ig-deep2 / ig-followers all fail with "Provide valid app ID". The token was permanent but only existed in that file; no backup found anywhere. FIX: regenerate via Meta Graph API explorer / app secret exchange (same June 10 process), then re-add the line to `.env`. Until then, Buffer MCP is the only stats source.
- **Five hook shapes stolen + saved** (from a viral posting schedule Cal found): Expectation vs Reality, Before/After, Mistakes, POV, Unpopular Opinion — each with UNIK applications. In `docs/production/mom-attention-playbook.md` + new card on the live roadmap (commit 1fece60, pushed).
- **Next reel planned (Week 2 Monday, June 15): "The Flip" deadpan haul.** Mom films a haul flat voiced ("haul time. it's uniforms."), pulls the polo out like a tax document, then the flip: "okay wait" — kid walks by actually looking sharp, her deadpan cracks half a second. 15s, 9:16, text hook baked in: "back to school haul (it's uniforms)". Prompt NOT written yet, nothing generated.
- **BU03 band video social caption picked by Cal** (in caption-pack.md Week 2): "World tour: bedroom, classroom, recess. Easy pull on, soft elastic waistband, six colors. unikusa.com, link in bio." Plan: Thuy approves draft → 720p final + 9:16 vertical version → posts as Week 2 product slot (wide to FB, vertical to IG/TT).

---

**June 11 (evening) — BU03 Amazon video BUILT, draft done. The kid rock band.**

- **Thuy's BU03 pants video (Amazon, wide, 25s, music only, no VO) built end to end in one session.** Final draft: `8 - FINAL with endcard.mp4` on Desktop (+ `build/BU03_FINAL_with_endcard.mp4`). 27s total: rock star entrances (15s, 6 kids, 6 different actions) → hard cut on the riff → real kid band performing (10s) → 3s animated end card (Built for the School Day, available at Amazon), cropped to fill wide, no pads.
- **Cast:** 6 kids x 6 pant colors (Navy 5yo dancer, Black 7yo bass, Grey 8yo guitar, Blue 10yo floor guitar, Khaki husky-fit 10yo drums, Forest Green 14yo lead guitar). Reference photos in `assets/products/BU03/` + Desktop `BU03 Colors`.
- **Winning workflow (reuse):** stock band photo as staging reference → nano_banana_2 recreates it with the cast (master frame) → 6-panel storyboard from the master → Seedance with master as --start-image + storyboard + cast refs. Master: `build/BU03_master_v3.png`, board: `build/BU03_storyboard_v11.png`.
- **Audio truth discovered (now a CreativeStudio hard rule):** Seedance does NOT use an attached audio file unless the prompt names it (@Audio1), and prompt music descriptions make it compose its own track (proved with correlation ~0). Final audio: Suno "Tunnel Run" 0-15s, crossfaded 1s into clip 2's Seedance-generated band audio (bass-boosted + compressed to hit harder), audio runs out naturally over the end card.
- **New hard rules locked today (CreativeStudio CLAUDE.md):** no groups of 2+ AI characters just walking together (cheesy ensemble tell); test in the SAME aspect ratio as the final (480p 1:1 and 16:9 cost the same 22.5cr); Seedance @Audio1 rule. Word traps logged: "husky" → dog head, "denim" → jeans, "air guitar" → real guitar. Never name a thing you don't want rendered; point at reference photos instead of naming shades.
- **Spend:** ~131.5 credits total (105 video tests, 26.5 images across 14 storyboard/master iterations).
- **NEXT:** send draft to Thuy on WhatsApp for approval BEFORE any 720p final gens (~87.5cr more). Open questions: watermark on an Amazon listing video (redundant?), whether 480p is sharp enough for Amazon or finals needed. Also: tracker Google auth broken (invalid_grant, log-from-json.js fails) — needs token refresh; someone (Thuy/Ben) has a daily 8pm wholesale-blouse auto-post running to TikTok via Buffer, flag to them; squirrel reel TikTok stats still syncing (zeros at 5hrs).

---

**June 11 — Safari dress posted. Squirrel comedy reel posted. TikTok analytics unlocked.**

- **Two posts today:** (1) Safari belted dress Facebook Reel via Meta Business Suite — caption updated from live product page: "Unik belted safari dress. 100% cotton, removable belt, button front. Khaki or navy, sizes 4 to 12. Shop at unikusa.com, link in bio." (2) Squirrel comedy reel — AI kid riding a squirrel at a skate park, white shirt, fish-eye lens. Caption: "I swear kids are wild these days when they feel confident with our school uniforms." Cal wrote the tie-in naturally.
- **TikTok analytics now live via Buffer MCP.** Script built: `tt-stats.ps1`. Last 4 days: bus stop 149 views/1 like (best TT post), Egypt meme 36 views (still early — posted 2hrs before pull), Stain WANTED 89 views/78 reach.
- **Buffer MCP limitation confirmed:** API requires a hosted video URL — can't upload local .mp4 files. Video scheduling must use Buffer web app. MCP is useful for analytics + text posts.
- **New permanent asset:** `assets/logo/unik_logo_transparent.png` — white background removed. Use this for all future overlays on photos or dark backgrounds (not the original `unik_logo.png`).
- **Safari dress product facts confirmed** from live unikusa.com listing: removable belt, button closure, 100% cotton, sizes 4-12, $16.99, free shipping.

---

**June 10 (late night #2) — ROADMAP AUDITED against the comedy hybrid + mom rules. Calendar rebuilt and pushed (commit 1e47bd0).**

- **Cal asked: "is there anything on the roadmap that doesn't serve us?"** Went through all 10 weeks one by one. Four problems found and fixed:
- **1. Carousels** — every week had one, data says 6 reach / 0 saves. Cal's call: KEEP them, once a week max, and slide 1 must have a strong scroll-stopping hook (bold claim, number, or question). Weeks 6 + 8 had TWO carousels each — the second ones (polo color lineup, full product range) converted to reels (color flip reel + haul reel).
- **2. Trust slot killed as a standalone post.** Week 1 brand intro → review proof static ("14,000+ reviews. 4.2 stars." on a product photo — allowed to just convert). Unmade weekly trust singles → Comedy Reel 2 slots: the review IS the script, read deadpan (mom reads a real review flat while the kid stress tests the uniform). 20-year story moved to Week 4, mom-framed, never a press release. ✓ Made trust graphics (report card, yearbook) kept — they're free.
- **3. Repost slots (Weeks 6, 7, 8, 10) depended on customer photos that don't exist** — nobody has ever tagged unik. Cal: "nobody is going to repost or tag, good catch." Fallback locked: found message unless a real photo actually exists. Ask Thuy if ANY customer photos exist; Week 4 creator seeding is the long-term fix.
- **4. Week 5 "$628 cost" carousel led with price** (against the locked quality-first order) → rebuilt as the realistic budget-honest haul carousel (rides the July haul peak). Week 5 story poll → found message (stories don't reach new moms).
- **All locks saved** to client CLAUDE.md (Roadmap Audit Locks section) + live roadmap card updated + pushed.

**June 10 (late night) — MOM TARGETING LOCKED. Mom research done (5 agents, sourced). Thuy's square banner delivered.**

- **Cal noticed Egypt meme viewers skewing male** → 5-agent research run on reaching moms. Full findings saved to `docs/production/mom-attention-playbook.md` (hooks, emotions, conversion, Latina mom culture, winning formats, timing). Never re-research this.
- **Four mom targeting rules locked** (in CLAUDE.md + live roadmap "Find the Moms" card, commit e95389f): mom is ALWAYS the character; text hook on screen in second one (5-7 words, top third, moms scroll muted); deploy the 14,000+ reviews / 4.2★ proof; July is the haul search peak — post hardest June 15-Aug 15.
- **Key research facts (sourced):** 93% of parents research before buying kids' clothes; other moms' words are the #1 conversion proof; Latina moms make ~86% of household purchase decisions and respond to quality-first not price-first; Latina mom humor = deadpan "I'm not complaining I'm just saying" (matches our winning format); creator to study: Kat Stickler.
- **Two new post ideas in Next Steps:** static review-proof product ad (True Classic play) + realistic back-to-school haul for late June.
- **Thuy's Amazon banners delivered:** 1920x1920 mobile square built (text band + photo), then Amazon rejected ANY added text on Product Collection hero images → rebuilt both square + wide as NOTEXT versions (photo + logo only), delivered via Dropbox "Products Videos" folder. Heads-up flagged: the logo may also get flagged as text. Files: `graphics/amazon-banner-1920x1920*.html/png` + NOTEXT versions, copies on Desktop.
- **General UNIK brand video request (Thuy, mentioned outside sessions):** parked. Open question sent back to her: is it for Amazon storefront (clean product) or social (comedy skit)? Don't build until answered — True Classic never made a "brand video."

**June 10 (night) — COMEDY HYBRID STRATEGY LOCKED. True Classic research done (5 agents, sourced).**

- **Comedy hybrid weekly mix locked** — 2 comedy Reels + 1 value-with-comedy-wrapper + 1 found message + 1 short product ad. Escape valve: weak second bit drops to a value post. Tie rule: every post entertains or makes her feel seen FIRST. In client CLAUDE.md + live roadmap (pushed, commit 2dabeec).
- **True Classic research (sourced):** $3K → $15M yr 1 → $90M yr 2 → $150M yr 3, verified. The comedy format: 5-act skit (Hook/Problem/Solution/Middle/End) by comedians Greg + Nate (GregTube), product woven INTO the joke, first comedy ad went 2:1 → 9:1 ROAS overnight. Paid playbook: $50/day start, broad targeting (creative finds the audience), +15-20% budget every 3-4 days, Facebook only (still 50-80% of spend). Surprise: static product images with review counts ("14,000+ reviews, 4.2★") sometimes beat video. 90% direct response / 10% brand, tested all-brand once, "was a disaster."
- **First-mover confirmed:** NO kids apparel or uniform brand runs the problem+comedy+Meta-paid format. UNIK's version: the skit is about the MOM (deadpan mom testing the uniform), never the kid — Egypt meme already proved the shape.

**June 10 (night) — Thursday caption trimmed + locked. Stats pulled on both June 10 posts.**

- **Thursday caption done** — Safari dress: "Unik Safari uniform dress. Khaki and navy, dress code ready, comfortable enough to run the whole recess in. Shop at unikusa.com (also on Amazon), link in bio." In `caption-pack.md`. Ready to post June 11 at 11am Pacific.
- **June 10 stats pulled** — Egypt meme (Reel): 104 reach, 123 views, 2 interactions. Bus stop found message (Feed): 0 still early. Egypt meme matched durability reel's pace — account consistently hitting triple digits on reels now. Zero shares still, bus stop is the one to watch.
- **Bus stop brand comment posted** — "The days feel long until one day they just don't. Enjoy the bus stop."

**June 10 (evening) — Two posts in one day. Found message format built. Roadmap updated.**

- **Bus stop found message POSTED** — "One day they won't need you at the bus stop. Not today though." Single image (gpt_image_2, 4:5 tall, yellow school bus window in dust). Cropped via FFmpeg to remove backpack (aspect ratio fix + locked no-backpack rule). Caption: "To every parent still standing at the bus stop. 🥹 Send this to one who gets it." Posted all three platforms via Buffer. Judge on saves + shares, NOT reach.
- **Found message format fully built for Unik** — `docs/production/found-message-format.md`: 6 wells, 8 surfaces, 6 starter lines, gpt_image_2 prompt shape, voice rules. Owns the Community single image slot weekly. The target metric: account's FIRST EVER share.
- **Roadmap updated** — "Weekly Slot — The Found Message" card added to the Hook Engine section on the live roadmap (https://cal-zentara.github.io/unik-content-roadmap/). Pushed and live.
- **Egypt meme comment posted** — "Half our office gets this joke and the other half is scared to ask. if you get it, explain it to them in the comments" — posted as Unik Inc on the FB meme. Comment baiting engagement.
- **Four found message versions generated** — bus window was the pick. Four additional bus-window-only variations also generated (different feelings: almost-on-time, bus stop tearjerker, village/fog version, pajama pants laugh). Bus stop tearjerker posted tonight.

**June 10 — Egypt meme POSTED live. Meta stats connection PERMANENT. Stats-First rule locked.**

- **Egypt meme POSTED to all three platforms** (IG Reel + FB + TikTok) via Buffer, June 10. Caption: "They really just give you the property... unikusa.com" + trend hashtags. First numbers pull pending (Meta insights lag ~30-60 min after posting). The breakthrough metric to watch: the account's FIRST EVER share.
- **Meta Graph API connection is DONE and PERMANENT.** Page Access Token for Unik Inc (FB page 126393510763439) exchanged via App Secret to a token that NEVER expires. Stored in `.env` (git-ignored, safe). Covers FB page + IG @unikusa with full insights permissions. Working scripts in this folder: `fb-stats.ps1` (FB page + posts), `ig-stats.ps1` (IG account + posts), `ig-deep2.ps1` (per-post reach/views/saves/shares — USE THIS ONE), `ig-followers.ps1`, `check-token.ps1`. Per-post insights metric names for v21+: `reach,views,saved,shares,total_interactions` (NOT plays/impressions — deprecated).
- **STATS-FIRST RULE locked into CLAUDE.md** — pull last post's numbers before building any post, state one lesson, bake it in. Reels judged on reach, carousels on saves.
- **Key numbers learned (June 9-10):** best-ever IG reach 172 (May 9); durability reel 107 reach in day one (now 109); stains carousel basically dead at 6 reach (carousels don't reach — they're for saves, and it got 0 saves → next carousel must end with a save-worthy tip slide). ZERO shares ever on the whole account. ~Half the followers are wholesale buyers (Pakistan/China cities in demographics) — low engagement % is structural, don't panic. Best posting hour: 11am Pacific (18:00 UTC, 71 followers online).
- **Roadmap emotion audit:** the 5 hooks are emotion-first but the weekly calendar runs ~1.5 of 5 posts on emotion. Cal's direction: during Phase 1, tilt to ~3 emotional swings + 2 page-builders per week (trust content earns its keep only after reach exists). Wild UGC monthly anchor still not built — highest-upside asset on the roadmap.
- **True Classic research (3 subagents, sourced):** $3K start → $150M yr 3. Playbook: ONE specific problem (fit), comedy-first creative (9:1 ROAS on first skit ad), Facebook paid as the engine. Lesson for UNIK when paid budget comes: one comedy format + one problem (uniforms that don't last) + Meta.
- **In progress:** kid riding a squirrel like a skateboard at a skate park (8s) — Cal generating. Needs: uniform clearly on the kid + deadpan payoff beat.

---

**June 9 — Egypt meme video built + scheduled. Two new locked rules.**

- **Egypt meme video built** (`meme1-final-cap.mp4`): rode the "I bought a property in Egypt" viral format for UNIK. White deadpan mom in front of the pyramids. Locked script: "I bought school uniforms and what they do is they give you the uniform... and it's still perfect at the end of the year." Watermarked + upscaled to 608x1080 + captions burned in. Scheduled for June 10, 9am on IG + TikTok + FB (FB may need direct post via Meta Business Suite due to scheduler resolution check).
- **VO Personality rule locked** — every voiceover must describe HOW it's delivered, not just WHAT is said. Deadpan for meme/UGC, warm for trust, punchy for product ads. Added to both UNIK CLAUDE.md and CreativeStudio CLAUDE.md (universal).
- **Watermark rule locked** — every UNIK video gets the unik logo watermark top right, 74px, 0.5 opacity, white removed, kicks in at 1.2s. Exact FFmpeg filter saved in CLAUDE.md.
- **Ben upgraded Cal to Admin** on TikTok Business Center (changed from Operator). Still cannot edit bio through Business Center — bio editing requires logging into the actual @unik.inc account. Ben needs to update the bio directly.
- **TikTok bio text drafted** (80 chars): "Premium school uniforms for less. LA family owned. unikusa.com & Amazon"
- **Seedance prompt drafted** for new pants video (Egypt setting, white mom, boy in light blue polo + khaki pants, locked script above). Not generated yet — waiting on Cal to run it.

---

**June 8 — first day of content release. The Week 1 Monday durability Reel is LIVE on Facebook, Instagram, AND TikTok.**

**⚠️ CTA CHANGED (Cal, June 8 evening): drive to unikusa.com, NOT Amazon.** Cal decided to stop using Amazon links in content. All CTAs now point to unikusa.com (their own site, grows the owned channel). Update any "Shop on Amazon" copy in the caption pack / bios / rules to unikusa.com. (We DID find the real Amazon storefront — amazon.com/stores/UNIK/page/B92428F0-47DB-42EF-95D7-D12EC3DB8C7E — keep it on file but don't use it in posts.) On the live Monday Reel, Cal posted + (tried to pin) a Facebook comment as the CTA: an engagement question + the clickable unikusa.com link ("What is the toughest thing your kid has put their uniform through? Shop the pants at unikusa.com"). NOTE: Facebook Reels don't allow pinning comments, so it's just a top comment. FB comments ARE clickable; IG/TikTok comments are NOT (link must live in the bio). FB Page Links + IG bio already have unikusa.com.

**⚠️ TIKTOK ACCESS — the real picture (researched June 8):** Cal has TikTok BUSINESS CENTER access = can POST videos + run ads for @unik.inc, but CANNOT edit the profile/bio/website link from there. Editing the bio is locked to account-level access. The proper fix: Ben (owner) adds Cal as an **ADMIN** via TikTok's native account access (TikTok app → Settings and privacy → Account → Account access/Permissions → Invite → enter Cal's phone/email → pick **Admin**, not Operator). Admin = post AND edit profile. This needs the account to be a Business/Organization account. ALSO: a clickable Website link in a TikTok bio requires ~1,000 followers (UNIK is under that), so even with Admin the tappable link may not be available yet. Cal can self-check his access in the TikTok phone app: Profile → tap name at top → if @unik.inc is in the account switcher he has account access; if only his personal (Cal.Zentara) shows, he doesn't. Message to Ben asking for Admin access is drafted. Until then, the TikTok bio link is on Ben to add.

**Posting + finishing (June 8, afternoon):**
- **The Monday durability Reel POSTED to all three platforms.** Facebook (Unik Inc) + Instagram (unikusa) via Meta Business Suite as one cross-post, and TikTok (@unik.inc) separately. First piece of the live 10-week roadmap to go out. Early Meta numbers ~106 views in the first 15 min (105 from IG, 1 from FB).
- **Built a "DURABILITY TEST" thumbnail/cover** (`graphics/durability-thumb.html` + `durability-thumb-final.png`): bold Anton title, yellow "TEST" block matching the crash-dummy vest, "we tried to destroy them" tag, lowercase blue unik logo. Then made the final shareable file: prepended the cover (~1.2s) to the video and watermarked the small blue unik logo top-right across the whole clip (`UNIK-Durability-Test-W1D1.mp4`, on desktop + Downloads). Used ffmpeg (headless Chrome to render the PNG, concat for the cover, overlay with enable='gte(t,1.2)' for the watermark).
- **Caption: Thuy (owner) rewrote the rule.** She rejected the long story caption as "too long and not true" and locked: captions stay SHORT + PLAYFUL + factual product description only. Approved line: "Unik pull on pants. Comfy elastic waistband, tough enough to survive whatever the school year throws at them." Rule saved to client CLAUDE.md + caption-pack.md. The Tue/Wed/Thu/Fri captions now need trimming to match before they post.
- **TikTok access SOLVED.** The blocker the whole time: Ben had only added Cal to the TikTok Business Center (ADS side) — that never allows organic posting. After Cal showed Ben the difference, Ben gave real access to the actual TikTok account. UNIK TikTok handle = **@unik.inc** (ID 7527025687040049168). IG handle = **@unikusa**. LESSON: TikTok Business Center / Ads Manager = ads only; organic posting needs access to the actual @handle account (native account-access invite, or the login). Web tiktok.com holds one account at a time; the app holds several.
- **AI disclosure:** turned ON TikTok's "AI-generated content" toggle for the Reel (realistic AI human → TikTok policy requires it; safer on a client account).
- **BIO FIX in progress — owner approved.** Both the IG (@unikusa) and TikTok (@unik.inc) bios are wholesale/reseller-focused ("Become a Unik reseller today...") and speak to resellers, NOT the parents our content targets. Worse, the TikTok bio "Find us on Amazon" is NOT a clickable link (TikTok needs the Amazon URL in the Website field). Thuy said "Sure" to changing both. New parent-first bios drafted (keep a reseller line on IG, drop it on TikTok for the 80-char limit). CRITICAL next step: put the real Amazon link in the TikTok Website field so every post's CTA actually works.

**NEW client request (Thuy, June 8):** she wants a fresh **product video for the pants** — "the one I have is meh." Cal said yes, waiting on her vision. This is the next build.

---

**June 8 (morning) — two builds:**
- **Durability Lab Round 1 video BUILT + GENERATED (Week 1 Monday Reel).** The deadpan-scientist UGC bit: a guy in a lab coat stress-tests UNIK uniform pants on a yellow crash test dummy in his driveway. Three beats in ONE multi-shot Seedance gen: pressure washer (0-5s), knee slide (5-10s), bike drag (10-15s), ending on a flat "...huh." Cal generated it himself with 3 locked reference photos (scientist, yellow crash dummy, real UNIK pants). Cal: "definitely not boring, visual hook is working" and "everything is holding" (pants held their look across all three tests, deadpan voice came through). Final locked prompt (2,377 chars) saved in `docs/production/durability-lab-concept.md`. LEARNINGS locked: (1) the real pants are FLAT FRONT, NO crease — prompt must say "no crease" or Higgsfield adds one; (2) stand the dummy against boxes/wall with the pants filling the frame to force Higgsfield to copy the exact pants; (3) the YELLOW crash test dummy reads instantly and sells the lab gag (a plain mannequin loses the joke); (4) bike beat: scientist props the phone on a box and rides past a static wide shot — solves the "who's filming" hole AND keeps it one location; (5) end card REPLACED with thumbnail text ("I tried to destroy these uniform pants") — does more work for the tap; (6) trimmed the per-beat clipboard scribbles so each test breathes.
- **Fixed the Amazon store banner size.** The old wide banner (21:9, ~2.3:1) was REJECTED by Amazon — Amazon needs exactly 3:1 at 1920x640. Built a new `graphics/amazon-banner-1920x640.html` reusing the same generated image, cropped to 3:1 in code (object-position center 55% after Cal said lower the framing 15%). Exported to desktop as `UNIK-Amazon-Banner-1920x640.png` (1920x640, 1.72 MB, PNG — fits all four Amazon specs). The wide 21:9 banner still works for the Facebook page, left untouched.

**June 6:** Built the Stain WANTED carousel (W1P2 helpful slot) in `ZentaraHQ/clients/Unik/graphics/stain-rescue-carousel.html`. 6 slides: "Most Wanted List" cover, 4 stains as fugitives (each with a real Higgsfield mugshot photo, alias, rap sheet, funny reward, and the fix), "Case Closed" closer with spotlight + grain + ghost watermark. 4 real stained-uniform photos gen'd by Cal and wired in (`graphics/_candidates/stain-*.png`). Caption written. Logged to work-log. Cal: "keep it there for now" — solid 7, shippable, parked. Pending later (optional): shorter TikTok caption. NO Spanish hashtags — Cal killed that idea June 6, do not bring it back.

**OPERATING PRINCIPLE for UNIK content (Cal, June 6):** consistency over quality right now. A shippable 7 posted on cadence beats a 9 that stalls the schedule. Don't over-polish or push Cal toward 9s — get content out 5x/week, learn from what lands, raise the bar later. Matches the LIGHT TOUCH engagement call.

**June 5 reorg:** docs split into 4 folders (facts / strategy / production / archive). CLAUDE.md now has a Doc Map. Merged the old platform-strategy + hook-ideas into `docs/strategy/unik-social-strategy.md` (now covers TikTok too). Moved the outdated hallway formula to archive. Added FB page access + Insights (484 followers, 4s avg watch time, reaching 35-44 moms but not holding them).

**June 5 token cleanup:** slimmed both big rules files to cut what loads every session. Unik `CLAUDE.md` 23.5k → 9k chars and CreativeStudio `CLAUDE.md` 24.9k → 9.6k chars (~7,400 tokens saved per session). All hard rules, hard facts, the logo rule, and locked formulas stayed in the main files; history + build code + asset index moved word-for-word to `UNIK-PRODUCTION-REFERENCE.md` and `../../VIDEO-PRODUCTION-REFERENCE.md`, each pointed to by a signpost on line 1 of the main file. Also stashed 141 unused global skills and deleted 14 duplicate skills (both outside this repo).

## What this is
AI video ads + content strategy for UNIK Inc — Cal's cousins' kids-apparel/school-uniform brand. Target: LA moms (Latina core), back-to-school. 9:16 Reels/TikTok plus 16:9 wide for Amazon listings.

## What's live
- **6 finished ads** in the desktop `UNIK Ads/` folder. Newest:
  - `unik_girls_playground_skirt.mp4` — NEW (June 2): GU07 scooter skirt, two girls walking to the cafeteria on the first day, 16:9, playground setting. Baked female VO + Backpack Morning music + 3s end card. 16s.
  - `unik_two_girls_locker_music.mp4` — (June 1): GU07 skirt, two girls, first-day stuck-locker, 16:9 Amazon. AI voice.
- Prior 4 (shared with UNIK May 30): playground ⭐, dress, hallway (v7), boy try-on.

## What changed this session (June 2)
- **Made the playground skirt ad** (client Thuy asked for a non-locker setting — "those little girls look too young to have lockers"). Switched to playground/cafeteria. Crouching rode the skirt up on the first roll → added a HARD SAFETY RULE: never crouch/squat/kneel a kid in a skirt; standing + walking only. Held-smile showed again (reference photos) — accepted the roll.
- **Built the content strategy brain.** Turned the client's 10 marketing principles into a real UNIK playbook inside `docs/strategy/unik-content-masterclass.md` — added a "Start Here" roadmap covering all 10 in funnel order, sourced every claim.
- **Locked the real catalog + prices** (verified live from unikusa.com) into a NEW file `docs/facts/unik-product-catalog.md` (every item, price, AND colors). Masterclass points to it as single source of truth.
- **Key business facts captured (source: Cal):** Wholesale is their core/best (unikla.com); retail is the growth lane our content targets. Revenue today: Amazon (most) → Shein (some) → webpage (little). CTA goal = drive to the WEBPAGE (grow the owned channel). IG @unikusa (481 followers) currently speaks to resellers, not parents — flagged.
- **Brand promise locked:** "The LA family that's kept kids in uniforms that actually last — for 20 years." Identity → durability proof → price as kicker.
- **Skirt price corrected** $30 → **$16.99** (Cal's number was a mistake; site is ground truth).
- **New global rule added** (`~/.claude/CLAUDE.md`): source every stat/number/fact, every time. Flagged the doc's 86%/$38 audience stats as UNVERIFIED.
- **Walked all 10 marketing principles** with Cal one at a time, locking each in the masterclass roadmap (1–5 discussed live; 6–10 reviewed and confirmed on a second pass).
- **NEW doc `docs/facts/unik-helpful-content-bank.md`** — 5 researched + sourced topics for top-of-funnel "helpful" posts (how-many-uniforms, keep-whites-white, LA dress-code rules, budgeting, special-needs angles). Every fact has a source link; flagged to re-verify before public use.

## Account Access (June 5, 2026)
- **Facebook:** DONE. Cal manages the Unik Inc page through his personal FB profile (the "Cal La" profile, logged in under aestheticcal22@gmail.com). UNIK shows in his FB profile switcher. The page is NOT inside a Business Manager portfolio — it is a direct page role on his profile (new Pages experience).
- **Instagram:** DONE. @unikusa is linked to the Unik Inc Facebook page (confirmed in Page Settings > Linked accounts). Cal manages it through the page / Meta Business Suite — no separate IG password needed.
- **TikTok:** Cal ACCEPTED the Business Center invite (under his TikTok "Christopher Le970", Business Center "Unik Inc", ID 7382997150952800257). BUT the invite only shared 1 advertiser (ads) account and **0 TikTok accounts** — so Cal is in the Business Center but CANNOT post organic content yet. The actual UNIK TikTok account (the posting handle) must be added by Ben/Thuy. Cal messaged Ben to add the TikTok account, not just the ad account. This is the one remaining access blocker.
- **Two-email gotcha:** Ben sent all access to cal.zentara@gmail.com, but Cal's working Meta account is under aestheticcal22@gmail.com. FB + IG resolved because Thuy invited his actual profile + IG is page-linked. Only TikTok still needs re-pointing.
- **Cal's personal "Cal's Business Manager" is RESTRICTED from ads** — does NOT affect UNIK. The summer scope is organic only (no paid ads). If UNIK ever runs paid ads, use UNIK's own ad account, never Cal's restricted one.

## Client asks captured (June 5, 2026)
- Ben/Thuy confirmed scope: Cal manages TT, IG, FB (organic). Tool question raised (Meta Business Suite direct vs a third-party like Buffer) — not yet decided.
- Next content ask from client: a **pants ad** + a **general UNIK brand video**. Thuy: "whenever you're ready, send the pants my way."

## Engagement level — LIGHT TOUCH (Cal's call, June 5, 2026)
Cal is intentionally keeping UNIK low-effort until there's a paid arrangement. Reasons: unpaid until ~mid-July, no agreed cut, the webpage (the channel a % would pay on) has near-zero traffic today, and Cal's real upside is the Zentara platform + paying clients. UNIK = warm case study, not a job.
**How "light" looks:** do the quick wins they directly ask for (e.g. the June 23–26 sale ad), reuse/repurpose the 4 existing ads instead of building new from scratch, batch + space out posting (not daily). Stay warm with the family; don't go cold. When the mid-July ad budget comes up, that's the natural opening for Cal to raise how he gets paid. **Do NOT propose big new content builds for UNIK unless Cal explicitly asks.**

## Thuy meeting (June 5, 2026) — direct from the call
**Money / ads:**
- Wants to **start paying for ads mid-July** (so organic until then, then paid).
- They already run **some ads on Faire** (the wholesale marketplace).

**Positioning (locked by Thuy):**
- "**Premium quality, budget price**" — confirms our quality-first angle.
- **Family stories = about REVIEWS only, nothing personal.** Do NOT make personal/family-life content. Lean on the 14,000+ reviews for the "family/trust" feeling, not the owners' personal lives.

**Wholesale facts:**
- Most wholesale buyers **come into the store to physically feel the products** (touch = their close).
- Wholesale pricing is **5 shirts in bulk**.
- New **Amazon storefront** ("Amazon front") in the works.

**Content direction:**
- She wants **fun videos + UGC videos**.
- **Traffic goes to Amazon**, but **mention the Unik webpage** in the content.

**URGENT — sale to promote:**
- **20% off EVERYTHING, June 23–26, 2026.**
- Thuy wants a **TikTok sale ad** for it.
- Featured blouse w/ lightning deal: `https://www.amazon.com/dp/B084S6YVY3`
- **CONFIRMED (Cal): the sale runs June 23–26** — NOT a make-it-now deadline. We have until ~June 22 to build + schedule the TikTok sale ad.
- ⚠️ TikTok posting still blocked — Ben must add the real TT account before this can go live.

## What's broken / blocked
- **Credits low** (~360 of 3000, renews May 7) — hold heavy gen.
- ~~Locker ad AI voice swap~~ — DROPPED (Cal, June 6 2026): the baked AI voice on the locker ad is fine; no recorded VO needed.
- Audience stats (86%, $38) unverified — confirm before any public use.
- IG positioning decision (reseller vs parent handle) — needs Cal/cousins.

## What's next
1. Finish walking the 10 principles into action (strategy doc done; now turn it into actual posts).
2. Decide the IG handle question (repurpose @unikusa for parents, or new handle).
3. Verify the audience stats (or replace with sourced ones).
4. UNIK picks favorites → post organically.

## Key files
- `CLAUDE.md` — full client doc + **Doc Map** (read first; it lists every doc, its job, and when to open it)
- `docs/strategy/unik-content-masterclass.md` — the content strategy brain (10-principle roadmap)
- `docs/strategy/unik-social-strategy.md` — IG + FB + TikTok playbook, hooks, account revival, metrics
- `docs/facts/unik-product-catalog.md` — real prices + colors, single source of truth
- `docs/facts/review-gold.md` — 10 real Amazon review quotes (trust content ammo)
- `docs/facts/unik-helpful-content-bank.md` — sourced facts for "helpful" posts
- `docs/facts/competitor-swipe-file.md` — competitor intel + locked message lines + carousel hooks
- `docs/production/seedance-girls-playground-WINNER.md` — the winning kid-video formula
- `docs/production/VIDEO-CHEAT-SHEET.md` — plain-English video rules (read before any video)
- `docs/production/wild-ugc-format.md` — locked Wild UGC disaster format spec
- `docs/archive/seedance-hallway-formula.md` — OUTDATED boys hallway recipe (reference only)
- `outputs/finals/` — approved ads · `assets/` — audio, logo, end-card
