import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="rgba(228, 72, 72, 1)"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ marginTop: '40px' }}
      wrapperClass=""
    />
  );
};

export default Loader;
