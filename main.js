(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!**************************************!*\
  !*** multi ./apps/trade/src/main.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shawntony/my-projects/money/apps/trade/src/main.ts */"QnJ4");


/***/ }),

/***/ "0u+p":
/*!*************************************************************************!*\
  !*** ./apps/trade/src/app/buysellprogress/buysellprogress.component.ts ***!
  \*************************************************************************/
/*! exports provided: BuySellProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySellProgressComponent", function() { return BuySellProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");


class BuySellProgressComponent {
    constructor() {
        this.color = 'primary';
    }
    ngOnChanges() {
        const max = this.max - this.min;
        const value = this.value - this.min;
        this.percent = (100 * value) / max;
        if (this.percent > 50)
            this.color = 'primary';
        else
            this.color = 'warn';
        console.log(max, value, this.percent);
    }
}
BuySellProgressComponent.ɵfac = function BuySellProgressComponent_Factory(t) { return new (t || BuySellProgressComponent)(); };
BuySellProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuySellProgressComponent, selectors: [["money-buysellprogress"]], inputs: { min: "min", max: "max", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 2, consts: [["mode", "determinate", 3, "value", "color"]], template: function BuySellProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.percent)("color", ctx.color);
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__["MatProgressBar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXlzZWxscHJvZ3Jlc3MuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ "6Rgv":
/*!*****************************************************************!*\
  !*** ./apps/trade/src/app/stocks-grid/stocks-grid.component.ts ***!
  \*****************************************************************/
/*! exports provided: StocksGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksGridComponent", function() { return StocksGridComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function StocksGridComponent_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksGridComponent_mat_header_cell_2_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "TICKER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r20.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r20.count);
} }
function StocksGridComponent_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " LAST PRICE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green", row_r21.isProfit)("red", !row_r21.isProfit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", row_r21.lastPrice, " (", row_r21.perShareProfit, ") ");
} }
function StocksGridComponent_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " COST ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r22.cost, " ");
} }
function StocksGridComponent_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " TOTAL COST ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r23.totalCost, " ");
} }
function StocksGridComponent_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " PROFIT/LOSS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green", row_r24.isProfit)("red", !row_r24.isProfit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r24.profit, " ");
} }
function StocksGridComponent_mat_header_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " BUY/SELL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("green", row_r25.lastPrice > row_r25.min)("red", row_r25.lastPrice < row_r25.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r25.lastPrice < row_r25.cost ? "Average" : "Sell off/Hold", " ");
} }
function StocksGridComponent_mat_header_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Adjust Shares ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", row_r26.adjustRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", row_r26.adjustShares, " ", !!row_r26.adjustRate ? "|" : "", " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, row_r26.adjustShares * row_r26.adjustRate), " ");
} }
function StocksGridComponent_mat_header_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_24_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksGridComponent_mat_cell_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const row_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.edit(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksGridComponent_mat_cell_24_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const row_r27 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.moveToWatchList(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "drive_file_move");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StocksGridComponent_mat_cell_24_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const row_r27 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.delete(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_header_row_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row", 24);
} }
function StocksGridComponent_mat_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row", 25);
} }
class StocksGridComponent {
    constructor() {
        this.moveToWatchListEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.trackByStock = (index, stock) => index;
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    ngOnChanges() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.trade.stocks);
        this.dataSource.sort = this.sort;
    }
    add(e) {
        this.addEvent.emit();
        e.stopPropagation();
    }
    moveToWatchList(stock) {
        this.moveToWatchListEvent.emit(stock);
    }
    delete(stock) {
        this.deleteEvent.emit(stock);
    }
    edit(stock) {
        this.editEvent.emit(stock);
    }
}
StocksGridComponent.ɵfac = function StocksGridComponent_Factory(t) { return new (t || StocksGridComponent)(); };
StocksGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StocksGridComponent, selectors: [["money-stocks-grid"]], viewQuery: function StocksGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { displayedColumns: "displayedColumns", trade: "trade" }, outputs: { moveToWatchListEvent: "moveToWatchListEvent", deleteEvent: "deleteEvent", editEvent: "editEvent", addEvent: "addEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 27, vars: 5, consts: [["matSort", "", 1, "stocks__grid", 3, "dataSource", "trackBy"], ["matColumnDef", "ticker", "sticky", ""], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "grid__ticker", 4, "matCellDef"], ["matColumnDef", "lastPrice", "sticky", ""], [3, "green", "red", 4, "matCellDef"], ["matColumnDef", "cost"], [4, "matCellDef"], ["matColumnDef", "totalcost"], ["matColumnDef", "profit"], ["matColumnDef", "Buy/Sell"], [4, "matHeaderCellDef"], ["matColumnDef", "adjustShares"], ["matColumnDef", "action"], ["class", "stocks-grid__header", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["class", "stocks-grid__row", 4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], ["mat-icon-button", "", "aria-label", "add stock", 3, "click"], [1, "grid__ticker"], [1, "grid-ticker__count"], ["matBadgeOverlap", "false", 1, "stretch-badge", 3, "matBadge"], ["mat-icon-button", "", "color", "primary", "aria-label", "edit", 3, "click"], ["mat-icon-button", "", "color", "accent", "aria-label", "move to watchlist", 3, "click"], ["mat-icon-button", "", "color", "warn", "aria-label", "delete icon", 3, "click"], [1, "stocks-grid__header"], [1, "stocks-grid__row"]], template: function StocksGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StocksGridComponent_mat_header_cell_2_Template, 5, 0, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, StocksGridComponent_mat_cell_3_Template, 5, 2, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, StocksGridComponent_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StocksGridComponent_mat_cell_6_Template, 2, 6, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StocksGridComponent_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, StocksGridComponent_mat_cell_9_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, StocksGridComponent_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, StocksGridComponent_mat_cell_12_Template, 2, 1, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, StocksGridComponent_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, StocksGridComponent_mat_cell_15_Template, 2, 5, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, StocksGridComponent_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, StocksGridComponent_mat_cell_18_Template, 2, 5, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, StocksGridComponent_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, StocksGridComponent_mat_cell_21_Template, 4, 6, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, StocksGridComponent_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, StocksGridComponent_mat_cell_24_Template, 10, 0, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, StocksGridComponent_mat_header_row_25_Template, 1, 0, "mat-header-row", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, StocksGridComponent_mat_row_26_Template, 1, 0, "mat-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("trackBy", ctx.trackByStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadge"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 800px;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .stocks-grid__row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .stocks-grid__row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .grid__ticker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .grid__ticker[_ngcontent-%COMP%]   .grid-ticker__count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #a5a2a2;\n  align-items: flex-start;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .stocks-grid__header[_ngcontent-%COMP%] {\n  background: linear-gradient(#f1f1f1, #fff);\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .stocks-grid__header[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0b2Nrcy1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUFFSjtBQURJO0VBQ0Usc0JBQUE7QUFHTjtBQUFJO0VBQ0UsbUJBQUE7QUFFTjtBQUNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUNOO0FBQU07RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUVSO0FBRUk7RUFDRSwwQ0FBQTtFQUNBLDJDQUFBO0FBQU47QUFDTTtFQUNFLGlCQUFBO0FBQ1IiLCJmaWxlIjoic3RvY2tzLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC5zdG9ja3NfX2dyaWQge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICAuc3RvY2tzLWdyaWRfX3Jvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgIH1cblxuICAgIC5zdG9ja3MtZ3JpZF9fcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIH1cblxuICAgIC5ncmlkX190aWNrZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLmdyaWQtdGlja2VyX19jb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogI2E1YTJhMjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0b2Nrcy1ncmlkX19oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmMWYxZjEsICNmZmYpO1xuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICAgIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] }, changeDetection: 0 });


/***/ }),

/***/ "FZkP":
/*!******************************************!*\
  !*** ./apps/trade/src/app/app.module.ts ***!
  \******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Q0BP");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing.module */ "T3lU");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "yMW0");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./watchlist/watchlist.component */ "NNIS");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position/position.component */ "i1r9");
/* harmony import */ var _buysellprogress_buysellprogress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buysellprogress/buysellprogress.component */ "0u+p");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _stocks_grid_stocks_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stocks-grid/stocks-grid.component */ "6Rgv");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "Z/QR");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _action_action_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./action/action.component */ "d1UU");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _update_stock_update_stock_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./update-stock/update-stock.component */ "iTZR");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ "fXoL");


































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebaseConfig, 'shawnz-trade'),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__["MatBottomSheetModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
        ], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_7__["WatchlistComponent"],
        _position_position_component__WEBPACK_IMPORTED_MODULE_8__["PositionComponent"],
        _buysellprogress_buysellprogress_component__WEBPACK_IMPORTED_MODULE_9__["BuySellProgressComponent"],
        _stocks_grid_stocks_grid_component__WEBPACK_IMPORTED_MODULE_11__["StocksGridComponent"],
        _action_action_component__WEBPACK_IMPORTED_MODULE_23__["ActionComponent"],
        _update_stock_update_stock_component__WEBPACK_IMPORTED_MODULE_27__["UpdateStockComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__["MatBottomSheetModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"]], exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "NNIS":
/*!*************************************************************!*\
  !*** ./apps/trade/src/app/watchlist/watchlist.component.ts ***!
  \*************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _buysellprogress_buysellprogress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buysellprogress/buysellprogress.component */ "0u+p");



function WatchlistComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "money-buysellprogress", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r0.stock.min)("max", ctx_r0.stock.max)("value", ctx_r0.stock.lastPrice);
} }
function WatchlistComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buy @ ", ctx_r1.stock.lastPrice, " ");
} }
function WatchlistComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WatchlistComponent {
}
WatchlistComponent.ɵfac = function WatchlistComponent_Factory(t) { return new (t || WatchlistComponent)(); };
WatchlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistComponent, selectors: [["money-watchlist"]], inputs: { stock: "stock" }, decls: 14, vars: 11, consts: [[1, "ticker"], [1, "ticker-name"], [1, "last"], [1, "stock__body"], [1, "min"], [1, "max"], ["class", "indicator", 4, "ngIf"], [1, "actions"], ["class", "buy", 4, "ngIf"], ["class", "sell", 4, "ngIf"], [1, "indicator"], [3, "min", "max", "value"], [1, "buy"], [1, "sell"]], template: function WatchlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WatchlistComponent_div_10_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WatchlistComponent_button_12_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WatchlistComponent_button_13_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stock.ticker, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("red", ctx.stock.netChange < 0)("green", ctx.stock.netChange > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.stock.lastPrice, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Min: ", ctx.stock.min, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Max: ", ctx.stock.max, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stock.min && ctx.stock.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stock.min && ctx.stock.lastPrice <= ctx.stock.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stock.max && ctx.stock.lastPrice >= ctx.stock.max);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _buysellprogress_buysellprogress_component__WEBPACK_IMPORTED_MODULE_2__["BuySellProgressComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXRjaGxpc3QuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ "Q0BP":
/*!*********************************************!*\
  !*** ./apps/trade/src/app/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stocks.service */ "pCMU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









class AppComponent {
    constructor(db, stockService) {
        this.db = db;
        this.stockService = stockService;
        this.title = 'trade';
        this.stocks$ = db.list('trade').valueChanges();
        this.stocks$.subscribe(console.log);
    }
    open() {
        this.stockService.openSidenav$.next(true);
    }
    addNewTrade() {
        this.stockService.addNewTrade$.next();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["money-root"]], decls: 12, vars: 0, consts: [[1, "header"], ["mat-icon-button", "", "aria-label", "edit", 3, "click"], ["mat-button", "", 1, "trade__button", 3, "click"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "STOCKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.addNewTrade(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Add New Trade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xuICBtYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "QnJ4":
/*!********************************!*\
  !*** ./apps/trade/src/main.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "FZkP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "Z/QR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "T3lU":
/*!**************************************************!*\
  !*** ./apps/trade/src/app/app.routing.module.ts ***!
  \**************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "yMW0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Z/QR":
/*!****************************************************!*\
  !*** ./apps/trade/src/environments/environment.ts ***!
  \****************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyAEYfISRAoFYXz-MsCe_yv4qR895PZVqXY',
        authDomain: 'shawnz-trade.firebaseapp.com',
        projectId: 'shawnz-trade',
        storageBucket: 'shawnz-trade.appspot.com',
        messagingSenderId: '19655963536',
        appId: '1:19655963536:web:e60bdc947094e0fe5db915',
        measurementId: 'G-7Y2YFCYLER',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "d1UU":
/*!*******************************************************!*\
  !*** ./apps/trade/src/app/action/action.component.ts ***!
  \*******************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class ActionComponent {
    constructor(_bottomSheetRef, data, db) {
        this._bottomSheetRef = _bottomSheetRef;
        this.data = data;
        this.db = db;
    }
    ngOnInit() {
        console.log(this.data);
    }
    addNewTrade(code, name, owner) {
        const tradeRef = this.db.list('trade');
        tradeRef.push({
            code: code,
            name: name,
            owner: owner,
        });
    }
}
ActionComponent.ɵfac = function ActionComponent_Factory(t) { return new (t || ActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"])); };
ActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ActionComponent, selectors: [["money-action"]], decls: 20, vars: 0, consts: [[1, "action-form"], [1, "action__header"], [1, "example-full-width"], ["matInput", "", "placeholder", "Code", "autocomplete", "off"], ["code", ""], ["matInput", "", "placeholder", "Name", "autocomplete", "off"], ["name", ""], ["matInput", "", "placeholder", "Owner", "autocomplete", "off"], ["owner", ""], ["trade__button", "", "mat-raised-button", "", "color", "primary", 1, "trade__button", 3, "click"]], template: function ActionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActionComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17); return ctx.addNewTrade(_r0.value, _r1.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".action-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.action-form[_ngcontent-%COMP%]   .action__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQUU7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVIIiwiZmlsZSI6ImFjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5hY3Rpb25fX2hlYWRlcntcblx0ICBkaXNwbGF5OiBmbGV4O1xuXHQgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "i1r9":
/*!***********************************************************!*\
  !*** ./apps/trade/src/app/position/position.component.ts ***!
  \***********************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _buysellprogress_buysellprogress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buysellprogress/buysellprogress.component */ "0u+p");



function PositionComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "money-buysellprogress", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx_r0.stock.min)("max", ctx_r0.stock.max)("value", ctx_r0.stock.lastPrice);
} }
function PositionComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buy @ ", ctx_r1.stock.lastPrice, " ");
} }
function PositionComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PositionComponent {
}
PositionComponent.ɵfac = function PositionComponent_Factory(t) { return new (t || PositionComponent)(); };
PositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PositionComponent, selectors: [["money-position"]], inputs: { stock: "stock" }, decls: 18, vars: 13, consts: [[1, "ticker"], [1, "ticker-name"], [1, "last"], [1, "stock__body"], [1, "count"], [1, "cost"], [1, "min"], [1, "max"], ["class", "indicator", 4, "ngIf"], [1, "actions"], ["class", "buy", 4, "ngIf"], ["class", "sell", 4, "ngIf"], [1, "indicator"], [3, "min", "max", "value"], [1, "buy"], [1, "sell"]], template: function PositionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PositionComponent_div_14_Template, 2, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PositionComponent_button_16_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PositionComponent_button_17_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stock.ticker, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("red", ctx.stock.position && ctx.stock.lastPrice < ctx.stock.cost)("green", ctx.stock.position && ctx.stock.lastPrice > ctx.stock.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.stock.lastPrice, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Count: ", ctx.stock.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: ", ctx.stock.cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Min: ", ctx.stock.min, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Max: ", ctx.stock.max, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stock.min && ctx.stock.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stock.min && ctx.stock.lastPrice <= ctx.stock.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stock.max && ctx.stock.lastPrice >= ctx.stock.max);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _buysellprogress_buysellprogress_component__WEBPACK_IMPORTED_MODULE_2__["BuySellProgressComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3NpdGlvbi5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ "iTZR":
/*!*******************************************************************!*\
  !*** ./apps/trade/src/app/update-stock/update-stock.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStockComponent", function() { return UpdateStockComponent; });
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class UpdateStockComponent {
    constructor(_bottomSheetRef, data, db) {
        this._bottomSheetRef = _bottomSheetRef;
        this.data = data;
        this.db = db;
    }
    ngOnInit() {
        console.log(this.data);
    }
    addNewTrade(code, name, owner) {
        const tradeRef = this.db.list('trade');
        tradeRef.push({
            code: code,
            name: name,
            owner: owner,
        });
    }
    updateStock(code, name, count) {
    }
}
UpdateStockComponent.ɵfac = function UpdateStockComponent_Factory(t) { return new (t || UpdateStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"])); };
UpdateStockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UpdateStockComponent, selectors: [["money-update-stock"]], decls: 29, vars: 2, consts: [[1, "update-form"], [1, "update__header"], [1, "padd__15"], ["matInput", "", "placeholder", "Code", "autocomplete", "off"], ["code", ""], ["matInput", "", "placeholder", "Name", "autocomplete", "off"], ["name", ""], ["matInput", "", "placeholder", "Owner", "autocomplete", "off"], ["count", ""], ["appearance", "fill", 1, "padd__15"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["value", "true", 1, "padd__15"], ["trade__button", "", "mat-raised-button", "", "color", "primary", 1, "trade__button", "padd__15", 3, "click"]], template: function UpdateStockComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Ticker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Expires");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "mat-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-radio-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Long term");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateStockComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17); return ctx.updateStock(_r0.value, _r1.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r3);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".update-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.update-form[_ngcontent-%COMP%]   .padd__15[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3VwZGF0ZS1zdG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0oiLCJmaWxlIjoidXBkYXRlLXN0b2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAucGFkZF9fMTUge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "pCMU":
/*!**********************************************!*\
  !*** ./apps/trade/src/app/stocks.service.ts ***!
  \**********************************************/
/*! exports provided: StocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksService", function() { return StocksService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StocksService {
    constructor() {
        this.openSidenav$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.addNewTrade$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    howManySharesToAverage(stock, expectedRate) {
        if (!stock || !expectedRate)
            return 0;
        //throw new Error('Values cannot be null');
        if (expectedRate <= stock.lastPrice)
            return 0;
        // throw new Error(
        //   'The current price of the stock cannot be greater than the expected rate'
        // );
        return ((stock.count * (stock.cost - expectedRate)) /
            (expectedRate - stock.lastPrice));
    }
}
StocksService.ɵfac = function StocksService_Factory(t) { return new (t || StocksService)(); };
StocksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StocksService, factory: StocksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pbiv":
/*!****************************************!*\
  !*** ./apps/trade/src/app/stocks.json ***!
  \****************************************/
/*! exports provided: trade, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"trade\":[{\"name\":\"Tomorrow\",\"owner\":\"TONY\",\"code\":\"TOMORROW\",\"stocks\":[{\"ticker\":\"FTFT\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":5},{\"ticker\":\"AITX\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"QCOM\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"MAIN\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"T\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"CSWC\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"RVLV\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"DIS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"NIO\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"AAPL\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"FB\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"NKE\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"TSLA\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"PLUG\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"FCEL\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"DKNG\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"CHPT\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"APXT\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"DBX\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"AAL\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"WFC\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"GNOG\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"WBA\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"TTCF\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"PLTR\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"IDEX\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"V\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"CRWD\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"SQ\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"BNGO\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"FTFT\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"GNUS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null},{\"ticker\":\"ARDX\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":\"04/29/2021\",\"events\":[],\"adjustRate\":null},{\"ticker\":\"PLX\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":\"04/27/2021\",\"events\":[],\"adjustRate\":null},{\"ticker\":\"COINBASE\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":true,\"expires\":\"04/14/2021\",\"events\":[],\"adjustRate\":null}]},{\"name\":\"Webull Tony IRA\",\"owner\":\"TONY\",\"code\":\"WE_TX_IRA\",\"stocks\":[{\"ticker\":\"AHAC\",\"cost\":11,\"count\":100,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":9.01},{\"ticker\":\"BLUE\",\"cost\":29.1,\"count\":20,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":null},{\"ticker\":\"BNGO\",\"cost\":8.037,\"count\":300,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":7.5},{\"ticker\":\"CCIV\",\"cost\":22.5,\"count\":150,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":21.5},{\"ticker\":\"CHPT\",\"cost\":21.52,\"count\":150,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":20.5},{\"ticker\":\"GEVO\",\"cost\":8.367,\"count\":150,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":7.5},{\"ticker\":\"NIO\",\"cost\":37.838,\"count\":150,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":37},{\"ticker\":\"PLTR\",\"cost\":22.571,\"count\":70,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":21},{\"ticker\":\"RIOT\",\"cost\":47.683,\"count\":60,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":46},{\"ticker\":\"VERU\",\"cost\":11.339,\"count\":20,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":null,\"strikeRate\":10.5}]},{\"name\":\"Ameritrade\",\"owner\":\"TONY\",\"code\":\"AM_TX\",\"stocks\":[{\"ticker\":\"RIOT\",\"cost\":61.375,\"count\":60,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"adjustRate\":57,\"strikeRate\":55},{\"ticker\":\"ATOS\",\"cost\":2.86,\"count\":5000,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"adjustRate\":2.5,\"strikeRate\":2,\"events\":[]},{\"ticker\":\"SPPI\",\"cost\":4.09,\"count\":1700,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"adjustRate\":3.5,\"strikeRate\":2.9,\"events\":[]},{\"ticker\":\"ALNA\",\"cost\":2.16,\"count\":500,\"max\":5,\"min\":1.5,\"position\":true,\"expires\":null,\"adjustRate\":1.6,\"strikeRate\":1,\"events\":[]},{\"adjustRate\":12.5,\"strikeRate\":11,\"ticker\":\"APXT\",\"cost\":15,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"BHTG\",\"cost\":3.51,\"count\":200,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"BIOL\",\"cost\":1.10667,\"count\":600,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"BLDV\",\"cost\":0.00487,\"count\":40000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"BNGO\",\"cost\":10.59616,\"count\":250,\"max\":null,\"min\":null,\"position\":true,\"adjustRate\":9},{\"ticker\":\"CCIV\",\"cost\":38.16364,\"count\":165,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"CGIX\",\"cost\":10.63667,\"count\":300,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"ELCR\",\"cost\":0.003,\"count\":139000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"FTOC\",\"cost\":14.005,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"GEVO\",\"cost\":8.9,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"GSAT\",\"cost\":2.48,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"GTEH\",\"cost\":0.00159,\"count\":475000,\"max\":1,\"min\":0.002,\"position\":true},{\"ticker\":\"HCMC\",\"cost\":0.00463,\"count\":150000,\"max\":null,\"min\":null,\"position\":true,\"adjustRate\":0.003},{\"ticker\":\"JAGX\",\"cost\":3.52945,\"count\":200,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"LIFE\",\"cost\":6.25262,\"count\":103,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"LTNC\",\"cost\":0.03769,\"count\":10000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"NIO\",\"cost\":65.15,\"count\":20,\"max\":null,\"min\":null,\"position\":true,\"adjustRate\":45},{\"ticker\":\"SAVA\",\"cost\":82.7,\"count\":60,\"max\":null,\"min\":null,\"position\":true,\"adjustRate\":50},{\"ticker\":\"SENS\",\"cost\":3.81,\"count\":500,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"SLRX\",\"cost\":2.28,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"TELL\",\"cost\":3.33343,\"count\":700,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"THCB\",\"cost\":21.25,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"TLSS\",\"cost\":0.05985,\"count\":1000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"VGAC\",\"cost\":15.4214,\"count\":200,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"VPER\",\"cost\":0.02336,\"count\":30000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"ZOM\",\"cost\":2.58389,\"count\":3600,\"max\":null,\"min\":null,\"position\":true,\"adjustRate\":2.2},{\"ticker\":\"ZSAN\",\"cost\":2.815,\"count\":200,\"max\":null,\"min\":null,\"position\":true,\"adjustRate\":1.5}]},{\"name\":\"Webull(Email)\",\"owner\":\"TONY\",\"code\":\"WE_TX(E)\",\"stocks\":[{\"ticker\":\"BNGO\",\"cost\":9.75,\"count\":50,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"strikeRate\":7.5},{\"ticker\":\"PHCF\",\"cost\":9.5,\"count\":10,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"ACIC\",\"cost\":16.491,\"count\":10,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"CCIV\",\"cost\":37.632,\"count\":130,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"strikeRate\":21.5,\"adjustRate\":28},{\"ticker\":\"CTRM\",\"cost\":1.3,\"count\":500,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"strikeRate\":0.75,\"adjustRate\":0.9},{\"ticker\":\"ZOM\",\"cost\":2.351,\"count\":550,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"strikeRate\":1,\"adjustRate\":1.5},{\"ticker\":\"GILT\",\"cost\":19.5,\"count\":100,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"strikeRate\":10.5,\"adjustRate\":12},{\"ticker\":\"TRCH\",\"cost\":3.49,\"count\":100,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[],\"strikeRate\":1.75,\"adjustRate\":2},{\"ticker\":\"HYLN\",\"cost\":18.5,\"count\":50,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"TNXP\",\"cost\":1.5,\"count\":100,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"ADT\",\"cost\":9.37,\"count\":1,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"NAKD\",\"cost\":2.064,\"count\":625,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"AMC\",\"cost\":9.671,\"count\":70,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"NOK\",\"cost\":4.9,\"count\":200,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]}]},{\"name\":\"Webull(Mobile)\",\"owner\":\"TONY\",\"code\":\"WE_TX(M)\",\"stocks\":[{\"ticker\":\"AVXL\",\"cost\":17.5,\"count\":28,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"strikeRate\":13.5,\"events\":[]}]},{\"name\":\"Webull Vineetha\",\"owner\":\"VINEETHA\",\"code\":\"WE_VI\",\"stocks\":[{\"ticker\":\"BNGO\",\"cost\":6.9,\"count\":10,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"ZOM\",\"cost\":1.84,\"count\":1000,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"RIOT\",\"cost\":52.25,\"count\":50,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"GNW\",\"cost\":3.31,\"count\":1,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"CCIV\",\"cost\":33.04,\"count\":75,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"adjustRate\":25,\"events\":[]}]},{\"name\":\"Robinhood Tony\",\"owner\":\"TONY\",\"code\":\"RB_TX\",\"stocks\":[{\"ticker\":\"NIO\",\"cost\":45.22,\"count\":70,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"adjustRate\":43,\"events\":[]},{\"ticker\":\"BNGO\",\"cost\":9.09,\"count\":302,\"max\":null,\"min\":null,\"position\":true,\"adjustRate\":8,\"expires\":null,\"events\":[]},{\"ticker\":\"PLTR\",\"cost\":26.53,\"count\":95,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"adjustRate\":23,\"events\":[]},{\"ticker\":\"AMZN\",\"cost\":3247.65,\"count\":0.032639,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"SIRI\",\"cost\":5.9,\"count\":1,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]}]},{\"name\":\"Robinhood Vineetha\",\"owner\":\"VINEETHA\",\"code\":\"RB_VI\",\"stocks\":[{\"ticker\":\"AGEN\",\"cost\":3.23,\"count\":1,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]}]},{\"name\":\"Etrade\",\"owner\":\"VINEETHA\",\"code\":\"ET_VI\",\"stocks\":[{\"ticker\":\"AVXL\",\"cost\":16.5,\"count\":15,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"BNGO\",\"cost\":8.0565,\"count\":131,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"EVFM\",\"cost\":2.08,\"count\":10,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"NNDM\",\"cost\":13.3,\"count\":50,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"ZOM\",\"cost\":0.735,\"count\":1350,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]}]},{\"name\":\"Watchlist\",\"owner\":\"TONY\",\"code\":\"WA_TX\",\"stocks\":[{\"ticker\":\"AMC\",\"position\":false,\"expires\":\"03/12/2021\",\"events\":[],\"cost\":null,\"count\":null,\"max\":null,\"min\":null},{\"ticker\":\"ORLA\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"GNOG\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"NVCN\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"GNUS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"TRCH\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"OGI\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"IDEX\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"CRIS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"CLNE\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"FTFT\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"MRO\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"SRNE\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"MVIS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"QS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"LAZR\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"CLA\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"BFT\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"UAVS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"FCEL\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"WKHS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"AAPL\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"TSLA\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"VTI\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"TTCF\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"WKHS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"CRWD\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"FSR\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false,\"tags\":[\"ev\"]},{\"ticker\":\"GE\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false,\"tags\":[\"sain\"]},{\"ticker\":\"MESA\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false,\"tags\":[\"sain\"]},{\"ticker\":\"F\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false,\"tags\":[\"sain\"]},{\"ticker\":\"CRWD\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false,\"tags\":[\"sain\"]}]}]}");

/***/ }),

/***/ "yMW0":
/*!***************************************************!*\
  !*** ./apps/trade/src/app/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _action_action_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action/action.component */ "d1UU");
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stocks.service */ "pCMU");
/* harmony import */ var _update_stock_update_stock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../update-stock/update-stock.component */ "iTZR");
/* harmony import */ var _stocks_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stocks.json */ "pbiv");
var _stocks_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../stocks.json */ "pbiv", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _stocks_grid_stocks_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../stocks-grid/stocks-grid.component */ "6Rgv");




















function HomeComponent_div_10_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actionStock_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("BUY < ", actionStock_r3.strikeRate, "");
} }
function HomeComponent_div_10_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actionStock_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("SELL > ", actionStock_r3.sellRate, "");
} }
function HomeComponent_div_10_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actionStock_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](actionStock_r3.lastPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](actionStock_r3.cost);
} }
function HomeComponent_div_10_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actionStock_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](actionStock_r3.lastPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](actionStock_r3.cost);
} }
function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, HomeComponent_div_10_span_7_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, HomeComponent_div_10_span_8_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, HomeComponent_div_10_div_9_Template, 5, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, HomeComponent_div_10_div_10_Template, 5, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actionStock_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](actionStock_r3.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](actionStock_r3.tradeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", actionStock_r3.strike);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", actionStock_r3.sell);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", actionStock_r3.sell);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", actionStock_r3.strike);
} }
function HomeComponent_mat_tab_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trade_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", trade_r12.name, " ");
} }
function HomeComponent_mat_tab_13_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomeComponent_mat_tab_13_ng_template_1_Template, 2, 1, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "money-stocks-grid", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("moveToWatchListEvent", function HomeComponent_mat_tab_13_Template_money_stocks_grid_moveToWatchListEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r16.onMoveToWatchList($event); })("deleteEvent", function HomeComponent_mat_tab_13_Template_money_stocks_grid_deleteEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r18.onDeleteStock($event); })("editEvent", function HomeComponent_mat_tab_13_Template_money_stocks_grid_editEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r19.onEditStock($event); })("addEvent", function HomeComponent_mat_tab_13_Template_money_stocks_grid_addEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r20.onAddStock($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trade_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("trade", trade_r12)("displayedColumns", ctx_r2.displayedColumns);
} }
class HomeComponent {
    constructor(http, stocksService, db, bottomSheet) {
        this.http = http;
        this.stocksService = stocksService;
        this.db = db;
        this.bottomSheet = bottomSheet;
        this.openSidenav = true;
        this.stopPolling = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loading = false;
        this.displayedColumns = [
            'ticker',
            'lastPrice',
            'cost',
            'totalcost',
            'profit',
            // 'Buy/Sell',
            // 'min',
            // 'max',
            'adjustShares',
            'action',
        ];
        this.actionStocks = [];
        this.trackByTrade = (index, trade) => index;
        this.trackByStock = (index, stock) => index;
    }
    ngOnInit() {
        // this.stocks$ = this.db.list<ITrade>('trade').valueChanges();
        this.stocks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_stocks_json__WEBPACK_IMPORTED_MODULE_8__["trade"]);
        this.trade$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1, 2000).pipe(
        // tap(() => (this.actionStocks = [])),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.stocks$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((trade) => this.getStocks(trade)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.stopPolling));
        this.stocksService.openSidenav$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((x) => (this.openSidenav = x)))
            .subscribe();
        this.stocksService.addNewTrade$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.addNewTrade()))
            .subscribe();
    }
    close() {
        this.openSidenav = false;
    }
    getTickers(trade) {
        return [].concat(...trade
            .filter((t) => !!t.stocks)
            .map((t) => [...new Set(t.stocks.map((s) => s.ticker))]));
    }
    addNewTrade() {
        const bottomSheetConfig = {
            autoFocus: true,
            data: {
                tradeRef: this.db.list('trade'),
            },
        };
        this.bottomSheet.open(_action_action_component__WEBPACK_IMPORTED_MODULE_5__["ActionComponent"], bottomSheetConfig);
        // const trade: ITrade = {
        //   code: 'Pennies',
        //   name: 'PENNY',
        //   owner: 'TONY',
        //   stocks: [],
        // };
        // const tradeRef = this.db.list('trade');
        // tradeRef.push(trade);
    }
    onAddStock(stock) {
        const bottomSheetConfig = {
            autoFocus: true,
            data: {
                tradeRef: this.db.list('trade'),
                stock: stock,
                action: 'ADD',
            },
        };
        this.bottomSheet.open(_update_stock_update_stock_component__WEBPACK_IMPORTED_MODULE_7__["UpdateStockComponent"], bottomSheetConfig);
    }
    onEditStock(stock) {
        const bottomSheetConfig = {
            autoFocus: true,
            data: {
                tradeRef: this.db.list('trade'),
                stock: stock,
                action: 'EDIT',
            },
        };
        this.bottomSheet.open(_update_stock_update_stock_component__WEBPACK_IMPORTED_MODULE_7__["UpdateStockComponent"], bottomSheetConfig);
    }
    onMoveToWatchList(stock) {
        const bottomSheetConfig = {
            autoFocus: true,
            data: {
                tradeRef: this.db.list('trade'),
                stock: stock,
                action: 'MOVE',
            },
        };
        this.bottomSheet.open(_update_stock_update_stock_component__WEBPACK_IMPORTED_MODULE_7__["UpdateStockComponent"], bottomSheetConfig);
    }
    onDeleteStock(stock, platform) {
        console.log(stock);
        this.stocks$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe((stocks) => {
            const st = stocks.find((s) => s.name === stock.tradeName);
            st.stocks = st.stocks.filter((sto) => sto.ticker !== stock.ticker);
            this.db.list('trade').update(st, { stocks: st.stocks });
        });
    }
    getStocks(trade) {
        const tickers = this.getTickers(trade);
        this.loading = true;
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('symbol', tickers.join(','))
            .set('apikey', 'OSO9U25QK6O9X5JFOGEJUYTBUDPLQFFT');
        return this.http
            .get(`https://api.tdameritrade.com/v1/marketdata/quotes`, {
            headers: httpHeaders,
            responseType: 'json',
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.mapResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((s) => {
            return trade.map((tr) => (Object.assign(Object.assign({}, tr), { stocks: tr.stocks
                    ? tr.stocks.map((st) => (Object.assign(Object.assign(Object.assign({}, st), { tradeName: tr.name }), Array.from(Object.values(s)).find((s) => s.symbol === st.ticker))))
                    : [] })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((trade) => trade.map((tr) => (Object.assign(Object.assign({}, tr), { stocks: tr.stocks
                .map((s) => {
                if (s.lastPrice <= s.strikeRate)
                    this.addStrikeStocks(s);
                if (s.lastPrice >= s.sellRate)
                    this.addSellStocks(s);
                return Object.assign(Object.assign({}, s), { perShareProfit: (s.lastPrice - s.cost).toFixed(s.lastPrice < 0.01 ? 5 : 2), isProfit: s.lastPrice - s.cost > 0, profit: ((s.lastPrice - s.cost) * s.count).toFixed(2), adjustShares: s.adjustRate
                        ? this.stocksService
                            .howManySharesToAverage(s, s.adjustRate)
                            .toFixed(2)
                        : null, totalCost: (s.cost * s.count).toFixed(2) });
            })
                .sort((s1, s2) => +s2.profit - +s1.profit) })))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => (this.loading = false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => {
            this.loading = false;
            console.error(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
    addStrikeStocks(strikeStock) {
        const stockExist = this.actionStocks.find((ss) => ss.ticker === strikeStock.ticker &&
            ss.tradeName === strikeStock.tradeName);
        if (stockExist) {
            this.actionStocks = [
                ...this.actionStocks.filter((ss) => ss.ticker !== strikeStock.ticker &&
                    ss.tradeName !== strikeStock.tradeName),
                Object.assign(Object.assign({}, strikeStock), { strike: true }),
            ];
        }
        else {
            this.actionStocks.push(Object.assign(Object.assign({}, strikeStock), { strike: true }));
        }
    }
    addSellStocks(sellStock) {
        const stockExist = this.actionStocks.find((ss) => ss.ticker === sellStock.ticker && ss.tradeName === sellStock.tradeName);
        if (stockExist) {
            this.actionStocks = [
                ...this.actionStocks.filter((ss) => ss.ticker !== sellStock.ticker &&
                    ss.tradeName !== sellStock.tradeName),
                Object.assign(Object.assign({}, sellStock), { sell: true }),
            ];
        }
        else {
            this.actionStocks.push(Object.assign(Object.assign({}, sellStock), { sell: true }));
        }
    }
    mapResponse(response) {
        return Array.from(Object.values(response)).map((r) => ({
            lastPrice: r.lastPrice,
            mark: r.mark,
            lowPrice: r.lowPrice,
            highPrice: r.highPrice,
            high52Week: r['52WkHigh'],
            low52Week: r['52WkLow'],
            totalVolume: r.totalVolume,
            netChange: r.netChange,
            symbol: r.symbol,
        }));
    }
    ngOnDestroy() {
        this.stopPolling.next();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_stocks_service__WEBPACK_IMPORTED_MODULE_6__["StocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["money-home"]], decls: 15, vars: 11, consts: [[1, "example-container"], ["mode", "side", 1, "left__sidenav", 3, "opened", "fixedInViewport", "fixedTopGap", "fixedBottomGap"], ["sidenav", ""], [1, "header"], ["mat-icon-button", "", "aria-label", "edit", 3, "click"], [1, "strike__stocks"], ["class", "strike__stock", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["color", "primary"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "strike__stock"], [1, "strike__ticker"], [1, "light-gray", "small"], [1, "action__container"], ["class", "stock__action red__background", 4, "ngIf"], ["class", "stock__action green__background", 4, "ngIf"], [4, "ngIf"], [1, "stock__action", "red__background"], [1, "stock__action", "green__background"], [1, "green"], ["mat-tab-label", ""], [1, "stocks"], [3, "trade", "displayedColumns", "moveToWatchListEvent", "deleteEvent", "editEvent", "addEvent"], [1, "tab-header"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "ACTION STOCKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "menu_open");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 11, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "mat-tab-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, HomeComponent_mat_tab_13_Template, 4, 2, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("opened", ctx.openSidenav)("fixedInViewport", true)("fixedTopGap", 0)("fixedBottomGap", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.actionStocks)("ngForTrackBy", ctx.trackByStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@.disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 9, ctx.trade$))("ngForTrackBy", ctx.trackByTrade);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabLabel"], _stocks_grid_stocks_grid_component__WEBPACK_IMPORTED_MODULE_15__["StocksGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".tab-header[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-family: \"Roboto Condensed\";\n}\n\n.left__sidenav[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n.stocks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  margin: 5px;\n  min-width: 150px;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .stock__body {\n  padding: 10px;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .stock__body div {\n  padding: 5px 0;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .ticker {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-bottom: 1px solid #eee;\n  padding: 10px;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .ticker .ticker-name {\n  font-weight: 500;\n  font-size: 1.3rem;\n  flex: 1;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .actions .buy {\n  color: #fff;\n  background: #00c805;\n  border: darkgreen;\n  text-shadow: darkgreen;\n  border-radius: 5px;\n  padding: 8px 10px;\n  margin: 10px;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .actions .sell {\n  color: #fff;\n  background: #ff5000;\n  border: darkred;\n  text-shadow: darkred;\n  border-radius: 5px;\n  padding: 8px 10px;\n  margin: 10px;\n}\n\n.strike__stock[_ngcontent-%COMP%] {\n  background: linear-gradient(#f1f1f1, #fff);\n  border: 1px solid #eee;\n  padding: 10px;\n  display: flex;\n}\n\n.strike__stock[_ngcontent-%COMP%]   .strike__ticker[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.action__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.action__container[_ngcontent-%COMP%]   .stock__action[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  color: #fff;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVNJO0VBQ0UsYUFBQTtBQVBOOztBQVFNO0VBQ0UsY0FBQTtBQU5SOztBQVVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFSTjs7QUFTTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0FBUFI7O0FBVUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVJOOztBQVNNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBUFI7O0FBU007RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVBSOztBQWFBO0VBQ0UsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBVkY7O0FBV0U7RUFDRSxPQUFBO0FBVEo7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBVEY7O0FBVUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBUkoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnO1xufVxuXG4ubGVmdF9fc2lkZW5hdiB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG4vLyA6Om5nLWRlZXAgLm1hdC1pbmstYmFyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzgwNSAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzgwNTtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbi8vICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbi8vIH1cbi5zdG9ja3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIDo6bmctZGVlcCAuc3RvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuXG4gICAgLnN0b2NrX19ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBkaXYge1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGlja2VyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgLnRpY2tlci1uYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIC5hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAuYnV5IHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMGM4MDU7XG4gICAgICAgIGJvcmRlcjogZGFya2dyZWVuO1xuICAgICAgICB0ZXh0LXNoYWRvdzogZGFya2dyZWVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICB9XG4gICAgICAuc2VsbCB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY1MDAwO1xuICAgICAgICBib3JkZXI6IGRhcmtyZWQ7XG4gICAgICAgIHRleHQtc2hhZG93OiBkYXJrcmVkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zdHJpa2VfX3N0b2NrIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmMWYxZjEsICNmZmYpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAuc3RyaWtlX190aWNrZXIge1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbi5hY3Rpb25fX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgLnN0b2NrX19hY3Rpb24ge1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map