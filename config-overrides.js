const { override, fixBabelImports,addWebpackAlias  } = require('customize-cra');
const path = require('path');
module.exports = override(
       fixBabelImports('import', {
         libraryName: 'antd-mobile',
         style: 'css',
       }),
       addWebpackAlias({
           assets:path.resolve(__dirname,'./src/assets'), //assets下面的图片使用到的，跟style没关系
           "@":path.resolve(__dirname,'./src/components')
          
       }) 
     );