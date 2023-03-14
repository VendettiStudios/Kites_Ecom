import cn from 'clsx';
import s from './Layout.module.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import {Footer, Navbar } from '@components/common';

interface Props {
  pageProps: {
    //   pages?: Page[]
    //   categories: Category[]
  };
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { locale = 'en-US' } = useRouter();

  return (
    <div className={cn(s.root)}>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
