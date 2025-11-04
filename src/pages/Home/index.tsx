import Hero from '../../components/Hero'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'
import SushiImg from '../../assets/images/sushi.png'
import MassaImg from '../../assets/images/lula.png'
import Food from '../../models/Food'

const foods = [
    new Food(1, 'Hioki Sushi', 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!', SushiImg,'Japonesa', true, 4.9),
    new Food(3, 'La Dolce Vita Trattoria', 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!', MassaImg,'Italiana', false, 4.6),
    new Food(2, 'La Dolce Vita Trattoria', 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!', MassaImg,'Italiana', false, 4.6),
    new Food(4, 'La Dolce Vita Trattoria', 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!', MassaImg,'Italiana', false, 4.6),
    new Food(5, 'La Dolce Vita Trattoria', 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!', MassaImg,'Italiana', false, 4.6),
    new Food(6, 'La Dolce Vita Trattoria', 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!', MassaImg,'Italiana', false, 4.6),
]

const Home = () => (
    <>
        <Hero />
        <div className="container">
            <FoodsList foods={foods} columns={2} gap={80} variant="home"/>
        </div>
        <Footer />
    </>
)

export default Home

