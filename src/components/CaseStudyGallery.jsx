import { useRef, useState } from 'react';
import { Maximize2, X, Images } from 'lucide-react';

import './case-study-gallery.css';

function CaseStudyGallery({ images }) {
  const dialogRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
    dialogRef.current?.showModal();
  };

  const closeImage = () => {
    dialogRef.current?.close();
  };

  return (
    <section className='cs-gallery-section' aria-labelledby='cs-gallery-title'>
      <div className='cs-gallery-heading'>
        <span className='case-study-section-label'>05 / EL PRODUCTO</span>

        <div className='cs-gallery-heading-main'>
          <div>
            <h2 id='cs-gallery-title'>La aplicación por dentro.</h2>

            <p>
              Un recorrido visual por las principales funcionalidades del
              proyecto.
            </p>
          </div>

          <span className='cs-gallery-count'>
            <Images size={16} />
            {images.length} capturas
          </span>
        </div>
      </div>

      <div className='cs-gallery-grid'>
        {images.map((image, index) => (
          <article className='cs-gallery-card' key={image.src}>
            <button
              type='button'
              className='cs-gallery-preview'
              onClick={() => openImage(image)}
              aria-label={`Ampliar ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading='lazy'
                decoding='async'
              />

              <span className='cs-gallery-expand'>
                <Maximize2 size={17} />
                Ampliar
              </span>
            </button>

            <div className='cs-gallery-card-content'>
              <span className='cs-gallery-number'>
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className='cs-gallery-modal'
        aria-label={selectedImage?.title || 'Vista ampliada del proyecto'}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeImage();
          }
        }}
      >
        {selectedImage && (
          <div className='cs-gallery-modal-inner'>
            <div className='cs-gallery-modal-header'>
              <div>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>

              <button
                type='button'
                onClick={closeImage}
                aria-label='Cerrar imagen ampliada'
                className='cs-gallery-close'
              >
                <X size={22} />
              </button>
            </div>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='cs-gallery-modal-image'
            />
          </div>
        )}
      </dialog>
    </section>
  );
}

export default CaseStudyGallery;
