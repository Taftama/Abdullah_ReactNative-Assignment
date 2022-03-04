import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getPosts} from '../redux/actions';
import Card from '../shared/Card';
import {globalStyles} from '../shared/Styles';
import {colors} from '../shared/Colors';
const {width} = Dimensions.get('screen');
export default function Home() {
  const navigation = useNavigation();
  const {posts} = useSelector(state => state.getPostReducer);
  const dispatch = useDispatch();
  const fetchPosts = () => dispatch(getPosts());
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={globalStyles.container}>
                <Card>
                  <Text style={globalStyles.titleText}> Title</Text>
                  <Text style={{fontSize: 20, color: colors.Anthracite}}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      borderStyle: 'dashed',
                      borderWidth: 1,
                      borderRadius: 1,
                      borderColor: 'rgba(161,155,183,1)',
                    }}
                  />
                  <View
                    style={{
                      marginHorizontal: 20,
                    }}>
                    <Text style={globalStyles.titleText}> Body</Text>
                    <View style={{margin: 20}}>
                      <Text style={globalStyles.paragraph}>{item.body}</Text>
                    </View>
                  </View>
                </Card>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('NewPost')}
          style={styles.button}>
          <Text style={styles.buttonText}>Create New Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
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
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginLeft: 40,
    fontFamily: 'Roboto-Bold',
    marginRight: 40,
  },
});
