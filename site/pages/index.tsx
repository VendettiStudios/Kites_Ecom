import Layout from '@components/common/Layout/Layout';
import Carousel from '@components/ui/Carousel/Carousel';

const Home = () => {
  const images = ['https://imagedelivery.net/e7e7f778-4180-494b-5282-1ceeb7284b00/public', 'https://imagedelivery.net/1e3b0096-4213-4861-0c33-eec23d8df700/public', 'https://imagedelivery.net/5e4e6bf8-6280-4410-57fe-b59e4341c600/public'];

  return (
    <>
      <Carousel images={images} />
    </>
  );
};

Home.Layout = Layout;

export default Home;
