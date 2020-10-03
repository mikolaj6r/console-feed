import * as React from 'react'
import { withTheme } from 'emotion-theming'
import { Root } from '../react-inspector/elements'
import Linkify from 'linkifyjs/react'
import Inspector from '../react-inspector'
class ObjectTree extends React.PureComponent {
  render() {
    const { theme, quoted, log } = this.props
    return log.data.map((message, i) => {
      if (typeof message === 'string') {
        const string =
          !quoted && message.length
            ? `${message} `
            : React.createElement(
                'span',
                null,
                React.createElement('span', null, '"'),
                React.createElement(
                  'span',
                  {
                    style: {
                      color: theme.styles.OBJECT_VALUE_STRING_COLOR
                    }
                  },
                  message
                ),
                React.createElement('span', null, '" ')
              )
        return React.createElement(
          Root,
          { 'data-type': 'string', key: i },
          React.createElement(Linkify, null, string)
        )
      }
      return React.createElement(Inspector, { data: message, key: i })
    })
  }
}
export default withTheme(ObjectTree)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9tZXNzYWdlLXBhcnNlcnMvT2JqZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUU5QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBRWxELE9BQU8sT0FBTyxNQUFNLGlCQUFpQixDQUFBO0FBRXJDLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFBO0FBUTFDLE1BQU0sVUFBVyxTQUFRLEtBQUssQ0FBQyxhQUF5QjtJQUN0RCxNQUFNO1FBQ0osTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUV6QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBWSxFQUFFLENBQVMsRUFBRSxFQUFFO1lBQzlDLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUMvQixNQUFNLE1BQU0sR0FDVixDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUMxQixHQUFHLE9BQU8sR0FBRyxDQUNkLENBQUMsQ0FBQyxDQUFDLENBQ0Y7b0JBQ0UsdUNBQWM7b0JBQ2QsOEJBQ0UsS0FBSyxFQUFFOzRCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLHlCQUF5Qjt5QkFDOUMsSUFFQSxPQUFPLENBQ0g7b0JBQ1Asd0NBQWUsQ0FDVixDQUNSLENBQUE7Z0JBRUgsT0FBTyxDQUNMLG9CQUFDLElBQUksaUJBQVcsUUFBUSxFQUFDLEdBQUcsRUFBRSxDQUFDO29CQUM3QixvQkFBQyxPQUFPLFFBQUUsTUFBTSxDQUFXLENBQ3RCLENBQ1IsQ0FBQTthQUNGO1lBRUQsT0FBTyxvQkFBQyxTQUFTLElBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFJLENBQUE7UUFDN0MsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFFRCxlQUFlLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQSJ9
