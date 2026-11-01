import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Button.jsx");const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/Button.jsx";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
export default function Button({ variant = "primary", size, children, ...props }) {
	const classes = `btn btn-${variant} ${size === "sm" ? "btn-sm" : ""}`;
	return /* @__PURE__ */ _jsxDEV("button", {
		className: classes,
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
_c = Button;
var _c;
$RefreshReg$(_c, "Button");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Button.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/Button.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/Button.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/Button.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6Ijs7QUFBQSxlQUFlLFNBQVMsT0FBTyxFQUM3QixVQUFVLFdBQ1YsTUFDQSxVQUNBLEdBQUcsU0FDRjtDQUNELE1BQU0sVUFBVSxXQUFXLFFBQVEsR0FBRyxTQUFTLE9BQU8sV0FBVztDQUNqRSxPQUNFLHdCQUFDLFVBQUQ7RUFBUSxXQUFXO0VBQVMsR0FBSTtFQUM3QjtDQUNLOzs7OztBQUVaIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkJ1dHRvbi5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHtcclxuICB2YXJpYW50ID0gXCJwcmltYXJ5XCIsXHJcbiAgc2l6ZSxcclxuICBjaGlsZHJlbixcclxuICAuLi5wcm9wc1xyXG59KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IGBidG4gYnRuLSR7dmFyaWFudH0gJHtzaXplID09PSBcInNtXCIgPyBcImJ0bi1zbVwiIDogXCJcIn1gO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLnByb3BzfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufSJdfQ==