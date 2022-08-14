import mockjs from 'mockjs';

let dataList = mockjs.mock({
  code: 200,
  mas: '学员列表加载成功',
  'results|10': [
    {
      name: '@cname',
      score: '@integer(50,100)',
      city: '@city',
      time: '@date',
      'id|+1': 1,
    },
  ],
});

export default {
  'GET /classes/test': { name: '1', score: 'a' }, // GET 可忽略，支持Object和Array
  'GET /classes/stu': dataList,
  'DELETE /classes/stu': (req, res) => {
    let { id } = req.query;
    for (let i = 0; i < dataList.results.length; i++) {
      if (dataList.results[i].id == id) {
        dataList.results.splice(i, 1);
        res.send({
          code: 200,
          mas: '删除成功',
        });
        break;
      }
      res.send({
        code: 100,
        mas: '未找到对应数据',
      });
    }
  },
};
