import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
// /* radix ui import */
// import "@radix-ui/themes/styles.css";
// importing theme cmp from radix
// import { Theme } from "@radix-ui/themes";
import NavBar from "./NavBar";
import Provider from "./auth/Provider";
import ReactQuery from "./ReactQuery";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ReactQuery>

        <Provider>
          {/* <Theme> */}
          <NavBar></NavBar>
          <main>{children}</main>

          {/* </Theme> */}
        </Provider>
        </ReactQuery>
      </body>
    </html>
  );
}
