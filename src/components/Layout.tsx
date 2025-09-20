import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;