import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {createLogin} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import User from 'react-native-vector-icons/AntDesign';
import {useNavigation, StackActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../shared/Colors';

const {width} = Dimensions.get('screen');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isLogin} = useSelector(state => state.getPostReducer);
  const createLogins = () => {
    dispatch(createLogin({email: email, password: password}));
    console.log('login', isLogin);
  };
  useEffect(() => {
    if (isLogin) {
      navigation.replace('Home');
    }
  }, [isLogin]);
  return (
    <ScrollView style={styles.scrollVieContainer}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#0061AA', '#1F98F3', '#CDD33E']}
        start={{x: 0.022, y: 0.1}}
        end={{x: 1, y: 0.6}}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/Logos&Icons/userLogo.png')}
            style={styles.imageContainer}></Image>
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                value={email}
                placeholderTextColor="#ffffff"
                onChangeText={text => setEmail(text)}
                selectionColor={'#fff'}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Password"
                value={password}
                placeholderTextColor="#ffffff"
                onChangeText={text => setPassword(text)}
                selectionColor={'#fff'}
              />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <TouchableOpacity onPress={createLogins} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
              <User name="login" size={24} color="#0061AA" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    color: '#fff',
  },
  button: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    marginBottom: 50,
    elevation: 11,
  },
  buttonText: {
    fontSize: 16,
    color: '#0061AA',
    textAlign: 'center',
    marginLeft: 40,
    fontFamily: 'Roboto-Bold',
    marginRight: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: width / 1.2,
    borderRadius: 15,
    marginVertical: 10,
    marginTop: 20,
  },
  input: {
    flex: 0.8,
    padding: 15,
  },
});
