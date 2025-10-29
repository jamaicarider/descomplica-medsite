"use client";

import { Box, Typography, Button, Stack, Link } from "@mui/material";
import React from "react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const steps = [
  { icon: "/Inicio-da-consulta.png", text: "Início da consulta" },
  { icon: "/Dadospaciente.png", text: "Inserção de dados do paciente" },
  { icon: "/suporte-ia.png", text: "Sugestão de diagnóstico com suporte da I.A." },
  { icon: "/apontamentos.png", text: "Recebimento de apontamentos do especialista" },
  { icon: "/direcionamento.png", text: "Direcionamento do paciente" },
  { icon: "/avaliacao.png", text: "Avaliação da consultoria" },
  { icon: "/dashboard.png", text: "Dashboard para o gestor público" },
];

export const MobileHomePage: React.FC = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/554788992915", "_blank");
  };

  // Variantes do Framer Motion
  const heroTextVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  const heroMedicoVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut, delay: 0.3 } },
  };

  const stepVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const resultadosVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        background: "linear-gradient(180deg, #000C1E 60%)",
        color: "white",
        fontFamily: "var(--font-proxima-nova)",
      }}
    >
      {/* HERO SECTION */}
      <Box sx={{ position: "relative", px: 2, pt: 2, pb: 10 }}>
        {/* Logo */}
        <Box sx={{ position: "absolute", top: 30, left: 16 }}>
          <Image
            src="/descomplica-logo.png"
            alt="Descomplica logo"
            width={160}
            height={30}
            style={{ width: 140, height: "auto" }}
          />
        </Box>

        {/* Texto animado */}
        <motion.div initial="hidden" animate="visible" variants={heroTextVariant}>
          <Box sx={{ pt: 12 }}>
            <Typography
              variant="h1"
              fontWeight={700}
              gutterBottom
              sx={{ color: "rgba(255,255,255,0.88)", fontStyle: "italic" }}
            >
              Triagem inteligente
              <br />
              para Saúde Pública
            </Typography>

            <Typography variant="body1" fontWeight={400} gutterBottom sx={{ color: "#FFFFFF" }}>
              Mais especialistas, menos
              <br />
              filas!{" "}
              <Box component="span" sx={{ color: "#FFFFFF", fontStyle: "italic", fontWeight: 700 }}>
                É a sua cidade economizando <br /> em Recursos Públicos
              </Box>
            </Typography>
          </Box>
        </motion.div>

        <Box textAlign="left" mt={4}>
          <a
            href="https://wa.me/554788992915"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              borderRadius: "12px",
              backgroundColor: "#04D77B",
              color: "#000C1E",
              fontWeight: "bold",
              fontStyle: "italic",
              textDecoration: "none",
              textAlign: "center",
              fontSize: "1rem",
              position: "relative",
              zIndex: 2, // garante que o clique funcione
            }}
          >
            Agende uma reunião
          </a>
        </Box>

        {/* Fundo */}
        <Box sx={{ mt: -30, position: "relative", zIndex: 1 }}>
          <Image
            src="/icone-fundo.png"
            alt="icone fundo"
            width={300}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        {/* Médico animado */}
        <motion.div initial="hidden" animate="visible" variants={heroMedicoVariant}>
          <Box sx={{ mt: -40, position: "relative", zIndex: 1 }}>
            <Image
              src="/medico-01.png"
              alt="Médico com tablet"
              width={300}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* ABOUT SECTION */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={resultadosVariant}>
        <Box sx={{ px: 2, pb: 8 }}>
          <Typography
            variant="h5"
            fontWeight={400}
            gutterBottom
            sx={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.6, mb: 4 }}
          >
            Redução de custos e filas com triagens médicas inteligentes e comprovadas.{" "}
            <Box component="span" sx={{ fontStyle: "italic", fontWeight: 700 }}>
              A solução que transforma o atendimento público com inteligência artificial.
            </Box>
          </Typography>

          <Typography
            variant="h5"
            fontWeight={400}
            gutterBottom
            sx={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.8, mb: 4 }}
          >
            A <Box component="span" sx={{ fontWeight: 700 }}>Descomplica Medicina</Box> utiliza inteligência artificial
            generativa aliada à expertise médica para otimizar o processo de encaminhamento. O resultado?{" "}
            <Box component="span" sx={{ fontStyle: "italic", fontWeight: 700 }}>
              Redução de filas, economia de recursos e mais dignidade no atendimento.
            </Box>
          </Typography>

          <Box sx={{ my: 4 }}>
            <Image
              src="/computador-01.png"
              alt="Dashboard IA"
              width={300}
              height={200}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>

          <Typography variant="h5" fontWeight={400} sx={{ color: "#FFFFFF", lineHeight: 1.8 }}>
            Nossa plataforma oferece um{" "}
            <Box component="span" sx={{ fontStyle: "italic", fontWeight: 700 }}>
              dashboard em tempo real
            </Box>
            , que permite ao gestor visualizar indicadores de desempenho, identificar gargalos e tomar decisões baseadas
            em dados — tudo com foco na eficiência do sistema e no uso responsável dos recursos públicos.
          </Typography>
        </Box>
      </motion.div>

      {/* COMO FUNCIONA SECTION */}
      <Box sx={{ px: 2, py: 2, textAlign: "center" }}>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            background: "linear-gradient(to right, #4703FB, #57B7EF)",
            borderRadius: "30px",
            px: 9,
            py: 1,
            color: "white",
            display: "inline-block",
            mb: 6,
          }}
        >
          Como funciona?
        </Typography>

        <Box sx={{ px: 1 }}>
          {steps.map((step, index) => (
            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stepVariant}>
              <Box sx={{ display: "flex", alignItems: "center", position: "relative", mb: 6 }}>
                {index !== steps.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: "32px",
                      top: "60px",
                      bottom: "-50px",
                      width: "2px",
                      bgcolor: "#04D77B",
                      opacity: 0.7,
                    }}
                  />
                )}
                <Box
                  sx={{
                    width: 62,
                    height: 62,
                    borderRadius: "50%",
                    border: "2px solid #04D77B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    bgcolor: "#000C1E",
                    zIndex: 2,
                    mr: 2,
                  }}
                >
                  <Image src={step.icon} alt={step.text} width={28} height={28} />
                </Box>
                <Typography variant="body1" fontWeight={700} sx={{ color: "white", flex: 1, pr: 2 }}>
                  {step.text}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box textAlign="center">
          <Button
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: 3,
              backgroundColor: "#04D77B",
              color: "#000C1E",
              fontWeight: 700,
              fontStyle: "italic",
              textTransform: "none",
            }}
            onClick={openWhatsApp}
          >
            Fale conosco
          </Button>
        </Box>
      </Box>

      {/* RESULTADOS + IMAGENS */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={resultadosVariant}>
        <Box sx={{ px: 2, mt: 7 }}>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ color: "#FFFFFF", fontStyle: "italic", mb: 6, textAlign: "left" }}
          >
            Resultados que fazem a <br />
            diferença!
          </Typography>

          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Image
              src="/resultados.png"
              alt="Resultados"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", maxWidth: 380, margin: "0 auto" }}
            />
          </Box>

          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{
                mt: 0,
                mb: 10,
                borderRadius: 3,
                backgroundColor: "#04D77B",
                color: "#000C1E",
                fontWeight: 700,
                fontStyle: "italic",
                textTransform: "none",
              }}
              onClick={openWhatsApp}
            >
              Saiba mais
            </Button>
          </Box>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Image
              src="/medicos-02.png"
              alt="médicos"
              width={1500}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </motion.div>

      {/* CTA IMAGE */}
      <Box sx={{ px: 1, mt: 10, mb: 15 }}>
        <Box
          sx={{
            position: "relative",
            bgcolor: "#000C1E",
            px: 0,
            pt: 0,
            pb: 0,
            textAlign: "right",
            cursor: "pointer",
            borderRadius: 0,
            overflow: "hidden",
            height: 380,
          }}
          onClick={openWhatsApp}
        >
          <Image
            src="/medico-texto.png"
            alt="Médico CTA"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </Box>
      </Box>

      {/* FOOTER */}
      <Box sx={{ px: { xs: 2, md: 12 }, mt: 6 }}>
        <Box
          sx={{
            bgcolor: "#F5F5F5",
            color: "#000C1E",
            borderRadius: "20px 20px 0 0",
            textAlign: "center",
            p: 3,
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Image
              src="/icone-descomplicafooter.png"
              alt="Logo Descomplica"
              width={140}
              height={30}
              style={{ width: "140px", height: "auto" }}
            />
          </Box>

          <Typography variant="h3" fontWeight={700} sx={{ textAlign: "left", mb: 1 }}>
            CONTATO
          </Typography>

          <Stack
            sx={{
              background: "linear-gradient(90deg, #26D0CE, #1A9E84)",
              borderRadius: 2,
              p: 2,
              mb: 3,
              color: "white",
            }}
            spacing={1}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Image src="/icone-telefone.png" alt="WhatsApp" width={20} height={15} />
              <Typography variant="h6" fontWeight={300}>
                descomplicamedicinaagora@gmail.com
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Image src="/icone-whats.png" alt="Telefone" width={20} height={20} />
              <Typography variant="h6" fontWeight={400}>
                (47) 98899-2915
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
            <Box
              sx={{
                backgroundColor: "black",
                borderRadius: "12px",
                px: 1,
                py: 1,
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Link href="https://www.instagram.com/appdescomplicamedicina/" target="_blank" rel="noopener">
                <Image src="/icone-instagram.png" alt="Instagram" width={40} height={40} />
              </Link>
              <Link href="https://www.linkedin.com/company/descomplica-medicina/" target="_blank" rel="noopener">
                <Image src="/icone-linkedin.png" alt="LinkedIn" width={40} height={40} />
              </Link>
            </Box>
          </Stack>
        </Box>

        <Box sx={{ bgcolor: "#ffffffff", py: 4, mt: -3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexWrap: "nowrap",
            }}
          >
            <Image src="/icone-parana.png" alt="Governo do Paraná" width={120} height={70} />
            <Image src="/sbis.jpeg" alt="Certificado SBIS" width={100} height={40} />
            <Image src="/icone-inovador.png" alt="Paraná Anjo Inovador" width={110} height={80} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
