import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Table.jsx");const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/Table.jsx";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
// columns: [{ key: "name", label: "Name", render?: (row) => JSX }]
export default function Table({ columns, data, emptyText = "No records found" }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "table-wrap",
		children: /* @__PURE__ */ _jsxDEV("table", {
			className: "table",
			children: [/* @__PURE__ */ _jsxDEV("thead", { children: /* @__PURE__ */ _jsxDEV("tr", { children: columns.map((col) => /* @__PURE__ */ _jsxDEV("th", { children: col.label }, col.key, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 15
			}, this)) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 6,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("tbody", { children: data.length === 0 ? /* @__PURE__ */ _jsxDEV("tr", { children: /* @__PURE__ */ _jsxDEV("td", {
				colSpan: columns.length,
				className: "empty",
				children: emptyText
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 15
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 13
			}, this) : data.map((row, i) => /* @__PURE__ */ _jsxDEV("tr", { children: columns.map((col) => /* @__PURE__ */ _jsxDEV("td", { children: col.render ? col.render(row) : row[col.key] }, col.key, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 19
			}, this)) }, row.id ?? i, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 15
			}, this)) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 5,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 4,
		columnNumber: 5
	}, this);
}
_c = Table;
var _c;
$RefreshReg$(_c, "Table");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Table.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/Table.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/Table.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/Table.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6Ijs7O0FBQ0EsZUFBZSxTQUFTLE1BQU0sRUFBRSxTQUFTLE1BQU0sWUFBWSxzQkFBc0I7Q0FDL0UsT0FDRSx3QkFBQyxPQUFEO0VBQUssV0FBVTtZQUNiLHdCQUFDLFNBQUQ7R0FBTyxXQUFVO2FBQWpCLENBQ0Usd0JBQUMsU0FBRCxZQUNFLHdCQUFDLE1BQUQsWUFDRyxRQUFRLEtBQUssUUFDWix3QkFBQyxNQUFELFlBQW1CLElBQUksTUFBVSxHQUF4QixJQUFJOzs7O1VBQW9CLENBQ2xDLEVBQ0M7Ozs7WUFDQzs7OzthQUNQLHdCQUFDLFNBQUQsWUFDRyxLQUFLLFdBQVcsSUFDZix3QkFBQyxNQUFELFlBQ0Usd0JBQUMsTUFBRDtJQUFJLFNBQVMsUUFBUTtJQUFRLFdBQVU7Y0FDcEM7R0FDQzs7OztZQUNGOzs7O2NBRUosS0FBSyxLQUFLLEtBQUssTUFDYix3QkFBQyxNQUFELFlBQ0csUUFBUSxLQUFLLFFBQ1osd0JBQUMsTUFBRCxZQUNHLElBQUksU0FBUyxJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxLQUN0QyxHQUZLLElBQUk7Ozs7VUFFVCxDQUNMLEVBQ0MsR0FOSyxJQUFJLE1BQU07Ozs7VUFNZixDQUNMLEVBRUU7Ozs7V0FDRjs7Ozs7O0NBQ0o7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiVGFibGUuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbHVtbnM6IFt7IGtleTogXCJuYW1lXCIsIGxhYmVsOiBcIk5hbWVcIiwgcmVuZGVyPzogKHJvdykgPT4gSlNYIH1dXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSwgZW1wdHlUZXh0ID0gXCJObyByZWNvcmRzIGZvdW5kXCIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXdyYXBcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0aCBrZXk9e2NvbC5rZXl9Pntjb2wubGFiZWx9PC90aD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2RhdGEubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofSBjbGFzc05hbWU9XCJlbXB0eVwiPlxyXG4gICAgICAgICAgICAgICAge2VtcHR5VGV4dH1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgZGF0YS5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5pZCA/PyBpfT5cclxuICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2NvbC5rZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2wucmVuZGVyID8gY29sLnJlbmRlcihyb3cpIDogcm93W2NvbC5rZXldfVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXX0=