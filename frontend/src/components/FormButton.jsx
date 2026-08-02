import Button from "../components/Button";

function FormButton({
    children,
    type = "submit"
}) {
    return (
        <Button
            type={type}
        >
            {children}
        </Button>
    );
}

export default FormButton;
