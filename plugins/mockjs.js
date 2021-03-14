/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 杨永强
 * @Date: 2021-02-25 15:24:05
 * @LastEditors: 杨永强
 * @LastEditTime: 2021-03-08 08:49:41
 */
var Mock = require('mockjs')

Mock.mock(/\/index/, {
  'meta': {
    'status':'200',
    'error':''
  },
  'data':{
    'Slogan':"九万里风筝证据",
    'professional|1-10':[{
      'id|+1':"10",
      'title':"数学",
      'english':'Mathematical',
      'direction|1-5':[{
        'id|+1':"6",
        'title':"分析",
        'dependencies':"很简单的分析啦",
        'course|1-10':[{
          'title':'数学分析',
          'id|+1':"2"
        }]
      }]

    }]
  }
})