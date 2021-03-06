import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'node_modules/carbon-components/scss/globals/scss/_vars';`
      },
    },
  },
})
