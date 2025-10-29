"use client";

import { Box, Typography, Link } from "@mui/material";
import React from "react";
import Image from "next/image";

import HeroSection from "../desktop/HeroSection";
import AboutSection from "../desktop/AboutSection";
import IconsAnimatedSection from "../desktop/IconsAnimatedSection";
import Achievements from "../desktop/Achievements";



const DesktopHomePage: React.FC = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" }, backgroundColor: "#000C1E", color: "white" }}>

      <HeroSection />
      <AboutSection />
      <IconsAnimatedSection />
      <Achievements />
    





      {/* CTA IMAGE */}
<Box sx={{ position: "relative", py: 12, bgcolor: "#000C1E" }}>
  {/* Fundo gradiente */}
  <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
    <Image src="/gradiente-medico.png" alt="Gradiente fundo" fill style={{ objectFit: "cover" }} />
  </Box>

  {/* Link para WhatsApp */}
  <a href="https://wa.me/554788992915" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 500, // 50% da largura original
        mx: "auto",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      {/* Imagem do médico reduzida */}
      <Image
        src="/medico-texto.png"
        alt="Médico CTA"
        width={450} // metade da largura original
        height={225} // metade da altura original
        style={{ width: "100%", height: "auto", position: "relative", zIndex: 2 }}
      />

      {/* Texto superior */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "6%",
          width: "50%",
          color: "#000C1E",
          textAlign: "left",
          zIndex: 3,
        }}
      >
       
      </Box>

      {/* Texto inferior */}
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "45%",
          color: "#000C1E",
          textAlign: "left",
          zIndex: 3,
        }}
      >
      
      </Box>
    </Box>
  </a>
</Box>
 
 
{/* FOOTER */}
<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    width: "100%",
    bgcolor: "transparent",
    mt: { xs: 4, md: 6 },
  }}
>
  <Box
    sx={{
      bgcolor: "#F5F5F5",
      color: "#000C1E",
      borderRadius: "20px 20px 0 0",
      textAlign: "center",
      py: 4, // só padding vertical
      display: "flex",
      flexDirection: "column",
      gap: 3,
      width: "100%",
      maxWidth: 1200,
    }}
  >
    {/* Logo */}
    <Box>
      <Image
        src="/icone-descomplicafooter.png"
        alt="Logo Descomplica"
        width={250}
        height={150}
        style={{ width: "300px", height: "auto", margin: "0 auto" }}
      />
    </Box>

    {/* CONTATO */}
    <Typography variant="h3" fontWeight="bold" sx={{ textAlign: "left", px: 57 }}>
      CONTATO
    </Typography>

    {/* Container flex do bloco verde + redes sociais */}
<Box
  sx={{
    display: "flex",
    flexWrap: { xs: "wrap", md: "nowrap" },
    gap: 5, // espaço entre o bloco verde e o bloco de redes sociais
    alignItems: "flex-start",
  }}
>
{/* Bloco verde contato */}
<Box
  sx={{
    background: "linear-gradient(90deg, #36d492ff 0%, #3ef5acff 50%)",
    borderRadius: 3,
    position: "relative",
    width: { xs: "100%", md: "60%" },
    height: 90, // altura menor que antes (era 150)
    px: 3,
    py: 0,
  }}
>
  {/* Ícone + email */}
  <Box
    sx={{
      position: "absolute",
      top: 15, // ajustei um pouco para combinar com a altura menor
      left: 20,
      display: "flex",
      alignItems: "center",
      gap: 3,
      px: 54, // remover padding extra evita quebra de linha
    }}
  >
    <Image src="/icone-telefone.png" alt="Email" width={20} height={15} />
    <Typography variant="body2" sx={{ color: "white", whiteSpace: "nowrap" }}>
      descomplicamedicinaagora@gmail.com
    </Typography>
  </Box>

  {/* Ícone + WhatsApp */}
  <Box
    sx={{
      position: "absolute",
      top: 50,
      left: 20,
      display: "flex",
      alignItems: "center",
      gap: 3,
      px: 54,
    }}
  >
    <Image src="/icone-whats.png" alt="WhatsApp" width={20} height={20} />
    <Typography variant="body2" sx={{ color: "white", whiteSpace: "nowrap" }}>
      (47) 98899-2915
    </Typography>
  </Box>
</Box>


  {/* Bloco preto redes sociais */}
  <Box
    sx={{
      display: "flex",
      gap: 0,
      ml: 1, // ajuste aqui a distância horizontal do bloco verde
    }}
  >
    <Box
      sx={{
        bgcolor: "#000C1E",
        borderRadius: "12px 0 0 12px",
        width: 80,
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       <Link href="https://www.instagram.com/appdescomplicamedicina/" target="_blank" rel="noopener">
      <Image src="/icone-instagram.png" alt="Instagram" width={30} height={30} />
      </Link>
    </Box>
    <Box
      sx={{
        bgcolor: "#000C1E",
        borderRadius: "0 12px 12px 0",
        width: 80,
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       <Link href="https://www.linkedin.com/company/descomplica-medicina/" target="_blank" rel="noopener">
      <Image src="/icone-linkedin.png" alt="LinkedIn" width={30} height={30} />
      </Link>
    </Box>
  </Box>
</Box>


  



{/* Bloco branco das logos */}
<Box
  sx={{
    bgcolor: "white",
    borderRadius: 2,
    py: 6, // aumenta altura (padding vertical)
    px: { xs: 4, md: 8 }, // padding lateral mais equilibrado e responsivo
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: 2, md: 4 },
    mt: 10,
    mx: "auto",          // centraliza horizontalmente
    width: { xs: "90%", md: "30%", lg: "35%" }, // ocupa menos largura
  }}
>
  <Image src="/icone-parana.png" alt="Governo do Paraná" width={150} height={80} />
  <Image src="/sbis.jpeg" alt="certificado" width={170} height={60} />
  <Image src="/icone-inovador.png" alt="Paraná Anjo Inovador" width={140} height={110} />
  

</Box>
</Box>
</Box>
</Box>



  );
};

export default DesktopHomePage;
