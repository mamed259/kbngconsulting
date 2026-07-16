export const visionAiPageData = {
  title: "Vision AI",
  slug: "vision-ai",
  seo: {
    metaTitle: "Vision AI: Custom Computer Vision Development | KB&G",
    metaDescription:
      "Vision AI for industrial safety and beyond. Custom Vision AI development and fine-tuned computer vision for environments and products where off-the-shelf models fall short.",
    canonicalUrl: "https://kbngconsulting.com/kbng-innovation-studio/vision-ai",
  },
  sections: [
    {
      __component: "sections.va-hero",
      heading: "Vision AI",
      subtitle:
        "Custom Vision AI development: fine-tuned computer vision for the environments and products where a generic model falls short.",
      lead:
        "Generic vision models are trained on clean, predictable images. Your world is neither. KB&G builds site-specific computer vision models that hold up in dust, low light, and the exact conditions where a generic model quietly fails, whether the job is catching a missing hardhat underground or rendering a seven-stone ring as seven stones every time.",
      imageUrl: "/images/vision-ai/hero.jpg",
      imageAlt:
        "A processing plant read by Vision AI, with overlays confirming PPE compliance, an authorized restricted area, Mill 03 status, equipment health, fragment size distribution, and safe behavior, with workers on the walkways.",
      primaryCtaText: "Book a Call",
      primaryCtaHref: "https://kbngconsulting.com/contacts",
      secondaryCtaText: "See where it earns its keep",
      secondaryCtaHref: "#examples",
    },
    {
      __component: "sections.va-insight",
      kicker: "Why generic vision breaks",
      heading: "A model that nails the demo can miss on your site.",
      promise:
        "Computer vision research has a name for it: domain shift. A model trained in one environment loses accuracy the moment the environment changes. Take a detector tuned on bright, clean images and drop it into a mine at depth, sodium-vapor light, heavy dust, reflective rock, narrow tunnels, camera distortion, and detection degrades fast. The same gap shows up in luxury, where a generic image model trained on the whole internet cannot hold a brand's exact stone count, proportions, or hardware placement. The fix is adaptation: fine-tune the model on your environment, your cameras, and your rules, and it starts to earn its place. Generic vision tools are built for clean, predictable environments, and mines, plants, and high-mix production sites are none of those.",
    },
    {
      __component: "sections.va-build",
      kicker: "What we build",
      heading: "Tuned to your world, it catches what a generic model misses.",
      promise:
        "Whether the goal is a safer site or a flawless product preview, we develop practical, testable models that detect real risks and hold your details to your own rules, in the real-world conditions your cameras and customers actually see.",
      cards: [
        {
          title: "Safety and risk detection",
          body:
            "Computer vision for industrial environments: PPE detection for hardhats, vests, and gloves, unsafe behavior flagging like proximity, restricted access, and line crossing, and environmental risk monitoring across vehicle and person interaction and machine zones.",
          icon: "safety",
          imageUrl: "/images/vision-ai/build-1.jpg",
          imageAlt:
            "A mine site analysed by Vision AI, with overlays confirming PPE, flagging unsafe proximity to a haul truck, an active restricted blast zone, and a detected vehicle.",
        },
        {
          title: "Counting and measurement",
          body:
            "The details a generic model drifts on, held exact: stone counts, dimensions, spacing, and configurations, so a seven-stone ring is always seven stones.",
          icon: "count",
          imageUrl: "/images/vision-ai/build-2.jpg",
          imageAlt:
            "A ring measured against exact design parameters: stone count seven, stone size, spacing, band width, and manufacturing tolerances.",
        },
        {
          title: "Brand-accurate generation",
          body:
            "Previews and personalization that keep logos, proportions, colors, and materials locked to your brand rules, with no invented details.",
          icon: "brand",
          imageUrl: "/images/vision-ai/build-3.jpg",
          imageAlt:
            "A branded design builder generating a KB&G safety shoe from set materials, accent colors, stitching, and sole options.",
        },
        {
          title: "Photoreal visualization",
          body:
            "Realistic previews of finishes, materials, and lighting that help a premium buyer say yes at the quote stage.",
          icon: "photo",
          imageUrl: "/images/vision-ai/build-4.jpg",
          imageAlt: "A photoreal workshop preview with realistic materials, finishes, and lighting.",
        },
      ],
    },
    {
      __component: "sections.va-examples",
      sectionConfig: { sectionId: "examples" },
      kicker: "From gold mines to luxury bags",
      heading: "The industry changes. The process does not.",
      promise:
        "Vision AI can make your product safer, make it more precise, and sometimes become the product itself. The through-line is the process. Find where a generic model breaks, fine-tune it on the real domain, and turn it into precision that changes the outcome. The setting is the only thing that changes. Here is the same process running in four very different places.",
      cards: [
        {
          title: "When conditions break the model",
          body:
            "Some environments look nothing like the clean images a generic model learned on: dust, glare, motion, low light. Detection drifts and false alarms pile up. The process is to fine-tune on the real conditions until it holds. A mine underground is the classic case, catching PPE, proximity, and hazards, and the same process fits any harsh site.",
          bullets: [
            "Detection tuned to your real conditions",
            "PPE, proximity, and hazard alerts you can trust",
            "Fewer false positives as the model learns your world",
          ],
          forLabel: "mining, aggregates, quarrying, ports, any harsh site",
          accentTheme: "coral",
        },
        {
          title: "When the count has to be exact",
          body:
            "Some outputs have one right answer, and a generic model drifts off it: counts, dimensions, spacing, configurations. The process is to train on your exact rules so the number is always right. A jeweler is the vivid case, a seven-stone ring that has to render as seven stones every time, and the same process fits parts, inventory, and inspection.",
          bullets: [
            "Trained on your exact rules and configurations",
            "Correct counts, sizes, spacing, and symmetry",
            "A right answer the model does not drift off",
          ],
          forLabel: "jewelry, manufacturing, parts inspection, inventory",
          accentTheme: "yellow",
        },
        {
          title: "When the visual has to convince",
          body:
            "When a preview has to look real enough to close a sale, generic drafts fall short on materials, lighting, and finish. The process is to fine-tune for fidelity until the image sells. A premium contractor previewing stair finishes is one case, and the same process fits furniture, interiors, and product configurators.",
          bullets: [
            "Fast iteration on materials, finish, and lighting",
            "Visual fidelity fit for a premium buyer",
            "Stronger sales support at the quote stage",
          ],
          forLabel: "contractors, furniture, interiors, product config",
          accentTheme: "blue",
        },
        {
          title: "When generation must stay on brand",
          body:
            "Generative previews that have to hold exact logos, proportions, colors, and materials, with nothing invented. The process is to train on your brand rules and authentic images so personalization stays on brand at scale. A luxury label is the obvious case, and the same process fits footwear, auto, and any brand that ships customization.",
          bullets: [
            "Trained on brand rules and authentic images",
            "Approved logos, colors, materials, and hardware only",
            "Personalization at scale that protects brand equity",
          ],
          forLabel: "luxury, footwear, auto, any custom brand",
          accentTheme: "mint",
        },
      ],
    },
    {
      __component: "sections.va-lens",
      kicker: "The founder lens",
      heading: "Whether you train your own model is a strategic decision, made by the business.",
      promise:
        "Honest partners will not push you to build everything at once. The real question is whether model precision changes your competitive position. Here is the simple test.",
      footnote:
        "If model precision changes your competitive position, fine-tune. If it does not, move fast with what already exists. That is the founder lens, and it is the same lens we bring to every Vision AI project.",
      cards: [
        {
          title: "Fine-tune when",
          bullets: [
            "Your environment differs from public datasets",
            "Accuracy affects safety or liability",
            "Precision defines the value you sell",
            "Brand integrity is at stake",
          ],
          accentTheme: "mint",
        },
        {
          title: "Move fast with what exists when",
          bullets: [
            "AI supports the product but does not define it",
            "The domain is visually common",
            "Your risk tolerance is higher",
            "Speed matters more than perfection",
          ],
          accentTheme: "slate",
        },
      ],
    },
    {
      __component: "sections.va-audience",
      kicker: "Who it's for",
      heading: "Built for teams who already know off-the-shelf is not enough.",
      cards: [
        {
          title: "Innovation teams",
          body: "You have cameras or data and no custom AI capability to make them see what matters.",
        },
        {
          title: "Founders",
          body: "Building a business where Vision AI is the product itself, and precision is the whole point.",
        },
        {
          title: "Brands and manufacturers",
          body: "Where stone counts, proportions, materials, and brand rules define the value you sell.",
        },
        {
          title: "Safety leaders",
          body:
            "On heavy industry sites with dynamic layouts and low-visibility challenges, where off-the-shelf safety tools fall short.",
        },
        {
          title: "Digital execs",
          body: "Looking for proven field partners to build with, from pilot to scale.",
        },
      ],
    },
    {
      __component: "sections.va-workflow",
      heading: "From idea to impact, without chasing hype.",
      subtitle:
        "We match the right partners, frame the right use cases, and manage the project from pilot to scale. KB&G acts as your product strategist, translator, and integrator, and we start small: build what the real problem needs, validate it against your data, prove the business case, then scale from there. No overbuilt platforms, no tech hype.",
      steps: [
        {
          num: "01",
          title: "Frame",
          body: "We pin down the real use case and the exact conditions your model has to survive on site.",
        },
        {
          num: "02",
          title: "Pilot",
          body: "We build a focused MVP on your data and your rules, at a fraction of full-scale cost.",
        },
        {
          num: "03",
          title: "Validate",
          body:
            "We test it against your data and safety thresholds and prove the business case before you scale.",
        },
        {
          num: "04",
          title: "Scale",
          body:
            "We extend what works across sites, with dashboards and event logs for audit, coaching, and training.",
        },
      ],
    },
    {
      __component: "sections.va-quote",
      text: "If model precision changes your competitive position, fine-tune. If it does not, move fast with what exists.",
      attr: "The founder lens behind KB&G Vision AI",
    },
    {
      __component: "sections.va-faq",
      heading: "Questions we hear from safety, innovation, and brand teams.",
      items: [
        {
          question: "When do I need a custom vision model instead of an off-the-shelf tool?",
          answer:
            "When your environment differs from the clean, public datasets generic models learn from, when accuracy affects safety or liability, or when precision is the value you sell. If AI only supports your product and the domain is visually common, an off-the-shelf tool is usually enough. That is exactly the call KB&G helps you make before anyone writes code.",
        },
        {
          question: "What environments and products is Vision AI built for?",
          answer:
            "Both rugged industrial sites and precision-driven products. On a mine or aggregates site, this is Vision AI for industrial safety: generic detectors degrade in sodium-vapor light, heavy dust, and narrow tunnels, a textbook case of domain shift, so we build site-specific computer vision models and fine-tune them on your environment for accurate detection in real-world visibility conditions. For a jewelry or luxury brand, the same fine-tuning holds exact stone counts, proportions, and brand rules that a generic model cannot. The principle is identical: adapt the model to your world.",
        },
        {
          question: "What can Vision AI detect or generate?",
          answer:
            "On the detection side: PPE detection for hardhats, vests, and gloves, unsafe behavior such as proximity, restricted access, and line crossing, and environmental risk such as vehicle and person interaction and machine zones, all tied to custom alert logic and your own safety thresholds, with visual dashboards and event logs for audit, coaching, or training. On the generation side: brand-accurate previews and personalization that hold logos, materials, and proportions to your rules.",
        },
        {
          question: "How much does a custom Vision AI system cost?",
          answer:
            "It depends on complexity, from lighter visualization work to safety-critical detection that needs specialized data and integrations. The honest answer is to weigh it as return on investment. We start with a staged MVP so you validate the real problem and prove the business case at a fraction of full-scale cost, then invest further only where precision protects revenue, reduces risk, or lifts conversion.",
        },
        {
          question: "Can Vision AI be the product itself?",
          answer:
            "Yes. In some businesses vision makes the product better; in others it is the product. When model precision changes your competitive position, a custom model becomes a strategic asset, from a mine's safety system to a luxury brand's personalization engine. KB&G helps you decide which case you are in, then builds for it.",
        },
      ],
    },
    {
      __component: "sections.va-cta",
      heading: "Ready to build vision that holds up in your environment?",
      body:
        "Tell us where off-the-shelf vision is failing you, on a mine site, a production line, or a luxury product, and we will frame the use case, scope an MVP, and show you what a site-specific model can do.",
      primaryCtaText: "Book a Call",
      primaryCtaHref: "https://kbngconsulting.com/contacts",
      secondaryCtaText: "See our work",
      secondaryCtaHref: "https://kbngconsulting.com/consulting-services",
    },
  ],
};
