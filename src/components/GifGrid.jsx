//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  //getGifs(category);
  //Uso de custom hook para reemplazar el codigo comentado
  const {images, isLoading} = useFetchGifs(category)


  // const [images, setImages] = useState([])

  // const getImages = async() => {
  //   const newImages = await getGifs(category)
  //   setImages(newImages)
  // }

  // useEffect(() => {
  //   getImages()
  // }, []);



  return (
    <>
      <h3>{category}</h3>

    <div className="card-grid">
    {
      images.map((image) => ( 
        <GifItem 
        key={image.id}
        // esparcir propiedades de image 
        {...image} />
      ))
    }
    </div>
    </>
  );
};
