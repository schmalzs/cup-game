import React from 'react';
import { Tag, TagGroup } from 'rsuite';
import styles from './styles.module.scss';

interface ListProps {
  items: string[];
  onRemove(index: number): void;
}

const List = ({ items, onRemove }: ListProps) => (
  <TagGroup className={styles.group}>
    {items.map((item, index) => (
      <Tag
        key={index}
        className={styles.tag}
        closable
        onClose={() => onRemove(index)}
      >
        {item}
      </Tag>
    ))}
  </TagGroup>
);

export default List;
