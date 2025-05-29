(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/actions/data:35e83e [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7faf10af0ae48e4e4376e809ed5446dc9fb925fc55":"initiatePayment"},"actions/useractions.js",""] */ __turbopack_context__.s({
    "initiatePayment": (()=>initiatePayment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var initiatePayment = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7faf10af0ae48e4e4376e809ed5446dc9fb925fc55", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "initiatePayment"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXNlcmFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcclxuaW1wb3J0IFJhem9ycGF5IGZyb20gXCJyYXpvcnBheVwiXHJcbmltcG9ydCBQYXltZW50IGZyb20gXCJAL21vZGVscy9QYXltZW50XCJcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiQC9kYi9jb25uZWN0RGJcIlxyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvVXNlclwiXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhdGVQYXltZW50ID0gYXN5bmMgKGFtb3VudCwgdG9fdXNlcm5hbWUsIHBheW1lbnRmb3JtKSA9PiB7XHJcbiAgICBhd2FpdCBjb25uZWN0REIoKVxyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUmF6b3JwYXkoe1xyXG4gICAgICAgIGtleV9pZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkFaT1JQQVlfS0VZX0lELFxyXG4gICAgICAgIGtleV9zZWNyZXQ6IHByb2Nlc3MuZW52LlJBWk9SUEFZX1NFUkVUX0tFWSxcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgYW1vdW50OiBOdW1iZXIucGFyc2VJbnQoYW1vdW50KSxcclxuICAgICAgICBjdXJyZW5jeTogXCJJTlJcIixcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb3JkZXIgPSBhd2FpdCBpbnN0YW5jZS5vcmRlcnMuY3JlYXRlKG9wdGlvbnMpXHJcbiAgICBhd2FpdCBQYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgYW1vdW50OiBhbW91bnQgLyAxMDAsXHJcbiAgICAgICAgb3JkZXJfaWQ6IG9yZGVyLmlkLFxyXG4gICAgICAgIHRvX3VzZXI6IHRvX3VzZXJuYW1lLFxyXG4gICAgICAgIG5hbWU6IHBheW1lbnRmb3JtLm5hbWUsXHJcbiAgICAgICAgbWVzc2FnZTogcGF5bWVudGZvcm0ubWVzc2FnZSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG9yZGVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaHVzZXIgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgdXNlcm5hbWU6dXNlcm5hbWUgfSkubGVhbigpIFxyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgIF9pZDogdXNlci5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICBjcmVhdGVkQXQ6IHVzZXIuY3JlYXRlZEF0Py50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogdXNlci51cGRhdGVkQXQ/LnRvSVNPU3RyaW5nKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUGF5bWVudHMgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBsZXQgcGF5bWVudHMgPSBhd2FpdCBQYXltZW50LmZpbmQoeyB0b191c2VyOiB1c2VybmFtZSB9KS5zb3J0KHsgYW1vdW50OiAtMSB9KS5sZWFuKClcclxuICAgIHJldHVybiBwYXltZW50cy5tYXAocCA9PiAoe1xyXG4gICAgICAgIC4uLnAsXHJcbiAgICAgICAgX2lkOiBwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQ/LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBwLnVwZGF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaGRvbmUgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBsZXQgZG9uZSA9IGF3YWl0IFBheW1lbnQuZmluZCh7IHRvX3VzZXI6IHVzZXJuYW1lIH0pLnNvcnQoeyBhbW91bnQ6IC0xIH0pLmxlYW4oKVxyXG4gICAgcmV0dXJuIGRvbmUubWFwKGQgPT4gKHtcclxuICAgICAgICAuLi5kLFxyXG4gICAgICAgIF9pZDogZC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGQuY3JlYXRlZEF0Py50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogZC51cGRhdGVkQXQ/LnRvSVNPU3RyaW5nKClcclxuICAgIH0pKVxyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkFNYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:a680d6 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f4d36bf608f0e6f876e00c0f07dc056c9c20a8c8c":"fetchPayments"},"actions/useractions.js",""] */ __turbopack_context__.s({
    "fetchPayments": (()=>fetchPayments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var fetchPayments = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f4d36bf608f0e6f876e00c0f07dc056c9c20a8c8c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchPayments"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXNlcmFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcclxuaW1wb3J0IFJhem9ycGF5IGZyb20gXCJyYXpvcnBheVwiXHJcbmltcG9ydCBQYXltZW50IGZyb20gXCJAL21vZGVscy9QYXltZW50XCJcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiQC9kYi9jb25uZWN0RGJcIlxyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvVXNlclwiXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhdGVQYXltZW50ID0gYXN5bmMgKGFtb3VudCwgdG9fdXNlcm5hbWUsIHBheW1lbnRmb3JtKSA9PiB7XHJcbiAgICBhd2FpdCBjb25uZWN0REIoKVxyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUmF6b3JwYXkoe1xyXG4gICAgICAgIGtleV9pZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkFaT1JQQVlfS0VZX0lELFxyXG4gICAgICAgIGtleV9zZWNyZXQ6IHByb2Nlc3MuZW52LlJBWk9SUEFZX1NFUkVUX0tFWSxcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgYW1vdW50OiBOdW1iZXIucGFyc2VJbnQoYW1vdW50KSxcclxuICAgICAgICBjdXJyZW5jeTogXCJJTlJcIixcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb3JkZXIgPSBhd2FpdCBpbnN0YW5jZS5vcmRlcnMuY3JlYXRlKG9wdGlvbnMpXHJcbiAgICBhd2FpdCBQYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgYW1vdW50OiBhbW91bnQgLyAxMDAsXHJcbiAgICAgICAgb3JkZXJfaWQ6IG9yZGVyLmlkLFxyXG4gICAgICAgIHRvX3VzZXI6IHRvX3VzZXJuYW1lLFxyXG4gICAgICAgIG5hbWU6IHBheW1lbnRmb3JtLm5hbWUsXHJcbiAgICAgICAgbWVzc2FnZTogcGF5bWVudGZvcm0ubWVzc2FnZSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG9yZGVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaHVzZXIgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgdXNlcm5hbWU6dXNlcm5hbWUgfSkubGVhbigpIFxyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgIF9pZDogdXNlci5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICBjcmVhdGVkQXQ6IHVzZXIuY3JlYXRlZEF0Py50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogdXNlci51cGRhdGVkQXQ/LnRvSVNPU3RyaW5nKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUGF5bWVudHMgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBsZXQgcGF5bWVudHMgPSBhd2FpdCBQYXltZW50LmZpbmQoeyB0b191c2VyOiB1c2VybmFtZSB9KS5zb3J0KHsgYW1vdW50OiAtMSB9KS5sZWFuKClcclxuICAgIHJldHVybiBwYXltZW50cy5tYXAocCA9PiAoe1xyXG4gICAgICAgIC4uLnAsXHJcbiAgICAgICAgX2lkOiBwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQ/LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBwLnVwZGF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaGRvbmUgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBsZXQgZG9uZSA9IGF3YWl0IFBheW1lbnQuZmluZCh7IHRvX3VzZXI6IHVzZXJuYW1lIH0pLnNvcnQoeyBhbW91bnQ6IC0xIH0pLmxlYW4oKVxyXG4gICAgcmV0dXJuIGRvbmUubWFwKGQgPT4gKHtcclxuICAgICAgICAuLi5kLFxyXG4gICAgICAgIF9pZDogZC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGQuY3JlYXRlZEF0Py50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogZC51cGRhdGVkQXQ/LnRvSVNPU3RyaW5nKClcclxuICAgIH0pKVxyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2UkEwQ2EifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/actions/data:18c495 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7ff47eda1a80a235f564e61b1281835b5850e91998":"fetchuser"},"actions/useractions.js",""] */ __turbopack_context__.s({
    "fetchuser": (()=>fetchuser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var fetchuser = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7ff47eda1a80a235f564e61b1281835b5850e91998", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchuser"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXNlcmFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCJcclxuaW1wb3J0IFJhem9ycGF5IGZyb20gXCJyYXpvcnBheVwiXHJcbmltcG9ydCBQYXltZW50IGZyb20gXCJAL21vZGVscy9QYXltZW50XCJcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiQC9kYi9jb25uZWN0RGJcIlxyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvVXNlclwiXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhdGVQYXltZW50ID0gYXN5bmMgKGFtb3VudCwgdG9fdXNlcm5hbWUsIHBheW1lbnRmb3JtKSA9PiB7XHJcbiAgICBhd2FpdCBjb25uZWN0REIoKVxyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUmF6b3JwYXkoe1xyXG4gICAgICAgIGtleV9pZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkFaT1JQQVlfS0VZX0lELFxyXG4gICAgICAgIGtleV9zZWNyZXQ6IHByb2Nlc3MuZW52LlJBWk9SUEFZX1NFUkVUX0tFWSxcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgYW1vdW50OiBOdW1iZXIucGFyc2VJbnQoYW1vdW50KSxcclxuICAgICAgICBjdXJyZW5jeTogXCJJTlJcIixcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb3JkZXIgPSBhd2FpdCBpbnN0YW5jZS5vcmRlcnMuY3JlYXRlKG9wdGlvbnMpXHJcbiAgICBhd2FpdCBQYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgYW1vdW50OiBhbW91bnQgLyAxMDAsXHJcbiAgICAgICAgb3JkZXJfaWQ6IG9yZGVyLmlkLFxyXG4gICAgICAgIHRvX3VzZXI6IHRvX3VzZXJuYW1lLFxyXG4gICAgICAgIG5hbWU6IHBheW1lbnRmb3JtLm5hbWUsXHJcbiAgICAgICAgbWVzc2FnZTogcGF5bWVudGZvcm0ubWVzc2FnZSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIG9yZGVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaHVzZXIgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgdXNlcm5hbWU6dXNlcm5hbWUgfSkubGVhbigpIFxyXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgIF9pZDogdXNlci5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICBjcmVhdGVkQXQ6IHVzZXIuY3JlYXRlZEF0Py50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogdXNlci51cGRhdGVkQXQ/LnRvSVNPU3RyaW5nKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUGF5bWVudHMgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBsZXQgcGF5bWVudHMgPSBhd2FpdCBQYXltZW50LmZpbmQoeyB0b191c2VyOiB1c2VybmFtZSB9KS5zb3J0KHsgYW1vdW50OiAtMSB9KS5sZWFuKClcclxuICAgIHJldHVybiBwYXltZW50cy5tYXAocCA9PiAoe1xyXG4gICAgICAgIC4uLnAsXHJcbiAgICAgICAgX2lkOiBwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQ/LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgdXBkYXRlZEF0OiBwLnVwZGF0ZWRBdD8udG9JU09TdHJpbmcoKVxyXG4gICAgfSkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaGRvbmUgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpXHJcbiAgICBsZXQgZG9uZSA9IGF3YWl0IFBheW1lbnQuZmluZCh7IHRvX3VzZXI6IHVzZXJuYW1lIH0pLnNvcnQoeyBhbW91bnQ6IC0xIH0pLmxlYW4oKVxyXG4gICAgcmV0dXJuIGRvbmUubWFwKGQgPT4gKHtcclxuICAgICAgICAuLi5kLFxyXG4gICAgICAgIF9pZDogZC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICBjcmVhdGVkQXQ6IGQuY3JlYXRlZEF0Py50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogZC51cGRhdGVkQXQ/LnRvSVNPU3RyaW5nKClcclxuICAgIH0pKVxyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5UkE4QmEifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/PaymentsPage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$35e83e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:35e83e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$a680d6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:a680d6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$18c495__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/actions/data:18c495 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mongoose$2f$dist$2f$browser$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mongoose/dist/browser.umd.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const PaymentPage = ({ username })=>{
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [paymentform, setPaymentform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        message: "",
        amount: ""
    });
    const [currentuser, setCurrentuser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [payments, setPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaymentPage.useEffect": ()=>{
            getData();
        }
    }["PaymentPage.useEffect"], []);
    const handleChange = (e)=>{
        setPaymentform({
            ...paymentform,
            [e.target.name]: e.target.value
        });
    };
    const getData = async ()=>{
        setLoading(true);
        const [u, p] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$18c495__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["fetchuser"])(username),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$a680d6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["fetchPayments"])(username)
        ]);
        setCurrentuser(u);
        setPayments(p);
        setLoading(false);
    };
    const pay = async (amount)=>{
        let a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$data$3a$35e83e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["initiatePayment"])(amount, username, paymentform);
        let orderId = a.id;
        var options = {
            "key": ("TURBOPACK compile-time value", "rzp_test_zdbP9Iq4oiB7a2"),
            "amount": amount,
            "currency": "INR",
            "name": "GetMeAChai",
            "description": "Test Transaction",
            "image": "/public/tea.gif",
            "order_id": orderId,
            "callback_url": `${("TURBOPACK compile-time value", "http://localhost:3000")}/api/razorpay`,
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://checkout.razorpay.com/v1/checkout.js"
            }, void 0, false, {
                fileName: "[project]/components/PaymentsPage.js",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e2342d0222e7c905",
                children: ".supporters.jsx-e2342d0222e7c905 ul.jsx-e2342d0222e7c905::-webkit-scrollbar{background-color:#1e293b;width:0}.supporters.jsx-e2342d0222e7c905 ul.jsx-e2342d0222e7c905::-webkit-scrollbar-thumb{background-color:#334155;border-radius:8px}.supporters.jsx-e2342d0222e7c905 ul.jsx-e2342d0222e7c905::-webkit-scrollbar-track{background-color:#0f172a}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e2342d0222e7c905" + " " + 'relative',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=PII8uE5d9cF__tMhhAsgUcejp0XUEAo4wDFfuH2yPbs%3D&token-time=1748995200",
                        alt: "Banner",
                        className: "jsx-e2342d0222e7c905" + " " + 'w-full'
                    }, void 0, false, {
                        fileName: "[project]/components/PaymentsPage.js",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e2342d0222e7c905" + " " + 'absolute -bottom-14 right-1/2 translate-x-1/2',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            width: 120,
                            src: "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjozNjAsInciOjM2MH0%3D/4.gif?token-hash=M6CvxAOttRDDW8ZVVD9DQgliMzWYM_bzNTjZBNbFO54%3D&token-time=1748822400",
                            alt: "Profile",
                            className: "jsx-e2342d0222e7c905" + " " + 'rounded-2xl border border-white'
                        }, void 0, false, {
                            fileName: "[project]/components/PaymentsPage.js",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PaymentsPage.js",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PaymentsPage.js",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e2342d0222e7c905" + " " + "info flex flex-col justify-center items-center my-18 gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e2342d0222e7c905" + " " + 'font-bold text-2xl',
                        children: [
                            "@",
                            username
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PaymentsPage.js",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e2342d0222e7c905" + " " + 'text-slate-300',
                        children: "Creating Animated art for VTT's"
                    }, void 0, false, {
                        fileName: "[project]/components/PaymentsPage.js",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e2342d0222e7c905" + " " + 'text-slate-300',
                        children: "18,101 members • 98 posts • $17,690/release"
                    }, void 0, false, {
                        fileName: "[project]/components/PaymentsPage.js",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e2342d0222e7c905" + " " + "payments flex flex-col md:flex-row gap-3 w-full md:w-[80%] my-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e2342d0222e7c905" + " " + "supporters w-full md:w-1/2 bg-slate-900 rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-e2342d0222e7c905" + " " + 'text-2xl font-bold',
                                        children: "Supporters"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PaymentsPage.js",
                                        lineNumber: 111,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-e2342d0222e7c905" + " " + 'my-3 mx-3 max-h-[230px] overflow-y-auto',
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "jsx-e2342d0222e7c905" + " " + 'text-slate-400',
                                            children: "Loading..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/PaymentsPage.js",
                                            lineNumber: 113,
                                            columnNumber: 41
                                        }, this) : payments && payments.length > 0 ? payments.map((payment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-e2342d0222e7c905" + " " + 'my-1 flex items-center gap-2',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        width: 36,
                                                        src: "./avatar.gif",
                                                        alt: "",
                                                        className: "jsx-e2342d0222e7c905"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PaymentsPage.js",
                                                        lineNumber: 117,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-e2342d0222e7c905",
                                                        children: [
                                                            payment.name,
                                                            " donated ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-e2342d0222e7c905" + " " + 'font-bold',
                                                                children: [
                                                                    "₹",
                                                                    payment.amount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/PaymentsPage.js",
                                                                lineNumber: 118,
                                                                columnNumber: 74
                                                            }, this),
                                                            ' with a message "',
                                                            payment.message,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/PaymentsPage.js",
                                                        lineNumber: 118,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/PaymentsPage.js",
                                                lineNumber: 116,
                                                columnNumber: 41
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "jsx-e2342d0222e7c905" + " " + 'text-slate-400',
                                            children: "No messages"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PaymentsPage.js",
                                            lineNumber: 122,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PaymentsPage.js",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PaymentsPage.js",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e2342d0222e7c905" + " " + "flex makePayments w-full md:w-1/2 bg-slate-900 rounded-lg p-4 flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-e2342d0222e7c905" + " " + 'text-2xl font-bold mb-2',
                                        children: "Make a Payment"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PaymentsPage.js",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e2342d0222e7c905" + " " + "flex flex-col gap-2 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                onChange: handleChange,
                                                value: paymentform.name,
                                                type: "text",
                                                name: "name",
                                                placeholder: "Enter your name",
                                                className: "jsx-e2342d0222e7c905" + " " + "p-2 rounded border border-slate-700 bg-slate-800 text-white flex-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PaymentsPage.js",
                                                lineNumber: 130,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                onChange: handleChange,
                                                value: paymentform.message,
                                                type: "text",
                                                name: "message",
                                                placeholder: "Enter your message",
                                                className: "jsx-e2342d0222e7c905" + " " + "p-2 rounded border border-slate-700 bg-slate-800 text-white flex-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PaymentsPage.js",
                                                lineNumber: 138,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                onChange: handleChange,
                                                value: paymentform.amount,
                                                type: "text",
                                                name: "amount",
                                                placeholder: "Enter amount",
                                                className: "jsx-e2342d0222e7c905" + " " + "p-2 rounded border border-slate-700 bg-slate-800 text-white flex-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PaymentsPage.js",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>pay(paymentform.amount * 100),
                                                className: "jsx-e2342d0222e7c905" + " " + "bg-blue-600 cursor-pointer text-white rounded py-1 px-3 hover:bg-blue-700 transition",
                                                children: "Pay"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PaymentsPage.js",
                                                lineNumber: 154,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PaymentsPage.js",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-e2342d0222e7c905" + " " + "flex gap-2 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>pay(500),
                                                className: "jsx-e2342d0222e7c905" + " " + "bg-slate-700 cursor-pointer text-white rounded py-2 px-3 hover:bg-slate-600 transition",
                                                children: "Pay ₹5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PaymentsPage.js",
                                                lineNumber: 161,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>pay(1000),
                                                className: "jsx-e2342d0222e7c905" + " " + "bg-slate-700 cursor-pointer text-white rounded py-2 px-3 hover:bg-slate-600 transition",
                                                children: "Pay ₹10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PaymentsPage.js",
                                                lineNumber: 164,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>pay(2000),
                                                className: "jsx-e2342d0222e7c905" + " " + "bg-slate-700 cursor-pointer text-white rounded py-2 px-3 hover:bg-slate-600 transition",
                                                children: "Pay ₹20"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PaymentsPage.js",
                                                lineNumber: 167,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PaymentsPage.js",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PaymentsPage.js",
                                lineNumber: 126,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PaymentsPage.js",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PaymentsPage.js",
                lineNumber: 99,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
_s(PaymentPage, "0c5UGZjlZCHQ2H6TIkvwD3+UQdE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = PaymentPage;
const __TURBOPACK__default__export__ = PaymentPage;
var _c;
__turbopack_context__.k.register(_c, "PaymentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_704e12a1._.js.map