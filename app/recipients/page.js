import { SiteHeader } from "../../components/site-header";
import { RecipientManager } from "../../components/recipient-manager";

export default function RecipientsPage() {
  return (
    <div className="app-frame">
      <SiteHeader />
      <main className="page-stack">
        <section className="page-heading">
          <p className="eyebrow">Recipients</p>
          <h1>Save people once and send faster next time.</h1>
          <p className="section-copy">
            Keep recipient details organized in one place so repeat transfers
            feel faster, smoother, and more personal.
          </p>
        </section>
        <RecipientManager />
      </main>
    </div>
  );
}
