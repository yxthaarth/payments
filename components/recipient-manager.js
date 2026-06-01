"use client";

import { useEffect, useState } from "react";

const initialRecipient = {
  name: "",
  country: "",
  deliveryMethod: "Bank account",
  relationship: "Family"
};

const starterRecipients = [
  {
    id: "RCPT-1021",
    name: "Maya Chen",
    country: "Singapore",
    deliveryMethod: "Bank account",
    relationship: "Friend"
  },
  {
    id: "RCPT-2044",
    name: "Daniel Ortiz",
    country: "Mexico",
    deliveryMethod: "Mobile wallet",
    relationship: "Family"
  }
];

export function RecipientManager() {
  const [recipient, setRecipient] = useState(initialRecipient);
  const [recipients, setRecipients] = useState(starterRecipients);

  useEffect(() => {
    const stored = window.localStorage.getItem("swiftly-recipients");
    if (stored) {
      setRecipients(JSON.parse(stored));
    }
  }, []);

  function updateField(event) {
    const { name, value } = event.target;
    setRecipient((current) => ({ ...current, [name]: value }));
  }

  function addRecipient(event) {
    event.preventDefault();

    if (!recipient.name || !recipient.country) {
      return;
    }

    const nextRecipients = [
      {
        id: `RCPT-${Date.now().toString().slice(-4)}`,
        ...recipient
      },
      ...recipients
    ];

    setRecipients(nextRecipients);
    setRecipient(initialRecipient);
    window.localStorage.setItem("swiftly-recipients", JSON.stringify(nextRecipients));
  }

  return (
    <section className="interactive-grid">
      <form className="glass-card form-card" onSubmit={addRecipient}>
        <div className="field-grid">
          <label>
            Full name
            <input name="name" onChange={updateField} value={recipient.name} />
          </label>
          <label>
            Country
            <input name="country" onChange={updateField} value={recipient.country} />
          </label>
          <label>
            Delivery method
            <select
              name="deliveryMethod"
              onChange={updateField}
              value={recipient.deliveryMethod}
            >
              <option>Bank account</option>
              <option>Mobile wallet</option>
              <option>Cash pickup</option>
            </select>
          </label>
          <label>
            Relationship
            <select
              name="relationship"
              onChange={updateField}
              value={recipient.relationship}
            >
              <option>Family</option>
              <option>Friend</option>
              <option>Freelancer</option>
              <option>Vendor</option>
            </select>
          </label>
        </div>
        <div className="form-actions">
          <button className="button button-primary" type="submit">
            Save Recipient
          </button>
        </div>
      </form>

      <article className="glass-card list-card">
        <div className="section-head">
          <h3>Saved recipients</h3>
          <span>{recipients.length} total</span>
        </div>
        <div className="recipient-list">
          {recipients.map((entry) => (
            <div className="recipient-item" key={entry.id}>
              <div>
                <strong>{entry.name}</strong>
                <span>
                  {entry.country} • {entry.relationship}
                </span>
              </div>
              <div className="recipient-meta">
                <small>{entry.id}</small>
                <strong>{entry.deliveryMethod}</strong>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
