import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {Theme} from '../../Themes/Theme';
import {useSelector} from 'react-redux';
function CartScreen() {
  const {width} = useWindowDimensions();

  const favItem = useSelector((state: any) => state);

  console.log('hellow', favItem);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.listContainer}>
          {[]?.map((item: any) => {
            return (
              <View style={[styles.listItemStyle, {width: (width - 20) / 2}]}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('Added success');
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
    </View>
  );
}

export default CartScreen;
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
