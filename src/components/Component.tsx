
import { useAppSelector } from '../store/hooks';

const Component = () => {
  const { posts, loading, error}  = useAppSelector(state => state.stateObj);


  return (
    <div>
      {error && <p>Something went wrong</p>}
      {loading ? (<p>Loading...</p>) : (
        <>
          <h1>This is Redux:</h1>
          <ul>
            {posts.map(post => (
              <li key={post.slug}>{post.name}</li>
            ))}
          </ul>
        </>
      )}
      
    </div>
  )
}

export default Component
