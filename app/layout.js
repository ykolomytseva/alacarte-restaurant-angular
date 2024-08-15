import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/bootstrap.css";
import "../public/assets/css/color.css";
import "../public/assets/css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { dm_sans, poppins, libre_baskerville, rouge_script } from "@/lib/font";
export const metadata = {
  title: "AlaCarte restaurant",
  description: "Created by Yana",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${dm_sans.variable} ${rouge_script.variable} ${libre_baskerville.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
