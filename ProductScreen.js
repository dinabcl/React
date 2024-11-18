import { FlatList, ScrollView, View } from "react-native";
import Product from "./Product";


class ProductScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            product: []
        }
    }
    componentDidMount(){
        this.setState({
            products: data
        })
    }
    render(){
        return(
            <ScrollView>
                <View style={style.container}>
                    <Text style={styles.title}>Top products of 2024</Text>
                    <FlatList data={this.state.products}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => {
                            <View>
                                <Product 
                                    name={item.name}
                                    category={item.category}
                                    price={item.price}
                                    stock={item.stock}
                                    img={item.image}
                                    desc={item.description}
                                
                                ></Product>
                            </View>
                        }}>
                        </FlatList>
                </View>
            </ScrollView>
            
        )
    }
}
export default ProductScreen;