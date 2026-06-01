import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { FeatureCard } from "../components/feature-card";
import { CorridorTicker } from "../components/corridor-ticker";

const features = [
  {
    title: "Instant where it matters",
    body: "Send money to family, freelancers, or global teams without waiting through the usual banking delays."
  },
  {
    title: "Clear pricing upfront",
    body: "See the rate, fee, and expected delivery before you continue so there is no second-guessing."
  },
  {
    title: "Built for normal people",
    body: "The product is simple enough for first-time senders and polished enough for power users."
  }
];

export default function HomePage() {
  return (
    <div className="app-frame">
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Cross-border payments that feel local</p>
            <h1>Send money internationally in seconds, not banking days.</h1>
            <p className="lede">
              Swiftly Pay helps people move money across borders with less
              waiting, less confusion, and a calmer experience from start to
              finish.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/send">
                Start Sending
              </Link>
              <Link className="button button-secondary" href="/track">
                Track a Transfer
              </Link>
            </div>
            <div className="trust-row">
              <span>For personal transfers</span>
              <span>For freelance payouts</span>
              <span>For small businesses too</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="glass-card payment-preview">
              <div className="card-topline">
                <span>Live payment preview</span>
                <span className="status-badge">Ready in seconds</span>
              </div>
              <div className="preview-amounts">
                <div>
                  <p>You send</p>
                  <h2>$850</h2>
                  <span>From Boston, USA</span>
                </div>
                <div className="preview-divider" />
                <div>
                  <p>Recipient gets</p>
                  <h3>₹71,248</h3>
                  <span>In Mumbai, India</span>
                </div>
              </div>
              <div className="preview-meta">
                <div>
                  <small>Estimated delivery</small>
                  <strong>Under 30 seconds</strong>
                </div>
                <div>
                  <small>Transparent fee</small>
                  <strong>$3.90</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CorridorTicker />

        <section className="section section-split">
          <div>
            <p className="eyebrow">Why people switch</p>
            <h2>Traditional forex feels built around institutions. This feels built around you.</h2>
          </div>
          <p className="section-copy">
            Instead of forcing users through slow, opaque flows, Swiftly Pay
            shows what is happening, how much it costs, and when it should
            arrive. That makes the whole experience feel lighter and more
            trustworthy.
          </p>
        </section>

        <section className="card-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </section>

        <section className="section showcase">
          <div className="showcase-copy">
            <p className="eyebrow">Explore the product</p>
            <h2>Everything users need for confident international payments.</h2>
            <p className="section-copy">
              From sending money to managing recipients and tracking progress,
              every step is designed to feel clear, calm, and easy to trust.
            </p>
          </div>
          <div className="showcase-links">
            <Link className="showcase-link" href="/send">
              <strong>Send money</strong>
              <span>Create a transfer with live totals and clear delivery timing.</span>
            </Link>
            <Link className="showcase-link" href="/recipients">
              <strong>Recipients</strong>
              <span>Add and manage recipients in a clean, reusable address book.</span>
            </Link>
            <Link className="showcase-link" href="/track">
              <strong>Track</strong>
              <span>Search and filter transfers by status or reference ID.</span>
            </Link>
            <Link className="showcase-link" href="/help">
              <strong>Help center</strong>
              <span>See product guidance, safety notes, and FAQs.</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
