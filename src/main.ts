import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';

@Component({
  selector: 'app-root',
  imports: [ScrollingModule, CdkTableModule],
  template: `
    <h1>Ordinary tables inside virtual scroll items</h1>
    <p>Open the browser console. Loading this example throws
      "CdkVirtualScrollViewport is already attached."</p>

    <cdk-virtual-scroll-viewport itemSize="100" style="height: 200px; width: 400px">
      <div *cdkVirtualFor="let group of groups" style="height: 100px">
        <table cdk-table [dataSource]="group.rows">
          <ng-container cdkColumnDef="value">
            <td cdk-cell *cdkCellDef="let row">{{row}}</td>
          </ng-container>
          <tr cdk-row *cdkRowDef="let row; columns: ['value']"></tr>
        </table>
      </div>
    </cdk-virtual-scroll-viewport>
  `,
})
class App {
  groups = Array.from({length: 100}, (_, id) => ({
    rows: Array.from({length: 3}, (_, row) => `Group ${id}, row ${row}`),
  }));
}

bootstrapApplication(App).catch(console.error);
