import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Students.jsx");const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];import CrudPage from "/src/components/CrudPage.jsx";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/pages/Students.jsx";
import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
const columns = [
	{
		key: "roll_number",
		label: "Roll No"
	},
	{
		key: "name",
		label: "Name"
	},
	{
		key: "email",
		label: "Email"
	},
	{
		key: "course_name",
		label: "Course",
		render: (r) => r.course_name || "—"
	},
	{
		key: "phone",
		label: "Phone",
		render: (r) => r.phone || "—"
	}
];
const fields = [
	{
		name: "name",
		label: "Full Name",
		required: true,
		placeholder: "Enter full name"
	},
	{
		name: "roll_number",
		label: "Roll Number",
		required: true,
		placeholder: "e.g. S-004"
	},
	{
		name: "email",
		label: "Email",
		type: "email",
		required: true,
		placeholder: "student@example.com"
	},
	{
		name: "phone",
		label: "Phone",
		placeholder: "03XX-XXXXXXX"
	},
	{
		name: "date_of_birth",
		label: "Date of Birth",
		type: "date"
	},
	{
		name: "course",
		label: "Course",
		type: "select",
		optionsEndpoint: "courses",
		optionLabel: (c) => `${c.code} - ${c.name}`
	},
	{
		name: "address",
		label: "Address",
		type: "textarea",
		placeholder: "Enter address"
	}
];
export default function Students() {
	return /* @__PURE__ */ _jsxDEV(CrudPage, {
		title: "Students",
		subtitle: "Manage all students",
		endpoint: "students",
		singular: "Student",
		columns,
		fields
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
_c = Students;
var _c;
$RefreshReg$(_c, "Students");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Students.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/pages/Students.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/pages/Students.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/pages/Students.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxjQUFjOzs7QUFFckIsTUFBTSxVQUFVO0NBQ2Q7RUFBRSxLQUFLO0VBQWUsT0FBTztDQUFVO0NBQ3ZDO0VBQUUsS0FBSztFQUFRLE9BQU87Q0FBTztDQUM3QjtFQUFFLEtBQUs7RUFBUyxPQUFPO0NBQVE7Q0FDL0I7RUFBRSxLQUFLO0VBQWUsT0FBTztFQUFVLFNBQVMsTUFBTSxFQUFFLGVBQWU7Q0FBSTtDQUMzRTtFQUFFLEtBQUs7RUFBUyxPQUFPO0VBQVMsU0FBUyxNQUFNLEVBQUUsU0FBUztDQUFJO0FBQ2hFO0FBRUEsTUFBTSxTQUFTO0NBQ2I7RUFBRSxNQUFNO0VBQVEsT0FBTztFQUFhLFVBQVU7RUFBTSxhQUFhO0NBQWtCO0NBQ25GO0VBQUUsTUFBTTtFQUFlLE9BQU87RUFBZSxVQUFVO0VBQU0sYUFBYTtDQUFhO0NBQ3ZGO0VBQUUsTUFBTTtFQUFTLE9BQU87RUFBUyxNQUFNO0VBQVMsVUFBVTtFQUFNLGFBQWE7Q0FBc0I7Q0FDbkc7RUFBRSxNQUFNO0VBQVMsT0FBTztFQUFTLGFBQWE7Q0FBZTtDQUM3RDtFQUFFLE1BQU07RUFBaUIsT0FBTztFQUFpQixNQUFNO0NBQU87Q0FDOUQ7RUFDRSxNQUFNO0VBQ04sT0FBTztFQUNQLE1BQU07RUFDTixpQkFBaUI7RUFDakIsY0FBYyxNQUFNLEdBQUcsRUFBRSxLQUFLLEtBQUssRUFBRTtDQUN2QztDQUNBO0VBQUUsTUFBTTtFQUFXLE9BQU87RUFBVyxNQUFNO0VBQVksYUFBYTtDQUFnQjtBQUN0RjtBQUVBLGVBQWUsU0FBUyxXQUFXO0NBQ2pDLE9BQ0Usd0JBQUMsVUFBRDtFQUNFLE9BQU07RUFDTixVQUFTO0VBQ1QsVUFBUztFQUNULFVBQVM7RUFDQTtFQUNEO0NBQ1Q7Ozs7O0FBRUwiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiU3R1ZGVudHMuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcnVkUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVkUGFnZVwiO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7IGtleTogXCJyb2xsX251bWJlclwiLCBsYWJlbDogXCJSb2xsIE5vXCIgfSxcclxuICB7IGtleTogXCJuYW1lXCIsIGxhYmVsOiBcIk5hbWVcIiB9LFxyXG4gIHsga2V5OiBcImVtYWlsXCIsIGxhYmVsOiBcIkVtYWlsXCIgfSxcclxuICB7IGtleTogXCJjb3Vyc2VfbmFtZVwiLCBsYWJlbDogXCJDb3Vyc2VcIiwgcmVuZGVyOiAocikgPT4gci5jb3Vyc2VfbmFtZSB8fCBcIuKAlFwiIH0sXHJcbiAgeyBrZXk6IFwicGhvbmVcIiwgbGFiZWw6IFwiUGhvbmVcIiwgcmVuZGVyOiAocikgPT4gci5waG9uZSB8fCBcIuKAlFwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBmaWVsZHMgPSBbXHJcbiAgeyBuYW1lOiBcIm5hbWVcIiwgbGFiZWw6IFwiRnVsbCBOYW1lXCIsIHJlcXVpcmVkOiB0cnVlLCBwbGFjZWhvbGRlcjogXCJFbnRlciBmdWxsIG5hbWVcIiB9LFxyXG4gIHsgbmFtZTogXCJyb2xsX251bWJlclwiLCBsYWJlbDogXCJSb2xsIE51bWJlclwiLCByZXF1aXJlZDogdHJ1ZSwgcGxhY2Vob2xkZXI6IFwiZS5nLiBTLTAwNFwiIH0sXHJcbiAgeyBuYW1lOiBcImVtYWlsXCIsIGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiwgcmVxdWlyZWQ6IHRydWUsIHBsYWNlaG9sZGVyOiBcInN0dWRlbnRAZXhhbXBsZS5jb21cIiB9LFxyXG4gIHsgbmFtZTogXCJwaG9uZVwiLCBsYWJlbDogXCJQaG9uZVwiLCBwbGFjZWhvbGRlcjogXCIwM1hYLVhYWFhYWFhcIiB9LFxyXG4gIHsgbmFtZTogXCJkYXRlX29mX2JpcnRoXCIsIGxhYmVsOiBcIkRhdGUgb2YgQmlydGhcIiwgdHlwZTogXCJkYXRlXCIgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImNvdXJzZVwiLFxyXG4gICAgbGFiZWw6IFwiQ291cnNlXCIsXHJcbiAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgb3B0aW9uc0VuZHBvaW50OiBcImNvdXJzZXNcIixcclxuICAgIG9wdGlvbkxhYmVsOiAoYykgPT4gYCR7Yy5jb2RlfSAtICR7Yy5uYW1lfWAsXHJcbiAgfSxcclxuICB7IG5hbWU6IFwiYWRkcmVzc1wiLCBsYWJlbDogXCJBZGRyZXNzXCIsIHR5cGU6IFwidGV4dGFyZWFcIiwgcGxhY2Vob2xkZXI6IFwiRW50ZXIgYWRkcmVzc1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHVkZW50cygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENydWRQYWdlXHJcbiAgICAgIHRpdGxlPVwiU3R1ZGVudHNcIlxyXG4gICAgICBzdWJ0aXRsZT1cIk1hbmFnZSBhbGwgc3R1ZGVudHNcIlxyXG4gICAgICBlbmRwb2ludD1cInN0dWRlbnRzXCJcclxuICAgICAgc2luZ3VsYXI9XCJTdHVkZW50XCJcclxuICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAvPlxyXG4gICk7XHJcbn0iXX0=