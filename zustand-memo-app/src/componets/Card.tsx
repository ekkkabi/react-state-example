const Card = () => {
  return (
    <div>
      <div
        style={{
          width: '500px',
          height: '30px',
          backgroundColor: '#38383D',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <div />
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#FE5E57',
            borderRadius: '50px',
          }}
        />
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#FEBB2C',
            borderRadius: '50px',
          }}
        />
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#27C840',
            borderRadius: '50px',
          }}
        />
      </div>
      <div style={{ width: '500px', height: '700px', backgroundColor: '#efefef' }} />
    </div>
  );
};
export default Card;
