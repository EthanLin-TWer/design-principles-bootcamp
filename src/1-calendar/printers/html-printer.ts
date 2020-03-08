import { Printer } from './base'
import { Day } from '../date-components/day'

export class HtmlPrinter extends Printer {
  print(headers: string[], days: Day[]): string {
    return `
      <table>
        <thead>
          <tr>
            <td>日</td>
            <td>一</td>
            <td>二</td>
            <td>三</td>
            <td>四</td>
            <td>五</td>
            <td>六</td>
          </tr>
        </thead>      
        <tbody>
          <tr>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
          </tr>        
        </tbody>      
      </table>
    `.replace(/([ \n])/g, '')
  }
}
