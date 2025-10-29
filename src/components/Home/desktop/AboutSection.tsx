"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <>
             {/* ABOUT SECTION */}
            <Box sx={{ position: "relative", px: { md: 12, lg: 16 }, py: 8, display: "flex", flexDirection: "column", gap: 6, backgroundColor: "#000C1E", overflow: "hidden" }}>
                
                {/* Ícone de fundo animado */}
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ position: "absolute", bottom: "-20%", right: "0%", width: "30%", height: "auto", zIndex: 0 }}
                >
                <Image src="/icone-descomplica.png" alt="Ícone Descomplica" width={400} height={400} style={{ width: "100%", height: "auto" }} />
                </motion.div>

                <Box sx={{ position: "relative", zIndex: 1,  maxWidth: 1280, mx: "auto", }}>
                
                {/* Texto inicial */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "left" }}>
                    <Typography
                        variant="h4"
                        fontWeight={400}
                        gutterBottom
                        sx={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.6, mb: 4, fontSize: { md: "16px", lg: "18px" } }}
                        
                    >
                        Redução de custos e filas com triagens médicas inteligentes e comprovadas.{" "}
                        <Box component="span" sx={{ fontStyle: "italic", fontWeight: 700 }}>
                        A solução que transforma o atendimento público com inteligência artificial.
                        </Box>
                    </Typography>
                    </Box>
                </motion.div>

                {/* Bloco imagem + texto */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center", flexWrap: "wrap", mt: 6 }}>
                    <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ flex: 1, minWidth: 300, textAlign: "center" }}
                    >
                    <Image src="/tela.png" alt="Dashboard IA" width={600} height={400} style={{ width: "100%", height: "auto" }} />
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ flex: 1, minWidth: 300 }}
                    >
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.88)" }}>
                        A <b>Descomplica Medicina</b> utiliza inteligência artificial
                        generativa aliada à expertise médica para otimizar o processo de
                        encaminhamento. O resultado?{" "}
                        <Box component="span" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                        Redução de filas, economia de recursos e mais dignidade no
                        atendimento.
                        </Box>
                    </Typography>
                    </motion.div>
                </Box>

                {/* Texto final */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ textAlign: "center", maxWidth: 800, mx: "auto", mt: 6 }}>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.88)" }}>
                        Nossa plataforma oferece um{" "}
                        <Box component="span" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                        dashboard em tempo real
                        </Box>
                        , que permite ao gestor visualizar indicadores de desempenho, identificar
                        gargalos e tomar decisões baseadas em dados — tudo com foco na eficiência
                        do sistema e no uso responsável dos recursos públicos.
                    </Typography>
                    </Box>
                </motion.div>
                </Box>
            </Box>
        </>
    )
}