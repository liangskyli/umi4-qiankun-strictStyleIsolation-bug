import { defineConfig } from 'umi';


export default defineConfig({
    fastRefresh: true,
    proxy: {
        '/dev-server': {
            target: 'http://localhost:8010',
            changeOrigin: true,
            secure: false,
        },
        '/slave/mf-*': {
            target: 'http://localhost:8010/',
            changeOrigin: true,
            secure: false,
            prependPath: true,
        },
    },
    model: {},
    initialState: {},
    dva: {
        immer: {
            enableES5: true,
            enableAllPlugins: true,
        },
    },
    routes: [
        {path: '/page1', component: '@/pages/page1/index', title: 'page1'},
        {path: '/page2', component: '@/pages/page2/index', title: 'page2'},
    ],
    qiankun: {
        master: {
            /*apps: [
                {
                    name: 'qiankun-app', // 唯一 id
                    entry: 'http://localhost:8010/', // html entry
                },
            ],
            routes: [{ path: '/', microApp: 'qiankun-app' }],
            sandbox: {
                // strictStyleIsolation 有bug
                strictStyleIsolation: true,
                // experimentalStyleIsolation 正常
                //experimentalStyleIsolation: true,
            },*/
        },
    },
});


