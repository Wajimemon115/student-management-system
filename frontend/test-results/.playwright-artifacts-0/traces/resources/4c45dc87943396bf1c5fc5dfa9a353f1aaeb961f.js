import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/FormSelect.jsx");const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/FormSelect.jsx";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
export default function FormSelect({ label, error, options = [], placeholder = "Select...", ...props }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "form-group",
		children: [
			label && /* @__PURE__ */ _jsxDEV("label", {
				className: "form-label",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 17
			}, this),
			/* @__PURE__ */ _jsxDEV("select", {
				className: "form-input",
				...props,
				children: [/* @__PURE__ */ _jsxDEV("option", {
					value: "",
					children: placeholder
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 12,
					columnNumber: 9
				}, this), options.map((o) => /* @__PURE__ */ _jsxDEV("option", {
					value: o.value,
					children: o.label
				}, o.value, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 11
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			error && /* @__PURE__ */ _jsxDEV("div", {
				className: "form-error",
				children: error
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 17
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
_c = FormSelect;
var _c;
$RefreshReg$(_c, "FormSelect");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/FormSelect.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/FormSelect.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/FormSelect.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/FormSelect.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6Ijs7QUFBQSxlQUFlLFNBQVMsV0FBVyxFQUNqQyxPQUNBLE9BQ0EsVUFBVSxDQUFDLEdBQ1gsY0FBYyxhQUNkLEdBQUcsU0FDRjtDQUNELE9BQ0Usd0JBQUMsT0FBRDtFQUFLLFdBQVU7WUFBZjtHQUNHLFNBQVMsd0JBQUMsU0FBRDtJQUFPLFdBQVU7Y0FBYztHQUFhOzs7OztHQUN0RCx3QkFBQyxVQUFEO0lBQVEsV0FBVTtJQUFhLEdBQUk7Y0FBbkMsQ0FDRSx3QkFBQyxVQUFEO0tBQVEsT0FBTTtlQUFJO0lBQW9COzs7O2NBQ3JDLFFBQVEsS0FBSyxNQUNaLHdCQUFDLFVBQUQ7S0FBc0IsT0FBTyxFQUFFO2VBQzVCLEVBQUU7SUFDRyxHQUZLLEVBQUU7Ozs7V0FFUCxDQUNULENBQ0s7Ozs7OztHQUNQLFNBQVMsd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBYztHQUFXOzs7OztFQUMvQzs7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRm9ybVNlbGVjdC5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVNlbGVjdCh7XHJcbiAgbGFiZWwsXHJcbiAgZXJyb3IsXHJcbiAgb3B0aW9ucyA9IFtdLFxyXG4gIHBsYWNlaG9sZGVyID0gXCJTZWxlY3QuLi5cIixcclxuICAuLi5wcm9wc1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICB7bGFiZWwgJiYgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57bGFiZWx9PC9sYWJlbD59XHJcbiAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPntwbGFjZWhvbGRlcn08L29wdGlvbj5cclxuICAgICAgICB7b3B0aW9ucy5tYXAoKG8pID0+IChcclxuICAgICAgICAgIDxvcHRpb24ga2V5PXtvLnZhbHVlfSB2YWx1ZT17by52YWx1ZX0+XHJcbiAgICAgICAgICAgIHtvLmxhYmVsfVxyXG4gICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e2Vycm9yfTwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXX0=