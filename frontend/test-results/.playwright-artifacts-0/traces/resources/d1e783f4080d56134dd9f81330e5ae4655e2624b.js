import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Modal.jsx");const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/Modal.jsx";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
export default function Modal({ open, title, onClose, children }) {
	if (!open) return null;
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "modal-overlay",
		onClick: onClose,
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "modal",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "modal-header",
				children: [/* @__PURE__ */ _jsxDEV("h2", {
					className: "modal-title",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 8,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					className: "modal-close",
					onClick: onClose,
					children: "×"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 9
			}, this), children]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
_c = Modal;
var _c;
$RefreshReg$(_c, "Modal");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Modal.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/Modal.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/Modal.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/Modal.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6Ijs7QUFBQSxlQUFlLFNBQVMsTUFBTSxFQUFFLE1BQU0sT0FBTyxTQUFTLFlBQVk7Q0FDaEUsSUFBSSxDQUFDLE1BQU0sT0FBTztDQUVsQixPQUNFLHdCQUFDLE9BQUQ7RUFBSyxXQUFVO0VBQWdCLFNBQVM7WUFDdEMsd0JBQUMsT0FBRDtHQUFLLFdBQVU7R0FBUSxVQUFVLE1BQU0sRUFBRSxnQkFBZ0I7YUFBekQsQ0FDRSx3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUFmLENBQ0Usd0JBQUMsTUFBRDtLQUFJLFdBQVU7ZUFBZTtJQUFVOzs7O2NBQ3ZDLHdCQUFDLFVBQUQ7S0FBUSxXQUFVO0tBQWMsU0FBUztlQUFTO0lBRTFDOzs7O1lBQ0w7Ozs7O2FBQ0osUUFDRTs7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiTW9kYWwuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHsgb3BlbiwgdGl0bGUsIG9uQ2xvc2UsIGNoaWxkcmVuIH0pIHtcclxuICBpZiAoIW9wZW4pIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCIgb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdfQ==