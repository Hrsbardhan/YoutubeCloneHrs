import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Card from "../components/Card";

function Comments() {

    const {
        videoId
    } = useParams();

    const [comments, setComments] = useState([]);

    const [text, setText] = useState("");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    const loadComments = async () => {

        try {

            const response = await api.get(
                `/comments/${videoId}`
            );

            setComments(response.data);

        } catch (error) {

            setError(
                "Unable to load comments"
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        loadComments();

    }, [videoId]);


    const addComment = async (e) => {

        e.preventDefault();


        try {

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


        } catch (error) {

            setError(
                "Unable to add comment"
            );

        }

    };


    if (loading) {

        return <Loading />;

    }


    return (

        <div>

            {
                error &&
                <ErrorMessage
                    message={error}
                />
            }


            <form onSubmit={addComment}>

                <textarea
                    value={text}
                    placeholder="Write comment"
                    onChange={(e) =>
                        setText(e.target.value)
                    }
                />


                <button>
                    Add Comment
                </button>

            </form>


            {
                comments.map((comment) => (

                    <Card key={comment._id}>

                        <h4>
                            {comment.user?.username}
                        </h4>


                        <p>
                            {comment.text}
                        </p>

                    </Card>

                ))
            }

        </div>

    );
}

export default Comments;
