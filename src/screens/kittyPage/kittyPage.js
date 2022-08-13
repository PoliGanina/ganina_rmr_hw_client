import axios from "axios"

const KittyPage = () => {
    return (
        <>
         <Kitty/> :
        </>
    )
}

const Kitty = async () => {
     const res = await axios.get('/api/v1/kitty').json();
        const kittyUrl = res.data.src;
      
    return (
        <img src={kittyUrl} alt='the Cat'/>
    )
}

export default KittyPage;