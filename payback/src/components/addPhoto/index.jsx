export const AddPhoto = () => {

    return (
        <>
        <div className="container">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <div class="container mt-3">

            {/* MODAL TEST */}
  
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                Open modal
            </button>
            </div>


            <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                
                <div class="modal-body">
                <div class="row">
                            <div className="col mt-4 mb-2 mx-3 d-flex flex-column justify-content-center align-items-center">
                            <button id="gallery"><h1 className="h6 bold">Choose from gallery</h1></button>
                            <button id="takePhoto"><h1 className="h6 bold">Take a photo</h1></button>
                            </div>
                        </div>
                </div>

                

                </div>
            </div>
            </div>

        {/* <button type="button" class="btn-close" id="closeButton" aria-label="close"></button> */}
            <div class="row">
                <div className="col mt-4 mb-2 mx-3 d-flex flex-column justify-content-center align-items-center">
                   <button id="gallery"><h1 className="h6 bold">Choose from gallery</h1></button>
                   <button id="takePhoto"><h1 className="h6 bold">Take a photo</h1></button>
                </div>
            </div>


            
        </div>

            </>
         );
    }