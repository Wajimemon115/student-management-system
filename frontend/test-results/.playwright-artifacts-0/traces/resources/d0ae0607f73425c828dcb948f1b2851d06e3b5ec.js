import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/StatCard.jsx");const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/StatCard.jsx";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
export default function StatCard({ label, value, loading = false }) {
	if (loading) {
		return /* @__PURE__ */ _jsxDEV("div", {
			className: "stat-card",
			children: [/* @__PURE__ */ _jsxDEV("div", { className: "skeleton skeleton-label" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 5,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", { className: "skeleton skeleton-value" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 6,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 4,
			columnNumber: 7
		}, this);
	}
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "stat-card",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "stat-label",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "stat-value",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
_c = StatCard;
var _c;
$RefreshReg$(_c, "StatCard");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/StatCard.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/StatCard.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/StatCard.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/StatCard.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6Ijs7QUFBQSxlQUFlLFNBQVMsU0FBUyxFQUFFLE9BQU8sT0FBTyxVQUFVLFNBQVM7Q0FDbEUsSUFBSSxTQUFTO0VBQ1gsT0FDRSx3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmLENBQ0Usd0JBQUMsT0FBRCxFQUFLLFdBQVUsMEJBQTJCOzs7O2FBQzFDLHdCQUFDLE9BQUQsRUFBSyxXQUFVLDBCQUEyQjs7OztXQUN2Qzs7Ozs7O0NBRVQ7Q0FFQSxPQUNFLHdCQUFDLE9BQUQ7RUFBSyxXQUFVO1lBQWYsQ0FDRSx3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFjO0VBQVc7Ozs7WUFDeEMsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFBYztFQUFXOzs7O1VBQ3JDOzs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJTdGF0Q2FyZC5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdENhcmQoeyBsYWJlbCwgdmFsdWUsIGxvYWRpbmcgPSBmYWxzZSB9KSB7XHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsZXRvbiBza2VsZXRvbi1sYWJlbFwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2VsZXRvbiBza2VsZXRvbi12YWx1ZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtbGFiZWxcIj57bGFiZWx9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC12YWx1ZVwiPnt2YWx1ZX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXX0=