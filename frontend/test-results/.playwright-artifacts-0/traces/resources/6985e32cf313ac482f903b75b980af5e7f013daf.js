import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false, "VITE_API_URL": "http://127.0.0.1:8000/api"};import axios from "/node_modules/.vite/deps/axios.js?v=25600711";
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });
export default api;

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBRWxCLE1BQU0sTUFBTSxNQUFNLE9BQU8sRUFDdkIsU0FBUyxZQUFZLElBQUksYUFDM0IsQ0FBQztBQUVELGVBQWUiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiYXhpb3MuanMiXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBpbXBvcnQubWV0YS5lbnYuVklURV9BUElfVVJMLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTsiXX0=