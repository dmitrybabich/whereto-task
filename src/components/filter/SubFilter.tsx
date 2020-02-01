import React from "react";
import styled from "styled-components";
import { TagItem } from "./TagItem";
import { Range } from "./Range";

interface Props {
  tags: Array<{ value: string; selected: boolean }>;
  onChange: () => void;
}

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 29px 32px;
  `,
  TagsLabel: styled.span`
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.colors.textThird};
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.19px;
    border-bottom: 1px solid ${props => props.theme.borders.third};
    margin-bottom: 8px;
  `,
  RangeLabel: styled.span`
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.text};
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.19px;
    color: ${props => props.theme.colors.textThird};
    margin: 24px 0 10px 0;
  `
};

export const SubFilter = (props: Props) => {
  const { onChange, tags } = props;

  return (
    <styles.Container>
      <styles.TagsLabel>Filters</styles.TagsLabel>
      {tags.map(tag => (
        <TagItem key={tag.value} {...tag} onToggle={() => {}} />
      ))}
      <styles.RangeLabel>People dig it</styles.RangeLabel>
      <Range value={[0, 100]} />
      <styles.RangeLabel>Helps me with job search</styles.RangeLabel>
      <Range value={[20, 60]} />
    </styles.Container>
  );
};
