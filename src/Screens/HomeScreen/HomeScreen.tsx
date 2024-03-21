import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import {Theme} from '../../Themes/Theme';
import AppBarHome from '../../Components/AppBarHome/AppBarHome';
import IconButton from '../../Components/IconButton/IconButton';
function HomeScreen() {
  const [search, setSearch] = useState<string>('');
  const [newsData, setNewsData] = useState<any>(null);
  const URL =
    'https://newsapi.org/v2/everything?q=tesla&from=2024-02-13&sortBy=publishedAt&apiKey=7218a3a1ebd846af8eea24927e8dbbcc';
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
  }, []);
  console.log(newsData?.articles);

  const {width} = useWindowDimensions();
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
      <ScrollView>
        <View style={styles.listContainer}>
          {newsData?.articles.map((item: any) => {
            return (
              <View style={[styles.listItemStyle, {width: (width - 20) / 2}]}>
                <Image
                  style={{height: 100}}
                  resizeMode="cover"
                  source={{uri: item?.urlToImage}}
                  height={50}
                />
                <Text style={styles.listItemTextStyle}>{item?.author}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
  },
});
