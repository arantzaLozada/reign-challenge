import heartIcon from '../../assets/heart-icon.svg';
import time from '../../assets/time.svg';
import './hitsItem.css';

export function HitsItem(props) {
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
            <img src={heartIcon} alt="heartIcon" />
          </div>
        </li>
      </>
    );
  }
}
