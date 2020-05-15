import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList, View, Keyboard, Alert } from 'react-native';
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
  const listRef = useRef<FlatList>(null);

  async function handleInsert(): Promise<void> {
    Keyboard.dismiss();

    if (!inputText.trim()) {
      return Alert.alert('Ops, ocorreu um erro!', 'Insira um valor válido.');
    }

    if (items.length === 0) {
      setItems([inputText]);
      setInputText('');
    }

    if (listRef.current) {
      listRef.current.scrollToIndex({ index: items.length - 1 });
      await delay(500);
      setItems([...items, inputText]);
      await delay(500);
      listRef.current.scrollToEnd();
      setInputText('');
    }
  }

  async function handleRemove(): Promise<void> {
    Keyboard.dismiss();

    if (!inputText.trim()) {
      return Alert.alert('Ops, ocorreu um erro!', 'Insira um valor válido.');
    }

    if (items.length === 0) {
      return Alert.alert(
        'Ops, ocorreu um erro!',
        'Não é possível remover um item de uma lista vazia.',
      );
    }

    const searchIndex = items.findIndex((item) => item === inputText);

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
        setItems(items.filter((item, index) => index !== searchIndex));
        setInputText('');
      }
    }
  }

  async function handleSearch(): Promise<void> {
    Keyboard.dismiss();

    if (!inputText.trim()) {
      return Alert.alert('Ops, ocorreu um erro!', 'Insira um valor válido.');
    }

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
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: items.length === 0 ? 1 : 0,
        }}
        ListEmptyComponent={() => (
          <NodeWrapper>
            <NullItem>
              <MainText>NULL</MainText>
            </NullItem>
          </NodeWrapper>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="swap-vert" size={60} color="#dcdcdf" />
          </View>
        )}
        ListHeaderComponent={() =>
          items.length > 0 ? (
            <NodeWrapper>
              <NullItem>
                <MainText>NULL</MainText>
              </NullItem>
              <Icon name="arrow-upward" size={50} color="#dcdcdf" />
            </NodeWrapper>
          ) : null
        }
        renderItem={({ item, index }) => (
          <NodeWrapper>
            <NodeItem>
              {(() => {
                if (items.length === 1 && index === 0) {
                  return (
                    <>
                      <NodeHeaderText>(PRIMEIRO)</NodeHeaderText>
                      <NodeHeaderText>(ÚLTIMO)</NodeHeaderText>
                    </>
                  );
                }
                if (index === 0)
                  return <NodeHeaderText>(PRIMEIRO)</NodeHeaderText>;
                if (index === items.length - 1)
                  return <NodeHeaderText>(ÚLTIMO)</NodeHeaderText>;
                return null;
              })()}

              <MainText>{item}</MainText>
            </NodeItem>
          </NodeWrapper>
        )}
        ListFooterComponent={() =>
          items.length > 0 ? (
            <NodeWrapper>
              <Icon name="arrow-downward" size={50} color="#dcdcdf" />
              <NullItem>
                <MainText>NULL</MainText>
              </NullItem>
            </NodeWrapper>
          ) : null
        }
      />
    </Container>
  );
};

export default DoublyLinked;
