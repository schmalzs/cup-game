import React from 'react';
import { Button, ButtonToolbar, Icon } from 'rsuite';
import styles from './styles.module.scss';

interface ButtonsProps {
  onClear(): void;
  onPick(): void;
}

const Buttons = ({ onClear, onPick }: ButtonsProps) => (
  <ButtonToolbar className={styles.toolbar}>
    <Button appearance="subtle" onClick={onClear}>
      <Icon icon="trash-o" /> Clear
    </Button>
    <Button appearance="primary" onClick={onPick}>
      Pick!
    </Button>
  </ButtonToolbar>
);

export default Buttons;
