"use client";

import { useEffect, useState } from "react";
import { MobileHomePage } from "./mobile/MobileHomePage";
import DesktopHomePage from "./desktop/DesktopHomePage";

export function ResponsiveHome() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Detecta mobile no cliente para garantir sincronização
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Evita hydration mismatch retornando null até o cliente estar pronto
  if (isMobile === null) {
    return null;
  }

  return isMobile ? <MobileHomePage /> : <DesktopHomePage />;
}
