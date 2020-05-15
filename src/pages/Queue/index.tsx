import React, { useState, useRef } from 'react';
import { Dimensions, Alert, Keyboard } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import delay from '../../services/delay';

import {
  Container,
  StructureTitle,
  StructureFullTitle,
  Input,
  Button,
  MainText,
  NodeHeaderText,
  QueueItem,
} from './styles';

interface QueueItems {
  value: string;
  position: string | null;
}

const { width: viewportWidth } = Dimensions.get('window');

const Queue: React.FC = () => {
  const [items, setItems] = useState<QueueItems[]>([
    { value: '2', position: 'first' },
    { value: '4', position: null },
    { value: '9', position: null },
    { value: '8', position: null },
    { value: '3', position: null },
    { value: '1', position: null },
    { value: '23', position: 'last' },
    { value: 'Sentinela', position: null },
  ]);
  const [inputText, setInputText] = useState('');
  const carouselRef = useRef(null);

  async function handleRemove(): Promise<void> {
    Keyboard.dismiss();

    if (!inputText.trim()) {
      return Alert.alert('Ops, ocorreu um erro!', 'Insira um valor válido.');
    }

    if (items[0].value === ' ') {
      return Alert.alert(
        'Ops, ocorreu um erro!',
        'Não é possível remover itens de uma lista vazia.',
      );
    }

    if (items.length === 2) {
      return setItems([
        { value: ' ', position: null },
        { value: 'Sentinela', position: null },
      ]);
    }

    if (carouselRef.current) {
      carouselRef.current.snapToItem(0);
      await delay(1000);

      const [, second, ...rest] = items;
      second.position = 'first';

      setItems([second, ...rest]);
    }
  }

  async function handleSearch(): Promise<void> {
    Keyboard.dismiss();

    if (!inputText.trim()) {
      return Alert.alert('Ops, ocorreu um erro!', 'Insira um valor válido.');
    }

    const searchIndex = items.findIndex(({ value }) => value === inputText);

    if (carouselRef.current) {
      carouselRef.current.snapToItem(0);
      await delay(1000);

      for (let itemIndex = 0; itemIndex < items.length - 1; itemIndex += 1) {
        if (itemIndex === searchIndex) break;

        carouselRef.current.snapToNext();
        await delay(1000);
      }
    }
  }

  async function handleInsert(): Promise<void> {
    Keyboard.dismiss();

    if (!inputText.trim()) {
      return Alert.alert('Ops, ocorreu um erro!', 'Insira um valor válido.');
    }

    if (items.length === 2 && items[0].value === ' ') {
      return setItems([
        { value: inputText, position: 'first' },
        { value: 'Sentinela', position: null },
      ]);
    }

    if (items.length === 11) {
      return Alert.alert(
        'Ops, ocorreu um erro!',
        'Não é possível inserir mais elementos na fila. Por ser uma implementação estática, ela está limitada a 10 itens apenas.',
      );
    }

    if (carouselRef.current) {
      carouselRef.current.snapToItem(0);
      await delay(250);
      carouselRef.current.snapToItem(items.length - 2);
      await delay(1000);

      const oldLastItem = items[items.length - 2];
      oldLastItem.position = oldLastItem.position === 'first' ? 'first' : null;

      const newItem = { value: inputText, position: 'last' };

      setItems([
        ...items.splice(0, items.length - 2),
        oldLastItem,
        newItem,
        { value: 'Sentinela', position: null },
      ]);
      await delay(300);

      carouselRef.current.snapToNext();
    }
  }

  return (
    <Container>
      <StructureTitle>FILA</StructureTitle>
      <StructureFullTitle>Fila estática circular</StructureFullTitle>
      <Input
        keyboardAppearance="dark"
        keyboardType="numeric"
        returnKeyType="send"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button onPress={handleSearch}>
        <MainText>Buscar</MainText>
      </Button>
      <Button onPress={handleInsert}>
        <MainText>Inserir</MainText>
      </Button>
      <Button onPress={handleRemove}>
        <MainText>Remover</MainText>
      </Button>

      <Carousel
        ref={carouselRef}
        data={items}
        layout="default"
        sliderWidth={viewportWidth}
        itemWidth={160}
        loop
        inactiveSlideOpacity={0.5}
        inactiveSlideScale={0.96}
        useScrollView
        containerCustomStyle={{
          flex: 1,
        }}
        contentContainerCustomStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        renderItem={({ item }) => (
          <QueueItem>
            {(() => {
              if (items.length === 2 && item.value !== 'Sentinela') {
                return (
                  <>
                    <NodeHeaderText>(PRIMEIRO)</NodeHeaderText>
                    <NodeHeaderText>(ÚLTIMO)</NodeHeaderText>
                  </>
                );
              }

              if (item.position === 'first')
                return <NodeHeaderText>(PRIMEIRO)</NodeHeaderText>;
              if (item.position === 'last')
                return <NodeHeaderText>(ÚLTIMO)</NodeHeaderText>;
              return null;
            })()}
            <MainText>{item.value}</MainText>
          </QueueItem>
        )}
      />
    </Container>
  );
};

export default Queue;
