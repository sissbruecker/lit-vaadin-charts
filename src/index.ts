import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@vaadin/charts';
import '@vaadin/dialog';
import { dialogRenderer } from '@vaadin/dialog/lit.js';


function randomSeriesData() {
  return Array.from(Array(50)).map(() => Math.random() * 100);
}

@customElement("lit-chart")
class LitChart extends LitElement {
  @property()
  series = []

  constructor() {
    super();
    this.refreshData();
  }

  refreshData() {
    this.series = Array.from(Array(10)).map(() => randomSeriesData());
  }

  render() {
    return html`
      <vaadin-chart title="Lit chart">
        ${this.series.map(
          (values, index) => html`
            <vaadin-chart-series
              .title="${`Series ${index + 1}`}"
              unit="Unit"
              .values="${values}"
            ></vaadin-chart-series>
          `,
        )}
      </vaadin-chart>
      <button @click="${this.refreshData}">Refresh</button>
    `;
  }
}

@customElement("lit-chart-dialog")
class LitChartDialog extends LitElement {
  @property()
  opened = false;

  toggle() {
    this.opened = !this.opened;
  }

  render() {
    return html`
      <vaadin-dialog
        ?opened="${this.opened}"
        ${dialogRenderer(() => html` <lit-chart style="display: block; width: 400px;"></lit-chart>`)}
      ></vaadin-dialog>
      <button @click="${this.toggle}">Open Dialog</button>
    `;
  }
}
