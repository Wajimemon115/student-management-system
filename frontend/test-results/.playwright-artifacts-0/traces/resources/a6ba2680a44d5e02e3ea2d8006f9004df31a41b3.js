import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/context/ToastContext.jsx");const createContext = __vite__cjsImport0_react["createContext"]; const useCallback = __vite__cjsImport0_react["useCallback"]; const useContext = __vite__cjsImport0_react["useContext"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=25fa87c4";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/context/ToastContext.jsx";
import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
const ToastContext = createContext(_c = () => {});
_c2 = ToastContext;
export function ToastProvider({ children }) {
	_s();
	const [toasts, setToasts] = useState([]);
	const notify = useCallback((message, type = "success") => {
		const id = Date.now() + Math.random();
		setToasts((t) => [...t, {
			id,
			message,
			type
		}]);
		setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3500);
	}, []);
	return /* @__PURE__ */ _jsxDEV(ToastContext.Provider, {
		value: notify,
		children: [children, /* @__PURE__ */ _jsxDEV("div", {
			className: "toast-container",
			children: toasts.map((t) => /* @__PURE__ */ _jsxDEV("div", {
				className: `toast toast-${t.type}`,
				children: t.message
			}, t.id, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
_s(ToastProvider, "cTkOVxLkpe1HmBr9kZtUPzdXW6o=");
_c3 = ToastProvider;
export const useToast = () => {
	_s2();
	return useContext(ToastContext);
};
_s2(useToast, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c, _c2, _c3;
$RefreshReg$(_c, "ToastContext$createContext");
$RefreshReg$(_c2, "ToastContext");
$RefreshReg$(_c3, "ToastProvider");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/context/ToastContext.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/context/ToastContext.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/context/ToastContext.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/context/ToastContext.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxlQUFlLGFBQWEsWUFBWSxnQkFBZ0I7Ozs7QUFFakUsTUFBTSxlQUFlLHlCQUFvQixDQUFDLENBQUM7O0FBRTNDLE9BQU8sU0FBUyxjQUFjLEVBQUUsWUFBWTs7Q0FDMUMsTUFBTSxDQUFDLFFBQVEsYUFBYSxTQUFTLENBQUMsQ0FBQztDQUV2QyxNQUFNLFNBQVMsYUFBYSxTQUFTLE9BQU8sY0FBYztFQUN4RCxNQUFNLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxPQUFPO0VBQ3BDLFdBQVcsTUFBTSxDQUFDLEdBQUcsR0FBRztHQUFFO0dBQUk7R0FBUztFQUFLLENBQUMsQ0FBQztFQUM5QyxpQkFBaUIsV0FBVyxNQUFNLEVBQUUsUUFBUSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJO0NBQ3ZFLEdBQUcsQ0FBQyxDQUFDO0NBRUwsT0FDRSx3QkFBQyxhQUFhLFVBQWQ7RUFBdUIsT0FBTztZQUE5QixDQUNHLFVBQ0Qsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFDWixPQUFPLEtBQUssTUFDWCx3QkFBQyxPQUFEO0lBQWdCLFdBQVcsZUFBZSxFQUFFO2NBQ3pDLEVBQUU7R0FDQSxHQUZLLEVBQUU7Ozs7VUFFUCxDQUNOO0VBQ0U7Ozs7VUFDZ0I7Ozs7OztBQUUzQjs7O0FBRUEsT0FBTyxNQUFNLGlCQUFpQjs7bUJBQVcsWUFBWSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJUb2FzdENvbnRleHQuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVG9hc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgoKSA9PiB7fSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9hc3RQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdG9hc3RzLCBzZXRUb2FzdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBub3RpZnkgPSB1c2VDYWxsYmFjaygobWVzc2FnZSwgdHlwZSA9IFwic3VjY2Vzc1wiKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IERhdGUubm93KCkgKyBNYXRoLnJhbmRvbSgpO1xyXG4gICAgc2V0VG9hc3RzKCh0KSA9PiBbLi4udCwgeyBpZCwgbWVzc2FnZSwgdHlwZSB9XSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFRvYXN0cygodCkgPT4gdC5maWx0ZXIoKHgpID0+IHguaWQgIT09IGlkKSksIDM1MDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e25vdGlmeX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1jb250YWluZXJcIj5cclxuICAgICAgICB7dG9hc3RzLm1hcCgodCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3QuaWR9IGNsYXNzTmFtZT17YHRvYXN0IHRvYXN0LSR7dC50eXBlfWB9PlxyXG4gICAgICAgICAgICB7dC5tZXNzYWdlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Ub2FzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRvYXN0ID0gKCkgPT4gdXNlQ29udGV4dChUb2FzdENvbnRleHQpOyJdfQ==