import { Printer } from './base'
import { Day } from '../date-components/day'

export class HtmlPrinter extends Printer {
  print(headers: string[], days: Day[]): string {
    const header: string = this.generateHeaderRow(headers)
    const content: string = `          <tr>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
          </tr>        
`
    return `
      <table>
        <thead>
          ${header}
        </thead>      
        <tbody>
          ${content}
        </tbody>      
      </table>
    `.replace(/([ \n])/g, '')
  }

  private generateHeaderRow(headers: string[]) {
    const headerRow = headers.map((header) => `<td>${header}</td>`).join('')

    return `<tr>${headerRow}</tr>`
  }
}
