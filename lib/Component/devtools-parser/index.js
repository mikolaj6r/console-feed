import Linkify from 'linkifyjs/html'
import formatMessageString from './format-message'
/**
 * Formats a console log message using the Devtools parser and returns HTML
 * @param args The arguments passed to the console method
 */
function formatMessage(args) {
  const formattedResult = document.createElement('span')
  formatMessageString(args[0], args.slice(1), formattedResult)
  return Linkify(formattedResult.outerHTML.replace(/(?:\r\n|\r|\n)/g, '<br />'))
}
export default formatMessage
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L2RldnRvb2xzLXBhcnNlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQTtBQUNwQyxPQUFPLG1CQUFtQixNQUFNLGtCQUFrQixDQUFBO0FBRWxEOzs7R0FHRztBQUNILFNBQVMsYUFBYSxDQUFDLElBQVc7SUFDaEMsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUV0RCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUU1RCxPQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBO0FBQ2hGLENBQUM7QUFFRCxlQUFlLGFBQWEsQ0FBQSJ9
