import { Printer } from './base';
import { Day } from '../date-components/day';

export class HtmlPrinter extends Printer {
  print(headers: string[], days: Day[]): string {
    const header: string = this.generateHeaderRow(headers);
    const content: string = this.renderWeeksInfo(days);
    const result = `<table><thead>${header}</thead><tbody>${content}</tbody></table>`;

    return result.trimStart().trimEnd();
  }

  private generateHeaderRow(headers: string[]) {
    const headerRow = headers.map((header) => `<td>${header}</td>`).join('');

    return `<tr>${headerRow}</tr>`;
  }

  private renderWeeksInfo(days: Day[]) {
    const weeks = days.map((day) => `<td>${day.getValue()}</td>`).join('');
    return `<tr>${weeks}</tr>`;
  }
}
