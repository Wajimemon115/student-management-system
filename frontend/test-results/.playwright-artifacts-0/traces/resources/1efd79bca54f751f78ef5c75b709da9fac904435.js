import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Teachers.jsx");const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];import CrudPage from "/src/components/CrudPage.jsx";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/pages/Teachers.jsx";
import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
const columns = [
	{
		key: "name",
		label: "Name"
	},
	{
		key: "email",
		label: "Email"
	},
	{
		key: "phone",
		label: "Phone",
		render: (r) => r.phone || "—"
	},
	{
		key: "subject",
		label: "Subject",
		render: (r) => r.subject || "—"
	}
];
const fields = [
	{
		name: "name",
		label: "Full Name",
		required: true,
		placeholder: "Enter full name"
	},
	{
		name: "email",
		label: "Email",
		type: "email",
		required: true,
		placeholder: "teacher@example.com"
	},
	{
		name: "phone",
		label: "Phone",
		placeholder: "03XX-XXXXXXX"
	},
	{
		name: "subject",
		label: "Subject",
		placeholder: "e.g. Chemistry"
	}
];
export default function Teachers() {
	return /* @__PURE__ */ _jsxDEV(CrudPage, {
		title: "Teachers",
		subtitle: "Manage all teachers",
		endpoint: "teachers",
		singular: "Teacher",
		columns,
		fields
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
_c = Teachers;
var _c;
$RefreshReg$(_c, "Teachers");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Teachers.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/pages/Teachers.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/pages/Teachers.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/pages/Teachers.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxjQUFjOzs7QUFFckIsTUFBTSxVQUFVO0NBQ2Q7RUFBRSxLQUFLO0VBQVEsT0FBTztDQUFPO0NBQzdCO0VBQUUsS0FBSztFQUFTLE9BQU87Q0FBUTtDQUMvQjtFQUFFLEtBQUs7RUFBUyxPQUFPO0VBQVMsU0FBUyxNQUFNLEVBQUUsU0FBUztDQUFJO0NBQzlEO0VBQUUsS0FBSztFQUFXLE9BQU87RUFBVyxTQUFTLE1BQU0sRUFBRSxXQUFXO0NBQUk7QUFDdEU7QUFFQSxNQUFNLFNBQVM7Q0FDYjtFQUFFLE1BQU07RUFBUSxPQUFPO0VBQWEsVUFBVTtFQUFNLGFBQWE7Q0FBa0I7Q0FDbkY7RUFBRSxNQUFNO0VBQVMsT0FBTztFQUFTLE1BQU07RUFBUyxVQUFVO0VBQU0sYUFBYTtDQUFzQjtDQUNuRztFQUFFLE1BQU07RUFBUyxPQUFPO0VBQVMsYUFBYTtDQUFlO0NBQzdEO0VBQUUsTUFBTTtFQUFXLE9BQU87RUFBVyxhQUFhO0NBQWlCO0FBQ3JFO0FBRUEsZUFBZSxTQUFTLFdBQVc7Q0FDakMsT0FDRSx3QkFBQyxVQUFEO0VBQ0UsT0FBTTtFQUNOLFVBQVM7RUFDVCxVQUFTO0VBQ1QsVUFBUztFQUNBO0VBQ0Q7Q0FDVDs7Ozs7QUFFTCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJUZWFjaGVycy5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENydWRQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL0NydWRQYWdlXCI7XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHsga2V5OiBcIm5hbWVcIiwgbGFiZWw6IFwiTmFtZVwiIH0sXHJcbiAgeyBrZXk6IFwiZW1haWxcIiwgbGFiZWw6IFwiRW1haWxcIiB9LFxyXG4gIHsga2V5OiBcInBob25lXCIsIGxhYmVsOiBcIlBob25lXCIsIHJlbmRlcjogKHIpID0+IHIucGhvbmUgfHwgXCLigJRcIiB9LFxyXG4gIHsga2V5OiBcInN1YmplY3RcIiwgbGFiZWw6IFwiU3ViamVjdFwiLCByZW5kZXI6IChyKSA9PiByLnN1YmplY3QgfHwgXCLigJRcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgZmllbGRzID0gW1xyXG4gIHsgbmFtZTogXCJuYW1lXCIsIGxhYmVsOiBcIkZ1bGwgTmFtZVwiLCByZXF1aXJlZDogdHJ1ZSwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgZnVsbCBuYW1lXCIgfSxcclxuICB7IG5hbWU6IFwiZW1haWxcIiwgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCByZXF1aXJlZDogdHJ1ZSwgcGxhY2Vob2xkZXI6IFwidGVhY2hlckBleGFtcGxlLmNvbVwiIH0sXHJcbiAgeyBuYW1lOiBcInBob25lXCIsIGxhYmVsOiBcIlBob25lXCIsIHBsYWNlaG9sZGVyOiBcIjAzWFgtWFhYWFhYWFwiIH0sXHJcbiAgeyBuYW1lOiBcInN1YmplY3RcIiwgbGFiZWw6IFwiU3ViamVjdFwiLCBwbGFjZWhvbGRlcjogXCJlLmcuIENoZW1pc3RyeVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFjaGVycygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENydWRQYWdlXHJcbiAgICAgIHRpdGxlPVwiVGVhY2hlcnNcIlxyXG4gICAgICBzdWJ0aXRsZT1cIk1hbmFnZSBhbGwgdGVhY2hlcnNcIlxyXG4gICAgICBlbmRwb2ludD1cInRlYWNoZXJzXCJcclxuICAgICAgc2luZ3VsYXI9XCJUZWFjaGVyXCJcclxuICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAvPlxyXG4gICk7XHJcbn0iXX0=