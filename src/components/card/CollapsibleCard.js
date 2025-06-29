import { useState } from "react";
import Card from "./Card";
import { HeadingContainer } from "./CollapsibleCard.styles";

function CollapsibleCard({ heading, collapse = false, children }) {
  const [showContent, setShowContent] = useState(!collapse);

  return (
    <Card>
      <HeadingContainer onClick={() => setShowContent((prev) => !prev)}>
        <h5>{heading}</h5>
        {/* <StyledIcon icon={showContent ? faChevronUp : faChevronDown} /> */}
      </HeadingContainer>
      {showContent && children}
    </Card>
  );
}

export default CollapsibleCard;
