import { Geist, Geist_Mono, Bakbak_One,  Lato ,Poppins} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bakbakOne = Bakbak_One({
  variable: "--font-bakbak-one",
  subsets: ["latin"],
  weight: "400", 
});
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400"
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400"
});



export const metadata = {
  title: "Nova Software ",
  description: "Creado por Nova.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="bg-[#f8fffd] overflow-x-hidden">
      <body className={`${bakbakOne.variable} ${lato.variable} ${poppins.variable} antialiased`} style={{ scrollSnapType: 'y mandatory' }}>
        {children}
      </body>
    </html>
  );
}