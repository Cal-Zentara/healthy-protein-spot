# Music Workflow — The Proper Way (researched June 12, 2026)

The plain-English guide to music in AI videos: what the tools can really do, how pros do it, and how we time cuts to the beat. Researched with 5 agents (Brave Search) June 12, 2026, after the BU03 band clip music failure. Sources linked throughout.

---

## 1. The big answer: who is "baking music in" and why we can't copy them

Creators with real baked-in music are mostly on **different models, not Seedance**:

| Model | Native audio? | Verdict |
|---|---|---|
| Google Veo 3.1 | Yes — music, dialogue, SFX, lip sync in one pass | The real deal. Best in class. (Google Cloud blog, Oct 2025) |
| Kling 2.6 | Yes — full audio + lip sync | Verified working (Kuaishou official, fal.ai, Freepik reviews) |
| Sora 2 | Yes — dialogue, SFX, music synced | Works, capped at 25 seconds (OpenAI official docs) |
| Runway Gen-4.5 | Yes, added Dec 2025 | Too new, less battle-tested |
| **Seedance 2.0 (ours)** | Generates its own audio (on by default per fal.ai), but **cannot follow a supplied song** | **Post-production music required. Confirmed on our own BU03 gens June 11, 2026.** |

**Seedance @Audio1 truth (fal.ai official docs):** you can attach up to 3 audio files and reference them as @Audio1 in the prompt — but the docs never promise the output follows the track exactly. Community testing (and our own June 11 measurement, envelope correlation ~0) shows it treats the song as a loose mood guide at best. And any music DESCRIPTION in the prompt tells it to compose its own track instead.
Sources: https://fal.ai/models/bytedance/seedance-2.0/reference-to-video, https://github.com/fal-ai/seedance-2.0-api, https://fal.ai/learn/tools/how-to-use-seedance-2-0

**Bottom line:** on Seedance, music in post is not the amateur path — it's the only path that works. If we ever want true baked-in music, that's a model switch conversation (Veo 3.1 or Kling 2.6), not a prompt fix.

---

## 2. The professional pipeline (what pros actually do)

From Runway Academy tutorials, agency workflow writeups, and tool-vendor guides: the dominant commercial workflow is **video first silent, music married in editing** (DaVinci Resolve, CapCut, Premiere, or FFmpeg). Music-first prompting is an emerging idea on the native-audio models, but for ads the standard remains post-production because control matters: a client can swap the song without regenerating video.

Our locked order:
1. **Music first** — pick or generate the track (Suno is the de facto AI music tool) BEFORE any video.
2. **Prompts contain zero music words.** No "a song plays", no genre names. Picture only.
3. **Strip the gen audio** from every clip: `ffmpeg -i in.mp4 -an out.mp4`
4. **Assemble silent**: hard cut clips together + proof stills + end card.
5. **Marry the track over the full assembly**, running through every cut and over the end card. The continuous song is what makes separate clips feel like one video.

---

## 3. Cutting to the beat (the craft that makes music feel married, not pasted on)

- **Cut 1 to 2 frames BEFORE the beat**, not on it. The picture changes, then the beat lands — feels intentional. Cutting exactly on the beat reads a frame late. (https://bitcut.app/blog/beat-sync-video-editing, r/VideoEditing consensus)
- **Never cut on every beat** — frantic and exhausting. Big cuts land on downbeats or phrase boundaries (every 4 or 8 bars). (https://filmdaft.com/how-to-edit-video-clips-to-the-beat-of-music-the-easy-way/)
- **Hard cuts only for beat sync** — crossfades blur the timing (matches our existing no-xfade rule).
- **What makes music feel pasted on:** cutting between beats, cutting late, crossfading, and ignoring the song's phrasing.

**Getting beat timestamps from an MP3 (Python, librosa):**
```python
import librosa
y, sr = librosa.load('song.mp3')
tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr)
beat_times = librosa.frames_to_time(beat_frames, sr=sr)
print(f"Tempo: {tempo:.1f} BPM")
print(beat_times)  # seconds — use these to place FFmpeg cut points
```
(https://librosa.org/doc/main/generated/librosa.beat.beat_track.html)

Manual fallback: open the MP3 waveform (CapCut shows beat markers automatically), mark the tall spikes (kick/snare), place cuts 1 to 2 frames before them.

---

## 4. Music choice and mix for product ads

- **Tempo matches cut pace.** Fast cuts need 120+ BPM; product showcase pace sits at 80 to 120 BPM. Recommended zone for a confident product ad: **100 to 120 BPM**. (https://orphiq.com/resources/bpm-tempo-guide, https://thatpitch.com/blog/bpm-and-tempo-metadata/)
- **Design for mute first.** 85% of Facebook views are muted (LeadEnforce); the video must sell silent, music is the bonus layer.
- **Mix:** music at ~50% under VO; music-only videos can run ~80%. VO clarity always wins.
- **Amazon listing video rules:** royalty-free music ONLY, AAC/PCM/MP3, 44.1 or 48 kHz, 96 to 192 kbps, no profanity, language matches marketplace. No tempo rules. (https://www.tunepocket.com/amazon-product-video/, Jungle Scout)
- **Paid ads licensing trap:** never use trending platform sounds in a paid Meta/TikTok ad — takedown and account-flag risk. Suno tracks and licensed libraries only. Our own Suno tracks are safe.

---

## 5. The Higgsfield reality check (re-researched June 12, 2026 — Cal pushed back, and the second look found the real story)

**What Higgsfield users with "baked-in music" are actually doing — from Higgsfield's OWN flagship example.** Their K-Pop music video case study (https://higgsfield.ai/blog/guide-youtube-seedance2.0) states: "The music was generated separately and uploaded into Seedance as an element along with the lyrics before a single frame of movement was generated." So even Higgsfield's showcase is MUSIC-FIRST FROM AN OUTSIDE TOOL, uploaded as @Audio1 — the landing-page claim of single-pass music generation is contradicted by their own blog. The song shapes the video's beat, rhythm, and energy during generation; it is not composed by Seedance.

**The upgrade we should adopt — the @Audio1 rhythm trick:**
1. Make the track first (Suno). MP3 ONLY — other formats fail silently (https://blog.laozhang.ai/en/posts/seedance-2-not-working). Total audio inputs ≤15s coverage, up to 3 files.
2. Upload it as @Audio1 AND name it in the prompt: "Use @Audio1 as the rhythmic foundation. Sync camera cuts and movement changes to its beat positions." (OpusClip guide: https://www.opus.pro/blog/sync-video-to-music-beats-seedance)
3. Describe NO other music in the prompt — referencing @Audio1 AND describing a genre makes Seedance compose a hybrid matching neither (this is exactly the BU03 failure).
4. STILL marry the real track in FFmpeg post. The @Audio1 influence is approximate (mood/tempo, ~70-80% per community reports; one Reddit user: "it completely changed the tempo... didn't follow the audio sample" — https://www.reddit.com/r/generativeAI/comments/1snolwf/). The gen gives you motion that already moves with the song; the post-marriage gives you the exact song.

**Prompt placement rules for sound (ChatCut/Cutout.pro guides):** sound direction goes at the END of the prompt as its own block, max 2-3 audio layers (mood + texture + one timing cue). More layers muddies the output.

**Bottom line:** the pros on Higgsfield are doing music-first + @Audio1 + post-marriage. Our workflow was already 2 of the 3 steps; the missing piece was feeding the song in as @Audio1 so the VIDEO dances to it. Adopt that on any clip where motion should ride the music.

---

## 6. What happened on BU03 (the lesson this doc exists because of)

June 11, 2026: the band clip prompts described stadium rock music. Seedance composed its own track and ignored the attached Suno song (envelope correlation ~0). The fix that's now locked everywhere: no music words in prompts, real track married in FFmpeg post. That failure was a prompt mistake, not bad luck — describing music IS the instruction to compose it.
