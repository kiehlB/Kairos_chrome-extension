import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../../components/AppLayout';
import Header from '../../components/Base/Header';
import { RootState } from '../../store/store';
import SecondCard from './secondCard';

import SingleCard from './singleCard';
import ThridCard from './thirdCard';

function Home() {
  const isDarkToggle = useSelector((state: RootState) => state.activity.isDark);

  return (
    <div className='w-full dark:bg-gray-900 bg-white-m'>
      <AppLayout.MainNav>
        <Header title='Analytics Browser History' subTitle='Analytics' />
      </AppLayout.MainNav>
      <AppLayout
        first={<AppLayout.First>{<SingleCard />}</AppLayout.First>}
        // second={<AppLayout.Second>{<SecondCard />}</AppLayout.Second>}
        // third={<AppLayout.Third>{<ThridCard />}</AppLayout.Third>}
      />
    </div>
  );
}

export default Home;
