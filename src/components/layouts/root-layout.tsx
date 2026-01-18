import type { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-obsidian text-white overflow-x-hidden selection:bg-neon-blue/20 selection:text-neon-blue">
            <Header />
            <main className="flex-1 pt-24">{children}</main>
            <Footer />
        </div>
    );
};

export default RootLayout;
