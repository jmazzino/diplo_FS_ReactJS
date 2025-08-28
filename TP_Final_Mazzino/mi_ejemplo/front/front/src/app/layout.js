import "@/styles/globals.css";

import Nav from "@/components/Nav";

export const metadata = {
  title: "Este es mi ejemplo",
  description: "Sitio armado en clase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="holder">
            <div className="logo">
              <img src="images/logo.png" width="100" alt="Transportes 2025 JUEVES"></img>
              <h1>Transportes 2025 JUEVES</h1>
            </div>
          </div>

        </header>
        <Nav/>

        {children}

        <footer>
          <p>Diseñado por Jorge Mazzino - &copy;2025</p>

        </footer>
      </body>
    </html>
  );
}
