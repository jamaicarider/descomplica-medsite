"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Alert, Box, Button, CircularProgress, TextField, Typography } from "@mui/material";

type LeadFormData = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
};

type LeadCaptureFormProps = {
  compact?: boolean;
};

const initialForm: LeadFormData = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
};

const WHATSAPP_NUMBER = "+554788992915";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

const extractPhoneDigits = (value: string) =>
  value
    .normalize("NFKD")
    .replace(/[\u200B-\u200D\uFEFF\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, "")
    .replace(/\D/g, "")
    .slice(0, 11);

const formatPhoneNumber = (value: string) => {
  const digits = extractPhoneDigits(value);

  if (digits.length <= 2) {
    return digits ? `(${digits}` : "";
  }

  if (digits.length <= 3) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7)}`;
};

export default function LeadCaptureForm({ compact = false }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<LeadFormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field: keyof LeadFormData) => (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, phone: formatPhoneNumber(event.target.value) }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    const submittedForm = event.currentTarget;
    const formValues = new FormData(submittedForm);
    const turnstileToken = String(formValues.get("cf-turnstile-response") || "").trim();

    if (!turnstileToken) {
      setErrorMessage("Confirme a validacao de seguranca antes de enviar.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/turnstile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: turnstileToken }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "Nao foi possivel validar a seguranca do formulario.");
      }

      const message =
        `Olá! Gostaria de saber mais sobre as soluções da Descomplica Medicina.\n\n` +
        `*Nome:* ${formData.fullName}\n` +
        `*Telefone:* ${formData.phone}\n` +
        `*Email:* ${formData.email}\n` +
        `*Cidade:* ${formData.city}`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setFormData(initialForm);
      submittedForm.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Erro inesperado ao validar o formulario.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: compact ? { xs: "100%", md: 300 } : 332,
        mt: compact ? 2 : 3,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.85)",
          mb: 1,
          fontSize: compact ? "0.86rem" : "0.96rem",
        }}
      >
        Quer saber mais sobre nossas solucoes? Preencha seus dados que entraremos em contato!
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: compact ? 1.5 : 2,
          borderRadius: 4,
          background: "linear-gradient(180deg, #31E6B7 0%, #06D87B 100%)",
          boxShadow: "0 10px 28px rgba(0, 0, 0, 0.28)",
        }}
      >
        <Typography sx={labelStyles}>Nome completo:</Typography>
        <TextField
          required
          fullWidth
          size="small"
          value={formData.fullName}
          onChange={handleChange("fullName")}
          sx={textFieldStyles}
        />
        <Typography sx={labelStyles}>Telefone para contato:</Typography>
        <TextField
          required
          fullWidth
          size="small"
          type="tel"
          value={formData.phone}
          onChange={handlePhoneChange}
          inputProps={{
            inputMode: "numeric",
            autoComplete: "tel-national",
            maxLength: 16,
          }}
          sx={textFieldStyles}
        />
        <Typography sx={labelStyles}>Email:</Typography>
        <TextField
          required
          fullWidth
          size="small"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          sx={textFieldStyles}
        />
        <Typography sx={labelStyles}>Cidade:</Typography>
        <TextField
          required
          fullWidth
          size="small"
          value={formData.city}
          onChange={handleChange("city")}
          sx={textFieldStyles}
        />

        <Box
          sx={{
            mt: 1,
            mb: 1,
            minHeight: 74,
            width: "100%",
            maxWidth: "100%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {TURNSTILE_SITE_KEY ? (
            <Box
              className="cf-turnstile"
              data-sitekey={TURNSTILE_SITE_KEY}
              data-theme="light"
              data-size="flexible"
              data-retry="never"
              data-refresh-expired="manual"
              sx={{
                width: "100%",
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
                "& > div": {
                  width: "100% !important",
                  maxWidth: "100% !important",
                },
                "& iframe": {
                  width: "100% !important",
                  maxWidth: "100% !important",
                },
              }}
            />
          ) : (
            <Typography sx={{ ...labelStyles, mb: 0, color: "#0B3B2E" }}>
              Configure NEXT_PUBLIC_TURNSTILE_SITE_KEY para ativar a protecao.
            </Typography>
          )}
        </Box>

        <Button
          type="submit"
          disabled={isSubmitting}
          sx={{
            mt: 0.5,
            color: "#00142E",
            fontWeight: 800,
            fontStyle: "italic",
            textTransform: "none",
            fontSize: compact ? "0.92rem" : "0.98rem",
            minHeight: 30,
            justifyContent: "flex-start",
            px: 0,
            "&.Mui-disabled": {
              color: "rgba(0,20,46,0.6)",
            },
          }}
        >
          {isSubmitting ? <CircularProgress size={18} sx={{ color: "#00142E" }} /> : "Enviar"}
        </Button>

        {errorMessage && (
          <Alert severity="error" sx={{ mt: 1, py: 0 }}>
            {errorMessage}
          </Alert>
        )}
      </Box>
    </Box>
  );
}

const textFieldStyles = {
  mb: 1,
  "& .MuiInputBase-root": {
    borderRadius: 999,
    backgroundColor: "#D7D7D7",
    height: 32,
    fontSize: "0.85rem",
    color: "#00142E",
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    fontVariantLigatures: "none",
  },
  "& .MuiInputBase-input": {
    px: 1.5,
    py: "8px",
  },
  "& fieldset": {
    border: "none",
  },
};

const labelStyles = {
  mb: 0.4,
  fontSize: "0.72rem",
  color: "#004C3A",
  fontWeight: 700,
};