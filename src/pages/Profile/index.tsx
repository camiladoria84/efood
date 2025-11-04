import Header from '../../components/Header'
import RestaurantBanner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'
import PizzaImg from '../../assets/images/pizza.png'
import Food from '../../models/Food'

const foods = [
    new Food(1, 'Pizza Marguerita' ,'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', PizzaImg),
    new Food(2, 'Pizza Marguerita','A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', PizzaImg),
    new Food(3, 'Pizza Marguerita','A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', PizzaImg),
    new Food(4, 'Pizza Marguerita','A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', PizzaImg),
    new Food(5, 'Pizza Marguerita','A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', PizzaImg),
    new Food(6, 'Pizza Marguerita', 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!', PizzaImg),
]

const Profile = () => (
    <>
        <Header />
        <RestaurantBanner /> 
        <div className="container">
            <FoodsList foods={foods} columns={3} gap={40} variant="profile"/>
        </div>
        <Footer />
    </>
)

export default Profile