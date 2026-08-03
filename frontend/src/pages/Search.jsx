import { useEffect, useState } from "react";
import api from "../services/api";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Search() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        if (!query.trim()) {

            setResults([]);

            return;

        }

        const timer = setTimeout(searchVideos,300);

        return ()=>clearTimeout(timer);

    }, [query]);

    const searchVideos = async () => {

        setLoading(true);

        try {

            const { data } = await api.get(
                `/search?query=${encodeURIComponent(query)}`
            );

            setResults(data);

            setError("");

        } catch {

            setError("Search failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div>

            <input
                placeholder="Search videos..."
                value={query}
                onChange={e=>setQuery(e.target.value)}
            />

            {loading && <Loading />}

            {error && <ErrorMessage message={error} />}

            {
                results.map(video=>(
                    <VideoCard
                        key={video._id}
                        video={video}
                    />
                ))
            }

        </div>

    );

}

export default Search;
