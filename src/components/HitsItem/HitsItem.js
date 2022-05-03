import { useState } from 'react';

import heartIcon from '../../assets/heart-icon.svg';
import heartIconLiked from '../../assets/heart-icon-liked.svg';
import time from '../../assets/time.svg';

import './hitsItem.css';
import { useFilterName } from '../../context/filterContext';

export function HitsItem(props) {
  const { post, setPost } = useFilterName();

  const [liked, setLiked] = useState(false);

  const submit = () => {
    setLiked(!liked);

    const newtodos = [...post];
    newtodos.push({
      author: props.author,
      story_title: props.story_title,
      story_url: props.story_url,
      created_at: props.created_at,
      liked: true,
    });
    setPost(newtodos);
  };

  if (
    props.story_url &&
    props.created_at &&
    props.author &&
    props.story_title !== null
  ) {
    return (
      <>
        <li className="hits-container">
          <a href={props.story_url}>
            <div className="hits-title">
              <small className="author">
                <img
                  style={{
                    width: '16px',
                    height: '16px',
                    marginBottom: '-4px',
                    marginRight: '5px',
                  }}
                  src={time}
                  alt="time"
                />
                {props.created_at} by {props.author}
              </small>
              <span className="tittle">{props.story_title}</span>
            </div>
          </a>
          <div className="like">
            <button
              style={{ border: 'none', cursor: 'pointer' }}
              onClick={submit}
            >
              {liked ? (
                <img src={heartIconLiked} alt="heartIconLiked" />
              ) : (
                <img src={heartIcon} alt="heartIcon" />
              )}
            </button>
          </div>
        </li>
      </>
    );
  }
}
