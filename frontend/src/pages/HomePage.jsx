import VideoCard from "../components/video/VideoCard";

export default function HomePage() {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
                gap: "20px"
            }}
        >
            {Array.from({ length: 12 }).map((_, index) => (
                <VideoCard key={index} />
            ))}
        </div>
    );
}
