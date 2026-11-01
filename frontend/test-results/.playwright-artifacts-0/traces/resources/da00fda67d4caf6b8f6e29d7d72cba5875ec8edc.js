import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Layout.jsx");const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import { Outlet } from "/node_modules/.vite/deps/react-router-dom.js?v=783bbbf0";
import Sidebar from "/src/components/Sidebar.jsx";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/Layout.jsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
export default function Layout() {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "app",
		children: [/* @__PURE__ */ _jsxDEV(Sidebar, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 7,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("main", {
			className: "main",
			children: /* @__PURE__ */ _jsxDEV(Outlet, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Layout.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/Layout.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/Layout.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/Layout.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxjQUFjO0FBQ3ZCLE9BQU8sYUFBYTs7O0FBRXBCLGVBQWUsU0FBUyxTQUFTO0NBQy9CLE9BQ0Usd0JBQUMsT0FBRDtFQUFLLFdBQVU7WUFBZixDQUNFLHdCQUFDLFNBQUQsQ0FBVTs7OztZQUNWLHdCQUFDLFFBQUQ7R0FBTSxXQUFVO2FBQ2Qsd0JBQUMsUUFBRCxDQUFTOzs7OztFQUNMOzs7O1VBQ0g7Ozs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkxheW91dC5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il19