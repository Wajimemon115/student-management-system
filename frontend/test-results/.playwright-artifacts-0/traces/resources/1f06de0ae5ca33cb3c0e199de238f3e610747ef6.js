import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Pagination.jsx");const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];import Button from "/src/components/Button.jsx";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/Pagination.jsx";
import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
export default function Pagination({ page, count, pageSize = 10, onPageChange }) {
	if (count === 0) return null;
	const totalPages = Math.max(1, Math.ceil(count / pageSize));
	const start = (page - 1) * pageSize + 1;
	const end = Math.min(page * pageSize, count);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "pagination",
		children: [/* @__PURE__ */ _jsxDEV("span", {
			className: "pagination-info",
			children: [
				"Showing ",
				start,
				"–",
				end,
				" of ",
				count
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "pagination-controls",
			children: [
				/* @__PURE__ */ _jsxDEV(Button, {
					variant: "secondary",
					size: "sm",
					disabled: page <= 1,
					onClick: () => onPageChange(page - 1),
					children: "Previous"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("span", { children: [
					"Page ",
					page,
					" of ",
					totalPages
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV(Button, {
					variant: "secondary",
					size: "sm",
					disabled: page >= totalPages,
					onClick: () => onPageChange(page + 1),
					children: "Next"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
_c = Pagination;
var _c;
$RefreshReg$(_c, "Pagination");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Pagination.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/Pagination.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/Pagination.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/Pagination.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxZQUFZOzs7QUFFbkIsZUFBZSxTQUFTLFdBQVcsRUFBRSxNQUFNLE9BQU8sV0FBVyxJQUFJLGdCQUFnQjtDQUMvRSxJQUFJLFVBQVUsR0FBRyxPQUFPO0NBRXhCLE1BQU0sYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLEtBQUssUUFBUSxRQUFRLENBQUM7Q0FDMUQsTUFBTSxTQUFTLE9BQU8sS0FBSyxXQUFXO0NBQ3RDLE1BQU0sTUFBTSxLQUFLLElBQUksT0FBTyxVQUFVLEtBQUs7Q0FFM0MsT0FDRSx3QkFBQyxPQUFEO0VBQUssV0FBVTtZQUFmLENBQ0Usd0JBQUMsUUFBRDtHQUFNLFdBQVU7YUFBaEI7SUFBa0M7SUFDdkI7SUFBTTtJQUFFO0lBQUk7SUFBSztHQUN0Qjs7Ozs7WUFDTix3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmO0lBQ0Usd0JBQUMsUUFBRDtLQUNFLFNBQVE7S0FDUixNQUFLO0tBQ0wsVUFBVSxRQUFRO0tBQ2xCLGVBQWUsYUFBYSxPQUFPLENBQUM7ZUFDckM7SUFFTzs7Ozs7SUFDUix3QkFBQyxRQUFEO0tBQU07S0FDRTtLQUFLO0tBQUs7SUFDWjs7Ozs7SUFDTix3QkFBQyxRQUFEO0tBQ0UsU0FBUTtLQUNSLE1BQUs7S0FDTCxVQUFVLFFBQVE7S0FDbEIsZUFBZSxhQUFhLE9BQU8sQ0FBQztlQUNyQztJQUVPOzs7OztHQUNMOzs7OztVQUNGOzs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJQYWdpbmF0aW9uLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2UsIGNvdW50LCBwYWdlU2l6ZSA9IDEwLCBvblBhZ2VDaGFuZ2UgfSkge1xyXG4gIGlmIChjb3VudCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwoY291bnQgLyBwYWdlU2l6ZSkpO1xyXG4gIGNvbnN0IHN0YXJ0ID0gKHBhZ2UgLSAxKSAqIHBhZ2VTaXplICsgMTtcclxuICBjb25zdCBlbmQgPSBNYXRoLm1pbihwYWdlICogcGFnZVNpemUsIGNvdW50KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWluZm9cIj5cclxuICAgICAgICBTaG93aW5nIHtzdGFydH3igJN7ZW5kfSBvZiB7Y291bnR9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPD0gMX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShwYWdlIC0gMSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFBhZ2Uge3BhZ2V9IG9mIHt0b3RhbFBhZ2VzfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17cGFnZSA+PSB0b3RhbFBhZ2VzfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKHBhZ2UgKyAxKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBOZXh0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdfQ==