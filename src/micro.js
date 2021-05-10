import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

const apps = [
  {
    name: 'micro_01',
    entry: 'http://localhost:9001',
    activeRule: '/micro_01' // 匹配微应用的路由
  }
];

const mapps = apps.map(item => {
  return {
    ...item,
    container: '#micro_container',
    props: {
      routerBase: item.activeRule
    }
  };
});

const config = {
  // 挂载前回调
  beforeLoad: [
    app => {
      console.log('%c before load', 'background:#0f0 ; padding: 1px; border-radius: 3px;  color: #fff', app);
    }
  ],
  // 挂载后回调
  beforeMount: [
    app => {
      console.log('%c before mount', 'background:#f1f ; padding: 1px; border-radius: 3px;  color: #fff', app);
    }
  ],
  // 卸载后回调
  afterUnmount: [
    app => {
      console.log('%c after unload', 'background:#a7a ; padding: 1px; border-radius: 3px;  color: #fff', app);
    }
  ]
};

export function startMicro() {
  registerMicroApps(mapps, config);
//   setDefaultMountApp(apps[0].activeRoule); // 默认打开第一个子项目
  start();
}
