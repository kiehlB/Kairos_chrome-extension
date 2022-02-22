import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../../components/AppLayout';
import Header from '../../components/Base/Header';
import { BubbleChart } from '../../components/BubbleChart';
import Card from '../../components/Card';
import Scales from '../../components/Chart';
import Transition from '../../components/Chart';
import { LineChart } from '../../components/LineChart';

import Axis from '../../components/Chart';
import { CountUp, DurationCountUp } from '../../components/Count';

import DateRangePicker, { TRANSITION_DELAY } from '../../components/DatePicker';

import {
  getRatioToTotalDuration,
  getSelectedDomainRatioToTotalDuration,
  getSelectedDomainTotalDuration,
} from '../../store/activity/selectors';
import { RootState } from '../../store/store';
import SecondCard from './secondCard';

import SingleCard from './singleCard';
import { HorizontalChart } from '../../components/HorizontalChart';

const TotalUsage = ({
  className,
  sort,
  title,
  info,
  footer,
  data,
  formattingFn,
  formattingUnitFn,
}) => {
  return (
    <div className={className}>
      <Card
        sort={sort}
        title={title}
        info={info}
        footer={footer}
        body={
          <div>
            <CountUp
              start={0}
              end={data}
              decimals={2}
              duration={TRANSITION_DELAY / 1000}
              formattingFn={formattingFn}
              formattingUnitFn={formattingUnitFn}
              preserveValue={true}
              redraw={true}
            />
          </div>
        }
      />
    </div>
  );
};

function ThridCard() {
  const test = useSelector((state: RootState) =>
    getSelectedDomainRatioToTotalDuration(state)
  );

  const totalTime = useSelector((state: RootState) =>
    getRatioToTotalDuration(state)
  );

  const totalTimeRangeCardInfo = {
    title: 'Total Usage',
    info: 'Total time spent on the website',
    footer: 'vs. previous month',
    sort: 'single',
    data: totalTime * 100,
    formattingFn: (d: number) => `${d.toFixed(2)}`,
    formattingUnitFn: () => '%',
  };
  return (
    <>
      <div className='flex h-card px-8 mt-4'>
        <div className='border-2 w-tcard mr-4'>
          <BubbleChart />
        </div>
        <div className='border-2 w-tcard mr-4'>
          <LineChart />
        </div>
        <div className='border-2 w-tcard'>
          <HorizontalChart />
        </div>
      </div>
    </>
  );
}

export default ThridCard;