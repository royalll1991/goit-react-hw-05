import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
 
  Modal.setAppElement('#root');
  
  function  ImageModal({image, modalIsOpen, closeModal}) {
    let subtitle;
   
  
   
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    
  
    return (
      <div onClick={closeModal}>
        
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <div >
          {image && (
          <img
            
            src={image.urls.regular}
            alt={image.description}
            
          />
        )}
        <p>likes {image.likes}</p>
      </div>
        </Modal>
      </div>
    );
  }
  
  export default ImageModal;