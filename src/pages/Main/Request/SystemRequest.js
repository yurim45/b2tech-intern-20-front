import React, { useState, useEffect, useRef } from 'react';
import MonthRangePicker from '../../../components/MonthPicker/MonthRangePicker';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';
import RequestButton from '../../../components/RequestButton';
import { useHistory } from 'react-router-dom';
import { GET_API } from '../../../config';

const ButtonInfo = styled.div`
  text-align: center;

  @media ${({ theme }) => theme.mobile} {
  }
`;

const InfoPicker = styled.div`
  ${flexSet('space-around', 'center')}
  margin: 20px;

  @media ${({ theme }) => theme.mobile} {
    margin: 10px 0;
    font-size: 0.6rem;
  }
`;

const Title = styled.div`
  margin-right: 30px;
  padding: 10px 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;

  @media ${({ theme }) => theme.mobile} {
    margin-right: 5px;
    padding: 5px;
    width: 150px;
  }
`;

const SystemWrap = styled.ul`
  ${flexSet('space-around', 'center')}
  width: 200px;
  padding: 5px 0;

  input {
    margin-right: 5px;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
  }
`;

const MAPPING_OBJ = {
  1: '31',
  2: '28',
  3: '31',
  4: '30',
  5: '31',
  6: '30',
  7: '31',
  8: '31',
  9: '30',
  10: '30',
  11: '30',
  12: '31',
};

const SYSTEM_ARR = ['8시', '9시', '10시'];

const today = new Date();

export default function SystemRequest({ myInfo }) {
  const [over, setOver] = useState(false);
  const [workPeriod, setWorkPeriod] = useState({});
  const [systemType, setSystemType] = useState('');
  const monthNode = useRef('');
  const history = useHistory();

  const goToMyPage = e => {
    e.stopPropagation();
    history.push(`/page`);
  };

  useEffect(() => {
    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside);
  }, []);

  const clickOutside = e => {
    if (!monthNode.current.contains(e.target)) {
      setOver(false);
    }
  };

  const clickOver = e => {
    e.stopPropagation();
    setOver(true);
  };

  const getWorkPeriod = (startMonth, endMonth) => {
    setWorkPeriod({ startMonth: startMonth, endMonth: endMonth });
  };

  const workSystemRequest = () => {
    if (systemType && workPeriod.startMonth) {
      getWorkPeriod();
      alert(
        `${workPeriod.startMonth + 1}월 ~ ${workPeriod.endMonth + 1}월까지 ${
          systemType.el
        } 근무제가 신청되었습니다.`
      );
    } else {
      alert('시차근무제의 기간과 종류를 선택해주세요.');
    }

    const accessToken = localStorage.getItem('AUTHORIZATION');
    fetch(`${GET_API}/users/${myInfo.employee_number}/drafts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: accessToken,
      },
      body: JSON.stringify({
        Authorization: accessToken,
        type: '시차출퇴근제',
        start_at: `${today.getFullYear()}-${workPeriod.startMonth + 1}-1`,
        end_at: `${today.getFullYear()}-${workPeriod.endMonth + 1}-${
          MAPPING_OBJ[workPeriod.endMonth + 1]
        }`,
        description: systemType.el,
      }),
    })
      .then(response => response.json())
      .then(data => {});
  };

  return (
    <>
      <ButtonInfo>
        <InfoPicker>
          <Title
            ref={monthNode}
            // onMouseOver={() => setOver(true)}
            onClick={e => clickOutside(e)}
            onClick={clickOver}
          >
            {workPeriod.endMonth
              ? `${workPeriod.startMonth + 1}월 ~ ${workPeriod.endMonth + 1}월`
              : '기간을 선택하세요'}
            &nbsp;&nbsp;
            <i className="far fa-calendar-check" />
          </Title>

          <div ref={monthNode}>
            {over && <MonthRangePicker getWorkPeriod={getWorkPeriod} />}
          </div>
          <SystemWrap>
            {SYSTEM_ARR.map((el, idx) => {
              return (
                <li key={idx}>
                  <input
                    type="radio"
                    name="workingSystem"
                    onChange={() => setSystemType({ el })}
                  />
                  {el}
                </li>
              );
            })}
          </SystemWrap>
        </InfoPicker>
        <RequestButton value="My page" onClick={goToMyPage} />
        <RequestButton value="등록" onClick={workSystemRequest} />
      </ButtonInfo>
    </>
  );
}
