import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {createPost, logOut} from '../redux/actions';
import Logout from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, StackActions} from '@react-navigation/native';
import {colors} from '../shared/Colors';
import {ScrollView} from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const NewPost = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const createPosts = () => {
    dispatch(createPost({title: title, description: description}));
    navigation.dispatch(StackActions.popToTop);
  };
  const logout = () => {
    dispatch(logOut());
    navigation.replace('Login');
  };
  return (
    <ScrollView style={styles.ScrollViewContainer}>
      <TouchableOpacity onPress={logout} style={styles.LogoutButton}>
        <Text style={styles.buttonText}>Logout</Text>
        <Logout name="login" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text
          style={styles.text}>
          Title
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              value={title}
              selectionColor={'#000'}
              onChangeText={text => setTitle(text)}
            />
          </View>
        </View>
        <Text
          style={styles.text}>
          Description
        </Text>
        <TextInput
          onChangeText={text => setDescription(text)}
          value={description}
          multiline={true}
          numberOfLines={7}
          selectionColor={'#000'}
          style={styles.description}
        />
        <TouchableOpacity onPress={createPosts}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>POST</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  ScrollViewContainer: {
    flex: 1,
  },
  container: {paddingLeft: 30, paddingRight: 30, marginTop: 30},
  text:{
            fontFamily: 'Roboto-Bold',
            fontSize: 14,
            color: '#000',
          },
          textInput:{
                color: '#000',
                fontFamily: 'Roboto-Light',
                fontSize: 18,
              },
              description:{
            borderWidth: 1,
            borderColor: '#000',
            height: windowHeight / 4,
            borderRadius: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            fontFamily: 'Roboto-Light',
            fontSize: 18,
            color: '#000',
            marginTop: 20,
          },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: width / 1.2,
    borderRadius: 15,
    marginVertical: 10,
    marginTop: 20,
    borderWidth: 1,
  },
  input: {
    flex: 0.8,
    padding: 15,
  },
  button: {
    marginTop: 20,
    justifyContent: 'center',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: colors.gradientColor3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  LogoutButton: {
    position: 'absolute',
    right: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginLeft: 40,
    fontFamily: 'Roboto-Bold',
    marginRight: 40,
  },
});
