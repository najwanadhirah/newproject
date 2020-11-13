import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const products = [
  { _id: 1, name: 'Classic Chair', price: 200, quantity: 0, photo:  require('../pages/classic.png')},
  { _id: 2, name: 'Wooden Chair', price: 400, quantity: 0, photo: require('../pages/wooden.png')},
  { _id: 3, name: 'Office Chair', price: 600, quantity: 0, photo: require('../pages/office.png') },
];

class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    return (

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, marginBottom: 30 }}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <Image source={item.photo} style={{ width: "25%", height: 70, marginLeft: 40 }} />
          <Text style={{ color: "#fff", marginLeft: 40, marginTop: -20 }}>
            {item.name}
            {"\n"}
             RM {item.price} </Text>
        </View>


        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginLeft: 80 }}>
          <Button
            title="-"
            style={{ marginLeft: 10 }}
            onPress={this.props.onSubtract}
            color="#900C3F"
          />

          <Text style={{ marginLeft: 10, color: "#fff" }}>{item.quantity}</Text>
          <Button
            title="+"
            style={{ marginLeft: 20 }}
            onPress={this.props.onAdd}
            color="#900C3F"
          />
        </View>
      </View>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      dataBackup: products

    }
    this.FlatListItemSeparator = this.FlatListItemSeparator.bind(this);
  }

    FlatListItemSeparator = () => {
      return (
        //Item Separator
        <View
          style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
        // style={styles.cardLisiting}
        />
      );
    };
    onSubtract = (item, index) => {
      const products = [...this.state.products];
      products[index].quantity -= 1;
      this.setState({ products });
    }

    onAdd = (item, index) => {
      const products = [...this.state.products];
      products[index].quantity += 1;
      this.setState({ products });
    }

  filterList = (text) => {
    var newData = this.state.dataBackup;
    newData = this.state.dataBackup.filter((item) => {
      const itemData = item.name.toLowerCase()
      const textData = text.toLowerCase()
      return itemData.indexOf(textData) > -1
    });
    this.setState({
      query: text,
      products: newData 
    });
  }

  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

    return (
  
      <View style={styles.container}>
        <View style={styles.search}>
          {/* <TouchableOpacity
            style={{ width: "85%", flexDirection: 'row' }}
          > */}

            {/* <View > */}

              <TextInput
                style={styles.searchInput}
                placeholder="Search Here"
                underlineColorAndroid="transparent"
                value={this.state.query}
                onChangeText={(text) => this.filterList(text)}
              />
            {/* </View> */}
          {/* </TouchableOpacity> */}

        </View>


        <FlatList
          data={this.state.products}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item, index }) => (
            <View style={{ backgroundColor: '#900C3F', marginTop: 40, borderRadius: 30 }}>
              <ListItem
                item={item}
                onSubtract={() => this.onSubtract(item, index)}
                onAdd={() => this.onAdd(item, index)}
              />
            </View>
          )}

            keyExtractor={item => item._id}
        />

        <View style={{ backgroundColor: '#AC1851' }}>

          <Text style={{ marginLeft: 10, color: "#fff", marginTop: 10 }}>Total Quantity: {totalQuantity}</Text>
          <Text style={{ marginLeft: 10, color: "#fff" }}>Total Price: {totalPrice}</Text>

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 300,
    height: 170,
    marginTop: 90,
    marginLeft: 50
  },
  itemListing: {
    flexDirection: 'row',
    width: "100%",
  },
  textStyles: {
    fontFamily: "Helvetica",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 22.4,
    color: "grey",
    marginTop: 40,
    marginLeft: 60
  },
  input: {
    fontSize: 15,
    fontWeight: "bold",
    color: 'white',
    marginBottom: 15,
    paddingTop: 10
  },
  buttonContainer: {
    height: 50,
    alignItems: 'center',
    width: 200,
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 180
  },
  cardLisiting: {
    // width: "20%",
    height: "8%",
    //borderRadius: 100,
    backgroundColor: "white",
    // marginLeft: 60,
    // marginRight: 30,
    marginTop: 20
  },
  cardLisiting2: {
    width: "70%",
    height: "8%",
    borderRadius: 10,
    backgroundColor: "white",
    marginLeft: 60,
    marginRight: 30,
    marginTop: 10
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 130,
    fontFamily: "Helvetica",
  },
  userImg: {
    borderRadius: 100,
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.30,
    shadowRadius: 1,
    elevation: 9,
    marginTop: 70,
    marginLeft: 150,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: 'white'
  },
  invitee: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    width: "100%",
  },
  searchInput: {
    borderColor: 'white',
    borderWidth: 1,
    width: "100%",
    backgroundColor: 'white',
  },
  search: {
    flexDirection: 'row',
    width: "100%",
    backgroundColor: "white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default App;