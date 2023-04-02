import { Poppins } from "next/font/google";

export const metadata = {
  title: "Age Calculator App",
  description: "Frontend Mentor Challenge",
};

const poppins = Poppins({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
