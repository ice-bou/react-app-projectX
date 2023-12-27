import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = ()=>{
    const navigate = useNavigate()
    return (
        <div>
       <Image src="https://www.dignited.com/wp-content/uploads/2020/04/movie-streaming.jpg" fluid />
       <br>
       </br>
       <Button onClick={()=>navigate('/Listmovies')} variant="outline-info" >Go to my List Movies</Button>{' Have a Click ! '}
        </div>
    )
}
export default Home