import { useRef, useState } from "react";
import {
  Container,
  RemovableTag,
  StyledIcon,
  TagFieldContainer,
  TagInput,
  TagsContainer,
} from "./TagsInput.styles";

function TagsInput({ label, name, placeholder, required, onChange, ...props }) {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const tagInputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.code === "Enter" && tagInput.trim() !== "") {
      if (!tags.includes(tagInput)) {
        setTags((prev) => [...prev, tagInput]);
        tagInputRef.current.value = "";
      }
      onChange(tags);
    }
  };

  const removeTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  const updateTagInput = (e) => {
    setTagInput(e.target.value);
  };

  return (
    <Container>
      <label for={name}>{label}</label>
      <TagFieldContainer>
        {tags.length > 0 && (
          <TagsContainer>
            {tags.map((tag, index) => (
              <RemovableTag key={index}>
                <p>{tag}</p>
                {/* <StyledIcon onClick={() => removeTag(index)} icon={faTimes} /> */}
              </RemovableTag>
            ))}
          </TagsContainer>
        )}
        <TagInput
          ref={tagInputRef}
          id="tags"
          name="tags"
          onChange={updateTagInput}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Enter tags"
        />
      </TagFieldContainer>
    </Container>
  );
}

export default TagsInput;
