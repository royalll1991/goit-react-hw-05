import  { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import { searchImage } from '../../serch-image';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';


function App() {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSubmit = async (query, page) => {
        try {
            setIsLoading(true);
            setError(false);
            if (page === 1) {
                setImages([]); }
            const data = await searchImage(query, page);
            setImages(prevImages => [...prevImages, ...data.results]);
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLoadMore = () => {
      setPage(page + 1);
   };

    useEffect(() => {
        if (!query) {
            return;
        }
        handleSubmit(query,page);
    }, [query,page]);

     function openModal(image) {
        setSelectedImage(image);
        console.log(image)
        setIsOpen(true);
    }

      function closeModal() {
        setIsOpen(false);
      }

    return (
        <div>
            <SearchBar onSubmit={setQuery} />
            {error && <ErrorMessage />}
            {images.length > 0 && <ImageGallery images={images} onClick={openModal} />}
            {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
            {isLoading && <Loader />}
            {modalIsOpen && selectedImage &&<ImageModal 
           image={selectedImage}
           modalIsOpen={modalIsOpen} 
           closeModal={closeModal}/>}
        </div>
    );
}

export default App;
