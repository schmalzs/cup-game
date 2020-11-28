import React from 'react';
import { Icon, Input, InputGroup } from 'rsuite';
import styles from './styles.module.scss';

interface AddInputProps {
  value: string;
  onChange(value: string): void;
  onAdd(item: string): void;
}

const AddInput = ({ value, onChange, onAdd }: AddInputProps) => {
  const handleClick = () => {
    if (!!value.trim()) {
      onAdd(value.trim());
    }
    onChange('');
  };

  return (
    <InputGroup inside size="lg">
      <Input
        className={styles.input}
        placeholder="Add an item..."
        value={value}
        onChange={onChange}
        onPressEnter={handleClick}
      />
      <InputGroup.Button onClick={handleClick}>
        <Icon icon="plus-square" />
      </InputGroup.Button>
    </InputGroup>
  );
};

export default AddInput;
