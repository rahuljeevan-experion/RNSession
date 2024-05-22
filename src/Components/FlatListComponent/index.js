import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import data from '../../utils/data.json';
const {products} = data;

const FlatListComponent = () => {
  const _renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.card}>
        <Image style={styles.img} source={{uri: item?.thumbnail}} />
        <Text style={styles.text}>{item?.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, i) => i?.toString()}
        data={products}
        renderItem={_renderItem}
        ListFooterComponent={<View style={{}} />}
      />
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  card: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  text: {
    marginLeft: 20,
  },
});
