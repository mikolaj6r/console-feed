import GUID from './GUID'
import * as Timing from './methods/timing'
import * as Count from './methods/count'
import * as Assert from './methods/assert'
/**
 * Parses a console log and converts it to a special Log object
 * @argument method The console method to parse
 * @argument data The arguments passed to the console method
 */
function Parse(method, data, staticID) {
  // Create an ID
  const id = staticID || GUID()
  // Parse the methods
  switch (method) {
    case 'clear': {
      return {
        method,
        id
      }
    }
    case 'count': {
      const label = typeof data[0] === 'string' ? data[0] : 'default'
      if (!label) return false
      return Object.assign(Object.assign({}, Count.increment(label)), { id })
    }
    case 'time':
    case 'timeEnd': {
      const label = typeof data[0] === 'string' ? data[0] : 'default'
      if (!label) return false
      if (method === 'time') {
        Timing.start(label)
        return false
      }
      return Object.assign(Object.assign({}, Timing.stop(label)), { id })
    }
    case 'assert': {
      const valid = data.length !== 0
      if (valid) {
        const assertion = Assert.test(data[0], ...data.slice(1))
        if (assertion) {
          return Object.assign(Object.assign({}, assertion), { id })
        }
      }
      return false
    }
    case 'error': {
      const errors = data.map(error => {
        try {
          return error.stack || error
        } catch (e) {
          return error
        }
      })
      return {
        method,
        id,
        data: errors
      }
    }
    default: {
      return {
        method,
        id,
        data
      }
    }
  }
}
export default Parse
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLElBQUksTUFBTSxRQUFRLENBQUE7QUFFekIsT0FBTyxLQUFLLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQTtBQUMxQyxPQUFPLEtBQUssS0FBSyxNQUFNLGlCQUFpQixDQUFBO0FBQ3hDLE9BQU8sS0FBSyxNQUFNLE1BQU0sa0JBQWtCLENBQUE7QUFFMUM7Ozs7R0FJRztBQUNILFNBQVMsS0FBSyxDQUNaLE1BQWUsRUFDZixJQUFXLEVBQ1gsUUFBaUI7SUFFakIsZUFBZTtJQUNmLE1BQU0sRUFBRSxHQUFHLFFBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQTtJQUU3QixvQkFBb0I7SUFDcEIsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osT0FBTztnQkFDTCxNQUFNO2dCQUNOLEVBQUU7YUFDSCxDQUFBO1NBQ0Y7UUFFRCxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osTUFBTSxLQUFLLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtZQUMvRCxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLEtBQUssQ0FBQTtZQUV4Qix1Q0FDSyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUN6QixFQUFFLElBQ0g7U0FDRjtRQUVELEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxTQUFTLENBQUMsQ0FBQztZQUNkLE1BQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFDL0QsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUE7WUFFeEIsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO2dCQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNuQixPQUFPLEtBQUssQ0FBQTthQUNiO1lBRUQsdUNBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FDckIsRUFBRSxJQUNIO1NBQ0Y7UUFFRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUE7WUFFL0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3hELElBQUksU0FBUyxFQUFFO29CQUNiLHVDQUNLLFNBQVMsS0FDWixFQUFFLElBQ0g7aUJBQ0Y7YUFDRjtZQUVELE9BQU8sS0FBSyxDQUFBO1NBQ2I7UUFFRCxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUIsSUFBSTtvQkFDRixPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFBO2lCQUM1QjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLEtBQUssQ0FBQTtpQkFDYjtZQUNILENBQUMsQ0FBQyxDQUFBO1lBRUYsT0FBTztnQkFDTCxNQUFNO2dCQUNOLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFBO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU87Z0JBQ0wsTUFBTTtnQkFDTixFQUFFO2dCQUNGLElBQUk7YUFDTCxDQUFBO1NBQ0Y7S0FDRjtBQUNILENBQUM7QUFFRCxlQUFlLEtBQUssQ0FBQSJ9
