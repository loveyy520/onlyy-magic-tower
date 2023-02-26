import { runApp } from 'rax-app';
// 引入 app.json
import staticConfig from './app.json';

runApp(
  {
    app: {
      onShow() {
        console.log('app show...');
      },
      onHide() {
        console.log('app hide...');
      },
    },
  },
  staticConfig,
);
