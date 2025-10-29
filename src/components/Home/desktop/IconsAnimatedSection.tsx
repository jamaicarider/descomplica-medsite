"use client";

import { Box, Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function IconsAnimatedSection() {
  const steps = [
    { label: "Início da consulta", icon: "/logoquatro.png", angle: 90 - 0 * (360 / 7) },
    { label: "Inserção de dados do paciente", icon: "/logocinco.png", angle: 90 - 1 * (360 / 7) },
    { label: "Sugestão de diagnóstico com suporte da I.A.", icon: "/logoseis.png", angle: 90 - 2 * (360 / 7) },
    { label: "Recebimento de apontamentos do especialista", icon: "/logoum.png", angle: 90 - 3 * (360 / 7) },
    { label: "Direcionamento do paciente", icon: "/logosete.png", angle: 90 - 4 * (360 / 7) },
    { label: "Avaliação da consultoria", icon: "/logodois.png", angle: 90 - 5 * (360 / 7) },
    { label: "Dashboard para o gestor público", icon: "/dashboardesk.png", angle: 90 - 6 * (360 / 7) },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: true,
      },
    });

    // set initial rotation so icons rotate into place
    gsap.set(iconRefs.current, { rotation: -45, transformOrigin: "50% 50%" });

    // Animate the background circle
    tl.fromTo(circleRef.current, { scale: 0.8 }, { scale: 1, duration: 0.5 });

    // Animate icons in sequence (opacity + rotate to 0)
    steps.forEach((_, i) => {
      tl.to(iconRefs.current[i], { opacity: 1, rotation: 0, duration: 0.5 }, "+=0.2");
    });
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ fontStyle: "italic", color: "white", mx: "auto", textAlign: "center", mt: 10 }}
      >
        Como funciona?
      </Typography>

      {/* ICONS ANIMATED SECTION */}
      <Box
        ref={sectionRef}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ position: "relative", width: 481, height: 481, mx: "auto", my: "auto" }}>
          {/* Background circle */}
          <div
            ref={circleRef}
            style={{ position: "absolute", inset: 0, transform: "scale(0.8)" }}
          >
            <Image src="/circulo-fundo.png" alt="Fluxo da consulta" fill style={{ objectFit: "contain" }} />
          </div>

          {(() => {
            const s0 = steps[0];
            const s1 = steps[1];
            const s2 = steps[2];
            const s3 = steps[3];
            const s4 = steps[4];
            const s5 = steps[5];
            const s6 = steps[6];

            return (
              <>
                <div
                  ref={(el) => {
                    iconRefs.current[0] = el;
                  }}
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 95,
                    height: 95,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    {/* inner ring */}
                    <Box
                      sx={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        borderRadius: "50%",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "inset 0 0px 6px rgba(0,0,0,0.12)",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />

                    <Box sx={{ zIndex: 2, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image src={s0.icon} alt={s0.label} width={40} height={40} />
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      background: "#4D0DFF",
                      color: "white",
                      borderRadius: "16px",
                      px: "19px",
                      py: "9.5px",
                      fontSize: "1rem",
                      fontWeight: 500,
                      textAlign: "left",
                      position: "absolute",
                      top: "-30px",
                      left: "85px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {steps[0].label}
                  </Typography>
                </div>

                <div
                  ref={(el) => {
                    iconRefs.current[1] = el;
                  }}
                  style={{
                    position: "absolute",
                    top: "68px",
                    right: "25px",
                    width: 95,
                    height: 95,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        borderRadius: "50%",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "inset 0 0px 6px rgba(0,0,0,0.12)",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />

                    <Box sx={{ zIndex: 2, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image src={s1.icon} alt={s1.label} width={40} height={40} />
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      background: "#4D0DFF",
                      color: "white",
                      borderRadius: "16px",
                      px: "19px",
                      py: "9.5px",
                      fontSize: "1rem",
                      fontWeight: 500,
                      textAlign: "left",
                      position: "absolute",
                      top: "-30px",
                      left: "100px",
                      width: "140px",
                    }}
                  >
                    {steps[1].label}
                  </Typography>
                </div>

                <div
                  ref={(el) => {
                    iconRefs.current[2] = el;
                  }}
                  style={{
                    position: "absolute",
                    top: "248px",
                    right: "-10px",
                    width: 95,
                    height: 95,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        borderRadius: "50%",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "inset 0 0px 6px rgba(0,0,0,0.12)",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />

                    <Box sx={{ zIndex: 2, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image src={s2.icon} alt={s2.label} width={40} height={40} />
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      background: "#4D0DFF",
                      color: "white",
                      borderRadius: "16px",
                      px: "19px",
                      py: "9.5px",
                      fontSize: "1rem",
                      fontWeight: 500,
                      textAlign: "left",
                      position: "absolute",
                      top: "40px",
                      left: "105px",
                      width: "200px",
                    }}
                  >
                    {steps[2].label}
                  </Typography>
                </div>

                <div
                  ref={(el) => {
                    iconRefs.current[3] = el;
                  }}
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "102px",
                    width: 95,
                    height: 95,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        borderRadius: "50%",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "inset 0 0px 6px rgba(0,0,0,0.12)",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />

                    <Box sx={{ zIndex: 2, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image src={s3.icon} alt={s3.label} width={40} height={40} />
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      background: "#4D0DFF",
                      color: "white",
                      borderRadius: "16px",
                      px: "19px",
                      py: "9.5px",
                      fontSize: "1rem",
                      fontWeight: 500,
                      textAlign: "left",
                      position: "absolute",
                      top: "73px",
                      left: "93px",
                      width: "220px",
                    }}
                  >
                    {steps[3].label}
                  </Typography>
                </div>

                <div
                  ref={(el) => {
                    iconRefs.current[4] = el;
                  }}
                  style={{
                    position: "absolute",
                    bottom: "3px",
                    left: "108px",
                    width: 95,
                    height: 95,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        borderRadius: "50%",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "inset 0 0px 6px rgba(0,0,0,0.12)",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />

                    <Box sx={{ zIndex: 2, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image src={s4.icon} alt={s4.label} width={40} height={40} />
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      background: "#4D0DFF",
                      color: "white",
                      borderRadius: "16px",
                      px: "19px",
                      py: "9.5px",
                      fontSize: "1rem",
                      fontWeight: 500,
                      textAlign: "left",
                      position: "absolute",
                      top: "73px",
                      right: "93px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {steps[4].label}
                  </Typography>
                </div>

                <div
                  ref={(el) => {
                    iconRefs.current[5] = el;
                  }}
                  style={{
                    position: "absolute",
                    top: "250px",
                    left: "-5px",
                    width: 95,
                    height: 95,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        borderRadius: "50%",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "inset 0 0px 6px rgba(0,0,0,0.12)",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />

                    <Box sx={{ zIndex: 2, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image src={s5.icon} alt={s5.label} width={40} height={40} />
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      background: "#4D0DFF",
                      color: "white",
                      borderRadius: "16px",
                      px: "19px",
                      py: "9.5px",
                      fontSize: "1rem",
                      fontWeight: 500,
                      textAlign: "left",
                      position: "absolute",
                      top: "33px",
                      right: "108px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {steps[5].label}
                  </Typography>
                </div>

                <div
                  ref={(el) => {
                    iconRefs.current[6] = el;
                  }}
                  style={{
                    position: "absolute",
                    top: "66px",
                    left: "26px",
                    width: 95,
                    height: 95,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        borderRadius: "50%",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        boxShadow: "inset 0 0px 6px rgba(0,0,0,0.12)",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />

                    <Box sx={{ zIndex: 2, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image src={s6.icon} alt={s6.label} width={40} height={40} />
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      background: "#4D0DFF",
                      color: "white",
                      borderRadius: "16px",
                      px: "19px",
                      py: "9.5px",
                      fontSize: "1rem",
                      fontWeight: 500,
                      textAlign: "left",
                      position: "absolute",
                      top: "-10px",
                      right: "100px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {steps[6].label}
                  </Typography>
                </div>
              </>
            );
          })()}
        </Box>
      </Box>

      <Box textAlign="center" sx={{ my: 10 }}>
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
          Fale conosco
        </Button>
      </Box>
    </>
  );
}