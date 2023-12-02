import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from '../redux/actions/postActions'

export const Post = () => {

    const { loading, data, error } = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchPost('https://gauravgitacc.github.io/postAppData/posts.json'));
    }, [])

    return (
        <div>
            {
                (loading && <div className="loading-outer-circle">
                    <div className="loading-inner-circle"></div>
                </div>) ||
                (error && <h3>{error}</h3>) ||
                (
                    data && data.map(element =>
                        <div key={element.id}>
                            <h1>{element.title}</h1>
                            <p>{element.body}</p>
                            <hr />
                        </div>)
                )
            }
        </div>
    )
}