"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "Why €750?",
    a: (
      <>
        Because I can&apos;t keep watching smart founders make the same mistakes,
        burning months and runway in the dark. It is deliberately low-entry and
        fully refundable, so a serious read reaches founders earlier, at a
        fraction of an agency retainer or a month of the wrong hire. It replaces
        months of guessing, hours of late-night searching, and mentor calls that
        contradict each other because they answer with 2022 playbooks.{" "}
        <b>If it doesn&apos;t open your eyes, you don&apos;t pay.</b>
      </>
    ),
  },
  {
    q: "What exactly do you look at?",
    a: (
      <>
        Eight imbalances:{" "}
        <b>
          positioning, pricing, ICP, channel, product scope, motivation,
          co-founder, and stage fit.
        </b>{" "}
        I read everything you send and use the product live, signing up and
        onboarding as a real user. Then I name which one is holding you, and the
        order to fix them. It works like a Chinese medicine consultation:
        headaches are digestion, insomnia is liver. The symptom is rarely the
        problem.
      </>
    ),
  },
  {
    q: "What will I actually know at the end?",
    a: (
      <>
        Who your customer actually is, and the two to stop chasing. What is
        broken first, and the order to fix it in. What to do on Monday,
        sequenced into Month 1, 2 and 3. What to stop doing. What the real
        co-founder argument is about. Which mentor advice to trust, because most
        of it contradicts. And whether to scale, pivot, or stop.
      </>
    ),
  },
  {
    q: "What lands in your inbox?",
    a: (
      <>
        An <b>8 to 12 page written report</b>: what is broken, in what order to
        fix it, and what to leave alone. A <b>30-minute Loom</b> where I talk
        you through it line by line, so nothing gets lost in translation.{" "}
        <b>Lifetime follow-up</b> on WhatsApp or Telegram, with no clock running.
        And a <b>free check-in at day 30</b>: what did you implement, what got
        stuck, what changed. The effect runs 3 to 12 months depending on your
        stage and your willingness to act. The document is yours forever, and
        most founders re-read it in month 2 and again in month 3.
      </>
    ),
  },
  {
    q: "I can just ask ChatGPT. Why pay?",
    a: (
      <>
        I&apos;m sure you already did. Look where you are now. What you get here
        are perspectives you didn&apos;t think to ask for, in a read that cannot
        be reused on another founder.
      </>
    ),
  },
  {
    q: "I already have an advisor or mentor.",
    a: (
      <>
        A coach makes you better at what you are already doing. An advisor helps
        you pick what to do next. Both leave the broken thing exactly where it
        is, because neither one goes looking for it.{" "}
        <b>I diagnose. That is the whole job.</b> And it works without me ever
        meeting you, so I am as objective as a stranger. My personal opinion of
        you never enters the room.
      </>
    ),
  },
  {
    q: "What if the diagnosis is useless?",
    a: (
      <>
        Then you don&apos;t pay. Reply &quot;refund&quot; and the money is back
        in 48 hours. No retention call. <b>The risk sits with me.</b>
      </>
    ),
  },
  {
    q: "I want a live conversation, not a document.",
    a: (
      <>
        We can arrange that if you insist, and when a recommendation is pivotal
        enough to be misread in writing, I&apos;ll book the call myself. But
        I&apos;ll tell you upfront: the document is yours forever. A call
        evaporates by morning.
      </>
    ),
  },
  {
    q: "I've burned money on consultants. Why are you different?",
    a: (
      <>
        I&apos;ve burned money too, many times more than €750. So I know exactly
        what templated advice looks like, with its &quot;insert founder name
        here&quot; energy. Mine cannot be applied to another startup.{" "}
        <b>
          If a single paragraph could be reused for another founder, you get a
          refund.
        </b>
      </>
    ),
  },
  {
    q: "I don't have €750 right now.",
    a: <>Email me. We can discuss payment terms.</>,
  },
  {
    q: "I'm not a technical founder. Is this for me?",
    a: (
      <>
        If you&apos;re early-stage and serious about building a real business,
        yes. Whether you built it with your hands or with AI tools like Lovable,
        Cursor, or Bolt, whether it&apos;s fully live or half-shipped, makes no
        difference. <b>The hole is the same.</b>
      </>
    ),
  },
] as const;

export function FdFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="head reveal">
          <h2>Fair questions. Straight answers.</h2>
        </div>
        <div className="obj-list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `fd-faq-panel-${i}`;
            return (
              <div
                key={item.q}
                className={`obj${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="obj-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span className="plus" aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  className="obj-panel"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className="obj-panel-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
