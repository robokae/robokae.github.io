import { useState } from "react";
import Card from "./Card";
import { HeadingContainer, StyledIcon } from "./CollapsibleCard.styles";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function CollapsibleCard({ heading, collapse = false, children }) {
  const [showContent, setShowContent] = useState(!collapse);

  return (
    <Card>
      <HeadingContainer onClick={() => setShowContent((prev) => !prev)}>
        <h5>{heading}</h5>
        <StyledIcon icon={showContent ? faChevronUp : faChevronDown} />
      </HeadingContainer>
      {showContent && children}
    </Card>
  );
}

export default CollapsibleCard;
