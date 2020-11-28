import React from 'react';
import { Message } from 'rsuite';

interface SelectionProps {
  selection: string;
  show: boolean;
  onClose(): void;
}

const Selection = ({ selection, show, onClose }: SelectionProps) =>
  show ? (
    <Message
      closable
      type="success"
      title="And the winner is..."
      description={selection}
      onClose={onClose}
    />
  ) : null;

export default Selection;
