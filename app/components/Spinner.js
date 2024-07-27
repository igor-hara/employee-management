export const Spinner = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen w-full'>
        <div className='flex space-x-2 animate-pulse'>
          <div className='w-3 h-3 rounded-full bg-indigo-600 animate-pulse-ind1'></div>
          <div className='w-3 h-3 rounded-full bg-indigo-600 animate-pulse-ind2'></div>
          <div className='w-3 h-3 rounded-full bg-indigo-600 animate-pulse-ind3'></div>
        </div>
      </div>
    </div>
  );
};
