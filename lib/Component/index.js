import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import Styles from './theme/default'
import { Root } from './elements'
import Message from './Message'
// https://stackoverflow.com/a/48254637/4089357
const customStringify = function(v) {
  const cache = new Set()
  return JSON.stringify(v, function(key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        // Circular reference found, discard key
        return
      }
      // Store value in our set
      cache.add(value)
    }
    return value
  })
}
class Console extends React.PureComponent {
  constructor() {
    super(...arguments)
    this.theme = () => ({
      variant: this.props.variant || 'light',
      styles: Object.assign(
        Object.assign({}, Styles(this.props)),
        this.props.styles
      )
    })
  }
  render() {
    let { filter = [], logs = [], searchKeywords, logFilter } = this.props
    const regex = new RegExp(searchKeywords)
    const filterFun = logFilter
      ? logFilter
      : log => regex.test(customStringify(log))
    // @ts-ignore
    logs = logs.filter(filterFun)
    // @ts-ignore
    logs = logs.reduce((acc, log) => {
      const prevLog = acc[acc.length - 1]
      if (
        prevLog &&
        prevLog.amount &&
        prevLog.method === log.method &&
        prevLog.data.every((value, i) => log.data[i] === value)
      ) {
        prevLog.amount += 1
        return acc
      }
      acc.push(Object.assign(Object.assign({}, log), { amount: 1 }))
      return acc
    }, [])
    return React.createElement(
      ThemeProvider,
      { theme: this.theme },
      React.createElement(
        Root,
        null,
        logs.map((log, i) => {
          // If the filter is defined and doesn't include the method
          const filtered =
            filter.length !== 0 &&
            log.method &&
            filter.indexOf(log.method) === -1
          return filtered
            ? null
            : React.createElement(Message, {
                log: log,
                key: `${log.method}-${i}`
              })
        })
      )
    )
  }
}
export default Console
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUM5QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFFL0MsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUE7QUFFcEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFlBQVksQ0FBQTtBQUNqQyxPQUFPLE9BQU8sTUFBTSxXQUFXLENBQUE7QUFFL0IsK0NBQStDO0FBQy9DLE1BQU0sZUFBZSxHQUFHLFVBQVMsQ0FBQztJQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSztRQUMxQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQy9DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsd0NBQXdDO2dCQUN4QyxPQUFNO2FBQ1A7WUFDRCx5QkFBeUI7WUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNqQjtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFFRCxNQUFNLE9BQVEsU0FBUSxLQUFLLENBQUMsYUFBeUI7SUFBckQ7O1FBQ0UsVUFBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksT0FBTztZQUN0QyxNQUFNLGtDQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUNyQjtTQUNGLENBQUMsQ0FBQTtJQW9ESixDQUFDO0lBbERDLE1BQU07UUFDSixJQUFJLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBRXRFLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBRXhDLE1BQU0sU0FBUyxHQUFHLFNBQVM7WUFDekIsQ0FBQyxDQUFDLFNBQVM7WUFDWCxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBRTNDLGFBQWE7UUFDYixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUU3QixhQUFhO1FBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDOUIsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFFbkMsSUFDRSxPQUFPO2dCQUNQLE9BQU8sQ0FBQyxNQUFNO2dCQUNkLE9BQU8sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU07Z0JBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsRUFDdkQ7Z0JBQ0EsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUE7Z0JBRW5CLE9BQU8sR0FBRyxDQUFBO2FBQ1g7WUFFRCxHQUFHLENBQUMsSUFBSSxpQ0FBTSxHQUFHLEtBQUUsTUFBTSxFQUFFLENBQUMsSUFBRyxDQUFBO1lBRS9CLE9BQU8sR0FBRyxDQUFBO1FBQ1osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRU4sT0FBTyxDQUNMLG9CQUFDLGFBQWEsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDOUIsb0JBQUMsSUFBSSxRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25CLDBEQUEwRDtnQkFDMUQsTUFBTSxRQUFRLEdBQ1osTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUNuQixHQUFHLENBQUMsTUFBTTtvQkFDVixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtnQkFFbkMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDdkIsb0JBQUMsT0FBTyxJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsR0FBSSxDQUNqRCxDQUFBO1lBQ0gsQ0FBQyxDQUFDLENBQ0csQ0FDTyxDQUNqQixDQUFBO0lBQ0gsQ0FBQztDQUNGO0FBRUQsZUFBZSxPQUFPLENBQUEifQ==
