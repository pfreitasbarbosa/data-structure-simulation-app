import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import delay from '../../services/delay';

import {
  Container,
  StructureTitle,
  StructureFullTitle,
  Input,
  Button,
  NodeWrapper,
  MainText,
  NodeItem,
  NullItem,
  NodeHeaderText,
} from './styles';

const DoublyLinked: React.FC = () => {
  const [items, setItems] = useState(['14', '2', '17', '3', '8']);
  const [inputText, setInputText] = useState('');
  const listRef = useRef(null);

  async function handleInsert(): Promise<void> {
    setItems([...items, inputText]);
    setInputText('');
    await delay(500);
    listRef.current.scrollToEnd();
  }

  async function handleRemove(): Promise<void> {
    const searchIndex = items.indexOf(inputText);

    if (listRef.current) {
      for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
        listRef.current.scrollToIndex({
          index: itemIndex,
        });

        if (itemIndex === searchIndex) break;

        await delay(1000);
      }

      if (searchIndex !== -1) {
        await delay(1000);
        setItems(items.filter((item) => item !== inputText));
        setInputText('');
      }
    }
  }

  async function handleSearch(): Promise<void> {
    const searchIndex = items.indexOf(inputText);

    if (listRef.current) {
      for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
        listRef.current.scrollToIndex({
          index: itemIndex,
        });

        if (itemIndex === searchIndex) break;

        await delay(1000);
      }
    }
  }

  return (
    <Container>
      <StructureTitle>LDDE</StructureTitle>
      <StructureFullTitle>
        Lista dinâmica duplamente encadeada
      </StructureFullTitle>
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
      <FlatList
        data={items}
        ref={listRef}
        keyExtractor={(item) => item}
        style={{ marginTop: 16 }}
        contentContainerStyle={{ alignItems: 'center' }}
        ListHeaderComponent={() => (
          <NodeWrapper>
            <NullItem>
              <MainText>NULL</MainText>
            </NullItem>
            <Icon name="arrow-upward" size={50} color="#dcdcdf" />
          </NodeWrapper>
        )}
        renderItem={({ item }) => (
          <NodeWrapper>
            {item === items[0] ? null : (
              <Icon name="swap-vert" size={60} color="#dcdcdf" />
            )}

            <NodeItem>
              {(() => {
                if (item === items[0])
                  return <NodeHeaderText>(HEAD)</NodeHeaderText>;
                if (item === items[items.length - 1])
                  return <NodeHeaderText>(TAIL)</NodeHeaderText>;
                return null;
              })()}

              <MainText>{item}</MainText>
            </NodeItem>
          </NodeWrapper>
        )}
        ListFooterComponent={() => (
          <NodeWrapper>
            <Icon name="arrow-downward" size={50} color="#dcdcdf" />
            <NodeItem>
              <MainText>NULL</MainText>
            </NodeItem>
          </NodeWrapper>
        )}
      />
    </Container>
  );
};

export default DoublyLinked;
