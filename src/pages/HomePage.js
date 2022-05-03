import InfiniteScroll from 'react-infinite-scroll-component';
import { HitsItem } from '../components/HitsItem/HitsItem';
import { HistLits } from '../components/HitsLits';
import { Navbar } from '../components/Navbar/Navbar';
import { Selector } from '../components/Selector/Selector';
import { useFilterName } from '../context/filterContext';

export function HomePage() {
  const { data, more, fetchMoreData } = useFilterName();

  return (
    <>
      <Navbar />
      <section className="container">
        <Selector />
      </section>
      <section className="container">
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={more}
          loader={<h4>Loading...</h4>}
        >
          <HistLits>
            {data.map((attributes) => (
              <HitsItem
                key={attributes.objectID}
                author={attributes.author}
                created_at={attributes.created_at}
                story_title={attributes.story_title}
                story_url={attributes.story_url}
              />
            ))}
          </HistLits>
        </InfiniteScroll>
      </section>
    </>
  );
}
