import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function MarkdownPreview({ markdown }: { markdown: string }) {
  return (
    <Markdown
      components={{
        code({ className, children }) {
          const match = /language-(\w+)/.exec(className || '');

          return match ? (
            <SyntaxHighlighter
              showLineNumbers={true}
              language={match && match[1]}
              style={oneDark}
              className="w-full"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className}>{children}</code>
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
}
