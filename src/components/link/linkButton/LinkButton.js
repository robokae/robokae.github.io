import { Button, Tooltip } from "@robokae/robokae-ui";
import Link from "../Link";

const LinkButton = ({ to, onClick, tooltipData, children }) => {
  const Content = ({ to, onClick, children }) => (
    <Button onClick={onClick}>
      <Link to={to} underline={false}>
        {children}
      </Link>
    </Button>
  );

  return tooltipData ? (
    <Tooltip position={tooltipData.position} content={tooltipData.hint}>
      <Content to={to} onClick={onClick}>
        {children}
      </Content>
    </Tooltip>
  ) : (
    <Content to={to} onClick={onClick}>
      {children}
    </Content>
  );
};

export default LinkButton;
