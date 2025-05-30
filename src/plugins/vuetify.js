import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        colors: {
          primary: '#1976D2', // 蓝色
          secondary: '#FFFFFF', // 白色
          accent: '#BBDEFB', // 浅蓝色
          background: '#F5F5F5', // 背景灰白
        },
      },
    },
  },
});