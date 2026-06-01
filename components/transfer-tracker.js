"use client";

import { useMemo, useState } from "react";

const transfers = [
  {
    id: "SWFT-381204",
    recipient: "Maya Chen",
    route: "USD to SGD",
    status: "Delivered",
    time: "22 seconds",
    detail: "Funds received in Singapore."
  },
  {
    id: "SWFT-381155",
    recipient: "Aarav Sharma",
    route: "USD to INR",
    status: "In progress",
    time: "Expected in 30 seconds",
    detail: "Transfer is moving through instant payout rails."
  },
  {
    id: "SWFT-381101",
    recipient: "Daniel Ortiz",
    route: "GBP to MXN",
    status: "Reviewing",
    time: "Needs sender confirmation",
    detail: "Waiting for final review before payout begins."
  }
];

export function TransferTracker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  const filteredTransfers = useMemo(() => {
    return transfers.filter((transfer) => {
      const matchesQuery =
        transfer.id.toLowerCase().includes(query.toLowerCase()) ||
        transfer.recipient.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === "All" || transfer.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  return (
    <section className="page-stack">
      <div className="glass-card tracker-filters">
        <label>
          Search by transfer ID or recipient
          <input onChange={(event) => setQuery(event.target.value)} value={query} />
        </label>
        <label>
          Filter by status
          <select onChange={(event) => setStatus(event.target.value)} value={status}>
            <option>All</option>
            <option>Delivered</option>
            <option>In progress</option>
            <option>Reviewing</option>
          </select>
        </label>
      </div>

      <div className="tracker-list">
        {filteredTransfers.map((transfer) => (
          <article className="glass-card tracker-card" key={transfer.id}>
            <div className="section-head">
              <div>
                <h3>{transfer.id}</h3>
                <p>{transfer.recipient}</p>
              </div>
              <span className="status-badge">{transfer.status}</span>
            </div>
            <div className="tracker-row">
              <span>Route</span>
              <strong>{transfer.route}</strong>
            </div>
            <div className="tracker-row">
              <span>Timing</span>
              <strong>{transfer.time}</strong>
            </div>
            <p className="helper-text">{transfer.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
