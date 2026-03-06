export function SimpleMarkdown({ body }: { body: string }) {
  const blocks = body
    .trim()
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={`${index}-${block}`} className="h2">
              {block.slice(3)}
            </h2>
          );
        }

        if (block.startsWith("### ")) {
          return (
            <h3 key={`${index}-${block}`} className="h3">
              {block.slice(4)}
            </h3>
          );
        }

        if (block.split("\n").every((line) => line.startsWith("- "))) {
          return (
            <ul key={`${index}-${block}`} className="space-y-2 body">
              {block.split("\n").map((line) => (
                <li key={line}>• {line.slice(2)}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${index}-${block}`} className="body">
            {block}
          </p>
        );
      })}
    </div>
  );
}
