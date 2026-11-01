import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Courses.jsx");const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];import CrudPage from "/src/components/CrudPage.jsx";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/pages/Courses.jsx";
import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
const columns = [
	{
		key: "code",
		label: "Code"
	},
	{
		key: "name",
		label: "Course Name"
	},
	{
		key: "duration",
		label: "Duration",
		render: (r) => r.duration || "—"
	},
	{
		key: "teacher_name",
		label: "Teacher",
		render: (r) => r.teacher_name || "—"
	}
];
const fields = [
	{
		name: "name",
		label: "Course Name",
		required: true,
		placeholder: "e.g. Chemistry"
	},
	{
		name: "code",
		label: "Course Code",
		required: true,
		placeholder: "e.g. CHEM101"
	},
	{
		name: "duration",
		label: "Duration",
		placeholder: "e.g. 3 years"
	},
	{
		name: "teacher",
		label: "Teacher",
		type: "select",
		optionsEndpoint: "teachers",
		optionLabel: (t) => t.name
	}
];
export default function Courses() {
	return /* @__PURE__ */ _jsxDEV(CrudPage, {
		title: "Courses",
		subtitle: "Manage all courses",
		endpoint: "courses",
		singular: "Course",
		columns,
		fields
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
_c = Courses;
var _c;
$RefreshReg$(_c, "Courses");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Courses.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/pages/Courses.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/pages/Courses.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/pages/Courses.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxjQUFjOzs7QUFFckIsTUFBTSxVQUFVO0NBQ2Q7RUFBRSxLQUFLO0VBQVEsT0FBTztDQUFPO0NBQzdCO0VBQUUsS0FBSztFQUFRLE9BQU87Q0FBYztDQUNwQztFQUFFLEtBQUs7RUFBWSxPQUFPO0VBQVksU0FBUyxNQUFNLEVBQUUsWUFBWTtDQUFJO0NBQ3ZFO0VBQUUsS0FBSztFQUFnQixPQUFPO0VBQVcsU0FBUyxNQUFNLEVBQUUsZ0JBQWdCO0NBQUk7QUFDaEY7QUFFQSxNQUFNLFNBQVM7Q0FDYjtFQUFFLE1BQU07RUFBUSxPQUFPO0VBQWUsVUFBVTtFQUFNLGFBQWE7Q0FBaUI7Q0FDcEY7RUFBRSxNQUFNO0VBQVEsT0FBTztFQUFlLFVBQVU7RUFBTSxhQUFhO0NBQWU7Q0FDbEY7RUFBRSxNQUFNO0VBQVksT0FBTztFQUFZLGFBQWE7Q0FBZTtDQUNuRTtFQUNFLE1BQU07RUFDTixPQUFPO0VBQ1AsTUFBTTtFQUNOLGlCQUFpQjtFQUNqQixjQUFjLE1BQU0sRUFBRTtDQUN4QjtBQUNGO0FBRUEsZUFBZSxTQUFTLFVBQVU7Q0FDaEMsT0FDRSx3QkFBQyxVQUFEO0VBQ0UsT0FBTTtFQUNOLFVBQVM7RUFDVCxVQUFTO0VBQ1QsVUFBUztFQUNBO0VBQ0Q7Q0FDVDs7Ozs7QUFFTCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDb3Vyc2VzLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3J1ZFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1ZFBhZ2VcIjtcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgeyBrZXk6IFwiY29kZVwiLCBsYWJlbDogXCJDb2RlXCIgfSxcclxuICB7IGtleTogXCJuYW1lXCIsIGxhYmVsOiBcIkNvdXJzZSBOYW1lXCIgfSxcclxuICB7IGtleTogXCJkdXJhdGlvblwiLCBsYWJlbDogXCJEdXJhdGlvblwiLCByZW5kZXI6IChyKSA9PiByLmR1cmF0aW9uIHx8IFwi4oCUXCIgfSxcclxuICB7IGtleTogXCJ0ZWFjaGVyX25hbWVcIiwgbGFiZWw6IFwiVGVhY2hlclwiLCByZW5kZXI6IChyKSA9PiByLnRlYWNoZXJfbmFtZSB8fCBcIuKAlFwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBmaWVsZHMgPSBbXHJcbiAgeyBuYW1lOiBcIm5hbWVcIiwgbGFiZWw6IFwiQ291cnNlIE5hbWVcIiwgcmVxdWlyZWQ6IHRydWUsIHBsYWNlaG9sZGVyOiBcImUuZy4gQ2hlbWlzdHJ5XCIgfSxcclxuICB7IG5hbWU6IFwiY29kZVwiLCBsYWJlbDogXCJDb3Vyc2UgQ29kZVwiLCByZXF1aXJlZDogdHJ1ZSwgcGxhY2Vob2xkZXI6IFwiZS5nLiBDSEVNMTAxXCIgfSxcclxuICB7IG5hbWU6IFwiZHVyYXRpb25cIiwgbGFiZWw6IFwiRHVyYXRpb25cIiwgcGxhY2Vob2xkZXI6IFwiZS5nLiAzIHllYXJzXCIgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInRlYWNoZXJcIixcclxuICAgIGxhYmVsOiBcIlRlYWNoZXJcIixcclxuICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICBvcHRpb25zRW5kcG9pbnQ6IFwidGVhY2hlcnNcIixcclxuICAgIG9wdGlvbkxhYmVsOiAodCkgPT4gdC5uYW1lLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q3J1ZFBhZ2VcclxuICAgICAgdGl0bGU9XCJDb3Vyc2VzXCJcclxuICAgICAgc3VidGl0bGU9XCJNYW5hZ2UgYWxsIGNvdXJzZXNcIlxyXG4gICAgICBlbmRwb2ludD1cImNvdXJzZXNcIlxyXG4gICAgICBzaW5ndWxhcj1cIkNvdXJzZVwiXHJcbiAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgIGZpZWxkcz17ZmllbGRzfVxyXG4gICAgLz5cclxuICApO1xyXG59Il19