import { Link } from "react-router-dom";

export default function VideoCard() {
    return (
        <Link
            to="/watch/demo"
            style={{
                display: "block",
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                textDecoration: "none",
                color: "inherit"
            }}
        >
            <img
                src="https://picsum.photos/400/220"
                alt="thumbnail"
                style={{ width: "100%" }}
            />
            <div style={{ padding: "12px" }}>
                <h3>Sample Video</h3>
                <p>Sample Channel</p>
                <small>10K views</small>
            </div>
        </Link>
    );
}
