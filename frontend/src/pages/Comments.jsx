import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Comments() {
    const {
        videoId
    } = useParams();

    const [comments, setComments] = useState([]);
    const [text, setText] = useState("");

    const loadComments = async () => {
        const response = await api.get(
            `/comments/${videoId}`
        );

        setComments(response.data);
    };

    useEffect(() => {
        loadComments();
    }, []);

    const addComment = async (e) => {
        e.preventDefault();

        await api.post(
            "/comments",
            {
                video: videoId,
                text
            },
            {
                headers: {
                    Authorization:
                        `Bearer ${localStorage.getItem("token")}`
                }
            }
        );

        setText("");

        loadComments();
    };

    return (
        <div>
            <h2>
                Comments
            </h2>

            <form onSubmit={addComment}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write comment"
                />

                <button>
                    Add Comment
                </button>
            </form>

            {
                comments.map((comment) => (
                    <div key={comment._id}>
                        <strong>
                            {comment.user?.username}
                        </strong>

                        <p>
                            {comment.text}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default Comments;
