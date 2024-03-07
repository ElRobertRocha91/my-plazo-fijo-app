import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import "./globals.css";

export const metadata = {
    title: "Simulador de Plazo Fijo",
    description: "Sitio web para simulador y consultar un plazo fijo online, en pesos o en dolares, en modalidad tradicional."
}

function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout;