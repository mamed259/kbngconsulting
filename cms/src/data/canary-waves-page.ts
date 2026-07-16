export const canaryWavesPageData = {
  title: "Canary Waves",
  slug: "canary-waves",
  seo: {
    metaTitle: "Canary Waves: AI Safety Intelligence for Mining and Quarrying Operations",
    metaDescription:
      "Canary Waves is a voice-to-data AI platform that applies machine learning for safety and industrial risk detection to your two-way radio traffic, surfacing hazards, equipment stress, and bottlenecks before they become incidents.",
    canonicalUrl: "https://kbngconsulting.com/canary-waves",
  },
  sections: [
    {
      __component: "sections.cw-hero",
      heading: "Canary Waves",
      subtitle: "Voice-to-data safety intelligence for mining and quarrying",
      lead:
        "Canary Waves turns the two-way radio traffic already running across a site into real-time safety intelligence, surfacing collision risks, flagged hazards, and missed protocols to leadership before they reach the incident report. It runs passively on existing infrastructure, with no change to frontline operations.",
      imageUrl: "/images/canary-waves/hero.jpg",
      imageAlt:
        "A live mine site with Canary Waves overlays: voice intelligence monitoring 24 channels, a collision risk flagged on a haul road, a missed call-sign protocol alert, and a traffic summary of active channels, transmissions, and risk events.",
      primaryCtaText: "Book a Demo",
      primaryCtaHref: "https://canary-waves.com/#contact",
      secondaryCtaText: "See what we surface",
      secondaryCtaHref: "#issues",
    },
    {
      __component: "sections.cw-stats",
      label: "A likely snapshot of your data",
      items: [
        {
          value: "365+",
          label:
            "holding calls cross the radio in a single week, mapping the bottlenecks that quietly cap throughput.",
          source: "Canary Waves operational analysis",
        },
        {
          value: "28",
          label:
            "equipment overheating warnings in a week, clustering on the same units hours before a failure.",
          source: "Canary Waves operational analysis",
        },
        {
          value: "37",
          label:
            "safety hazards flagged over the air in a week: lightning holds, rock, and debris on the haul roads.",
          source: "Canary Waves operational analysis",
        },
      ],
    },
    {
      __component: "sections.cw-insight",
      kicker: "The signal is already there",
      heading: "Every shift, your radios hold data no one is reading.",
      promise:
        "Two-way radio has not fundamentally changed since the 1970s. What you can do with it has. The intelligence that prevents the next incident is already in your daily radio traffic. It has just never been captured, structured, or put in front of the people who can act on it. Without it, teams on high-risk worksites stay reactive to operational errors and safety violations.",
      imageUrl: "/images/canary-waves/insight.jpg",
      imageAlt:
        "Two two-way radios facing each other with a voice-data waveform running between them, with a lit mine headframe behind.",
      gapItems: [
        { num: "50+ years", text: "of two-way radio your crews rely on every shift." },
        { num: "0", text: "safety intelligence extracted from it.", until: "Until now." },
      ],
    },
    {
      __component: "sections.cw-issues",
      sectionConfig: { sectionId: "issues" },
      kicker: "Mining's hardest problems run through haulage",
      heading: "The deaths, the downtime, and the lost tonnes trace to one place. So does the radio.",
      promise:
        "Three problems, one place: haulage. Trucks moving, holding, and passing each other on a congested site, all coordinated over the radio. The warnings are already there, every shift. Canary Waves listens.",
      cards: [
        {
          title: "Powered haulage, mining's deadliest risk",
          quote: "Light vehicle coming down the decline, watch out everyone.",
          body:
            "Powered haulage kills more miners than anything else, and the named root causes are poor communication and traffic management. That is the radio. The proximity calls, the blind declines, the near-misses before a crash, roughly 300 behind every serious injury, all said out loud and never logged.",
          bullets: [
            "Proximity and near-miss language flagged live",
            "Traffic risk concentrated at the worst declines",
            "The near-misses behind every serious injury, recorded",
            "Evidence for your surface mobile equipment plan",
          ],
          forLabel: "Safety managers and crews.",
          accentTheme: "coral",
        },
        {
          title: "The breakdowns you could have heard coming",
          quote: "Last of four holding, and she's running hot.",
          body:
            "A haul truck down costs $5,000 to $20,000 an hour, and a major failure can reach $2 million in a day. Almost none of it comes from nowhere. The same units are called in overheating for hours first, idling in a queue with no airflow, and the warning reaches the radio before the fault code.",
          bullets: [
            "Repeat overheating mentions clustered by unit",
            "Thermal strain building under idle and load",
            "Cooling faults named days before a breakdown",
            "The spoken warning ahead of the telematics alert",
          ],
          forLabel: "Maintenance and reliability leads.",
          accentTheme: "yellow",
        },
        {
          title: "The lost tonnes no one is counting",
          quote: "Still holding. Hold at the decline.",
          body:
            "Cost per tonne is won or lost in haulage, and congestion is the silent tax. The same holding calls cross the radio hundreds of times a week, same declines, same dump points, every shift. Idle trucks burn fuel and move no ore, and those calls map exactly where a fix pays for itself.",
          bullets: [
            "Holding calls mapped by location and shift",
            "Bottlenecks pinpointed at declines and dump points",
            "Route diversions and reroutes counted over time",
            "Idle time turned into a number you can act on",
          ],
          forLabel: "Operations leads and dispatch.",
          accentTheme: "yellow",
        },
      ],
    },
    {
      __component: "sections.cw-culture",
      kicker: "Communication and culture",
      heading: "How your crews communicate is a safety signal of its own.",
      promise:
        "The same radio traffic carries the culture of the operation: whether protocols are followed, whether the tone is steady, and whether the channels are being used the way they should. These are leading indicators of safety, and they stay invisible to every other system.",
      cards: [
        {
          title: "Protocol breaches you can hear",
          body:
            "Many of the most common breaches are spoken before they are seen. Light vehicles passing a haul truck against protocol, calls skipped, procedures cut short. Each one raises risk and adds machine wear and delay. Canary Waves flags the breach in the traffic, so it can be corrected before it becomes an incident.",
          icon: "radio",
          imageUrl: "/images/canary-waves/ccard-1.jpg",
          imageAlt: "A two-way radio with a protocol breach flagged in its live radio traffic.",
        },
        {
          title: "Tone as a safety signal",
          body:
            "Radio tone tells you when a crew is under strain. The shift from steady, professional calls to sharp or unprofessional language tracks with fatigue, distraction, and rising risk. Measuring positive against negative communication gives leaders a read on culture and radio discipline they have never had.",
          icon: "tone",
          imageUrl: "/images/canary-waves/ccard-2.jpg",
          imageAlt: "A two-way radio reading crew tone from the voice on the channel.",
        },
        {
          title: "Conduct on the channels",
          body:
            "Harmful behavior often hides on the secondary channels, where no supervisor is listening. Abusive or bullying exchanges wear down morale and safety and rarely reach leadership. Canary Waves surfaces conduct across every channel, and shows which channels are earning their place and which should be retired.",
          icon: "network",
          imageUrl: "/images/canary-waves/ccard-3.jpg",
          imageAlt: "A channel network map showing conduct across radio channels, with some flagged.",
        },
      ],
    },
    {
      __component: "sections.cw-pills",
      label: "The same radio traffic also surfaces",
      items: [
        "Hazard detection",
        "Equipment communication and collision prevention",
        "Contractor oversight and operational KPI monitoring",
        "Equipment health monitoring",
        "Environmental response: spills, dust, ventilation",
        "Multilingual transcription and translation",
        "Compliance automation",
        "Safety culture analytics",
        "AI-powered training with real-world scenarios",
        "AI communication analytics",
        "Safety monitoring technology",
        "Mining productivity analytics",
        "Voice analytics for industrial operations",
        "Proactive maintenance",
        "Non-compliance flagging",
        "Safety coaching and continuous improvement",
      ],
    },
    {
      __component: "sections.cw-workflow",
      sectionConfig: { sectionId: "workflow" },
      heading: "From radio chatter to intelligence your team can act on.",
      subtitle: "No new hardware, no new habits. Canary Waves works on the radio infrastructure you already run.",
      steps: [
        {
          num: "01",
          title: "Capture",
          body:
            "Connect to your existing radio infrastructure on mining and quarrying sites. No new hardware, and no change to how crews communicate on the ground.",
        },
        {
          num: "02",
          title: "Transcribe",
          body:
            "Automatic Speech Recognition (ASR), speech recognition for mining, converts radio chatter into voice-to-text analytics in near real time, tuned to your site's slang, equipment names, and terminology.",
        },
        {
          num: "03",
          title: "Analyze",
          body:
            "Machine learning for safety surfaces hazard detection and hazard identification, industrial risk detection, operational inefficiencies, and equipment stress, with predictive safety analytics and predictive safety intelligence flagging early warning indicators before they become incidents.",
        },
        {
          num: "04",
          title: "Report",
          body:
            "Structured safety reports, decision-ready summaries, and alerts reach the right people at the right time, supporting compliance automation while something can still be done.",
        },
      ],
    },
    {
      __component: "sections.cw-adopt",
      kicker: "Why teams adopt it",
      heading: "Built for the operations where a missed signal can cost a life.",
      promise:
        "Real-time communication monitoring that earns its place on site, because it asks nothing of the people doing the work, and it turns everyday radio traffic into innovation in operational safety and performance improvement through AI.",
      footnote:
        "AI safety intelligence for mining and quarrying operations, and an industrial AI solution for safety managers, operations leads, and digital transformation teams across heavy industry.",
      cards: [
        {
          title: "Flagged while crews are still in motion",
          body:
            "Risks reach you during the shift, not in the end-of-shift debrief or the post-incident review. That is when a safety manager can still act on them.",
        },
        {
          title: "Zero change for your frontline",
          body:
            "Operators keep working exactly as they do today. No new devices, no new habits, no training rollout. Canary Waves runs quietly in the background on infrastructure that already exists.",
        },
        {
          title: "One clear picture across every shift",
          body:
            "Leadership gets a single operational narrative, not three conflicting shift reports or 400 lines of transcript. Just the signals that matter, by location, shift, and pattern.",
        },
      ],
    },
    {
      __component: "sections.cw-quote",
      text: "Preventable should mean prevented.",
      attr: "The founding belief behind Canary Waves",
      footnote:
        "Canary Waves is a KB&G co-founded product, proven in early MVP pilots on real mine sites alongside site teams and safety professionals, and built as high-impact safety and compliance tech for heavy-industry operations.",
    },
    {
      __component: "sections.cw-faq",
      heading: "Questions we hear from safety and ops leaders.",
      items: [
        {
          question: "How does AI improve safety in mining operations?",
          answer:
            "Most incidents are preceded by warnings that are spoken on the radio and never captured. As an AI-based safety intelligence system for mining, Canary Waves applies machine learning for safety compliance monitoring to that traffic, surfacing hazards and risk while there is still time to act. It works as a voice analytics solution for industrial operations across mining and quarrying. That is how AI improves safety in mining operations: by hearing the warning while it still matters.",
        },
        {
          question: "Do our crews have to change how they use the radio?",
          answer:
            "No, and that is the point. Canary Waves connects to your existing radio data and works in the background. Operators communicate exactly as they do today. Nothing changes on the ground, and the intelligence surfaces to leadership rather than the frontline.",
        },
        {
          question: "Is this built only for mining?",
          answer:
            "Mining and quarrying come first, where fatality rates run well above the national average and two-way radio is still the backbone of site communication. The models are trained on industry language, slang, and equipment names. We also support manufacturing and energy operations where communication quality shapes safety outcomes.",
        },
        {
          question: "How quickly can we be up and running?",
          answer:
            "Fast. There is no hardware to install, no frontline training, and no change to existing workflows. Most proof-of-concept deployments are live within days of connecting to site radio data. You can deploy AI safety software on mining sites quickly, and the same setup powers quarry risk detection from the first shift. Low-friction rollout is a design goal, because too many safety tools fail when adoption is hard.",
        },
        {
          question: "What happens to our data, and what about worker privacy?",
          answer:
            "Audio is processed with strong encryption and can be deleted automatically after analysis. No voice biometrics are stored, and speaker references in reports can be anonymized. Your data stays yours, and we never use it to train models without your explicit consent. We are glad to walk through how other sites have introduced this in a way that builds trust with crews.",
        },
      ],
    },
    {
      __component: "sections.cw-cta",
      heading: "What is your radio traffic trying to tell you right now?",
      body:
        "Book a 30-minute walkthrough. We will show you the exact signals Canary Waves would surface from a typical shift, mapped to your site, your safety priorities, and your reporting structure.",
      primaryCtaText: "Book a Demo",
      primaryCtaHref: "https://canary-waves.com/#contact",
      secondaryCtaText: "See what we surface",
      secondaryCtaHref: "#issues",
    },
  ],
} ;
