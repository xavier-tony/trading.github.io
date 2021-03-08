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
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");







function StocksGridComponent_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " TICKER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r18.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r18.count);
} }
function StocksGridComponent_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " COST ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r19.cost, " ");
} }
function StocksGridComponent_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " LAST PRICE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("green", row_r20.isProfit)("red", !row_r20.isProfit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", row_r20.lastPrice, " (", row_r20.perShareProfit, ") ");
} }
function StocksGridComponent_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " PROFIT/LOSS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("green", row_r21.isProfit)("red", !row_r21.isProfit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r21.profit, " ");
} }
function StocksGridComponent_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " BUY/SELL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("green", row_r22.lastPrice > row_r22.min)("red", row_r22.lastPrice < row_r22.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r22.lastPrice < row_r22.cost ? "Average" : "Sell off/Hold", " ");
} }
function StocksGridComponent_mat_header_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " MIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r23.min, " ");
} }
function StocksGridComponent_mat_header_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " MAX ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r24.max, " ");
} }
function StocksGridComponent_mat_header_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Adjust Shares ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StocksGridComponent_mat_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matBadge", row_r25.adjustRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r25.adjustShares);
} }
function StocksGridComponent_mat_header_row_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row", 20);
} }
function StocksGridComponent_mat_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-row", 21);
} }
class StocksGridComponent {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.trackByStock = (index, stock) => index;
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.stocks);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
}
StocksGridComponent.ɵfac = function StocksGridComponent_Factory(t) { return new (t || StocksGridComponent)(); };
StocksGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StocksGridComponent, selectors: [["money-stocks-grid"]], viewQuery: function StocksGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { displayedColumns: "displayedColumns", stocks: "stocks" }, decls: 27, vars: 5, consts: [["matSort", "", 1, "stocks__grid", 3, "dataSource", "trackBy"], ["matColumnDef", "ticker"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "grid__ticker", 4, "matCellDef"], ["matColumnDef", "cost"], [4, "matCellDef"], ["matColumnDef", "lastPrice"], [3, "green", "red", 4, "matCellDef"], ["matColumnDef", "profit"], ["matColumnDef", "Buy/Sell"], [4, "matHeaderCellDef"], ["matColumnDef", "min"], ["matColumnDef", "max"], ["matColumnDef", "adjustShares"], ["class", "stocks-grid__header", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["class", "stocks-grid__row", 4, "matRowDef", "matRowDefColumns"], ["mat-sort-header", ""], [1, "grid__ticker"], [1, "grid-ticker__count"], ["matBadgeOverlap", "false", 3, "matBadge"], [1, "stocks-grid__header"], [1, "stocks-grid__row"]], template: function StocksGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StocksGridComponent_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, StocksGridComponent_mat_cell_3_Template, 5, 2, "mat-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, StocksGridComponent_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, StocksGridComponent_mat_cell_6_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, StocksGridComponent_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, StocksGridComponent_mat_cell_9_Template, 2, 6, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, StocksGridComponent_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, StocksGridComponent_mat_cell_12_Template, 2, 5, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, StocksGridComponent_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, StocksGridComponent_mat_cell_15_Template, 2, 5, "mat-cell", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, StocksGridComponent_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, StocksGridComponent_mat_cell_18_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, StocksGridComponent_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, StocksGridComponent_mat_cell_21_Template, 2, 1, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, StocksGridComponent_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, StocksGridComponent_mat_cell_24_Template, 3, 2, "mat-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, StocksGridComponent_mat_header_row_25_Template, 1, 0, "mat-header-row", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, StocksGridComponent_mat_row_26_Template, 1, 0, "mat-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource)("trackBy", ctx.trackByStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadge"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 800px;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .stocks-grid__row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .stocks-grid__row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .grid__ticker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .grid__ticker[_ngcontent-%COMP%]   .grid-ticker__count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #a5a2a2;\n  align-items: flex-start;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .stocks-grid__header[_ngcontent-%COMP%] {\n  background: linear-gradient(#f1f1f1, #fff);\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n[_nghost-%COMP%]   .stocks__grid[_ngcontent-%COMP%]   .stocks-grid__header[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0b2Nrcy1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUFFSjtBQURJO0VBQ0Usc0JBQUE7QUFHTjtBQUFJO0VBQ0UsbUJBQUE7QUFFTjtBQUNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUNOO0FBQU07RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUVSO0FBRUk7RUFDRSwwQ0FBQTtFQUNBLDJDQUFBO0FBQU47QUFDTTtFQUNFLGlCQUFBO0FBQ1IiLCJmaWxlIjoic3RvY2tzLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC5zdG9ja3NfX2dyaWQge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICAuc3RvY2tzLWdyaWRfX3Jvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgIH1cblxuICAgIC5zdG9ja3MtZ3JpZF9fcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIH1cblxuICAgIC5ncmlkX190aWNrZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLmdyaWQtdGlja2VyX19jb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogI2E1YTJhMjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0b2Nrcy1ncmlkX19oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmMWYxZjEsICNmZmYpO1xuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICAgIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
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
        ], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_7__["WatchlistComponent"],
        _position_position_component__WEBPACK_IMPORTED_MODULE_8__["PositionComponent"],
        _buysellprogress_buysellprogress_component__WEBPACK_IMPORTED_MODULE_9__["BuySellProgressComponent"],
        _stocks_grid_stocks_grid_component__WEBPACK_IMPORTED_MODULE_11__["StocksGridComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"]], exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'trade';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["money-root"]], decls: 7, vars: 0, consts: [[1, "header"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "STOCKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 0 20px;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: normal;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFFSjtBQURJO0VBQ0UsZUFBQTtBQUdOO0FBRk07RUFDRSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUlSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xuICBtYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIC5oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgaDEge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


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

/***/ "pCMU":
/*!**********************************************!*\
  !*** ./apps/trade/src/app/stocks.service.ts ***!
  \**********************************************/
/*! exports provided: StocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksService", function() { return StocksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StocksService {
    howManySharesToAverage(stock, expectedRate) {
        if (!stock || !expectedRate)
            throw new Error('Values cannot be null');
        if (expectedRate <= stock.lastPrice)
            throw new Error('The current price of the stock cannot be greater than the expected rate');
        return ((stock.count * (stock.cost - expectedRate)) /
            (expectedRate - stock.lastPrice));
    }
}
StocksService.ɵfac = function StocksService_Factory(t) { return new (t || StocksService)(); };
StocksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StocksService, factory: StocksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pbiv":
/*!****************************************!*\
  !*** ./apps/trade/src/app/stocks.json ***!
  \****************************************/
/*! exports provided: trade, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"trade\":[{\"name\":\"AMERITRADE\",\"owner\":\"TONY\",\"code\":\"AM_TX\",\"stocks\":[{\"ticker\":\"ALNA\",\"cost\":2.16,\"count\":500,\"max\":5,\"min\":1.5,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"AMC\",\"cost\":10.039376,\"count\":949,\"max\":15,\"min\":7.6,\"position\":true,\"expires\":\"03/12/2021\",\"events\":[]},{\"ticker\":\"APXT\",\"cost\":15,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"BHTG\",\"cost\":3.51,\"count\":200,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"BIOL\",\"cost\":1.10667,\"count\":600,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"BLDV\",\"cost\":0.00487,\"count\":40000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"BNGO\",\"cost\":10.59616,\"count\":250,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"CCIV\",\"cost\":38.16364,\"count\":165,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"CGIX\",\"cost\":10.63667,\"count\":300,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"ELCR\",\"cost\":0.003,\"count\":139000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"FTOC\",\"cost\":14.005,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"GEVO\",\"cost\":8.9,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"GSAT\",\"cost\":2.48,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"GTEH\",\"cost\":0.00159,\"count\":475000,\"max\":1,\"min\":0.002,\"position\":true},{\"ticker\":\"HCMC\",\"cost\":0.00463,\"count\":150000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"JAGX\",\"cost\":3.52945,\"count\":200,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"LIFE\",\"cost\":6.25262,\"count\":103,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"LTNC\",\"cost\":0.03769,\"count\":10000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"NIO\",\"cost\":65.15,\"count\":20,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"SAVA\",\"cost\":82.7,\"count\":60,\"max\":null,\"min\":null,\"position\":true,\"adjustRate\":50},{\"ticker\":\"SENS\",\"cost\":3.81,\"count\":500,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"SLRX\",\"cost\":2.28,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"TELL\",\"cost\":3.33343,\"count\":700,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"THCB\",\"cost\":21.25,\"count\":100,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"TLSS\",\"cost\":0.05985,\"count\":1000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"VGAC\",\"cost\":15.4214,\"count\":200,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"VPER\",\"cost\":0.02336,\"count\":30000,\"max\":null,\"min\":null,\"position\":true},{\"ticker\":\"ZOM\",\"cost\":2.58389,\"count\":3600,\"max\":null,\"min\":null,\"position\":true,\"adjustRate\":2.2},{\"ticker\":\"ZSAN\",\"cost\":2.815,\"count\":200,\"max\":null,\"min\":null,\"position\":true}]},{\"name\":\"WEBULL(Email)\",\"owner\":\"TONY\",\"code\":\"WE_TX(E)\",\"stocks\":[{\"ticker\":\"BNGO\",\"cost\":9.75,\"count\":50,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"PHCF\",\"cost\":9.5,\"count\":10,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"ACIC\",\"cost\":16.491,\"count\":10,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"CCIV\",\"cost\":37.632,\"count\":130,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"CTRM\",\"cost\":1.3,\"count\":500,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"ZOM\",\"cost\":2.351,\"count\":550,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"GILT\",\"cost\":19.5,\"count\":100,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"TRCH\",\"cost\":3.49,\"count\":100,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"HYLN\",\"cost\":18.5,\"count\":50,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"TNXP\",\"cost\":1.5,\"count\":100,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"ADT\",\"cost\":9.37,\"count\":1,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"NAKD\",\"cost\":2.064,\"count\":625,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"AMC\",\"cost\":9.671,\"count\":70,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"NOK\",\"cost\":4.9,\"count\":200,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]}]},{\"name\":\"WEBULL(Mobile)\",\"owner\":\"TONY\",\"code\":\"WE_TX(M)\",\"stocks\":[{\"ticker\":\"AVXL\",\"cost\":17.5,\"count\":28,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]}]},{\"name\":\"WEBULL\",\"owner\":\"VINEETHA\",\"code\":\"WE_VI\",\"stocks\":[{\"ticker\":\"BNGO\",\"cost\":6.9,\"count\":10,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"ZOM\",\"cost\":1.84,\"count\":1000,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"RIOT\",\"cost\":52.25,\"count\":50,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"GNW\",\"cost\":3.31,\"count\":1,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"CCIV\",\"cost\":33.04,\"count\":75,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]}]},{\"name\":\"ROBINHOOD\",\"owner\":\"TONY\",\"code\":\"RB_TX\",\"stocks\":[{\"ticker\":\"NIO\",\"cost\":45.22,\"count\":70,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"BNGO\",\"cost\":9.09,\"count\":302,\"max\":null,\"min\":null,\"position\":true,\"adjustRate\":8,\"expires\":null,\"events\":[]},{\"ticker\":\"PLTR\",\"cost\":26.53,\"count\":95,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"AMZN\",\"cost\":3247.65,\"count\":0.032639,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"SIRI\",\"cost\":5.9,\"count\":1,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]}]},{\"name\":\"ROBINHOOD\",\"owner\":\"VINEETHA\",\"code\":\"RB_VI\",\"stocks\":[{\"ticker\":\"AGEN\",\"cost\":3.23,\"count\":1,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]}]},{\"name\":\"ETRADE\",\"owner\":\"VINEETHA\",\"code\":\"ET_VI\",\"stocks\":[{\"ticker\":\"AVXL\",\"cost\":16.5,\"count\":15,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"BNGO\",\"cost\":8.0565,\"count\":131,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"EVFM\",\"cost\":2.08,\"count\":10,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"NNDM\",\"cost\":13.3,\"count\":50,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]},{\"ticker\":\"ZOM\",\"cost\":0.735,\"count\":1350,\"max\":null,\"min\":null,\"position\":true,\"expires\":null,\"events\":[]}]},{\"name\":\"WATCHLIST\",\"owner\":\"TONY\",\"code\":\"WA_TX\",\"stocks\":[{\"ticker\":\"ORLA\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"GNOG\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"NVCN\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"GNUS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"TRCH\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"OGI\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"IDEX\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"CRIS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"CLNE\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"FTFT\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"MRO\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"SRNE\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"MVIS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"QS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"LAZR\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"CLA\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"BFT\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"UAVS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"FCEL\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"position\":false},{\"ticker\":\"WKHS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"AAPL\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"TSLA\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"VTI\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"TTCF\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"WKHS\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"CRWD\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false},{\"ticker\":\"FSR\",\"cost\":null,\"count\":null,\"max\":null,\"min\":null,\"longterm\":true,\"position\":false,\"tags\":[\"ev\"]}]}]}");

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _stocks_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stocks.json */ "pbiv");
var _stocks_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../stocks.json */ "pbiv", 1);
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stocks.service */ "pCMU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _stocks_grid_stocks_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stocks-grid/stocks-grid.component */ "6Rgv");











function HomeComponent_mat_tab_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trade_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", trade_r1.code, " ");
} }
function HomeComponent_mat_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomeComponent_mat_tab_1_ng_template_1_Template, 2, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "money-stocks-grid", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trade_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stocks", trade_r1.stocks)("displayedColumns", ctx_r0.displayedColumns);
} }
class HomeComponent {
    constructor(http, stocksService) {
        this.http = http;
        this.stocksService = stocksService;
        this.stopPolling = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = false;
        this.displayedColumns = [
            'ticker',
            'cost',
            'lastPrice',
            'profit',
            'Buy/Sell',
            'min',
            'max',
            'adjustShares',
        ];
        this.trackByTrade = (index, trade) => index;
        this.trackByStock = (index, stock) => index;
    }
    ngOnInit() {
        this.trade$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1, 2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.getStocks(this.getTickers(_stocks_json__WEBPACK_IMPORTED_MODULE_3__["trade"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.stopPolling));
    }
    getTickers(trade) {
        return [].concat(...trade
            .filter((t) => !!t.stocks)
            .map((t) => [...new Set(t.stocks.map((s) => s.ticker))]));
    }
    getStocks(tickers) {
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.mapResponse), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((s) => {
            return _stocks_json__WEBPACK_IMPORTED_MODULE_3__["trade"].map((tr) => (Object.assign(Object.assign({}, tr), { stocks: tr.stocks.map((st) => (Object.assign(Object.assign({}, st), Array.from(Object.values(s)).find((s) => s.symbol === st.ticker)))) })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((trade) => trade.map((tr) => (Object.assign(Object.assign({}, tr), { stocks: tr.stocks
                .map((s) => (Object.assign(Object.assign({}, s), { perShareProfit: (s.lastPrice - s.cost).toFixed(s.lastPrice < 0.01 ? 5 : 2), isProfit: s.lastPrice - s.cost > 0, profit: ((s.lastPrice - s.cost) * s.count).toFixed(2), adjustShares: s.adjustRate
                    ? this.stocksService.howManySharesToAverage(s, s.adjustRate).toFixed(2)
                    : null })))
                .sort((s1, s2) => +s2.profit - +s1.profit) })))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => {
            this.loading = false;
            alert('ERROR');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
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
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_stocks_service__WEBPACK_IMPORTED_MODULE_4__["StocksService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["money-home"]], decls: 3, vars: 5, consts: [["color", "primary"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-tab-label", ""], [1, "stocks"], [3, "stocks", "displayedColumns"], [1, "tab-header"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomeComponent_mat_tab_1_Template, 4, 2, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@.disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, ctx.trade$))("ngForTrackBy", ctx.trackByTrade);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLabel"], _stocks_grid_stocks_grid_component__WEBPACK_IMPORTED_MODULE_8__["StocksGridComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".tab-header[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-family: \"Roboto Condensed\";\n}\n\n  .mat-ink-bar {\n  background-color: #00c805 !important;\n}\n\n  .mat-tab-label-active {\n  background-color: #00c805;\n  color: #fff;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.stocks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  margin: 5px;\n  min-width: 150px;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .stock__body {\n  padding: 10px;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .stock__body div {\n  padding: 5px 0;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .ticker {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  border-bottom: 1px solid #eee;\n  padding: 10px;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .ticker .ticker-name {\n  font-weight: 500;\n  font-size: 1.3rem;\n  flex: 1;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .actions .buy {\n  color: #fff;\n  background: #00c805;\n  border: darkgreen;\n  text-shadow: darkgreen;\n  border-radius: 5px;\n  padding: 8px 10px;\n  margin: 10px;\n}\n\n.stocks[_ngcontent-%COMP%]     .stock .actions .sell {\n  color: #fff;\n  background: #ff5000;\n  border: darkred;\n  text-shadow: darkred;\n  border-radius: 5px;\n  padding: 8px 10px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUVGOztBQURFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURJO0VBQ0UsYUFBQTtBQUdOOztBQUZNO0VBQ0UsY0FBQTtBQUlSOztBQUFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFFTjs7QUFETTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0FBR1I7O0FBQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVOOztBQURNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBR1I7O0FBRE07RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUdSIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJztcbn1cblxuOjpuZy1kZWVwIC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGM4MDUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGM4MDU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uc3RvY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICA6Om5nLWRlZXAgLnN0b2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcblxuICAgIC5zdG9ja19fYm9keSB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZGl2IHtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpY2tlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIC50aWNrZXItbmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLmJ1eSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjODA1O1xuICAgICAgICBib3JkZXI6IGRhcmtncmVlbjtcbiAgICAgICAgdGV4dC1zaGFkb3c6IGRhcmtncmVlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgfVxuICAgICAgLnNlbGwge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmNTAwMDtcbiAgICAgICAgYm9yZGVyOiBkYXJrcmVkO1xuICAgICAgICB0ZXh0LXNoYWRvdzogZGFya3JlZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


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