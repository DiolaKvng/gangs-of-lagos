export const metadata = {
  title: 'Gangs of Lagos',
  description: 'Underworld text simulation sandbox',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
