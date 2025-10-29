"use client";

import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <>
{/* RESULTADOS + IMAGENS */}
<Box
  sx={{
    position: "relative",
    px: { md: 10, lg: 0 },
    py: 2,
    color: "white",
    backgroundColor: "#000C1E",
    overflow: "hidden",
    
  }}
>
  {/* Ícone de fundo */}
  <Box
    sx={{
      position: "absolute",
      top: "10%",
      left: { xs: "30%", md: "-20%" },
      width: { xs: "120%", md: "70%" },
      height: "auto",
      opacity: 1,
      zIndex: 0,
    }}
  >
    <Image
      src="/icone-descomplicadois.png"
      alt="Ícone Descomplica dois"
      width={700}
      height={700}
      style={{ width: "100%", height: "auto" }}
    />
  </Box>



{/* Texto com motion */}
<Box sx={{ px: 10, mb: { xs: 2, md: 1 }, maxWidth: 1280, mx: "auto" }}>
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0 }} // aparece primeiro
    viewport={{ once: true }}
  >
    <Typography
      variant="h2"
      sx={{
        color: "#FFFFFF",
        fontStyle: "italic",
        lineHeight: 1.3,
        textAlign: "left",
        mb: 10,
                  
      }}
    >
      <Box
        component="span"
        sx={{
          fontWeight: "bold",
          pr: 0,
        }}
      >
        Resultados
      </Box>{" "}
      que fazem a <br />diferença!
    </Typography>
  </motion.div>

  {/* Imagem dos resultados reduzida */}
  <Box sx={{ textAlign: "center" }}>
    <Image
      src="/resultadosdesk.png"
      alt="Resultados"
      width={850}  // 40% menor que 1200
      height={450} // 40% menor que 600
      style={{ width: "60%", height: "auto", borderRadius: 10}}
    />
  </Box>
</Box>
<Box textAlign="center" sx={{ mt: 0 }}>
  <Button
    component="a"
    href="https://wa.me/554788992915"
    target="_blank"
    rel="noopener noreferrer"
    variant="contained"
    sx={{
      borderRadius: 3,
      backgroundColor: "#04D77B",
      color: "#000C1E",
      fontWeight: "bold",
      fontStyle: "italic",
      textTransform: "none",
      px: 4,
      py: 1.5,
      fontSize: "1.1rem",
      "&:hover": { backgroundColor: "#03c76f" },
    }}
  >
    Saiba mais
  </Button>
</Box>

{/* Imagem da equipe médica */}
<Box
  sx={{
    position: "relative",
    width: "100%",
    height: { md: "370px", lg: "620px" },
    mb: { xs: 6, md: 10 },maxWidth: 1280, mx: "auto"
  }}
>
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.4 }} // entra depois do texto
    viewport={{ once: true }}
    style={{ position: "absolute", right: 0, bottom: 0, height: "100%" }}
  >
    <Image
      src="/medicos-02.png"
      alt="Equipe médica adicional"
      width={800}
      height={1000}
      style={{
        width: "auto",
        height: "100%",
        objectFit: "contain",
        display: "block",
      }}
    />
  </motion.div>
</Box>



</Box>
    </>
  )
}