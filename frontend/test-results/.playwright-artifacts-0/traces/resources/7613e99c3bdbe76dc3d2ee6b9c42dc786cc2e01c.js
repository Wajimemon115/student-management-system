import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Dashboard.jsx");const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport5_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=25fa87c4";
import api from "/src/api/axios.js";
import PageHeader from "/src/components/PageHeader.jsx";
import StatCard from "/src/components/StatCard.jsx";
import Button from "/src/components/Button.jsx";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/pages/Dashboard.jsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
var _s = $RefreshSig$();
const CARDS = [
	{
		key: "students",
		label: "Students"
	},
	{
		key: "courses",
		label: "Courses"
	},
	{
		key: "teachers",
		label: "Teachers"
	},
	{
		key: "results",
		label: "Results"
	},
	{
		key: "attendance",
		label: "Attendance"
	}
];
export default function Dashboard() {
	_s();
	const [stats, setStats] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const loadStats = () => {
		setLoading(true);
		setError("");
		api.get("/dashboard/stats/").then((res) => setStats(res.data)).catch(() => setError("Could not load dashboard data. Is the backend running?")).finally(() => setLoading(false));
	};
	useEffect(() => {
		loadStats();
	}, []);
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(PageHeader, {
		title: "Dashboard",
		subtitle: "Student Management System"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 7
	}, this), error ? /* @__PURE__ */ _jsxDEV("div", {
		className: "error-box",
		children: [/* @__PURE__ */ _jsxDEV("span", { children: error }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 11
		}, this), /* @__PURE__ */ _jsxDEV(Button, {
			variant: "danger",
			size: "sm",
			onClick: loadStats,
			children: "Retry"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 11
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 39,
		columnNumber: 9
	}, this) : /* @__PURE__ */ _jsxDEV("div", {
		className: "stats-grid",
		children: CARDS.map((card) => /* @__PURE__ */ _jsxDEV(StatCard, {
			label: card.label,
			value: stats?.[card.key],
			loading
		}, card.key, false, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 13
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
_s(Dashboard, "VfpkwieIQrw8dfGOFxub4vcpA8s=");
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Dashboard.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/pages/Dashboard.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/pages/Dashboard.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/pages/Dashboard.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxXQUFXLGdCQUFnQjtBQUNwQyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sWUFBWTs7OztBQUVuQixNQUFNLFFBQVE7Q0FDWjtFQUFFLEtBQUs7RUFBWSxPQUFPO0NBQVc7Q0FDckM7RUFBRSxLQUFLO0VBQVcsT0FBTztDQUFVO0NBQ25DO0VBQUUsS0FBSztFQUFZLE9BQU87Q0FBVztDQUNyQztFQUFFLEtBQUs7RUFBVyxPQUFPO0NBQVU7Q0FDbkM7RUFBRSxLQUFLO0VBQWMsT0FBTztDQUFhO0FBQzNDO0FBRUEsZUFBZSxTQUFTLFlBQVk7O0NBQ2xDLE1BQU0sQ0FBQyxPQUFPLFlBQVksU0FBUyxJQUFJO0NBQ3ZDLE1BQU0sQ0FBQyxTQUFTLGNBQWMsU0FBUyxJQUFJO0NBQzNDLE1BQU0sQ0FBQyxPQUFPLFlBQVksU0FBUyxFQUFFO0NBRXJDLE1BQU0sa0JBQWtCO0VBQ3RCLFdBQVcsSUFBSTtFQUNmLFNBQVMsRUFBRTtFQUNYLElBQ0csSUFBSSxtQkFBbUIsQ0FBQyxDQUN4QixNQUFNLFFBQVEsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQ2pDLFlBQVksU0FBUyx3REFBd0QsQ0FBQyxDQUFDLENBQy9FLGNBQWMsV0FBVyxLQUFLLENBQUM7Q0FDcEM7Q0FFQSxnQkFBZ0I7RUFDZCxVQUFVO0NBQ1osR0FBRyxDQUFDLENBQUM7Q0FFTCxPQUNFLGdEQUNFLHdCQUFDLFlBQUQ7RUFBWSxPQUFNO0VBQVksVUFBUztDQUE2Qjs7OztXQUVuRSxRQUNDLHdCQUFDLE9BQUQ7RUFBSyxXQUFVO1lBQWYsQ0FDRSx3QkFBQyxRQUFELFlBQU8sTUFBWTs7OztZQUNuQix3QkFBQyxRQUFEO0dBQVEsU0FBUTtHQUFTLE1BQUs7R0FBSyxTQUFTO2FBQVc7RUFFL0M7Ozs7VUFDTDs7Ozs7WUFFTCx3QkFBQyxPQUFEO0VBQUssV0FBVTtZQUNaLE1BQU0sS0FBSyxTQUNWLHdCQUFDLFVBQUQ7R0FFRSxPQUFPLEtBQUs7R0FDWixPQUFPLFFBQVEsS0FBSztHQUNYO0VBQ1YsR0FKTSxLQUFLOzs7O1NBSVgsQ0FDRjtDQUNFOzs7O1NBRVA7Ozs7O0FBRU4iLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRGFzaGJvYXJkLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyXCI7XHJcbmltcG9ydCBTdGF0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TdGF0Q2FyZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuY29uc3QgQ0FSRFMgPSBbXHJcbiAgeyBrZXk6IFwic3R1ZGVudHNcIiwgbGFiZWw6IFwiU3R1ZGVudHNcIiB9LFxyXG4gIHsga2V5OiBcImNvdXJzZXNcIiwgbGFiZWw6IFwiQ291cnNlc1wiIH0sXHJcbiAgeyBrZXk6IFwidGVhY2hlcnNcIiwgbGFiZWw6IFwiVGVhY2hlcnNcIiB9LFxyXG4gIHsga2V5OiBcInJlc3VsdHNcIiwgbGFiZWw6IFwiUmVzdWx0c1wiIH0sXHJcbiAgeyBrZXk6IFwiYXR0ZW5kYW5jZVwiLCBsYWJlbDogXCJBdHRlbmRhbmNlXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGxvYWRTdGF0cyA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgIGFwaVxyXG4gICAgICAuZ2V0KFwiL2Rhc2hib2FyZC9zdGF0cy9cIilcclxuICAgICAgLnRoZW4oKHJlcykgPT4gc2V0U3RhdHMocmVzLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gc2V0RXJyb3IoXCJDb3VsZCBub3QgbG9hZCBkYXNoYm9hcmQgZGF0YS4gSXMgdGhlIGJhY2tlbmQgcnVubmluZz9cIikpXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZFN0YXRzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJEYXNoYm9hcmRcIiBzdWJ0aXRsZT1cIlN0dWRlbnQgTWFuYWdlbWVudCBTeXN0ZW1cIiAvPlxyXG5cclxuICAgICAge2Vycm9yID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYm94XCI+XHJcbiAgICAgICAgICA8c3Bhbj57ZXJyb3J9PC9zcGFuPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgc2l6ZT1cInNtXCIgb25DbGljaz17bG9hZFN0YXRzfT5cclxuICAgICAgICAgICAgUmV0cnlcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHMtZ3JpZFwiPlxyXG4gICAgICAgICAge0NBUkRTLm1hcCgoY2FyZCkgPT4gKFxyXG4gICAgICAgICAgICA8U3RhdENhcmRcclxuICAgICAgICAgICAgICBrZXk9e2NhcmQua2V5fVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtjYXJkLmxhYmVsfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0cz8uW2NhcmQua2V5XX1cclxuICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il19