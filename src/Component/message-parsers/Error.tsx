import * as React from 'react'
import { Message } from '../../definitions/Component'
import Linkify from 'linkifyjs/react'

interface Props {
  log: Message
}

function splitMessage(message: string): string {
  const breakIndex = message.indexOf('\n')
  // consider that there can be line without a break
  if (breakIndex === -1) {
    return message
  }
  return message.substr(0, breakIndex)
}

class ErrorPanel extends React.PureComponent<Props, any> {
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
      return <Linkify>{log.data.join(' ')}</Linkify>
    }

    return (
      <details>
        <summary style={{ outline: 'none', cursor: 'pointer' }}>
          {firstLine}
        </summary>
        <Linkify>{otherErrorLines.join('\n\r')}</Linkify>
      </details>
    )
  }
}

export default ErrorPanel
