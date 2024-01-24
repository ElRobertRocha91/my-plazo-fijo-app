import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import "./globals.css";

export const metadata = {
    title: "Simulador de Plazo Fijo"
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