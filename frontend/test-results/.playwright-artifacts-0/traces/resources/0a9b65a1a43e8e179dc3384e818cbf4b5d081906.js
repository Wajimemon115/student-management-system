import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ConfirmDialog.jsx");const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import Modal from "/src/components/Modal.jsx";
import Button from "/src/components/Button.jsx";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/ConfirmDialog.jsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
export default function ConfirmDialog({ open, title = "Confirm delete", message, onConfirm, onCancel, loading }) {
	return /* @__PURE__ */ _jsxDEV(Modal, {
		open,
		title,
		onClose: onCancel,
		children: [/* @__PURE__ */ _jsxDEV("p", {
			style: {
				color: "var(--muted)",
				marginBottom: 24
			},
			children: message
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "form-actions",
			children: [/* @__PURE__ */ _jsxDEV(Button, {
				variant: "secondary",
				onClick: onCancel,
				children: "Cancel"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV(Button, {
				variant: "danger",
				onClick: onConfirm,
				disabled: loading,
				children: loading ? "Deleting..." : "Delete"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
_c = ConfirmDialog;
var _c;
$RefreshReg$(_c, "ConfirmDialog");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/ConfirmDialog.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/ConfirmDialog.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/ConfirmDialog.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/ConfirmDialog.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTs7O0FBRW5CLGVBQWUsU0FBUyxjQUFjLEVBQ3BDLE1BQ0EsUUFBUSxrQkFDUixTQUNBLFdBQ0EsVUFDQSxXQUNDO0NBQ0QsT0FDRSx3QkFBQyxPQUFEO0VBQWE7RUFBYTtFQUFPLFNBQVM7WUFBMUMsQ0FDRSx3QkFBQyxLQUFEO0dBQUcsT0FBTztJQUFFLE9BQU87SUFBZ0IsY0FBYztHQUFHO2FBQUk7RUFBVzs7OztZQUNuRSx3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmLENBQ0Usd0JBQUMsUUFBRDtJQUFRLFNBQVE7SUFBWSxTQUFTO2NBQVU7R0FFdkM7Ozs7YUFDUix3QkFBQyxRQUFEO0lBQVEsU0FBUTtJQUFTLFNBQVM7SUFBVyxVQUFVO2NBQ3BELFVBQVUsZ0JBQWdCO0dBQ3JCOzs7O1dBQ0w7Ozs7O1VBQ0E7Ozs7OztBQUVYIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkNvbmZpcm1EaWFsb2cuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZmlybURpYWxvZyh7XHJcbiAgb3BlbixcclxuICB0aXRsZSA9IFwiQ29uZmlybSBkZWxldGVcIixcclxuICBtZXNzYWdlLFxyXG4gIG9uQ29uZmlybSxcclxuICBvbkNhbmNlbCxcclxuICBsb2FkaW5nLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbCBvcGVuPXtvcGVufSB0aXRsZT17dGl0bGV9IG9uQ2xvc2U9e29uQ2FuY2VsfT5cclxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwidmFyKC0tbXV0ZWQpXCIsIG1hcmdpbkJvdHRvbTogMjQgfX0+e21lc3NhZ2V9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYWN0aW9uc1wiPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e29uQ2FuY2VsfT5cclxuICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIG9uQ2xpY2s9e29uQ29uZmlybX0gZGlzYWJsZWQ9e2xvYWRpbmd9PlxyXG4gICAgICAgICAge2xvYWRpbmcgPyBcIkRlbGV0aW5nLi4uXCIgOiBcIkRlbGV0ZVwifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTW9kYWw+XHJcbiAgKTtcclxufSJdfQ==