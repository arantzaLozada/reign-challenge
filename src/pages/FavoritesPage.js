import { Navbar } from '../components/Navbar/Navbar';
import { useFilterName } from '../context/filterContext';

import heartIconLiked from '../assets/heart-icon-liked.svg';
import time from '../assets/time.svg';

export function FavoritesPage() {
  const { post } = useFilterName();

  return (
    <>
      <Navbar />
      <section className="container">
        <ul
          style={{
            marginTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {post.map((attributes, index) => (
            <li key={index} className="hits-container">
              <a href={attributes.story_url}>
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
                    {attributes.created_at} by {attributes.author}
                  </small>
                  <span className="tittle">{attributes.story_title}</span>
                </div>
              </a>
              <div className="like">
                <button
                  style={{ border: 'none', cursor: 'pointer' }}
                  // onClick={submit}
                >
                  {attributes.liked && (
                    <img src={heartIconLiked} alt="heartIconLiked" />
                  )}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
