import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/CrudPage.jsx");const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport14_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport14_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=25fa87c4";
import api from "/src/api/axios.js";
import useCrud from "/src/hooks/useCrud.js";
import { useToast } from "/src/context/ToastContext.jsx";
import { parseApiErrors } from "/src/utils/errors.js";
import PageHeader from "/src/components/PageHeader.jsx";
import Table from "/src/components/Table.jsx";
import Button from "/src/components/Button.jsx";
import Modal from "/src/components/Modal.jsx";
import FormInput from "/src/components/FormInput.jsx";
import FormSelect from "/src/components/FormSelect.jsx";
import SearchBar from "/src/components/SearchBar.jsx";
import Pagination from "/src/components/Pagination.jsx";
import ConfirmDialog from "/src/components/ConfirmDialog.jsx";
var _jsxFileName = "E:/projects/student-management-system/frontend/src/components/CrudPage.jsx";
import __vite__cjsImport14_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=25fa87c4";
var _s = $RefreshSig$();
const PAGE_SIZE = 10;
export default function CrudPage({ title, subtitle, endpoint, singular, columns, fields, nameKey = "name" }) {
	_s();
	const notify = useToast();
	const { items, count, page, setPage, loading, error, onSearch, create, update, remove, reload } = useCrud(endpoint, PAGE_SIZE);
	const [modalOpen, setModalOpen] = useState(false);
	const [editing, setEditing] = useState(null);
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});
	const [saving, setSaving] = useState(false);
	const [deleting, setDeleting] = useState(null);
	const [deleteLoading, setDeleteLoading] = useState(false);
	const [options, setOptions] = useState({});
	// Load dropdown options (e.g. courses for the student form)
	useEffect(() => {
		fields.filter((f) => f.optionsEndpoint).forEach((f) => {
			api.get(`/${f.optionsEndpoint}/`, { params: { page_size: 100 } }).then((res) => setOptions((o) => ({
				...o,
				[f.name]: res.data.results.map((item) => ({
					value: item.id,
					label: f.optionLabel(item)
				}))
			}))).catch(() => {});
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const emptyForm = () => fields.reduce((acc, f) => ({
		...acc,
		[f.name]: ""
	}), {});
	const openAdd = () => {
		setEditing(null);
		setForm(emptyForm());
		setErrors({});
		setModalOpen(true);
	};
	const openEdit = (row) => {
		setEditing(row);
		setForm(fields.reduce((acc, f) => ({
			...acc,
			[f.name]: row[f.name] ?? ""
		}), {}));
		setErrors({});
		setModalOpen(true);
	};
	const handleChange = (name, value) => {
		setForm((f) => ({
			...f,
			[name]: value
		}));
		if (errors[name]) setErrors((e) => ({
			...e,
			[name]: undefined
		}));
	};
	const validate = () => {
		const errs = {};
		fields.forEach((f) => {
			if (f.required && !String(form[f.name] ?? "").trim()) {
				errs[f.name] = `${f.label} is required`;
			}
		});
		return errs;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const errs = validate();
		if (Object.keys(errs).length) {
			setErrors(errs);
			return;
		}
		const payload = {};
		fields.forEach((f) => {
			let value = form[f.name];
			if (value === "" && (f.type === "select" || f.type === "date")) value = null;
			payload[f.name] = value;
		});
		setSaving(true);
		try {
			if (editing) {
				await update(editing.id, payload);
				notify(`${singular} updated`);
			} else {
				await create(payload);
				notify(`${singular} added`);
			}
			setModalOpen(false);
		} catch (err) {
			const apiErrors = parseApiErrors(err);
			setErrors(apiErrors);
			notify(Object.keys(apiErrors).length ? "Please fix the errors in the form" : "Something went wrong", "error");
		} finally {
			setSaving(false);
		}
	};
	const confirmDelete = async () => {
		setDeleteLoading(true);
		try {
			await remove(deleting.id);
			notify(`${singular} deleted`);
			setDeleting(null);
		} catch {
			notify(`Could not delete ${singular.toLowerCase()}`, "error");
		} finally {
			setDeleteLoading(false);
		}
	};
	const allColumns = [...columns, {
		key: "actions",
		label: "Actions",
		render: (row) => /* @__PURE__ */ _jsxDEV("div", {
			className: "row-actions",
			children: [/* @__PURE__ */ _jsxDEV(Button, {
				variant: "secondary",
				size: "sm",
				onClick: () => openEdit(row),
				children: "Edit"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 11
			}, this), /* @__PURE__ */ _jsxDEV(Button, {
				variant: "danger",
				size: "sm",
				onClick: () => setDeleting(row),
				children: "Delete"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 153,
			columnNumber: 9
		}, this)
	}];
	const renderField = (f) => {
		const common = {
			key: f.name,
			label: f.label,
			value: form[f.name] ?? "",
			error: errors[f.name],
			onChange: (e) => handleChange(f.name, e.target.value)
		};
		if (f.type === "select") {
			return /* @__PURE__ */ _jsxDEV(FormSelect, {
				...common,
				options: options[f.name] || []
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 175,
				columnNumber: 14
			}, this);
		}
		if (f.type === "textarea") {
			return /* @__PURE__ */ _jsxDEV(FormInput, {
				...common,
				as: "textarea",
				rows: 3,
				placeholder: f.placeholder
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 178,
				columnNumber: 14
			}, this);
		}
		return /* @__PURE__ */ _jsxDEV(FormInput, {
			...common,
			type: f.type || "text",
			placeholder: f.placeholder
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 180,
			columnNumber: 12
		}, this);
	};
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
		/* @__PURE__ */ _jsxDEV(PageHeader, {
			title,
			subtitle,
			children: /* @__PURE__ */ _jsxDEV(Button, {
				onClick: openAdd,
				children: ["+ Add ", singular]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 186,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 185,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("div", {
			className: "card",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "toolbar",
					children: /* @__PURE__ */ _jsxDEV(SearchBar, {
						onChange: onSearch,
						placeholder: `Search ${title.toLowerCase()}...`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 191,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 190,
					columnNumber: 9
				}, this),
				error ? /* @__PURE__ */ _jsxDEV("div", {
					className: "error-box",
					children: [/* @__PURE__ */ _jsxDEV("span", { children: error }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 199,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV(Button, {
						variant: "danger",
						size: "sm",
						onClick: reload,
						children: "Retry"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 200,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 198,
					columnNumber: 11
				}, this) : loading && items.length === 0 ? /* @__PURE__ */ _jsxDEV("div", {
					className: "empty",
					children: "Loading..."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 205,
					columnNumber: 11
				}, this) : /* @__PURE__ */ _jsxDEV("div", {
					className: loading ? "dimmed" : "",
					children: /* @__PURE__ */ _jsxDEV(Table, {
						columns: allColumns,
						data: items
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 208,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 207,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV(Pagination, {
					page,
					count,
					pageSize: PAGE_SIZE,
					onPageChange: setPage
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 189,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Modal, {
			open: modalOpen,
			title: editing ? `Edit ${singular}` : `Add ${singular}`,
			onClose: () => setModalOpen(false),
			children: /* @__PURE__ */ _jsxDEV("form", {
				onSubmit: handleSubmit,
				noValidate: true,
				children: [
					errors.non_field_errors && /* @__PURE__ */ _jsxDEV("div", {
						className: "form-error",
						style: { marginBottom: 12 },
						children: errors.non_field_errors
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 227,
						columnNumber: 13
					}, this),
					fields.map(renderField),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "form-actions",
						children: [/* @__PURE__ */ _jsxDEV(Button, {
							type: "button",
							variant: "secondary",
							onClick: () => setModalOpen(false),
							children: "Cancel"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 233,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV(Button, {
							type: "submit",
							disabled: saving,
							children: saving ? "Saving..." : "Save"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 240,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 232,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 225,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 220,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(ConfirmDialog, {
			open: !!deleting,
			message: `Are you sure you want to delete "${deleting?.[nameKey] ?? ""}"? This cannot be undone.`,
			onConfirm: confirmDelete,
			onCancel: () => setDeleting(null),
			loading: deleteLoading
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 247,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 184,
		columnNumber: 5
	}, this);
}
_s(CrudPage, "zETDJspZpJMIfoIPXSgbd3F9tvM=", false, function() {
	return [useToast, useCrud];
});
_c = CrudPage;
var _c;
$RefreshReg$(_c, "CrudPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/CrudPage.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("E:/projects/student-management-system/frontend/src/components/CrudPage.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/projects/student-management-system/frontend/src/components/CrudPage.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "E:/projects/student-management-system/frontend/src/components/CrudPage.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xyXG5pbXBvcnQgdXNlQ3J1ZCBmcm9tIFwiLi4vaG9va3MvdXNlQ3J1ZFwiO1xyXG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCIuLi9jb250ZXh0L1RvYXN0Q29udGV4dFwiO1xyXG5pbXBvcnQgeyBwYXJzZUFwaUVycm9ycyB9IGZyb20gXCIuLi91dGlscy9lcnJvcnNcIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIi4vUGFnZUhlYWRlclwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vVGFibGVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSBcIi4vRm9ybUlucHV0XCI7XHJcbmltcG9ydCBGb3JtU2VsZWN0IGZyb20gXCIuL0Zvcm1TZWxlY3RcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tIFwiLi9Db25maXJtRGlhbG9nXCI7XHJcblxyXG5jb25zdCBQQUdFX1NJWkUgPSAxMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENydWRQYWdlKHtcclxuICB0aXRsZSxcclxuICBzdWJ0aXRsZSxcclxuICBlbmRwb2ludCxcclxuICBzaW5ndWxhcixcclxuICBjb2x1bW5zLFxyXG4gIGZpZWxkcyxcclxuICBuYW1lS2V5ID0gXCJuYW1lXCIsXHJcbn0pIHtcclxuICBjb25zdCBub3RpZnkgPSB1c2VUb2FzdCgpO1xyXG4gIGNvbnN0IHsgaXRlbXMsIGNvdW50LCBwYWdlLCBzZXRQYWdlLCBsb2FkaW5nLCBlcnJvciwgb25TZWFyY2gsIGNyZWF0ZSwgdXBkYXRlLCByZW1vdmUsIHJlbG9hZCB9ID1cclxuICAgIHVzZUNydWQoZW5kcG9pbnQsIFBBR0VfU0laRSk7XHJcblxyXG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2VkaXRpbmcsIHNldEVkaXRpbmddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGVsZXRpbmcsIHNldERlbGV0aW5nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZWxldGVMb2FkaW5nLCBzZXREZWxldGVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIC8vIExvYWQgZHJvcGRvd24gb3B0aW9ucyAoZS5nLiBjb3Vyc2VzIGZvciB0aGUgc3R1ZGVudCBmb3JtKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaWVsZHNcclxuICAgICAgLmZpbHRlcigoZikgPT4gZi5vcHRpb25zRW5kcG9pbnQpXHJcbiAgICAgIC5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgYXBpXHJcbiAgICAgICAgICAuZ2V0KGAvJHtmLm9wdGlvbnNFbmRwb2ludH0vYCwgeyBwYXJhbXM6IHsgcGFnZV9zaXplOiAxMDAgfSB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT5cclxuICAgICAgICAgICAgc2V0T3B0aW9ucygobykgPT4gKHtcclxuICAgICAgICAgICAgICAuLi5vLFxyXG4gICAgICAgICAgICAgIFtmLm5hbWVdOiByZXMuZGF0YS5yZXN1bHRzLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGYub3B0aW9uTGFiZWwoaXRlbSksXHJcbiAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZW1wdHlGb3JtID0gKCkgPT5cclxuICAgIGZpZWxkcy5yZWR1Y2UoKGFjYywgZikgPT4gKHsgLi4uYWNjLCBbZi5uYW1lXTogXCJcIiB9KSwge30pO1xyXG5cclxuICBjb25zdCBvcGVuQWRkID0gKCkgPT4ge1xyXG4gICAgc2V0RWRpdGluZyhudWxsKTtcclxuICAgIHNldEZvcm0oZW1wdHlGb3JtKCkpO1xyXG4gICAgc2V0RXJyb3JzKHt9KTtcclxuICAgIHNldE1vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuRWRpdCA9IChyb3cpID0+IHtcclxuICAgIHNldEVkaXRpbmcocm93KTtcclxuICAgIHNldEZvcm0oXHJcbiAgICAgIGZpZWxkcy5yZWR1Y2UoKGFjYywgZikgPT4gKHsgLi4uYWNjLCBbZi5uYW1lXTogcm93W2YubmFtZV0gPz8gXCJcIiB9KSwge30pXHJcbiAgICApO1xyXG4gICAgc2V0RXJyb3JzKHt9KTtcclxuICAgIHNldE1vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldEZvcm0oKGYpID0+ICh7IC4uLmYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gICAgaWYgKGVycm9yc1tuYW1lXSkgc2V0RXJyb3JzKChlKSA9PiAoeyAuLi5lLCBbbmFtZV06IHVuZGVmaW5lZCB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlcnJzID0ge307XHJcbiAgICBmaWVsZHMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICBpZiAoZi5yZXF1aXJlZCAmJiAhU3RyaW5nKGZvcm1bZi5uYW1lXSA/PyBcIlwiKS50cmltKCkpIHtcclxuICAgICAgICBlcnJzW2YubmFtZV0gPSBgJHtmLmxhYmVsfSBpcyByZXF1aXJlZGA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGVycnM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGVycnMgPSB2YWxpZGF0ZSgpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGVycnMpLmxlbmd0aCkge1xyXG4gICAgICBzZXRFcnJvcnMoZXJycyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXlsb2FkID0ge307XHJcbiAgICBmaWVsZHMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICBsZXQgdmFsdWUgPSBmb3JtW2YubmFtZV07XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiAmJiAoZi50eXBlID09PSBcInNlbGVjdFwiIHx8IGYudHlwZSA9PT0gXCJkYXRlXCIpKSB2YWx1ZSA9IG51bGw7XHJcbiAgICAgIHBheWxvYWRbZi5uYW1lXSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0U2F2aW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGVkaXRpbmcpIHtcclxuICAgICAgICBhd2FpdCB1cGRhdGUoZWRpdGluZy5pZCwgcGF5bG9hZCk7XHJcbiAgICAgICAgbm90aWZ5KGAke3Npbmd1bGFyfSB1cGRhdGVkYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgY3JlYXRlKHBheWxvYWQpO1xyXG4gICAgICAgIG5vdGlmeShgJHtzaW5ndWxhcn0gYWRkZWRgKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IGFwaUVycm9ycyA9IHBhcnNlQXBpRXJyb3JzKGVycik7XHJcbiAgICAgIHNldEVycm9ycyhhcGlFcnJvcnMpO1xyXG4gICAgICBub3RpZnkoXHJcbiAgICAgICAgT2JqZWN0LmtleXMoYXBpRXJyb3JzKS5sZW5ndGhcclxuICAgICAgICAgID8gXCJQbGVhc2UgZml4IHRoZSBlcnJvcnMgaW4gdGhlIGZvcm1cIlxyXG4gICAgICAgICAgOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIsXHJcbiAgICAgICAgXCJlcnJvclwiXHJcbiAgICAgICk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXREZWxldGVMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgcmVtb3ZlKGRlbGV0aW5nLmlkKTtcclxuICAgICAgbm90aWZ5KGAke3Npbmd1bGFyfSBkZWxldGVkYCk7XHJcbiAgICAgIHNldERlbGV0aW5nKG51bGwpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIG5vdGlmeShgQ291bGQgbm90IGRlbGV0ZSAke3Npbmd1bGFyLnRvTG93ZXJDYXNlKCl9YCwgXCJlcnJvclwiKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldERlbGV0ZUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFsbENvbHVtbnMgPSBbXHJcbiAgICAuLi5jb2x1bW5zLFxyXG4gICAge1xyXG4gICAgICBrZXk6IFwiYWN0aW9uc1wiLFxyXG4gICAgICBsYWJlbDogXCJBY3Rpb25zXCIsXHJcbiAgICAgIHJlbmRlcjogKHJvdykgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWFjdGlvbnNcIj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0KHJvdyl9PlxyXG4gICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IHNldERlbGV0aW5nKHJvdyl9PlxyXG4gICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCByZW5kZXJGaWVsZCA9IChmKSA9PiB7XHJcbiAgICBjb25zdCBjb21tb24gPSB7XHJcbiAgICAgIGtleTogZi5uYW1lLFxyXG4gICAgICBsYWJlbDogZi5sYWJlbCxcclxuICAgICAgdmFsdWU6IGZvcm1bZi5uYW1lXSA/PyBcIlwiLFxyXG4gICAgICBlcnJvcjogZXJyb3JzW2YubmFtZV0sXHJcbiAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gaGFuZGxlQ2hhbmdlKGYubmFtZSwgZS50YXJnZXQudmFsdWUpLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZi50eXBlID09PSBcInNlbGVjdFwiKSB7XHJcbiAgICAgIHJldHVybiA8Rm9ybVNlbGVjdCB7Li4uY29tbW9ufSBvcHRpb25zPXtvcHRpb25zW2YubmFtZV0gfHwgW119IC8+O1xyXG4gICAgfVxyXG4gICAgaWYgKGYudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XHJcbiAgICAgIHJldHVybiA8Rm9ybUlucHV0IHsuLi5jb21tb259IGFzPVwidGV4dGFyZWFcIiByb3dzPXszfSBwbGFjZWhvbGRlcj17Zi5wbGFjZWhvbGRlcn0gLz47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPEZvcm1JbnB1dCB7Li4uY29tbW9ufSB0eXBlPXtmLnR5cGUgfHwgXCJ0ZXh0XCJ9IHBsYWNlaG9sZGVyPXtmLnBsYWNlaG9sZGVyfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9e3RpdGxlfSBzdWJ0aXRsZT17c3VidGl0bGV9PlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b3BlbkFkZH0+KyBBZGQge3Npbmd1bGFyfTwvQnV0dG9uPlxyXG4gICAgICA8L1BhZ2VIZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXJcIj5cclxuICAgICAgICAgIDxTZWFyY2hCYXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VhcmNofVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCAke3RpdGxlLnRvTG93ZXJDYXNlKCl9Li4uYH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtlcnJvciA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYm94XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntlcnJvcn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlclwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9e3JlbG9hZH0+XHJcbiAgICAgICAgICAgICAgUmV0cnlcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbG9hZGluZyAmJiBpdGVtcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5XCI+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bG9hZGluZyA/IFwiZGltbWVkXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e2FsbENvbHVtbnN9IGRhdGE9e2l0ZW1zfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICBjb3VudD17Y291bnR9XHJcbiAgICAgICAgICBwYWdlU2l6ZT17UEFHRV9TSVpFfVxyXG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXtzZXRQYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bW9kYWxPcGVufVxyXG4gICAgICAgIHRpdGxlPXtlZGl0aW5nID8gYEVkaXQgJHtzaW5ndWxhcn1gIDogYEFkZCAke3Npbmd1bGFyfWB9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0TW9kYWxPcGVuKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICB7ZXJyb3JzLm5vbl9maWVsZF9lcnJvcnMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEyIH19PlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMubm9uX2ZpZWxkX2Vycm9yc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2ZpZWxkcy5tYXAocmVuZGVyRmllbGQpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzYXZpbmd9PlxyXG4gICAgICAgICAgICAgIHtzYXZpbmcgPyBcIlNhdmluZy4uLlwiIDogXCJTYXZlXCJ9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPENvbmZpcm1EaWFsb2dcclxuICAgICAgICBvcGVuPXshIWRlbGV0aW5nfVxyXG4gICAgICAgIG1lc3NhZ2U9e2BBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiJHtkZWxldGluZz8uW25hbWVLZXldID8/IFwiXCJ9XCI/IFRoaXMgY2Fubm90IGJlIHVuZG9uZS5gfVxyXG4gICAgICAgIG9uQ29uZmlybT17Y29uZmlybURlbGV0ZX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0RGVsZXRpbmcobnVsbCl9XHJcbiAgICAgICAgbG9hZGluZz17ZGVsZXRlTG9hZGluZ31cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXX0=