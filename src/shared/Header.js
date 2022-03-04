/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, View, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{padding: 10, backgroundColor:"#fff"}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Image
            source={require('../../Assets/Group.png')}
            style={{
              width: windowWidth / 8,
              height: windowWidth / 8,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <TouchableOpacity onPress={()=>navigation.navigate("Notifications")}>
              <Icon name="notifications-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image
              source={require('../../Assets/placeholder.png')}
              style={{
                width: windowWidth / 8,
                height: windowWidth / 8,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};