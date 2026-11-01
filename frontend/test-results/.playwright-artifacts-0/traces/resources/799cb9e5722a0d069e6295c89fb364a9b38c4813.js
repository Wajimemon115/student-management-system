import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/SearchBar.jsx");const useEffect = __vite__cjsImport0_react["useEffect"]; const useRef = __vite__cjsImport0_react["useRef"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=25fa87c4";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/SearchBar.jsx";
import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
var _s = $RefreshSig$();
export default function SearchBar({ onChange, placeholder = "Search..." }) {
	_s();
	const [value, setValue] = useState("");
	const first = useRef(true);
	useEffect(() => {
		if (first.current) {
			first.current = false;
			return;
		}
		const timer = setTimeout(() => onChange(value), 400);
		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);
	return /* @__PURE__ */ _jsxDEV("input", {
		className: "form-input search-input",
		placeholder,
		value,
		onChange: (e) => setValue(e.target.value)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
_s(SearchBar, "cWQvb2Ftm3ihoAAMlrgDjLZS4KY=");
_c = SearchBar;
var _c;
$RefreshReg$(_c, "SearchBar");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/SearchBar.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/SearchBar.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/SearchBar.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/SearchBar.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxXQUFXLFFBQVEsZ0JBQWdCOzs7O0FBRTVDLGVBQWUsU0FBUyxVQUFVLEVBQUUsVUFBVSxjQUFjLGVBQWU7O0NBQ3pFLE1BQU0sQ0FBQyxPQUFPLFlBQVksU0FBUyxFQUFFO0NBQ3JDLE1BQU0sUUFBUSxPQUFPLElBQUk7Q0FFekIsZ0JBQWdCO0VBQ2QsSUFBSSxNQUFNLFNBQVM7R0FDakIsTUFBTSxVQUFVO0dBQ2hCO0VBQ0Y7RUFDQSxNQUFNLFFBQVEsaUJBQWlCLFNBQVMsS0FBSyxHQUFHLEdBQUc7RUFDbkQsYUFBYSxhQUFhLEtBQUs7O0NBRWpDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Q0FFVixPQUNFLHdCQUFDLFNBQUQ7RUFDRSxXQUFVO0VBQ0c7RUFDTjtFQUNQLFdBQVcsTUFBTSxTQUFTLEVBQUUsT0FBTyxLQUFLO0NBQ3pDOzs7OztBQUVMIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIlNlYXJjaEJhci5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hCYXIoeyBvbkNoYW5nZSwgcGxhY2Vob2xkZXIgPSBcIlNlYXJjaC4uLlwiIH0pIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGZpcnN0ID0gdXNlUmVmKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGZpcnN0LmN1cnJlbnQpIHtcclxuICAgICAgZmlyc3QuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gb25DaGFuZ2UodmFsdWUpLCA0MDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXRcclxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCBzZWFyY2gtaW5wdXRcIlxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn0iXX0=