"use client";

import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <>
            {/* HERO SECTION */}
      <Box component="section" sx={{ position: "relative", width: "100%", minHeight: { md: "620px", lg: "720px" }, overflow: "hidden" }}>
        <Box sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url('/foto-fundo.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(0,12,30,0.85) 0%, rgba(0,12,30,0.6) 40%, rgba(0,12,30,0.15) 70%)",
          },
        }} />
        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 1280, mx: "auto", px: { md: 8, lg: 12 }, height: "100%", display: "flex", alignItems: "center", gap: 18 }}>
          
          {/* Texto Hero */}
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ flex: 1 }}>
            <Box sx={{ color: "white", pr: { md: 2, lg: 6 } }}>
              {/* LOGO ajustada para cima */}
              <Box sx={{ mb: 15 }}>
                <Image src="/descomplica-logo.png" alt="Descomplica" width={200} height={40} priority />
              </Box>

              <Typography variant="h3" sx={{ color: "rgba(255,255,255,0.88)", fontWeight: 800, fontStyle: "italic", lineHeight: 1.05, fontSize: { md: "36px", lg: "44px" }, mb: 2 }}>
                Triagem inteligente para Saúde Pública
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.88)", mb: 3, fontSize: { md: "16px", lg: "18px" } }}>
                Mais especialistas, menos filas!{" "}
                <Box component="span" sx={{ fontStyle: "italic", fontWeight: 700 }}>
                  É a sua cidade economizando em Recursos Públicos
                </Box>
              </Typography>
              <Button
                component="a"
                href="https://wa.me/554788992915"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  mt: 1,
                  borderRadius: 2,
                  backgroundColor: "#04D77B",
                  color: "#000C1E",
                  fontWeight: "bold",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "#03b36a" },
                }}
              >
                Agende uma reunião
              </Button>
            </Box>
          </motion.div>

          {/* Médico Hero */}
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative" }}>
            <Box sx={{ position: "relative", zIndex: 2, width: { md: 300, lg: 630 } }}>
              <Image src="/medico-01.png" alt="Equipe médica" width={900} height={900} style={{ width: "100%", height: "auto", display: "block" }} priority />
            </Box>
          </motion.div>

        </Box>
      </Box>
        </>
    )
}