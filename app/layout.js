import "./globals.css";

export const metadata = {
  title: "Swiftly Pay",
  description:
    "Instant international payments for everyday people, families, freelancers, and growing businesses."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
