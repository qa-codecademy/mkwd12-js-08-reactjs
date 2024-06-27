import { ReactNode } from "react";
import "./Page.css";

interface PageProps {
  title: string;
  children: ReactNode;
}

export function Page({ title, children }: PageProps) {
  return (
    <section className="page">
      <div className="page-heading">
        <h2>{title}</h2>
      </div>
      {/* Children is a pre-built prop from react that reperesnts all the content between the opening and closing tag of a React Component */}
      <div className="page-content">{children}</div>
    </section>
  );
}
