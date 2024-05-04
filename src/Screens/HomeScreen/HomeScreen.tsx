import React, {useEffect, useState} from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {Theme} from '../../Themes/Theme';
import AppBarHome from '../../Components/AppBarHome/AppBarHome';
import IconButton from '../../Components/IconButton/IconButton';
import CartScreen from '../CartScreen/CartScreen';
import {ITEM_TYPE} from '../../Utils/CommonTypes/ResponseItemType';
import {useDispatch} from 'react-redux';
function HomeScreen() {
  const [search, setSearch] = useState<string>('');
  const [newsData, setNewsData] = useState<any>(null);
  const URL =
    'https://newsapi.org/v2/everything?q=tesla&from=2024-02-21&sortBy=publishedAt&apiKey=7218a3a1ebd846af8eea24927e8dbbcc';
  useEffect(() => {
    const resopnse = () => {
      fetch(URL)
        .then(_res => {
          return _res.json();
        })
        .then(data => {
          setNewsData(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
    resopnse();
  }, [search]);

  const {width} = useWindowDimensions();
  const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refresh, setRefresh] = useState<boolean>(false);
  const onRefresh = () => {
    setRefresh(true);
    wait(2000).then(() => setRefresh(false));
  };

  const dispatch = useDispatch();
  const addInFav = (item: ITEM_TYPE) => {
    dispatch({type: 'IMC', data: 1});
  };

  return (
    <View style={styles.container}>
      <AppBarHome backgroundColor={Theme.colors.primary} />
      <View style={styles.InputContainer}>
        <View style={styles.inputTextWithIcon}>
          <IconButton
            color={Theme.colors.placeholder}
            name={'magnify'}
            size={24}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Search for Products, Brands and More"
            onChangeText={searchString => {
              setSearch(searchString);
            }}
          />
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <View style={styles.listContainer}>
          {newsData?.articles?.map((item: any) => {
            return (
              <View style={[styles.listItemStyle, {width: (width - 20) / 2}]}>
                <TouchableOpacity
                  onPress={() => {
                    addInFav(item);
                  }}>
                  <Image
                    style={styles.imageStyle}
                    resizeMode="cover"
                    source={{uri: item?.urlToImage}}
                    height={50}
                  />
                  <Text style={styles.listItemTextStyle}>{item?.author}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.imageStyle} />
      <CartScreen />
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Theme.colors.white},
  InputContainer: {
    backgroundColor: Theme.colors.primary,

    justifyContent: 'center',
  },
  inputTextWithIcon: {
    paddingLeft: 5,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    height: 40,
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 5,
    backgroundColor: Theme.colors.white,
  },
  inputText: {
    fontSize: 16,
    color: Theme.colors.placeholder,
    borderRadius: 8,
    paddingHorizontal: 2,
    backgroundColor: Theme.colors.white,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  listItemStyle: {
    // borderEndEndRadius: 10,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  listItemTextStyle: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: 'orange',
  },
  imageStyle: {
    height: 120,
  },
});
