import "../styles/deleteModal.css";

function DeleteModal({

    open,
    title="Delete Video",
    message="Are you sure?",
    onCancel,
    onConfirm

}){

    if(!open) return null;

    return(

        <div className="modal-overlay">

            <div className="modal-box">

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="modal-actions">

                    <button
                        className="cancel-btn"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>

                    <button
                        className="delete-btn"
                        onClick={onConfirm}
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

}

export default DeleteModal;
