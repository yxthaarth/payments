import { SiteHeader } from "../../components/site-header";

const faqs = [
  {
    question: "How fast are international transfers?",
    answer:
      "In supported corridors, Swiftly Pay aims to deliver in seconds. Some routes may still take longer depending on recipient bank requirements."
  },
  {
    question: "Can I use this for family payments and personal transfers?",
    answer:
      "Yes. The experience is designed for everyday users first, while still supporting freelancers and growing teams."
  },
  {
    question: "Why does payment stop before final confirmation?",
    answer:
      "Users can review transfer details, fees, delivery timing, and recipient information before completing payment with confidence."
  },
  {
    question: "What makes it different from slow forex flows?",
    answer:
      "The emphasis is on transparent pricing, simple UX, and faster payout infrastructure instead of opaque multi-day settlement."
  }
];

export default function HelpPage() {
  return (
    <div className="app-frame">
      <SiteHeader />
      <main className="page-stack">
        <section className="page-heading">
          <p className="eyebrow">Help center</p>
          <h1>Friendly answers for first-time international senders.</h1>
          <p className="section-copy">
            The tone here stays simple on purpose. International money movement
            is already stressful enough without overwhelming users.
          </p>
        </section>

        <section className="faq-grid">
          {faqs.map((faq) => (
            <article className="glass-card faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
