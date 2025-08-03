import Tooltip from "components/tooltip/Tooltip";
import Button from "../../button/Button";
import Link from "../Link";
import Stack from "components/Stack";
import { useState } from "react";

function ButtonLink({ to, variant, tooltip, onClick, ...props }) {
  const [isHovered, setIsHovered] = useState();

  return (
    <Stack
      direction="column"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={to} underline={false}>
        <Button variant={variant} onClick={onClick}>
          {props.children}
        </Button>
      </Link>
      {tooltip && isHovered && (
        <Tooltip position={tooltip.position}>{tooltip.hint}</Tooltip>
      )}
    </Stack>
  );
}

export default ButtonLink;
