import { SiteHeader } from "../../components/site-header";
import { SendExperience } from "../../components/send-experience";

export default function SendPage() {
  return (
    <div className="app-frame">
      <SiteHeader />
      <main className="page-stack">
        <section className="page-heading">
          <p className="eyebrow">Send money</p>
          <h1>Build a transfer in a few calm steps.</h1>
          <p className="section-copy">
            Review rates, fees, and delivery timing in a few simple steps, then
            prepare a transfer with full clarity before payment is confirmed.
          </p>
        </section>
        <SendExperience />
      </main>
    </div>
  );
}
