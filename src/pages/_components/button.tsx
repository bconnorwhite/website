import React from "react";
import { Icon, IconProps, withTailwind } from "@essence/ui";
import { LinkProps } from "./link";

interface ButtonProps extends LinkProps {
  icon?: Pick<IconProps, "name">;
}

const Button: React.FC<ButtonProps> = ({ href, icon, children }) => withTailwind(
  <a
    textAlign="center"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    padding="2"
    color="teal500"
    colorHover="teal100"
    bgColorHover="teal500"
    transition="colors"
    shadowHover="md"
    cursor="pointer"
    duration="300"
    timingFunction="in-out"
    letterSpacing="wider"
    fontSize="sm"
    borderWidth="1"
    borderColor="teal500"
    borderRadius="full">
    {
      icon &&
      <React.Fragment>
        <Icon name={icon} />
        {" "}
      </React.Fragment>
    }
    {children}
  </a>
);

export default Button;
