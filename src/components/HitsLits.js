export function HistLits({ children }) {
  return (
    <>
      <ul
        style={{
          marginTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {children}
      </ul>
    </>
  );
}
