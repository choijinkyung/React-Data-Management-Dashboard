// src/utils/mockData.ts

// 1️⃣ 카드 데이터
export const statsData = [
    { id: 1, title: 'Total Users', value: 124 },
    { id: 2, title: 'Total Services', value: 32 },
    { id: 3, title: 'Total Datasets', value: 58 },
  ];
  
  // 2️⃣ 테이블 데이터
  export const tableData = [
    { id: 1, name: 'Dataset A', type: 'CSV', status: 'Active' },
    { id: 2, name: 'Dataset B', type: 'JSON', status: 'Inactive' },
    { id: 3, name: 'Dataset C', type: 'CSV', status: 'Active' },
    { id: 4, name: 'Dataset D', type: 'Parquet', status: 'Active' },
  ];
  
  // 3️⃣ 차트 데이터 (월간 데이터 사용량)
  export const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Data Usage',
        data: [12, 19, 8, 17, 23, 20],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };