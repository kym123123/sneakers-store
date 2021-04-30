import React from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components/native';

type MainTextProps = {
  size: string;
  color?: string;
};

const MainView = styled.View`
  padding: 0 18px;
  flex: 1;
  background-color: #fefefe;
`;

const MainText = styled.Text`
  font-size: ${(props: MainTextProps) =>
    props.size === 'title' ? '24px' : '14px'};
  font-weight: 500;
  width: ${(props: MainTextProps) =>
    props.size === 'title' ? '200px' : '223px'};
  height: ${(props: MainTextProps) =>
    props.size === 'title' ? '59px' : '17px'};
  margin-top: ${(props: MainTextProps) =>
    props.size === 'title' ? '96px' : '16px'};
  color: #202020;
`;

const MainTextInput = styled.TextInput`
  font-size: 16px;
  margin-top: 80px;
  padding-bottom: 6px;
  border-bottom-width: 1px;
  border-bottom-color: #c1c2c3;
`;

const MainButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #207ab4;
  border-radius: 10px;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 119px 14px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  width: 99px;
  color: #207ab4;
`;

const BottomView = styled.View`
  margin-top: 70px;
  border-color: #c1c2c3;
  border-top-width: 1px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BottomText = styled.Text`
  color: #c1c2c3;
  font-size: 14px;
  font-weight: 500;
  width: 80px;
  background-color: #fefefe;
  position: absolute;
  top: -10px;
  left: 140px;
  text-align: center;
`;

const IconView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
`;

const Icon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 12px;
`;

const Cart = () => {
  return (
    <MainView>
      <MainText size="title">나만의 다이빙 일정을 관리해보세요.</MainText>
      <MainText size="detail">회원 서비스를 위해 로그인이 필요합니다.</MainText>
      <MainTextInput placeholder="이메일 주소" />
      <MainButton onPress={() => {}}>
        <ButtonText>이메일로 시작</ButtonText>
      </MainButton>
      <BottomView>
        <BottomText>간편 시작</BottomText>
        <IconView>
          <Icon
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/240px-KakaoTalk_logo.svg.png',
            }}
          />
          <Text style={{ color: '#202020' }}>카카오로 로그인</Text>
        </IconView>
        <IconView>
          <Icon source={require('../../image/naver.png')} />
          <Text style={{ color: '#202020' }}>네이버로 로그인</Text>
        </IconView>
        <IconView>
          <Icon
            source={{
              uri:
                'https://cdn.freebiesupply.com/logos/large/2x/google-plus-logo-png-transparent.png',
            }}
          />
          <Text style={{ color: '#202020' }}>구글로 로그인</Text>
        </IconView>
      </BottomView>
    </MainView>
  );
};

export default Cart;
