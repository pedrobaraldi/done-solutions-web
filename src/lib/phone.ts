// Formata telefones enquanto a pessoa digita.
// - Brasil (sem "+"): (11) 4556-5442 (fixo) ou (11) 99136-1687 (celular).
// - Exterior (começa com "+"): mantém o formato digitado, ex.: +1 (415) 555-2671.
export const PHONE_MAX_LENGTH = 20;

export const formatPhone = (value: string): string => {
  const trimmed = value.trimStart();

  if (trimmed.startsWith("+")) {
    let digitCount = 0;
    const rest = trimmed
      .slice(1)
      .replace(/[^\d\s()-]/g, "")
      .replace(/\s{2,}/g, " ")
      .split("")
      .filter((char) => {
        if (!/\d/.test(char)) return true;
        digitCount += 1;
        return digitCount <= 15;
      })
      .join("");
    return `+${rest}`.slice(0, PHONE_MAX_LENGTH);
  }

  const digits = trimmed.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

// O telefone é opcional. Brasil: DDD + 8 ou 9 dígitos. Exterior: 8 a 15 dígitos (padrão E.164).
export const isValidPhone = (value: string): boolean => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return true;
  if (value.trimStart().startsWith("+")) return digits.length >= 8 && digits.length <= 15;
  return digits.length === 10 || digits.length === 11;
};
