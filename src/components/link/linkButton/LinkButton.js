import { Button, Tooltip } from "@robokae/robokae-ui";
import { useNavigate } from "react-router-dom";

const LinkButton = ({ to, tooltipData, children, ...props }) => {
  const navigate = useNavigate();

  const Content = ({ to, children, ...props }) => (
    <Button {...props} onClick={() => navigate(to)}>
      {children}
    </Button>
  );

  return tooltipData ? (
    <Tooltip position={tooltipData.position} content={tooltipData.hint}>
      <Content to={to} {...props}>
        {children}
      </Content>
    </Tooltip>
  ) : (
    <Content to={to} {...props}>
      {children}
    </Content>
  );
};

export default LinkButton;
