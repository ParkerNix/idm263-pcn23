import close from '../../components/Assets/close.png'

export const AddPhoto = () => {

    return (
        <>
            {/* <div className="container" id="addPhoto"> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
       

            {/* MODAL TEST */}

                
            {/* <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div> */}

                
            <div class="modal-body" id="addPhotoBody">
                <img src={close} alt="close" className="closePhoto" data-bs-dismiss="modal"/>
                <div class="row">
                    <div className="col mb-2 mx-3 d-flex flex-column justify-content-center align-items-center" id="addPhotoModal">
                        <button id="gallery"><h1 className="h6 bold">Choose from gallery</h1></button>
                        <button id="takePhoto"><h1 className="h6 bold">Take a photo</h1></button>
                    </div>
                </div>
            </div>

                

            {/* </div> */}
            
    

        </>
     );
}