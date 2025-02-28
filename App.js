import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = ({ produto }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.productName}>{produto.nome}</Text>
        <Text style={styles.calories}>🔥 {produto.calorias} kcal</Text>
        <Text style={styles.productPrice}>R$ {produto.preco}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: produto.foto }} style={styles.productImage} />
      </View>
    </View>
  );
};

const ProductList = ({ produtos }) => {
  return (
    <View style={styles.productListContainer}>
      {produtos.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </View>
  );
};

const produtosData = [
  {
    id: 1,
    nome: "Pizza",
    preco: "15.90",
    foto: "https://free-images.com/lg/7f6e/food_pizza_slice_fast.jpg",
    calorias: 350,
  },
  {
    id: 2,
    nome: "Hambúrguer",
    preco: "18.90",
    foto: "https://free-images.com/lg/a05c/food_hamburger_burger_fast_0.jpg",
    calorias: 450,
  },
];

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Menu de Produtos</Text>
      <View style={styles.mainContainer}>
        <ProductList produtos={produtosData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2b2d42",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  mainContainer: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#edf2f4",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    width: "90%",
    alignItems: "center",
  },
  productListContainer: {
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  card: {
    width: "100%",
    height: 150,
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginRight: 15,
  },
  productName: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18,
  },
  calories: {
    fontSize: 14,
    marginBottom: 5,
    color: "#ff4500",
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f9a826",
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
    alignSelf: "center",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default App;
