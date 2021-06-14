import { useMemo } from 'react';
import TableForm from '../components/TableForm';

function TableContentsCommute() {
  const columns = useMemo(
    () => [
      {
        Header: '기본 정보',
        columns: [
          {
            Header: '사번',
            accessor: 'employeeNumber',
          },
          {
            Header: '이름',
            accessor: 'name',
          },
          {
            Header: '부서명',
            accessor: 'department',
          },
          {
            Header: '직급',
            accessor: 'position',
          },
        ],
      },
      {
        Header: '출퇴근 정보',
        columns: [
          {
            Header: '출근시간',
            accessor: 'attendanceTime',
          },
          {
            Header: '퇴근시간',
            accessor: 'leavingWorkTime',
          },
          {
            Header: '출근구분',
            accessor: 'attendanceType',
          },
          {
            Header: '퇴근구분',
            accessor: 'leavingWorkType',
          },
          {
            Header: '연장근무시간',
            accessor: 'extendedWorkTime',
          },
          {
            Header: '휴일근무시간',
            accessor: 'holidayWorkTime',
          },
          {
            Header: '총 근무시간',
            accessor: 'totalWorkTime',
          },
        ],
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        key: '1',
        employeeNumber: '10000045',
        name: '홍길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:04',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '2',
        employeeNumber: '10000030',
        name: '심길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:12',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '3',
        employeeNumber: '10000056',
        name: '박길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:21',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '4',
        employeeNumber: '10000023',
        name: '최길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:09',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '5',
        employeeNumber: '10000013',
        name: '백길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:01',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '6',
        employeeNumber: '10000040',
        name: '이길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:08',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '7',
        employeeNumber: '10000038',
        name: '차길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:07',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '8',
        employeeNumber: '10000029',
        name: '용길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:03',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '9',
        employeeNumber: '10000087',
        name: '마길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:24',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '10',
        employeeNumber: '10000010',
        name: '나길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:14',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '11',
        employeeNumber: '10000076',
        name: '강길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:44',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '12',
        employeeNumber: '10000081',
        name: '오길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:23',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '13',
        employeeNumber: '10000097',
        name: '기길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:35',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '14',
        employeeNumber: '10000054',
        name: '도길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:06',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '15',
        employeeNumber: '10000074',
        name: '남길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:04',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
      {
        key: '16',
        employeeNumber: '10000042',
        name: '심길동',
        department: '인사팀',
        position: '대리',
        attendanceTime: '08:04',
        leavingWorkTime: '22:13',
        attendanceType: '지각',
        leavingWorkType: '연장',
        extendedWorkTime: '05:13',
        holidayWorkTime: '00:00',
        totalWorkTime: '14:09',
      },
    ],
    []
  );

  return <TableForm columns={columns} data={data} />;
}

export default TableContentsCommute;