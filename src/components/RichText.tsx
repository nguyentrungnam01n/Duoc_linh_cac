export function RichText({ html }: { html?: string | null }) {
  if (!html) return null;
  return (
    <div
      className="space-y-4 text-base leading-7"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
