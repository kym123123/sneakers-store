import React, { useState } from 'react';
import {
  Button,
  Image,
  Text,
  Touchable,
  TouchableOpacityBase,
  View,
} from 'react-native';
import {
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const sneakersArr = [
  {
    name: 'nike',
    uri:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f26e1847-941d-456f-a619-c46b5c827856/dbreak-type-mens-shoe-FGjGHz.jpg',
  },
  {
    name: 'nike',
    uri:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f26e1847-941d-456f-a619-c46b5c827856/dbreak-type-mens-shoe-FGjGHz.jpg',
  },
  {
    name: 'nike',
    uri:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f26e1847-941d-456f-a619-c46b5c827856/dbreak-type-mens-shoe-FGjGHz.jpg',
  },
  {
    name: 'nike',
    uri:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f26e1847-941d-456f-a619-c46b5c827856/dbreak-type-mens-shoe-FGjGHz.jpg',
  },
  {
    name: 'nike',
    uri:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f26e1847-941d-456f-a619-c46b5c827856/dbreak-type-mens-shoe-FGjGHz.jpg',
  },
  {
    name: 'nike',
    uri:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f26e1847-941d-456f-a619-c46b5c827856/dbreak-type-mens-shoe-FGjGHz.jpg',
  },
  {
    name: 'nike',
    uri:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f26e1847-941d-456f-a619-c46b5c827856/dbreak-type-mens-shoe-FGjGHz.jpg',
  },
];

const WallPaper = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 30px;
  color: white;
`;

const ListImage = styled.Image`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

const ListContainer = styled.View`
  flex-direction: row;
  padding: 20px 10px;
`;

const ListButton = styled.Button`
  background-color: red;
`;

function Product() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View>
      <WallPaper source={require('../../image/wallpaper.png')}>
        <Title>Sneaker Store</Title>
      </WallPaper>
      <FlatList
        data={sneakersArr}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <ListContainer>
                <ListImage
                  source={{
                    uri: item.uri,
                    width: 50,
                    height: 50,
                  }}
                />
                <Text>{item.name}</Text>
                <ListButton title="+" onPress={() => {}} />
                <Text>1</Text>
                <ListButton title="-" onPress={() => {}} />
              </ListContainer>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Product;
