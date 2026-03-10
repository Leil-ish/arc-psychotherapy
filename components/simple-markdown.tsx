type MarkdownNode =
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "p"; content: string }
  | { type: "ul"; items: string[] };

function parseSimpleMarkdown(body: string): MarkdownNode[] {
  const lines = body.trim().split(/\r?\n/);
  const nodes: MarkdownNode[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    nodes.push({ type: "p", content: paragraph.join(" ").trim() });
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) return;
    nodes.push({ type: "ul", items: [...listItems] });
    listItems = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      nodes.push({ type: "h2", content: line.slice(3).trim() });
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      nodes.push({ type: "h3", content: line.slice(4).trim() });
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2).trim());
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return nodes;
}

export function SimpleMarkdown({ body }: { body: string }) {
  const nodes = parseSimpleMarkdown(body);

  return (
    <div className="space-y-5">
      {nodes.map((node, index) => {
        if (node.type === "h2") {
          return (
            <h2 key={`${index}-${node.content}`} className="h2">
              {node.content}
            </h2>
          );
        }

        if (node.type === "h3") {
          return (
            <h3 key={`${index}-${node.content}`} className="h3">
              {node.content}
            </h3>
          );
        }

        if (node.type === "ul") {
          return (
            <ul key={`${index}-list`} className="body list-disc space-y-2 pl-6">
              {node.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${index}-${node.content}`} className="body">
            {node.content}
          </p>
        );
      })}
    </div>
  );
}
