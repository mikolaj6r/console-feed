import * as React from 'react'
import Linkify from 'linkifyjs/react'
function splitMessage(message) {
  const breakIndex = message.indexOf('\n')
  // consider that there can be line without a break
  if (breakIndex === -1) {
    return message
  }
  return message.substr(0, breakIndex)
}
class ErrorPanel extends React.PureComponent {
  render() {
    const { log } = this.props
    /* This checks for error logTypes and shortens the message in the console by wrapping
        it a <details /> tag and putting the first line in a <summary /> tag and the other lines
        follow after that. This creates a nice collapsible error message */
    let otherErrorLines
    const msgLine = log.data.join(' ')
    const firstLine = splitMessage(msgLine)
    const msgArray = msgLine.split('\n')
    if (msgArray.length > 1) {
      otherErrorLines = msgArray.slice(1)
    }
    if (!otherErrorLines) {
      return React.createElement(Linkify, null, log.data.join(' '))
    }
    return React.createElement(
      'details',
      null,
      React.createElement(
        'summary',
        { style: { outline: 'none', cursor: 'pointer' } },
        firstLine
      ),
      React.createElement(Linkify, null, otherErrorLines.join('\n\r'))
    )
  }
}
export default ErrorPanel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L21lc3NhZ2UtcGFyc2Vycy9FcnJvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFFOUIsT0FBTyxPQUFPLE1BQU0saUJBQWlCLENBQUE7QUFNckMsU0FBUyxZQUFZLENBQUMsT0FBZTtJQUNuQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hDLGtEQUFrRDtJQUNsRCxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNyQixPQUFPLE9BQU8sQ0FBQTtLQUNmO0lBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBRUQsTUFBTSxVQUFXLFNBQVEsS0FBSyxDQUFDLGFBQXlCO0lBQ3RELE1BQU07UUFDSixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUMxQjs7MkVBRW1FO1FBQ25FLElBQUksZUFBZSxDQUFBO1FBQ25CLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsZUFBZSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDcEM7UUFFRCxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3BCLE9BQU8sb0JBQUMsT0FBTyxRQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFXLENBQUE7U0FDL0M7UUFFRCxPQUFPLENBQ0w7WUFDRSxpQ0FBUyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFDbkQsU0FBUyxDQUNGO1lBQ1Ysb0JBQUMsT0FBTyxRQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQVcsQ0FDekMsQ0FDWCxDQUFBO0lBQ0gsQ0FBQztDQUNGO0FBRUQsZUFBZSxVQUFVLENBQUEifQ==
