import { packd_export_6 } from 'https://srv.divriots.com/packd/@vaadin/charts@23.2.2,@vaadin/dialog@23.2.2,@vaadin/dialog@23.2.2/lit.js,lit,lit-html@next-major,lit/decorators.js,tslib';const { __decorate,__metadata } = packd_export_6;;
import { packd_export_3 } from 'https://srv.divriots.com/packd/@vaadin/charts@23.2.2,@vaadin/dialog@23.2.2,@vaadin/dialog@23.2.2/lit.js,lit,lit-html@next-major,lit/decorators.js,tslib';const { html,LitElement } = packd_export_3;;
import { packd_export_5 } from 'https://srv.divriots.com/packd/@vaadin/charts@23.2.2,@vaadin/dialog@23.2.2,@vaadin/dialog@23.2.2/lit.js,lit,lit-html@next-major,lit/decorators.js,tslib';const { customElement,property } = packd_export_5;;
import { packd_export_0 } from 'https://srv.divriots.com/packd/@vaadin/charts@23.2.2,@vaadin/dialog@23.2.2,@vaadin/dialog@23.2.2/lit.js,lit,lit-html@next-major,lit/decorators.js,tslib';;
import { packd_export_1 } from 'https://srv.divriots.com/packd/@vaadin/charts@23.2.2,@vaadin/dialog@23.2.2,@vaadin/dialog@23.2.2/lit.js,lit,lit-html@next-major,lit/decorators.js,tslib';;
import { packd_export_2 } from 'https://srv.divriots.com/packd/@vaadin/charts@23.2.2,@vaadin/dialog@23.2.2,@vaadin/dialog@23.2.2/lit.js,lit,lit-html@next-major,lit/decorators.js,tslib';const { dialogRenderer } = packd_export_2;;
function randomSeriesData() {
    return Array.from(Array(50)).map(() => Math.random() * 100);
}
let LitChart = class LitChart extends LitElement {
    constructor() {
        super();
        this.series = [];
        this.refreshData();
    }
    refreshData() {
        this.series = Array.from(Array(10)).map(() => randomSeriesData());
    }
    render() {
        return html `
      <vaadin-chart title="Lit chart">
        ${this.series.map((values, index) => html `
            <vaadin-chart-series
              .title="${`Series ${index + 1}`}"
              unit="Unit"
              .values="${values}"
            ></vaadin-chart-series>
          `)}
      </vaadin-chart>
      <button @click="${this.refreshData}">Refresh</button>
    `;
    }
};
__decorate([
    property(),
    __metadata("design:type", Object)
], LitChart.prototype, "series", void 0);
LitChart = __decorate([
    customElement("lit-chart"),
    __metadata("design:paramtypes", [])
], LitChart);
let LitChartDialog = class LitChartDialog extends LitElement {
    constructor() {
        super(...arguments);
        this.opened = false;
    }
    toggle() {
        this.opened = !this.opened;
    }
    render() {
        return html `
      <vaadin-dialog
        ?opened="${this.opened}"
        ${dialogRenderer(() => html ` <lit-chart style="display: block; width: 400px;"></lit-chart>`)}
      ></vaadin-dialog>
      <button @click="${this.toggle}">Open Dialog</button>
    `;
    }
};
__decorate([
    property(),
    __metadata("design:type", Object)
], LitChartDialog.prototype, "opened", void 0);
LitChartDialog = __decorate([
    customElement("lit-chart-dialog")
], LitChartDialog);
//# sourceMappingURL=index.js.map