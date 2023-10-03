import React from 'react'
import { Person } from '../types/Person'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { useAppSelector } from '../store/hooks';

// type Props = {
//   posts: Person[],
// }

const Component = () => {
  const { posts, loading}  = useAppSelector(state => state.stateObj);


  return (
    <div>
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
