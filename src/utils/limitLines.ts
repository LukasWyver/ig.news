export default function limitLines(text, lineLimit, spaceLine = 50) {
  const charLimit = lineLimit * spaceLine; // Defina o número máximo de caracteres com base no número de linhas desejado.
  const truncatedText = text.slice(0, charLimit); // Corte o texto até o número máximo de caracteres
  const fullText = truncatedText + (text.length > charLimit ? "..." : ""); // Adicione os três pontos se o texto for maior que o limite
  return fullText;
}
