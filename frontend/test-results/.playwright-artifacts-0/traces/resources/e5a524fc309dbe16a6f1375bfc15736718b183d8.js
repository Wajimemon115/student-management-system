import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Sidebar.jsx");const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];import { NavLink } from "/node_modules/.vite/deps/react-router-dom.js?v=783bbbf0";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/Sidebar.jsx";
import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
const links = [
	{
		to: "/",
		label: "Dashboard"
	},
	{
		to: "/students",
		label: "Students"
	},
	{
		to: "/courses",
		label: "Courses"
	},
	{
		to: "/teachers",
		label: "Teachers"
	},
	{
		to: "/results",
		label: "Results"
	},
	{
		to: "/attendance",
		label: "Attendance"
	}
];
export default function Sidebar() {
	return /* @__PURE__ */ _jsxDEV("aside", {
		className: "sidebar",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "brand",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "brand-logo",
				children: "S"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "brand-title",
				children: "StudentHub"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 11
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "brand-subtitle",
				children: "Management System"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("nav", {
			className: "nav",
			children: links.map((link) => /* @__PURE__ */ _jsxDEV(NavLink, {
				to: link.to,
				end: link.to === "/",
				className: ({ isActive }) => isActive ? "nav-link active" : "nav-link",
				children: link.label
			}, link.to, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
_c = Sidebar;
var _c;
$RefreshReg$(_c, "Sidebar");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Sidebar.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/Sidebar.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/Sidebar.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/Sidebar.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxlQUFlOzs7QUFFeEIsTUFBTSxRQUFRO0NBQ1o7RUFBRSxJQUFJO0VBQUssT0FBTztDQUFZO0NBQzlCO0VBQUUsSUFBSTtFQUFhLE9BQU87Q0FBVztDQUNyQztFQUFFLElBQUk7RUFBWSxPQUFPO0NBQVU7Q0FDbkM7RUFBRSxJQUFJO0VBQWEsT0FBTztDQUFXO0NBQ3JDO0VBQUUsSUFBSTtFQUFZLE9BQU87Q0FBVTtDQUNuQztFQUFFLElBQUk7RUFBZSxPQUFPO0NBQWE7QUFDM0M7QUFFQSxlQUFlLFNBQVMsVUFBVTtDQUNoQyxPQUNFLHdCQUFDLFNBQUQ7RUFBTyxXQUFVO1lBQWpCLENBQ0Usd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFBZixDQUNFLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQWE7R0FBTTs7OzthQUNsQyx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBYztHQUFlOzs7O2FBQzVDLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQWlCO0dBQXNCOzs7O1dBQ25EOzs7O1dBQ0Y7Ozs7O1lBRUwsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFDWixNQUFNLEtBQUssU0FDVix3QkFBQyxTQUFEO0lBRUUsSUFBSSxLQUFLO0lBQ1QsS0FBSyxLQUFLLE9BQU87SUFDakIsWUFBWSxFQUFFLGVBQ1osV0FBVyxvQkFBb0I7Y0FHaEMsS0FBSztHQUNDLEdBUkYsS0FBSzs7OztVQVFILENBQ1Y7RUFDRTs7OztVQUNBOzs7Ozs7QUFFWCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJTaWRlYmFyLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHsgdG86IFwiL1wiLCBsYWJlbDogXCJEYXNoYm9hcmRcIiB9LFxyXG4gIHsgdG86IFwiL3N0dWRlbnRzXCIsIGxhYmVsOiBcIlN0dWRlbnRzXCIgfSxcclxuICB7IHRvOiBcIi9jb3Vyc2VzXCIsIGxhYmVsOiBcIkNvdXJzZXNcIiB9LFxyXG4gIHsgdG86IFwiL3RlYWNoZXJzXCIsIGxhYmVsOiBcIlRlYWNoZXJzXCIgfSxcclxuICB7IHRvOiBcIi9yZXN1bHRzXCIsIGxhYmVsOiBcIlJlc3VsdHNcIiB9LFxyXG4gIHsgdG86IFwiL2F0dGVuZGFuY2VcIiwgbGFiZWw6IFwiQXR0ZW5kYW5jZVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+UzwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLXRpdGxlXCI+U3R1ZGVudEh1YjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1zdWJ0aXRsZVwiPk1hbmFnZW1lbnQgU3lzdGVtPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICBrZXk9e2xpbmsudG99XHJcbiAgICAgICAgICAgIHRvPXtsaW5rLnRvfVxyXG4gICAgICAgICAgICBlbmQ9e2xpbmsudG8gPT09IFwiL1wifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XHJcbiAgICAgICAgICAgICAgaXNBY3RpdmUgPyBcIm5hdi1saW5rIGFjdGl2ZVwiIDogXCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xpbmsubGFiZWx9XHJcbiAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9hc2lkZT5cclxuICApO1xyXG59Il19