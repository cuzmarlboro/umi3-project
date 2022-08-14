import { Space, Table, Tag } from 'antd';
import React, { useState, useEffect } from 'react';
import { stuGet, stuDel } from '@/api/stu';
import { useRequest } from 'umi';

const List = () => {
  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '成绩',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '生日',
      key: 'time',
      dataIndex: 'time',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record, index) => (
        <Space size="middle">
          <a>编辑</a>
          <a
            onClick={() => {
              stuDel(record.id).then((res) => {
                const newData = [...data];
                newData.splice(index, 1);
                setData(newData);
              });
            }}
          >
            删除
          </a>
        </Space>
      ),
    },
  ];
  //   useEffect(() => {
  //     方法一：需要开发者自行处理loading等请求效果
  //     stuGet().then((res) => {
  //       setData(res.results);
  //       setLoading(false);
  //     });
  //   }, []);

  // 方法二：采用useRequest简化异步请求操作
  //   const { data, error, loading } = useRequest(async () => {
  //     let res = await stuGet();
  //     return { data: res.results };
  //   }); // data 是后端响应的数据包 （必须带有data）

  // 方法三：简化useRequest的使用
  const { data, error, loading } = useRequest(stuGet);
  return (
    <Table columns={columns} dataSource={data} rowKey="id" loading={loading} />
  );
};

export default List;
