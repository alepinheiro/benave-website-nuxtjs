/**
 * Remove caracteres indesejados do texto
 * @param excerpt
 * @returns
 */
export function cleanText(excerpt: string): string {
  return excerpt
    .replace(/<[^>]+>/g, ' ') // Remove tags HTML
    .replace(/&[^;]+;/g, ' ') // Remove entidades HTML
    .replace(/Continue reading.*/i, '') // Remove "Continue reading" e o que vier depois
    .trim(); // Remove espaços extras
}
