import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../../components/AppLayout';
import Header from '../../components/Base/Header';

import Card from '../../components/Card';
import { CountUp, DurationCountUp } from '../../components/Count';

import DateRangePicker, { TRANSITION_DELAY } from '../../components/DatePicker';

import {
  getRatioToTotalDuration,
  getSelectedDomainRatioToTotalDuration,
  getSelectedDomainTotalDuration,
} from '../../store/activity/selectors';

import { LineChart } from '../../components/LineChart';
import { BubbleChart } from '../../components/BubbleChart';
import { HorizontalChart } from '../../components/HorizontalChart';
import { useWindowSize } from '../../hooks/useWindowSize';

function ThridCard() {
  const { width } = useWindowSize();
  return (
    <>
      {width > 1341 ? (
        <>
          <div className='flex h-card px-8 mt-4 m2xl:hidden bg-white-m   dark:bg-slate-900  mmax:pb-4 '>
            <div className='shadow-md  rounded-md w-tcard mr-3 bg-white dark:bg-slate-900 dark:shadowmd  dark:border-2'>
              <BubbleChart />
            </div>
            <div className='shadow-md  rounded-md w-tcard mr-3 bg-white  dark:bg-slate-900 dark:shadowmd  dark:border-2'>
              <LineChart />
            </div>
            <div className='shadow-md  rounded-md w-tcard  bg-white  dark:bg-slate-900 dark:shadowmd  dark:border-2'>
              <HorizontalChart />
            </div>
          </div>
        </>
      ) : (
        <div className='bg-white-m dark:bg-slate-900'>
          <div className='flex h-card px-8 first-letter: mmd:px-4 xxl:hidden dark:bg-slate-900   mmax:pb-4   '>
            <div className='shadow-md  rounded-md w-fcard    mt-4 bg-white  dark:bg-slate-900 dark:shadowmd  dark:border-2'>
              <BubbleChart />
            </div>
          </div>
          <div className='flex h-card px-8 mt-4 mmd:px-4 xxl:hidden bg-white-m dark:bg-slate-900'>
            <div className='shadow-md  rounded-md w-fcard  bg-white dark:bg-slate-900 dark:shadowmd  dark:border-2'>
              <LineChart />
            </div>
          </div>
          <div className='flex h-card px-8 mt-4 mmd:px-4 xxl:hidden bg-white-m dark:bg-slate-900'>
            <div className='shadow-md  rounded-md w-fcard bg-white dark:bg-slate-900 dark:shadowmd  dark:border-2'>
              <HorizontalChart />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ThridCard;
