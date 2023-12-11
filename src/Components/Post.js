import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PostList from './PostList'
import { useState } from 'react'
import { getList } from '../Redux/Reducer/Postlists';
function Post(){
  const [selector, setItemList] = useState(['no data']);

  const dispatch= useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getList());
        setItemList(response.payload || []); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <div>
<div style={{textAlign:"center", display: "flex", justifyContent:"space-evenly" }}>
        <div className="search-videoflag"></div>
      </div>
      <div className="Universite_component">
        <div className="Universite_card">
          {selector?.map((item) => (
            <PostList key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Post