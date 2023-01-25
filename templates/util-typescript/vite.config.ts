import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'lib/index.ts'),
            name: '__project_name__',
            // the proper extensions will be added
            fileName: '__project_name__',
            formats: ['es', 'cjs', 'umd'],
        },
        sourcemap: true,
        // // 这里是个例子
        // rollupOptions: {
        //     // 确保外部化处理那些你不想打包进库的依赖
        //     external: ['vue'],
        //     output: {
        //         // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        //         globals: {
        //             vue: 'Vue',
        //         },
        //     },
        // },
    },
    plugins: [dts()],
});
