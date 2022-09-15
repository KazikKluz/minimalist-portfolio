import Navbar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';
import Cta from '../cta/cta.component';

type Props = {
  children?: JSX.Element;
};

import styles from './layout.module.scss';

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <Cta />
      <Footer />
    </div>
  );
};

export default Layout;
