import { NextResponse } from "next/server";
import { db } from "@/db";
import { NewPodcastInput, podcasts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { PodcastSearchSuccessResponse, SearchItunesAPIResponse } from "./types";

export async function GET(request: Request) {
  // 1. Get search term from URL
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("q");

  if (!term) {
    return NextResponse.json(
      { error: "Please provide a search term" },
      { status: 400 }
    );
  }

  return NextResponse.json<PodcastSearchSuccessResponse>({
    results: [
      {
        trackId: 284675702,
        collectionName: "Red Eye Radio",
        artistName: "Cumulus Podcast Network",
        feedUrl: "https://rss.pdrl.fm/258cf2/feeds.megaphone.fm/WWO3198340993",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/bf/ea/f8/bfeaf843-ff76-7274-680e-a0b683ed5d1d/mza_14612244333642648515.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/red-eye-radio/id284675702?uo=4",
        primaryGenreName: "Government",
        genres: ["Government", "Podcasts", "News", "Daily News"],
        country: "USA",
        releaseDate: "2025-07-02T10:24:00Z",
      },
      {
        trackId: 1250599915,
        collectionName: "RedHanded",
        artistName: "Wondery | RedHanded",
        feedUrl: "https://rss.art19.com/redhanded",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/7b/fd/d4/7bfdd424-54f6-5283-846b-395504a0d3d0/mza_7664887448572083669.jpeg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/redhanded/id1250599915?uo=4",
        primaryGenreName: "True Crime",
        genres: ["True Crime", "Podcasts"],
        country: "USA",
        releaseDate: "2025-06-30T23:00:00Z",
      },
      {
        trackId: 1364798971,
        collectionName: "Red Scare",
        artistName: "Red Scare",
        feedUrl: "https://redscarepodcast.libsyn.com/rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/36/4c/cd/364ccde9-0bd0-3803-fe2b-8d409f80de49/mza_1185720301669921406.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/red-scare/id1364798971?uo=4",
        primaryGenreName: "Society & Culture",
        genres: ["Society & Culture", "Podcasts"],
        country: "USA",
        releaseDate: "2025-06-17T22:55:00Z",
      },
      {
        trackId: 1439503686,
        collectionName: "Red Pilled America",
        artistName: "Patrick Courrielche, Adryana Cortez",
        feedUrl:
          "https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/949d6463-3327-4b09-8f06-ae27017c486f/b05493b7-a576-49e6-a675-ae27017c4882/podcast.rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/45/a5/4a/45a54ae0-d07d-6d65-eb9c-830d0a10aaa6/mza_546724009425185749.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/red-pilled-america/id1439503686?uo=4",
        primaryGenreName: "Personal Journals",
        genres: ["Personal Journals", "Podcasts", "Society & Culture"],
        country: "USA",
        releaseDate: "2025-07-02T07:00:00Z",
      },
      {
        trackId: 1625003615,
        collectionName: "Red Collar",
        artistName: "Catherine Townsend",
        feedUrl: "https://feeds.simplecast.com/wjbl4LWN",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/88/72/d3/8872d300-3c59-7dd2-8f2c-e08acec25a3b/mza_13471695585675044097.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/red-collar/id1625003615?uo=4",
        primaryGenreName: "True Crime",
        genres: ["True Crime", "Podcasts", "Society & Culture", "Documentary"],
        country: "USA",
        releaseDate: "2025-04-11T04:00:00Z",
      },
      {
        trackId: 1521303143,
        collectionName: "Red Web",
        artistName: "Red Web",
        feedUrl: "https://feeds.megaphone.fm/redweb",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/54/3e/76/543e768c-bb3b-d913-2756-a0d0e8357c9f/mza_16386870900134825092.jpeg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/red-web/id1521303143?uo=4",
        primaryGenreName: "True Crime",
        genres: ["True Crime", "Podcasts", "Society & Culture"],
        country: "USA",
        releaseDate: "2025-06-23T07:00:00Z",
      },
      {
        trackId: 1519901948,
        collectionName: "In the Red Clay",
        artistName: "Imperative Entertainment",
        feedUrl: "https://feeds.megaphone.fm/intheredclay",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/01/f4/8b/01f48b9a-4d1d-7f57-19ca-e48ff730616b/mza_3469712355940992688.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/in-the-red-clay/id1519901948?uo=4",
        primaryGenreName: "True Crime",
        genres: ["True Crime", "Podcasts", "Society & Culture", "Documentary"],
        country: "USA",
        releaseDate: "2024-10-17T08:00:00Z",
      },
      {
        trackId: 1487402394,
        collectionName: "Red Ball",
        artistName: "audiochuck",
        feedUrl: "https://feeds.simplecast.com/V6PKvcd1",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/7d/0c/f67d0c7d-4410-e228-47ca-29381cc313d0/mza_2991747751831753253.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/red-ball/id1487402394?uo=4",
        primaryGenreName: "True Crime",
        genres: ["True Crime", "Podcasts"],
        country: "USA",
        releaseDate: "2022-02-04T12:50:00Z",
      },
      {
        trackId: 523121474,
        collectionName: "TED Radio Hour",
        artistName: "NPR",
        feedUrl: "https://feeds.npr.org/510298/podcast.xml",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/ea/03/35/ea0335a0-2aa1-81c4-f5c3-6f809dcbf42c/mza_15110410746813748143.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-radio-hour/id523121474?uo=4",
        primaryGenreName: "Technology",
        genres: ["Technology", "Podcasts", "Science", "Social Sciences"],
        country: "USA",
        releaseDate: "2025-07-02T07:00:00Z",
      },
      {
        trackId: 160904630,
        collectionName: "TED Talks Daily",
        artistName: "TED",
        feedUrl:
          "https://feeds.acast.com/public/shows/67587e77c705e441797aff96",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/2e/cf/99/2ecf996f-71f7-604f-b0a0-43116b9d6619/mza_10257768296573848480.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-talks-daily/id160904630?uo=4",
        primaryGenreName: "Society & Culture",
        genres: ["Society & Culture", "Podcasts"],
        country: "USA",
        releaseDate: "2025-07-01T15:07:00Z",
      },
      {
        trackId: 1482715810,
        collectionName: "The Red Line",
        artistName: "The Red Line",
        feedUrl: "https://feeds.megaphone.fm/ARML4010200722",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/eb/d9/c8/ebd9c8e3-cd88-bd9d-9eaa-3b712abb1f4f/mza_3386717521964102423.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/the-red-line/id1482715810?uo=4",
        primaryGenreName: "Politics",
        genres: ["Politics", "Podcasts", "News", "News Commentary"],
        country: "USA",
        releaseDate: "2025-03-31T23:00:00Z",
      },
      {
        trackId: 160892972,
        collectionName: "TED Talks Daily (SD video)",
        artistName: "TED",
        feedUrl: "http://feeds.feedburner.com/TEDTalks_video",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/db/e9/48/dbe9481e-7256-1a86-d063-c38509c2fae9/mza_16595333197374591809.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-talks-daily-sd-video/id160892972?uo=4",
        primaryGenreName: "Education",
        genres: ["Education", "Podcasts", "Technology"],
        country: "USA",
        releaseDate: "2025-05-21T14:48:00Z",
      },
      {
        trackId: 1438700906,
        collectionName: "The Adventures of Red Knight",
        artistName: "Red Knight Stories",
        feedUrl: "https://feeds.buzzsprout.com/215682.rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/b8/ed/57/b8ed5766-b142-9ae4-053c-2441d8576b33/mza_7919554070750289712.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/the-adventures-of-red-knight/id1438700906?uo=4",
        primaryGenreName: "Kids & Family",
        genres: ["Kids & Family", "Podcasts", "Comedy"],
        country: "USA",
        releaseDate: "2023-08-28T07:00:00Z",
      },
      {
        trackId: 470622782,
        collectionName: "TED Business",
        artistName: "TED",
        feedUrl:
          "https://feeds.acast.com/public/shows/675727607205a5bc68e57057",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/ab/11/06/ab11065a-57cd-8472-526e-d5799b2a8163/mza_13207937671651466185.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-business/id470622782?uo=4",
        primaryGenreName: "Business",
        genres: ["Business", "Podcasts"],
        country: "USA",
        releaseDate: "2025-06-30T04:00:00Z",
      },
      {
        trackId: 470623173,
        collectionName: "TED Health",
        artistName: "TED",
        feedUrl:
          "https://feeds.acast.com/public/shows/67585b08102e6d4448d360b1",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/ad/99/b3/ad99b35e-bd23-1c62-dcc6-fcd390522c1d/mza_17138371392652580584.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-health/id470623173?uo=4",
        primaryGenreName: "Health & Fitness",
        genres: ["Health & Fitness", "Podcasts"],
        country: "USA",
        releaseDate: "2025-07-01T04:00:00Z",
      },
      {
        trackId: 1518710069,
        collectionName: "Red Table Talk",
        artistName: "iHeartPodcasts",
        feedUrl:
          "https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/d34b0d56-5647-4c19-bf68-ae27017c46e1/d634aebc-d714-4d93-83d9-ae27017c46f4/podcast.rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/31/0d/25/310d254c-b911-5281-78c7-b8dde2e2e086/mza_1273657846231188413.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/red-table-talk/id1518710069?uo=4",
        primaryGenreName: "Society & Culture",
        genres: ["Society & Culture", "Podcasts", "News"],
        country: "USA",
        releaseDate: "2023-01-26T08:00:00Z",
      },
      {
        trackId: 1346314086,
        collectionName: "Worklife with Adam Grant",
        artistName: "TED",
        feedUrl:
          "https://feeds.acast.com/public/shows/67585d9cc705e441796ddaf6",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/64/64/19/646419d8-0249-3aa6-22e1-cf481814a28d/mza_16901703840593164642.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/worklife-with-adam-grant/id1346314086?uo=4",
        primaryGenreName: "Management",
        genres: ["Management", "Podcasts", "Business"],
        country: "USA",
        releaseDate: "2025-07-01T04:00:00Z",
      },
      {
        trackId: 1495601614,
        collectionName: "Verdict with Ted Cruz",
        artistName: "Premiere Networks",
        feedUrl:
          "https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/2bee9419-43de-46ce-8996-af2a01167517/84cf551f-a33b-41d8-b112-af2a01167541/podcast.rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fd/28/36/fd28360d-8f45-c66f-3bcd-5b6e589f2c07/mza_750333212423213609.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/verdict-with-ted-cruz/id1495601614?uo=4",
        primaryGenreName: "Politics",
        genres: ["Politics", "Podcasts", "News", "Daily News"],
        country: "USA",
        releaseDate: "2025-07-02T07:40:00Z",
      },
      {
        trackId: 281315460,
        collectionName: "TED Talks Daily (HD video)",
        artistName: "TED",
        feedUrl: "http://feeds.feedburner.com/TedtalksHD",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/9b/15/0f/9b150f1e-3ede-7c0a-02d3-ec7627bf6f53/mza_12052717403507155548.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-talks-daily-hd-video/id281315460?uo=4",
        primaryGenreName: "Education",
        genres: ["Education", "Podcasts", "Technology"],
        country: "USA",
        releaseDate: "2025-05-20T14:55:00Z",
      },
      {
        trackId: 470623801,
        collectionName: "TED Talks Science and Medicine",
        artistName: "TED",
        feedUrl: "https://feeds.feedburner.com/iTunesPodcastTTScienceMedicine",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/b6/4d/26/b64d266a-3a41-8e10-beed-bad998087761/mza_8706554311337004851.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-talks-science-and-medicine/id470623801?uo=4",
        primaryGenreName: "Science",
        genres: ["Science", "Podcasts", "Technology"],
        country: "USA",
        releaseDate: "2023-05-25T14:51:00Z",
      },
      {
        trackId: 470623803,
        collectionName: "TED Talks Society and Culture",
        artistName: "TED",
        feedUrl: "https://feeds.feedburner.com/iTunesPodcastTTSocietyCulture",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/87/3b/23/873b23b9-0c34-4005-3748-ab5bfb5ce097/mza_5170853768330095980.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-talks-society-and-culture/id470623803?uo=4",
        primaryGenreName: "Society & Culture",
        genres: ["Society & Culture", "Podcasts", "Science"],
        country: "USA",
        releaseDate: "2023-07-18T14:44:00Z",
      },
      {
        trackId: 470624027,
        collectionName: "TED Tech",
        artistName: "TED Tech",
        feedUrl:
          "https://feeds.acast.com/public/shows/67585c62102e6d4448d44969",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/d9/32/32/d932328a-a21d-999c-690c-f05d680778b2/mza_13752174967843677920.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-tech/id470624027?uo=4",
        primaryGenreName: "Technology",
        genres: ["Technology", "Podcasts"],
        country: "USA",
        releaseDate: "2025-06-27T04:00:00Z",
      },
      {
        trackId: 470623037,
        collectionName: "TED Talks Education",
        artistName: "TED",
        feedUrl: "https://feeds.feedburner.com/iTunesPodcastTTEducation",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/e7/9b/aa/e79baa14-ae0b-f0c0-c4a9-6db9b41f74a8/mza_14916853093171831974.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-talks-education/id470623037?uo=4",
        primaryGenreName: "Courses",
        genres: ["Courses", "Podcasts", "Education", "Science"],
        country: "USA",
        releaseDate: "2023-06-02T14:58:00Z",
      },
      {
        trackId: 1437306870,
        collectionName: "The TED Interview",
        artistName: "TED",
        feedUrl:
          "https://feeds.acast.com/public/shows/67045b43aa9d704b1e952e88",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/06/9f/25/069f2595-7c4c-c0f3-bba4-7fbc0a8743e6/mza_12146987676499761547.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/the-ted-interview/id1437306870?uo=4",
        primaryGenreName: "Personal Journals",
        genres: ["Personal Journals", "Podcasts", "Society & Culture"],
        country: "USA",
        releaseDate: "2024-05-23T04:00:00Z",
      },
      {
        trackId: 1238801741,
        collectionName: "Sincerely, X",
        artistName: "TED",
        feedUrl:
          "https://feeds.acast.com/public/shows/6704561c1a3de581c684e1d5",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/0a/d9/b9/0ad9b966-3ba2-d049-7ca6-046119f4827c/mza_17518156875918169971.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/sincerely-x/id1238801741?uo=4",
        primaryGenreName: "Personal Journals",
        genres: ["Personal Journals", "Podcasts", "Society & Culture"],
        country: "USA",
        releaseDate: "2023-07-26T07:34:00Z",
      },
      {
        trackId: 470623175,
        collectionName: "TED Talks Kids and Family",
        artistName: "TED",
        feedUrl: "https://feeds.feedburner.com/iTunesPodcastTTKidsFamily",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/60/c7/1e/60c71e59-41a1-ca25-1f02-7bde427df4cf/mza_4650558618936516432.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-talks-kids-and-family/id470623175?uo=4",
        primaryGenreName: "Kids & Family",
        genres: ["Kids & Family", "Podcasts", "Science"],
        country: "USA",
        releaseDate: "2023-05-24T14:58:00Z",
      },
      {
        trackId: 1544098624,
        collectionName: "How to Be a Better Human",
        artistName: "TED",
        feedUrl:
          "https://feeds.acast.com/public/shows/67572b3b2dd88df13220eb3b",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/07/e2/84/07e2843d-0ca6-4f93-7fb8-cc93ff0cfa6f/mza_12830515654437380525.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/how-to-be-a-better-human/id1544098624?uo=4",
        primaryGenreName: "Self-Improvement",
        genres: ["Self-Improvement", "Podcasts", "Education"],
        country: "USA",
        releaseDate: "2025-06-30T04:00:00Z",
      },
      {
        trackId: 1039991663,
        collectionName: "TED-Ed: Lessons Worth Sharing",
        artistName: "TED",
        feedUrl: "https://feeds.feedburner.com/Ted-edPodcast",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/c8/60/f9/c860f961-4ac2-3638-f8c6-f5d67f413df9/mza_15355029162629781146.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-ed-lessons-worth-sharing/id1039991663?uo=4",
        primaryGenreName: "Education",
        genres: ["Education", "Podcasts", "Science"],
        country: "USA",
        releaseDate: "2020-08-09T23:07:00Z",
      },
      {
        trackId: 470623747,
        collectionName: "TED Talks News and Politics",
        artistName: "TED",
        feedUrl: "https://feeds.feedburner.com/iTunesPodcastTTNewsPolitics",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/4f/d9/e5/4fd9e57e-ea0d-4733-ab6b-bc8cfbb7da47/mza_1815972693747457004.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-talks-news-and-politics/id470623747?uo=4",
        primaryGenreName: "News",
        genres: ["News", "Podcasts", "Science"],
        country: "USA",
        releaseDate: "2023-03-21T14:57:00Z",
      },
      {
        trackId: 470616189,
        collectionName: "TED Talks Art",
        artistName: "TED",
        feedUrl: "https://feeds.feedburner.com/iTunesPodcastTTArts",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/0c/69/66/0c69661e-e882-4c0d-fcc1-41ffdc8550df/mza_954579246049236551.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-talks-art/id470616189?uo=4",
        primaryGenreName: "Arts",
        genres: ["Arts", "Podcasts", "Society & Culture"],
        country: "USA",
        releaseDate: "2023-05-04T14:46:00Z",
      },
      {
        trackId: 1368017834,
        collectionName: "TED en Español",
        artistName: "TED",
        feedUrl:
          "https://feeds.acast.com/public/shows/c7c8d4c1-dcdb-4ed7-95e9-1aade928b5f9",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/b4/50/da/b450da28-9bda-1c61-377f-9f399488bc82/mza_11744387144389933497.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-en-espa%C3%B1ol/id1368017834?uo=4",
        primaryGenreName: "Society & Culture",
        genres: ["Society & Culture", "Podcasts", "Technology"],
        country: "USA",
        releaseDate: "2023-02-23T11:00:00Z",
      },
      {
        trackId: 470623182,
        collectionName: "TED Talks Music",
        artistName: "TED",
        feedUrl: "https://feeds.feedburner.com/iTunesPodcastTTMusic",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f1/5a/62/f15a629a-7806-1052-5d7b-774811e57e35/mza_197765915893513809.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/ted-talks-music/id470623182?uo=4",
        primaryGenreName: "Music",
        genres: ["Music", "Podcasts", "Science"],
        country: "USA",
        releaseDate: "2023-08-11T14:48:00Z",
      },
      {
        trackId: 1350597227,
        collectionName: "Van Lathan's The Red Pill",
        artistName: "Loud Speakers Network",
        feedUrl:
          "https://feeds.soundcloud.com/users/soundcloud:users:399267993/sounds.rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/56/9f/b6/569fb6ce-5d8c-e042-9045-e14ce559c05c/mza_9014162157772553381.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/van-lathans-the-red-pill/id1350597227?uo=4",
        primaryGenreName: "News",
        genres: ["News", "Podcasts"],
        country: "USA",
        releaseDate: "2019-12-20T09:11:00Z",
      },
      {
        trackId: 1223764016,
        collectionName:
          "Capital Allocators – Inside the Institutional Investment Industry",
        artistName: "Ted Seides – Allocator and Asset Management Expert",
        feedUrl: "https://tedseides.libsyn.com/rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/b7/2c/85/b72c8514-3554-1fa8-5931-361010dfd84b/mza_6665040082077933863.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/capital-allocators-inside-the-institutional/id1223764016?uo=4",
        primaryGenreName: "Investing",
        genres: ["Investing", "Podcasts", "Business"],
        country: "USA",
        releaseDate: "2025-06-23T08:00:00Z",
      },
      {
        trackId: 1420191569,
        collectionName: "Seeing Red A True Crime Podcast",
        artistName: "Seeing Red",
        feedUrl:
          "https://rss.introcast.io/1420191569/feeds.megaphone.fm/seeingred",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/22/ef/3f/22ef3fdc-599c-210c-8aa5-7323f108a2c6/mza_369208665263179688.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/seeing-red-a-true-crime-podcast/id1420191569?uo=4",
        primaryGenreName: "True Crime",
        genres: ["True Crime", "Podcasts"],
        country: "USA",
        releaseDate: "2025-07-01T23:30:00Z",
      },
      {
        trackId: 1050535625,
        collectionName: "The Ted and Austin Broer Show - MP3 Edition",
        artistName: "healthmasters.com",
        feedUrl: "https://feeds.blubrry.com/feeds/ted_and_austin_broer.xml",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f1/1c/5b/f11c5bcc-5431-1014-0ce0-58c64ed43bd6/mza_2053756622887612954.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/the-ted-and-austin-broer-show-mp3-edition/id1050535625?uo=4",
        primaryGenreName: "Daily News",
        genres: [
          "Daily News",
          "Podcasts",
          "News",
          "Religion & Spirituality",
          "Christianity",
        ],
        country: "USA",
        releaseDate: "2025-06-30T15:18:00Z",
      },
      {
        trackId: 1384638621,
        collectionName: "Cover-Up",
        artistName: "People Magazine",
        feedUrl: "https://feeds.megaphone.fm/cover-up",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/d6/84/1a/d6841a22-80ce-e718-c06f-d0b02631defb/mza_16532021538698608573.jpeg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/cover-up/id1384638621?uo=4",
        primaryGenreName: "Society & Culture",
        genres: ["Society & Culture", "Podcasts", "History"],
        country: "USA",
        releaseDate: "2018-07-19T07:01:00Z",
      },
      {
        trackId: 1514010062,
        collectionName: "Far Flung with Saleem Reshamwala",
        artistName: "TED",
        feedUrl:
          "https://feeds.acast.com/public/shows/670454296f369dd035d56571",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/2c/cc/4f/2ccc4f78-335c-3992-572a-3949167d248d/mza_14783272791097143619.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/far-flung-with-saleem-reshamwala/id1514010062?uo=4",
        primaryGenreName: "Places & Travel",
        genres: ["Places & Travel", "Podcasts", "Society & Culture"],
        country: "USA",
        releaseDate: "2023-02-08T05:00:00Z",
      },
      {
        trackId: 1530131477,
        collectionName: "Red Pill News",
        artistName: "Zak Paine",
        feedUrl: "https://back.studeo.fm/api/v1/podcasts/130/rss-feeds",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/87/e7/85/87e785b4-10a3-54ba-c915-27c450930ea7/mza_16994381801301486078.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/red-pill-news/id1530131477?uo=4",
        primaryGenreName: "News",
        genres: ["News", "Podcasts"],
        country: "USA",
        releaseDate: "2025-06-30T17:49:00Z",
      },
      {
        trackId: 260079519,
        collectionName: "Big Red Barrelcast Archives - Big Red Barrel",
        artistName: "BigRedBarrel.com",
        feedUrl: "https://feeds.feedburner.com/SarcasticGamerPodcast",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/a0/10/bd/a010bdfa-988f-d7c3-3ace-e0281275d17b/mza_10686820619561954523.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/big-red-barrelcast-archives-big-red-barrel/id260079519?uo=4",
        primaryGenreName: "Video Games",
        genres: ["Video Games", "Podcasts", "Leisure"],
        country: "USA",
        releaseDate: "2018-05-16T18:05:00Z",
      },
      {
        trackId: 1434230458,
        collectionName: "Making Moves with TK",
        artistName: "Taylor King & Red Circle",
        feedUrl:
          "https://feeds.redcircle.com/386d2d59-e6b3-48e4-9ad4-30dc143cbaa0",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/76/28/cb/7628cbc7-7ccb-6b5b-bbd1-8a6585775f6d/mza_1167161704148834355.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/making-moves-with-tk/id1434230458?uo=4",
        primaryGenreName: "Society & Culture",
        genres: [
          "Society & Culture",
          "Podcasts",
          "Education",
          "Self-Improvement",
        ],
        country: "USA",
        releaseDate: "2025-02-26T17:59:00Z",
      },
      {
        trackId: 1065050908,
        collectionName: "Conservative Review with Daniel Horowitz",
        artistName: "Blaze Podcast Network",
        feedUrl: "https://feeds.megaphone.fm/BMDC8713803568",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/88/ff/43/88ff43d9-3c71-2682-61d5-0f26afd614d3/mza_2380324298665002693.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/conservative-review-with-daniel-horowitz/id1065050908?uo=4",
        primaryGenreName: "News Commentary",
        genres: ["News Commentary", "Podcasts", "News", "Politics"],
        country: "USA",
        releaseDate: "2025-06-30T16:21:00Z",
      },
      {
        trackId: 1450658033,
        collectionName: "Hunted: Inside Ted Bundy's Trail of Terror",
        artistName: "Fort Collins Coloradoan",
        feedUrl:
          "https://feeds.soundcloud.com/users/soundcloud:users:577928712/sounds.rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/cb/b9/b2/cbb9b2d1-c93b-9df5-d524-66cbc8294d1c/mza_17771038589390014400.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/hunted-inside-ted-bundys-trail-of-terror/id1450658033?uo=4",
        primaryGenreName: "Society & Culture",
        genres: ["Society & Culture", "Podcasts"],
        country: "USA",
        releaseDate: "2019-01-31T23:59:00Z",
      },
      {
        trackId: 446720857,
        collectionName: "Boars, Gore, and Swords",
        artistName: "Ivan and Red",
        feedUrl: "https://boarsgoreandswords.libsyn.com/rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/d1/1e/83/d11e8307-fb85-6c85-be7b-bafad00e552c/mza_369859131000280638.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/boars-gore-and-swords/id446720857?uo=4",
        primaryGenreName: "TV & Film",
        genres: ["TV & Film", "Podcasts", "Comedy"],
        country: "USA",
        releaseDate: "2025-06-24T10:30:00Z",
      },
      {
        trackId: 477534265,
        collectionName:
          "Taylor Talk: The Taylor Swift Podcast | reputation | 1989 | Red | Speak Now | Fearless | Taylor Swift",
        artistName:
          "TaylorTalk.org - The Taylor Swift Podcast by: Adam Bromberg, Diane, Steve",
        feedUrl: "https://taylortalk.libsyn.com/rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/04/c0/81/04c0814e-a769-f4f4-1c22-ca6858766712/mza_7428247299061024805.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/taylor-talk-the-taylor-swift-podcast-reputation-1989/id477534265?uo=4",
        primaryGenreName: "Music",
        genres: ["Music", "Podcasts", "Kids & Family"],
        country: "USA",
        releaseDate: "2018-02-20T05:01:00Z",
      },
      {
        trackId: 1109064476,
        collectionName: "Blood Red: The Liverpool FC Podcast",
        artistName: "Reach Podcasts",
        feedUrl: "https://feeds.megaphone.fm/RPSL9422504008",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/d2/d8/14/d2d81447-d5b3-1f95-ae1b-5e18380814e8/mza_11474118363269660875.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/blood-red-the-liverpool-fc-podcast/id1109064476?uo=4",
        primaryGenreName: "Soccer",
        genres: ["Soccer", "Podcasts", "Sports", "News", "Sports News"],
        country: "USA",
        releaseDate: "2025-06-26T15:46:00Z",
      },
      {
        trackId: 303359117,
        collectionName: "Red Rocks Church Weekend Messages",
        artistName: "Red Rocks Church",
        feedUrl: "https://podcasts.subsplash.com/8e5f413/podcast.rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/9a/78/c7/9a78c790-4c23-6f31-5b13-269f23ec073c/mza_15277550438297338930.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/red-rocks-church-weekend-messages/id303359117?uo=4",
        primaryGenreName: "Christianity",
        genres: ["Christianity", "Podcasts", "Religion & Spirituality"],
        country: "USA",
        releaseDate: "2025-06-28T10:00:00Z",
      },
      {
        trackId: 1482834485,
        collectionName: "The Red Nation Podcast",
        artistName: "The Red Nation",
        feedUrl: "https://therednation.libsyn.com/rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/6e/8e/fa/6e8efa63-7c8e-22dc-3958-f9606530887f/mza_14689051510710453646.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/the-red-nation-podcast/id1482834485?uo=4",
        primaryGenreName: "Society & Culture",
        genres: ["Society & Culture", "Podcasts", "History"],
        country: "USA",
        releaseDate: "2025-06-30T05:00:00Z",
      },
      {
        trackId: 379077036,
        collectionName: "Extratime",
        artistName: "Major League Soccer",
        feedUrl: "https://extratimeradio.libsyn.com/rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/01/eb/d5/01ebd5b4-a1e3-8b7e-1f71-86ccb98c1258/mza_14550253749466581288.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/extratime/id379077036?uo=4",
        primaryGenreName: "Soccer",
        genres: ["Soccer", "Podcasts", "Sports", "News", "Sports News"],
        country: "USA",
        releaseDate: "2025-01-22T00:46:00Z",
      },
      {
        trackId: 870958144,
        collectionName:
          "Legendary Life | Transform Your Body, Upgrade Your Health & Live Your Best Life",
        artistName: "Celebrity Fitness Trainer & Longevity Enthusiast Ted Ryce",
        feedUrl: "https://alphamanproject.libsyn.com/rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts114/v4/27/1c/43/271c43e6-07d4-e3cc-29da-d967e2e7b8d1/mza_18208421815388089068.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/legendary-life-transform-your-body-upgrade-your-health/id870958144?uo=4",
        primaryGenreName: "Fitness",
        genres: ["Fitness", "Podcasts", "Health & Fitness"],
        country: "USA",
        releaseDate: "2025-06-23T04:30:00Z",
      },
      {
        trackId: 130520763,
        collectionName: "F1: Chequered Flag",
        artistName: "BBC Radio 5 Live",
        feedUrl: "https://podcasts.files.bbci.co.uk/p02nrsjn.rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/7a/a1/aa/7aa1aae0-64dc-3a04-614e-ff88c6686ef4/mza_14803378256269833134.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/f1-chequered-flag/id130520763?uo=4",
        primaryGenreName: "Sports",
        genres: ["Sports", "Podcasts"],
        country: "USA",
        releaseDate: "2025-06-29T17:26:00Z",
      },
      {
        trackId: 1361259666,
        collectionName: "WTF1 Podcast",
        artistName: "WTF1 Podcast",
        feedUrl: "https://audioboom.com/channels/4949565.rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/6c/30/b6/6c30b603-78c1-36b1-a25b-f9c1012ff21c/mza_4528896274323795350.png/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/wtf1-podcast/id1361259666?uo=4",
        primaryGenreName: "Sports",
        genres: ["Sports", "Podcasts", "News", "Sports News"],
        country: "USA",
        releaseDate: "2025-06-22T13:43:00Z",
      },
      {
        trackId: 413879919,
        collectionName: "Wine for Normal People",
        artistName: "Elizabeth Schneider",
        feedUrl: "https://feeds.libsyn.com/45638/rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/90/56/f3/9056f383-d3fb-b954-4909-7bedfddec06c/mza_1568762029983158170.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/wine-for-normal-people/id413879919?uo=4",
        primaryGenreName: "Food",
        genres: ["Food", "Podcasts", "Arts"],
        country: "USA",
        releaseDate: "2025-07-02T00:00:00Z",
      },
      {
        trackId: 1047430562,
        collectionName: "The Official Red Chip Poker Podcast",
        artistName: "Red Chip Poker",
        feedUrl: "https://redchippoker.libsyn.com/rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/4c/22/47/4c22471d-af16-8b07-20fe-e2f93792d4b9/mza_8070399902853370621.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/the-official-red-chip-poker-podcast/id1047430562?uo=4",
        primaryGenreName: "Games",
        genres: ["Games", "Podcasts", "Leisure", "Hobbies"],
        country: "USA",
        releaseDate: "2025-06-24T08:04:00Z",
      },
      {
        trackId: 1452308513,
        collectionName: "Red Menace",
        artistName: "Red Menace",
        feedUrl: "https://redmenace.libsyn.com/rss",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/db/55/46/db55468e-7643-8dc9-5610-f5a23ff164f3/mza_13881883915931388028.jpeg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/red-menace/id1452308513?uo=4",
        primaryGenreName: "Politics",
        genres: [
          "Politics",
          "Podcasts",
          "News",
          "Society & Culture",
          "Philosophy",
        ],
        country: "USA",
        releaseDate: "2025-06-09T13:00:00Z",
      },
      {
        trackId: 1450196697,
        collectionName: "The Art of Process with Aimee Mann and Ted Leo",
        artistName: "Aimee Mann, Ted Leo, and Maximum Fun",
        feedUrl: "https://feeds.simplecast.com/sb0p3ceK",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/49/aa/1d/49aa1d9a-e477-cd8a-f5e3-a655be944eaa/mza_4036912007012337902.jpeg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/the-art-of-process-with-aimee-mann-and-ted-leo/id1450196697?uo=4",
        primaryGenreName: "Arts",
        genres: ["Arts", "Podcasts"],
        country: "USA",
        releaseDate: "2019-09-09T20:17:00Z",
      },
      {
        trackId: 976803232,
        collectionName: "Section 10 Podcast",
        artistName: "Barstool Sports",
        feedUrl: "https://mcsorleys.barstoolsports.com/feed/section-10",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/ec/13/ae/ec13aea7-0275-aaae-c171-b958a0492f45/mza_11853633345080940810.jpeg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/section-10-podcast/id976803232?uo=4",
        primaryGenreName: "Baseball",
        genres: ["Baseball", "Podcasts", "Sports"],
        country: "USA",
        releaseDate: "2022-02-24T21:27:00Z",
      },
      {
        trackId: 1509561884,
        collectionName: "TEDx Shorts",
        artistName: "TED and PRX",
        feedUrl:
          "https://feeds.acast.com/public/shows/670459d91a3de581c685a700",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/48/8f/97/488f9728-6481-dbe9-958d-6b201636a4ff/mza_8394477569561645901.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/tedx-shorts/id1509561884?uo=4",
        primaryGenreName: "Personal Journals",
        genres: ["Personal Journals", "Podcasts", "Society & Culture"],
        country: "USA",
        releaseDate: "2023-04-05T04:00:00Z",
      },
      {
        trackId: 1412597271,
        collectionName: "Blinking Red - The Dan Rather Podcast",
        artistName: "Dan Rather",
        feedUrl: "https://feed.pippa.io/public/shows/5b4c0bfadf68a5a337111c32",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/5a/3d/c1/5a3dc17f-5848-d081-0537-4c02c6da1132/mza_347571432543817626.jpeg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/blinking-red-the-dan-rather-podcast/id1412597271?uo=4",
        primaryGenreName: "News",
        genres: ["News", "Podcasts", "Society & Culture"],
        country: "USA",
        releaseDate: "2018-09-07T18:00:00Z",
      },
      {
        trackId: 1554567118,
        collectionName: "ReThinking",
        artistName: "TED",
        feedUrl:
          "https://feeds.acast.com/public/shows/675858676d1777b3683ec351",
        artworkUrl600:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/14/f3/2a/14f32a24-2757-3934-31ba-9f7ff5ee35ce/mza_10485809741358139751.jpg/600x600bb.jpg",
        searchTerm: "red",
        collectionViewUrl:
          "https://podcasts.apple.com/us/podcast/rethinking/id1554567118?uo=4",
        primaryGenreName: "Society & Culture",
        genres: ["Society & Culture", "Podcasts"],
        country: "USA",
        releaseDate: "2025-07-01T04:00:00Z",
      },
    ],
    source: "api",
  });

  try {
    // 2. Check database cache first
    const cachedResults = await db
      .select()
      .from(podcasts)
      .where(eq(podcasts.searchTerm, term));

    if (cachedResults.length > 0) {
      return NextResponse.json<PodcastSearchSuccessResponse>({
        results: cachedResults,
        source: "cache",
      });
    }

    // 3. If not in cache, call iTunes API
    const response = await fetch(
      `https://itunes.apple.com/search?media=podcast&term=${term}`
    );
    const data = (await response.json()) as SearchItunesAPIResponse;

    // 4. Filter only podcasts
    const podcastResults = data.results.filter(
      (item) => item.kind === "podcast"
    );

    if (podcastResults.length === 0) {
      return NextResponse.json({ error: "No podcasts found" }, { status: 404 });
    }

    // 5. Prepare data for database
    const podcastsToSave: NewPodcastInput[] = podcastResults.map((podcast) => ({
      trackId: podcast.trackId,
      collectionName: podcast.collectionName,
      artistName: podcast.artistName,
      feedUrl: podcast.feedUrl || null,
      artworkUrl600: podcast.artworkUrl600 || null,
      searchTerm: term,
      collectionViewUrl: podcast.collectionViewUrl || null,
      primaryGenreName: podcast.primaryGenreName || null,
      genres: podcast.genres || [],
      country: podcast.country || null,
      releaseDate: podcast.releaseDate || null,
    }));

    // 6. Save to database
    await db.insert(podcasts).values(podcastsToSave);

    // 7. Return results
    return NextResponse.json<PodcastSearchSuccessResponse>({
      results: podcastsToSave,
      source: "api",
    });
  } catch (error) {
    console.error("Search error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
