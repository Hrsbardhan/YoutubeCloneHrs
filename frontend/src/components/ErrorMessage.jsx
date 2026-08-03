function ErrorMessage({message}){

    if(!message) return null;

    return(

        <div
            style={{
                background:"#ffe5e5",
                color:"#b00020",
                padding:"12px",
                marginBottom:"16px",
                borderRadius:"6px"
            }}
        >
            {message}
        </div>

    );

}

export default ErrorMessage;
