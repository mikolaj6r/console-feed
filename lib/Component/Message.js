import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Message, Icon, Content, AmountIcon } from './elements'
import Formatted from './message-parsers/Formatted'
import ObjectTree from './message-parsers/Object'
import ErrorPanel from './message-parsers/Error'
class ConsoleMessage extends React.PureComponent {
  constructor() {
    super(...arguments)
    this.theme = theme =>
      Object.assign(Object.assign({}, theme), { method: this.props.log.method })
  }
  render() {
    const { log } = this.props
    return React.createElement(
      ThemeProvider,
      { theme: this.theme },
      React.createElement(
        Message,
        { 'data-method': log.method },
        log.amount > 1
          ? React.createElement(AmountIcon, null, log.amount)
          : React.createElement(Icon, null),
        React.createElement(Content, null, this.getNode())
      )
    )
  }
  getNode() {
    const { log } = this.props
    // Error handling
    const error = this.typeCheck(log)
    if (error) return error
    // Chrome formatting
    if (
      log.data.length > 0 &&
      typeof log.data[0] === 'string' &&
      log.data[0].indexOf('%') > -1
    ) {
      return React.createElement(Formatted, { data: log.data })
    }
    // Error panel
    if (
      log.data.every(message => typeof message === 'string') &&
      log.method === 'error'
    ) {
      return React.createElement(ErrorPanel, { log: log })
    }
    // Normal inspector
    const quoted = typeof log.data[0] !== 'string'
    return React.createElement(ObjectTree, { log: log, quoted: quoted })
  }
  typeCheck(log) {
    if (!log) {
      return React.createElement(Formatted, {
        data: [
          `%c[console-feed] %cFailed to parse message! %clog was typeof ${typeof log}, but it should've been a log object`,
          'color: red',
          'color: orange',
          'color: cyan'
        ]
      })
    } else if (!(log.data instanceof Array)) {
      return React.createElement(Formatted, {
        data: [
          '%c[console-feed] %cFailed to parse message! %clog.data was not an array!',
          'color: red',
          'color: orange',
          'color: cyan'
        ]
      })
    }
    return false
  }
}
export default ConsoleMessage
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnQvTWVzc2FnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFFOUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBRS9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFFL0QsT0FBTyxTQUFTLE1BQU0sNkJBQTZCLENBQUE7QUFDbkQsT0FBTyxVQUFVLE1BQU0sMEJBQTBCLENBQUE7QUFDakQsT0FBTyxVQUFVLE1BQU0seUJBQXlCLENBQUE7QUFFaEQsTUFBTSxjQUFlLFNBQVEsS0FBSyxDQUFDLGFBQWdDO0lBQW5FOztRQUNFLFVBQUssR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsaUNBQ3JCLEtBQUssS0FDUixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUM3QixDQUFBO0lBcUVKLENBQUM7SUFuRUMsTUFBTTtRQUNKLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQzFCLE9BQU8sQ0FDTCxvQkFBQyxhQUFhLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQzlCLG9CQUFDLE9BQU8sbUJBQWMsR0FBRyxDQUFDLE1BQU07Z0JBQzdCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBQyxVQUFVLFFBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBYyxDQUFDLENBQUMsQ0FBQyxvQkFBQyxJQUFJLE9BQUc7Z0JBQ2xFLG9CQUFDLE9BQU8sUUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQVcsQ0FDM0IsQ0FDSSxDQUNqQixDQUFBO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUUxQixpQkFBaUI7UUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQyxJQUFJLEtBQUs7WUFBRSxPQUFPLEtBQUssQ0FBQTtRQUV2QixvQkFBb0I7UUFDcEIsSUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ25CLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRO1lBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUM3QjtZQUNBLE9BQU8sb0JBQUMsU0FBUyxJQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFJLENBQUE7U0FDckM7UUFFRCxjQUFjO1FBQ2QsSUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQztZQUN0RCxHQUFHLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFDdEI7WUFDQSxPQUFPLG9CQUFDLFVBQVUsSUFBQyxHQUFHLEVBQUUsR0FBRyxHQUFJLENBQUE7U0FDaEM7UUFFRCxtQkFBbUI7UUFDbkIsTUFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQTtRQUM5QyxPQUFPLG9CQUFDLFVBQVUsSUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUksQ0FBQTtJQUNqRCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVE7UUFDaEIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FDTCxvQkFBQyxTQUFTLElBQ1IsSUFBSSxFQUFFO29CQUNKLGdFQUFnRSxPQUFPLEdBQUcsc0NBQXNDO29CQUNoSCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZCxHQUNELENBQ0gsQ0FBQTtTQUNGO2FBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQ0wsb0JBQUMsU0FBUyxJQUNSLElBQUksRUFBRTtvQkFDSiwwRUFBMEU7b0JBQzFFLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixhQUFhO2lCQUNkLEdBQ0QsQ0FDSCxDQUFBO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7Q0FDRjtBQUVELGVBQWUsY0FBYyxDQUFBIn0=
