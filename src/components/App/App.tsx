import React from 'react';
import { AddInput, Buttons, List, Selection } from '..';
import styles from './styles.module.scss';

const random = (i: number) => Math.floor(Math.random() * i);

const App = () => {
  const [value, setValue] = React.useState('');
  const [items, setItems] = React.useState<string[]>([]);
  const [selectionProps, setSelectionProps] = React.useState({
    show: false,
    selection: '',
  });

  React.useEffect(() => {
    try {
      setItems(JSON.parse(window.sessionStorage.getItem('items') || ''));
    } catch {}
  }, []);

  React.useEffect(() => {
    window.sessionStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleAdd = (item: string) => setItems([...items, item]);

  const handleClear = () => {
    setValue('');
    setItems([]);
    setSelectionProps({ show: false, selection: '' });
  };

  const handleRemove = (index: number) =>
    setItems(items.filter((_, i) => index !== i));

  const handlePick = () => {
    if (items.length > 0)
      setSelectionProps({ selection: items[random(items.length)], show: true });
  };

  return (
    <div className={styles.main}>
      <img className={styles.cup} src="/cup.png" alt="cup" />
      <AddInput value={value} onChange={setValue} onAdd={handleAdd} />
      <div className={styles.list}>
        <List items={items} onRemove={handleRemove} />
      </div>
      <Buttons onClear={handleClear} onPick={handlePick} />
      <div className={styles.selection}>
        <Selection
          {...selectionProps}
          onClose={() => setSelectionProps({ ...selectionProps, show: false })}
        />
      </div>
    </div>
  );
};

export default App;
