import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import rootReducer, { RootState } from '../module';
import { getProductThunk } from '../module/product';

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
  margin-right: 10px;
`;

const ListContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 10px;
`;

const ListButton = styled.Pressable`
  background-color: rgb(82, 69, 59);
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    const f = async () => {
      await dispatch(getProductThunk());
    };
    f();
  }, [dispatch]);

  return (
    <View>
      <WallPaper source={require('../../image/wallpaper.png')}>
        <Title>Sneaker Store</Title>
      </WallPaper>
      <FlatList
        data={products}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <ListContainer>
                <ListImage
                  source={{
                    uri: item.imageUrl,
                    width: 50,
                    height: 50,
                  }}
                />
                <Text style={{ marginRight: 5 }} numberOfLines={1}>
                  {item.name}
                </Text>
                <ListButton onPress={() => {}}>
                  <Text style={{ color: 'white' }}>+</Text>
                </ListButton>
                <Text style={{ width: 15, textAlign: 'center' }}>1</Text>
                <ListButton onPress={() => {}}>
                  <Text style={{ color: 'white' }}>-</Text>
                </ListButton>
              </ListContainer>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Product;
