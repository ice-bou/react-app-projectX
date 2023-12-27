import { useNavigate, useParams } from "react-router-dom"

const MovieProfil=({movies})=>{

    const {id} = useParams()
    const found = movies.find((el,i,t)=>el.id == id )
    const navigate = useNavigate()

    return (

<div>
 <h1>{found.title}</h1>
<h4>{found.type}</h4>
<h6>{found.description}</h6>
<iframe width="741" height="315" src="https://www.youtube.com/embed/HcoZbHBDHQA" title="INCEPTION - Bande Annonce Officielle (VF) - Leonardo DiCaprio / Christopher Nolan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br>
</br>
<br>
</br>
 <button onClick={()=>navigate('/')}>Home</button>

</div>
    )
}

export default MovieProfil