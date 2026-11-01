import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/FormInput.jsx");const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/FormInput.jsx";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
export default function FormInput({ label, error, as = "input", ...props }) {
	const Tag = as;
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "form-group",
		children: [
			label && /* @__PURE__ */ _jsxDEV("label", {
				className: "form-label",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 5,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ _jsxDEV(Tag, {
				className: "form-input",
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 6,
				columnNumber: 7
			}, this),
			error && /* @__PURE__ */ _jsxDEV("div", {
				className: "form-error",
				children: error
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 17
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 4,
		columnNumber: 5
	}, this);
}
_c = FormInput;
var _c;
$RefreshReg$(_c, "FormInput");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/FormInput.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/FormInput.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/FormInput.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/FormInput.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6Ijs7QUFBQSxlQUFlLFNBQVMsVUFBVSxFQUFFLE9BQU8sT0FBTyxLQUFLLFNBQVMsR0FBRyxTQUFTO0NBQzFFLE1BQU0sTUFBTTtDQUNaLE9BQ0Usd0JBQUMsT0FBRDtFQUFLLFdBQVU7WUFBZjtHQUNHLFNBQVMsd0JBQUMsU0FBRDtJQUFPLFdBQVU7Y0FBYztHQUFhOzs7OztHQUN0RCx3QkFBQyxLQUFEO0lBQUssV0FBVTtJQUFhLEdBQUk7R0FBUTs7Ozs7R0FDdkMsU0FBUyx3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUFjO0dBQVc7Ozs7O0VBQy9DOzs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJGb3JtSW5wdXQuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1JbnB1dCh7IGxhYmVsLCBlcnJvciwgYXMgPSBcImlucHV0XCIsIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCBUYWcgPSBhcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIHtsYWJlbCAmJiA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPntsYWJlbH08L2xhYmVsPn1cclxuICAgICAgPFRhZyBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgey4uLnByb3BzfSAvPlxyXG4gICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Vycm9yfTwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXX0=