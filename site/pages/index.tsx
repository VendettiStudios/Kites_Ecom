import Layout from '@components/common/Layout/Layout';
import Carousel from '@components/ui/Carousel/Carousel';

const Home = () => {
  const images = ['/image1.jpeg', '/image2.jpeg', '/image3.jpeg'];

  return (
    <>
      <Carousel images={images} />
    </>
  );
};

Home.Layout = Layout;

export default Home;
