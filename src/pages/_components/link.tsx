import React from "react";
import { withTailwind } from "@essence/ui";

export type LinkProps = {
  href: string;
}

const Link: React.FC<LinkProps> = ({ href, children }) => withTailwind(
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    color="teal500"
    textDecorationHover="underline">
    {children}
  </a>
);

export default Link;
