export const initialState = {
  timings: {},
  count: {}
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT': {
      const times = state.count[action.name] || 0
      return Object.assign(Object.assign({}, state), {
        count: Object.assign(Object.assign({}, state.count), {
          [action.name]: times + 1
        })
      })
    }
    case 'TIME_START': {
      return Object.assign(Object.assign({}, state), {
        timings: Object.assign(Object.assign({}, state.timings), {
          [action.name]: {
            start: performance.now() || +new Date()
          }
        })
      })
    }
    case 'TIME_END': {
      const timing = state.timings[action.name]
      const end = performance.now() || +new Date()
      const { start } = timing
      const time = end - start
      return Object.assign(Object.assign({}, state), {
        timings: Object.assign(Object.assign({}, state.timings), {
          [action.name]: Object.assign(Object.assign({}, timing), { end, time })
        })
      })
    }
    default: {
      return state
    }
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHO0lBQzFCLE9BQU8sRUFBRSxFQUFFO0lBQ1gsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFBO0FBRUQsZUFBZSxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDdEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFM0MsdUNBQ0ssS0FBSyxLQUNSLEtBQUssa0NBQ0EsS0FBSyxDQUFDLEtBQUssS0FDZCxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxPQUUzQjtTQUNGO1FBRUQsS0FBSyxZQUFZLENBQUMsQ0FBQztZQUNqQix1Q0FDSyxLQUFLLEtBQ1IsT0FBTyxrQ0FDRixLQUFLLENBQUMsT0FBTyxLQUNoQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDYixLQUFLLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7cUJBQ3hDLE9BRUo7U0FDRjtRQUVELEtBQUssVUFBVSxDQUFDLENBQUM7WUFDZixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV6QyxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFBO1lBQzVDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUE7WUFFeEIsTUFBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQTtZQUV4Qix1Q0FDSyxLQUFLLEtBQ1IsT0FBTyxrQ0FDRixLQUFLLENBQUMsT0FBTyxLQUNoQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0NBQ1IsTUFBTSxLQUNULEdBQUc7d0JBQ0gsSUFBSSxVQUdUO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU8sS0FBSyxDQUFBO1NBQ2I7S0FDRjtBQUNILENBQUMsQ0FBQSJ9
