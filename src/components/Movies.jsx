const Movies = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className='flex justify-center items-center mb-4'>
      <div className='w-1/3'>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          className='w-full'
        />
      </div>
      <div className='w-2/3'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p>{overview}</p>
        <p className='text-gray-700'>
          <span>{vote_average}</span>
        </p>
      </div>
    </div>
  );
};

export default Movies;
