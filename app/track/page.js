import { SiteHeader } from "../../components/site-header";
import { TransferTracker } from "../../components/transfer-tracker";

export default function TrackPage() {
  return (
    <div className="app-frame">
      <SiteHeader />
      <main className="page-stack">
        <section className="page-heading">
          <p className="eyebrow">Track transfers</p>
          <h1>Know what is happening at every step.</h1>
          <p className="section-copy">
            Search a sample transfer, filter by status, and see progress
            updates as if the money were already in motion.
          </p>
        </section>
        <TransferTracker />
      </main>
    </div>
  );
}
