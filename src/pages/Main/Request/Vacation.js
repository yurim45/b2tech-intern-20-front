import React, { useState, useEffect, useRef } from 'react';
import DatePickerComponent from '../../../components/DatePicker/Datepicker';
import styled from 'styled-components';
import { flexSet } from '../../../styles/Variable';
import RequestButton from '../../../components/RequestButton';

const GlassBg = styled.div`
  width: 90%;
  margin: 10px auto;
  background: rgba(255, 255, 255, 0.45);
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

const ButtonInfo = styled.div`
  position: absolute;
  top: 75px;
  right: 22px;
`;

const Info = styled.div`
  ${flexSet('flex-end', 'center')}
  width: 94%;
  margin: 10px;
`;

const InfoPicker = styled.div`
  ${flexSet('space-around', 'center')}
  width: 375px;

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
    font-size: 0.6rem;
  }
`;

const FilterBar = styled.ul`
  ${flexSet('space-around', 'center')}
  width: 345px;
  padding: 5px 0;
`;

const VacationName = styled.li`
  margin: 10px 4px;
  padding: 4px 10px;
  border-radius: 20px;

  &:hover {
    background: rgba(222, 239, 255, 0.6);
  }
`;

const DropBar = styled.ul`
  position: absolute;
  top: 52px;
  width: 150px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 1em 0.1px lightgray;
  z-index: 1;
`;

const VacationInfo = styled(GlassBg.withComponent('p'))`
  ${flexSet('center', 'center')}
  width: 145px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);

  @media ${({ theme }) => theme.mobile} {
    width: 80px;
    height: 30px;
    font-size: 0.7rem;
  }
`;

const Input = styled(GlassBg.withComponent('input'))`
  width: 345px;
  height: 40px;
  font-size: 0.8rem;

  @media ${({ theme }) => theme.mobile} {
    width: 140px;
    height: 30px;
    font-size: 0.7rem;
  }
`;

const VACATION_ARR = ['연차', '반차', '공가', '경조'];

export default function Vacation() {
  const [over, setOver] = useState(false);
  const [periodData, setPeriodData] = useState({});
  const [vacationValue, setVacationValue] = useState('');

  const handlePeriod = (startDate, endDate) => {
    if (startDate <= endDate) {
      setPeriodData({ startDate: startDate, endDate: endDate });
    }
  };

  const vacationRequest = () => {
    if (vacationValue) {
      handlePeriod();
      alert(
        `${periodData.startDate}~${periodData.endDate}기간에 ${vacationValue.el}가 신청되었습니다.`
      );
    } else {
      alert('휴가 종류를 선택해주세요.');
    }

    // fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     startDate: startDate,
    //     endDate: endDate,
    //   }),
    // })
    // .then(response => response.json())
    // .then(eperioddata => {
    //   setPeriodData(perioddata.results);
    // });
    // .then(result => {
    //   result.access_token &&
    //     localStorage.setItem('access_token', result.access_token);
    //})
  };

  return (
    <>
      <section>
        <ButtonInfo>
          <RequestButton value="My page" />
          <RequestButton value="등록" onClick={vacationRequest} />
        </ButtonInfo>
        <Info>
          <VacationInfo>
            발생:&nbsp;<span>20.0</span>
          </VacationInfo>
          <VacationInfo>
            사용:&nbsp;<span>9.5</span>
          </VacationInfo>
          <VacationInfo>
            잔여:&nbsp;<span>10.5</span>
          </VacationInfo>
        </Info>
        <GlassBg>
          <Info>
            <VacationInfo>휴가 구분</VacationInfo>
            <InfoPicker>
              <FilterBar>
                {/* <li onMouseLeave={() => setOver(false)}>
                  <input
                    type="radio"
                    name="vacation"
                    value="연차"
                    onClick={() => setOver(true)}
                  />
                  연차
                  {over && (
                    <DropBar onMouseLeave={() => setOver(false)}>
                      <VacationName>
                        <input
                          type="radio"
                          name="vacation"
                          onChange={() => setVacationValue('연차')}
                        />
                        연차(8H)
                      </VacationName>
                      <VacationName>
                        <input
                          type="radio"
                          name="vacation"
                          onChange={() => setVacationValue('반차')}
                        />
                        반차(4H)
                      </VacationName>
                    </DropBar>
                  )}
                </li> */}
                {VACATION_ARR.map((el, idx) => {
                  return (
                    <li key={idx}>
                      <input
                        type="radio"
                        name="vacation"
                        onChange={() => setVacationValue({ el })}
                      />
                      {el}
                    </li>
                  );
                })}
              </FilterBar>
            </InfoPicker>
          </Info>
          <Info>
            <VacationInfo>휴가 일자</VacationInfo>
            <InfoPicker>
              <DatePickerComponent handlePeriod={handlePeriod} />
            </InfoPicker>
          </Info>
          <Info>
            <VacationInfo>기안 본문</VacationInfo>
            <Input />
          </Info>
        </GlassBg>
      </section>
    </>
  );
}
