import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';

const GlassBg = styled.div`
  width: 90%;
  margin: 10px auto;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
    margin: 0 auto;
  }
`;

const PickerWrap = styled(GlassBg.withComponent('div'))`
  position: absolute;
  top: 75px;
  left: 73px;
  background: rgba(255, 255, 255, 0.45);
  width: 200px;
  z-index: 2;

  p {
    margin-top: 10px;

    @media ${({ theme }) => theme.mobile} {
      margin: 0;
      padding: 5px;
      font-size: 0.8rem;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    width: 150px;
    top: -88px;
    left: 0px;
    background: rgba(255, 255, 255, 0.8);
  }
`;

const Month = styled(GlassBg.withComponent('div'))`
  ${flexSet('space-around', 'center')}
  flex-wrap: wrap;
  width: 180px;
  padding: 5px;

  span {
    width: 55px;
    padding: 5px;

    @media ${({ theme }) => theme.mobile} {
      width: 40px;
    }
  }

  @media ${({ theme }) => theme.mobile} {
    width: 140px;
  }
`;

const ActiveMonth = styled.span`
  color: #fff !important;
  font-weight: bold;
  background: #216ba5;
  border-radius: 10px;
`;

const MONTH = new Array(12).fill(1).map((el, idx) => idx + 1);
const today = new Date();

export default function MonthRangePicker({ getWorkPeriod }) {
  const [startMonth, SetStartMonth] = useState('');
  const [endMonth, SetEndMonth] = useState('');
  const monthNode = useRef('');

  // const handlePrevBtn = () => {};

  // const handleNextBtn = () => {};

  useEffect(() => {
    getWorkPeriod(startMonth - 1, endMonth - 1);
  }, [startMonth, endMonth]);

  const mouseOverHandler = idx => {
    const monthList = monthNode.current.childNodes;
    if (startMonth) {
      for (let i = startMonth; i < idx + 1; i++) {
        monthList[i].style.color = '#216ba5';
      }
    }
  };

  const mouseLeaveHandler = () => {
    const monthList = monthNode.current.childNodes;
    for (let i = 0; i < monthList.length; i++) {
      monthList[i].style = '';
    }
  };

  const getMonth = idx => {
    if (today.getMonth() >= idx - 1) {
      alert('당월 이후로 선택해주세요');
      return;
    }
    if (!startMonth) {
      SetStartMonth(idx);
    } else if (startMonth < idx) {
      SetEndMonth(idx);
    }
    if (startMonth < idx < endMonth) {
      SetEndMonth(idx);
    }
    if (idx < startMonth) {
      SetStartMonth(idx);
    }

    if (idx === startMonth) {
      SetStartMonth('');
    }
    if (idx === endMonth) {
      SetEndMonth('');
    }
  };

  return (
    <PickerWrap>
      <div>
        <p>{today.getFullYear()}</p>
        {/* <div>
          <p className="prev" onClick={handlePrevBtn}>
            <i className="fas fa-chevron-left" />
          </p>
          <p className="next" onClick={handleNextBtn}>
            <i className="fas fa-chevron-right" />
          </p>
        </div> */}
      </div>
      <Month ref={monthNode}>
        {MONTH.map((month, idx) => {
          return (
            <span
              key={idx}
              onMouseOver={() => mouseOverHandler(idx)}
              onMouseLeave={mouseLeaveHandler}
              onClick={() => getMonth(idx + 1)}
            >
              {month === startMonth || month === endMonth ? (
                <ActiveMonth>{`${month}월`}</ActiveMonth>
              ) : (
                `${month}월`
              )}
            </span>
          );
        })}
      </Month>
    </PickerWrap>
  );
}
