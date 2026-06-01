"use client";

import { useEffect, useState } from "react";

const rates = {
  USD: { INR: 83.82, EUR: 0.92, GBP: 0.79, SGD: 1.35 },
  GBP: { INR: 106.2, EUR: 1.17, USD: 1.27, SGD: 1.71 },
  EUR: { INR: 91.3, USD: 1.09, GBP: 0.85, SGD: 1.47 }
};

const deliveryByCurrency = {
  INR: "Under 30 seconds",
  EUR: "About 1 minute",
  GBP: "About 45 seconds",
  SGD: "Under 20 seconds",
  USD: "About 1 minute"
};

const initialForm = {
  sendAmount: "850",
  fromCurrency: "USD",
  toCurrency: "INR",
  recipient: "Aarav Sharma",
  destination: "Mumbai, India",
  purpose: "Family support"
};

function getRate(fromCurrency, toCurrency) {
  if (fromCurrency === toCurrency) {
    return 1;
  }

  return rates[fromCurrency]?.[toCurrency] ?? 1;
}

function formatMoney(value, currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "INR" ? 0 : 2
  }).format(value);
}

export function SendExperience() {
  const [form, setForm] = useState(initialForm);
  const [drafts, setDrafts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedDrafts = window.localStorage.getItem("swiftly-drafts");
    if (storedDrafts) {
      setDrafts(JSON.parse(storedDrafts));
    }
  }, []);

  const amount = Number(form.sendAmount || 0);
  const rate = getRate(form.fromCurrency, form.toCurrency);
  const fee = amount > 0 ? Math.max(2.5, amount * 0.0045) : 0;
  const receiveAmount = Math.max(amount - fee, 0) * rate;
  const deliveryTime = deliveryByCurrency[form.toCurrency] ?? "About 1 minute";

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function saveDraft(event) {
    event.preventDefault();

    const nextDraft = {
      id: `SWFT-${Date.now().toString().slice(-6)}`,
      ...form,
      fee,
      receiveAmount,
      createdAt: new Date().toLocaleString(),
      deliveryTime
    };

    const nextDrafts = [nextDraft, ...drafts].slice(0, 4);
    setDrafts(nextDrafts);
    window.localStorage.setItem("swiftly-drafts", JSON.stringify(nextDrafts));
    setMessage("Transfer details saved successfully and are ready for review.");
  }

  return (
    <section className="interactive-grid">
      <form className="glass-card form-card" onSubmit={saveDraft}>
        <div className="field-grid">
          <label>
            Send amount
            <input
              min="1"
              name="sendAmount"
              onChange={updateField}
              type="number"
              value={form.sendAmount}
            />
          </label>

          <label>
            From
            <select
              name="fromCurrency"
              onChange={updateField}
              value={form.fromCurrency}
            >
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
          </label>

          <label>
            To
            <select name="toCurrency" onChange={updateField} value={form.toCurrency}>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="SGD">SGD</option>
              <option value="USD">USD</option>
            </select>
          </label>

          <label>
            Recipient name
            <input name="recipient" onChange={updateField} value={form.recipient} />
          </label>

          <label>
            Destination
            <input name="destination" onChange={updateField} value={form.destination} />
          </label>

          <label>
            Purpose
            <select name="purpose" onChange={updateField} value={form.purpose}>
              <option>Family support</option>
              <option>Rent</option>
              <option>Freelance payment</option>
              <option>Tuition</option>
              <option>Travel funds</option>
            </select>
          </label>
        </div>

        <div className="form-actions">
          <button className="button button-primary" type="submit">
            Continue Transfer
          </button>
          <p className="helper-text">
            Review the full transfer details before moving ahead.
          </p>
        </div>
      </form>

      <div className="stack">
        <article className="glass-card summary-card">
          <div className="card-topline">
            <span>Transfer summary</span>
            <span className="status-badge">{deliveryTime}</span>
          </div>
          <div className="summary-row">
            <span>You send</span>
            <strong>{formatMoney(amount, form.fromCurrency)}</strong>
          </div>
          <div className="summary-row">
            <span>Fee</span>
            <strong>{formatMoney(fee, form.fromCurrency)}</strong>
          </div>
          <div className="summary-row">
            <span>Rate</span>
            <strong>
              1 {form.fromCurrency} = {rate.toFixed(2)} {form.toCurrency}
            </strong>
          </div>
          <div className="summary-row summary-total">
            <span>Recipient gets</span>
            <strong>{formatMoney(receiveAmount, form.toCurrency)}</strong>
          </div>
          <p className="helper-text">
            To {form.recipient} in {form.destination}
          </p>
          {message ? <p className="success-note">{message}</p> : null}
        </article>

        <article className="glass-card draft-card">
          <h3>Recent drafts</h3>
          {drafts.length === 0 ? (
            <p className="helper-text">No saved transfers yet. Start one to see it appear here.</p>
          ) : (
            <div className="draft-list">
              {drafts.map((draft) => (
                <div className="draft-item" key={draft.id}>
                  <div>
                    <strong>{draft.id}</strong>
                    <span>
                      {draft.recipient} • {draft.purpose}
                    </span>
                  </div>
                  <div className="draft-amounts">
                    <strong>{formatMoney(Number(draft.sendAmount), draft.fromCurrency)}</strong>
                    <span>{formatMoney(draft.receiveAmount, draft.toCurrency)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
