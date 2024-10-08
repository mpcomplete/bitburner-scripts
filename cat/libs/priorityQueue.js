/**
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */
import { Heap } from "src/cat/libs/heap";
class PriorityQueue {
  /**
   * Creates a priority queue
   * @params {function} compare
   */
  constructor(compare, _values) {
    if (typeof compare !== "function") {
      throw new Error("PriorityQueue constructor expects a compare function");
    }
    this._heap = new Heap(compare, _values);
    if (_values) {
      this._heap.fix();
    }
  }
  /**
   * Returns an element with highest priority in the queue
   * @public
   * @returns {number|string|object}
   */
  front() {
    return this._heap.root();
  }
  /**
   * Returns an element with lowest priority in the queue
   * @public
   * @returns {number|string|object}
   */
  back() {
    return this._heap.leaf();
  }
  /**
   * Adds a value to the queue
   * @public
   * @param {number|string|object} value
   * @returns {PriorityQueue}
   */
  enqueue(value) {
    return this._heap.insert(value);
  }
  /**
   * Adds a value to the queue
   * @public
   * @param {number|string|object} value
   * @returns {PriorityQueue}
   */
  push(value) {
    return this.enqueue(value);
  }
  /**
   * Removes and returns an element with highest priority in the queue
   * @public
   * @returns {number|string|object}
   */
  dequeue() {
    return this._heap.extractRoot();
  }
  /**
   * Removes and returns an element with highest priority in the queue
   * @public
   * @returns {number|string|object}
   */
  pop() {
    return this.dequeue();
  }
  /**
   * Removes all elements that match a criteria in the callback
   * @public
   * @param {function} cb
   * @returns {array}
   */
  remove(cb) {
    if (typeof cb !== "function") {
      throw new Error("PriorityQueue remove expects a callback");
    }
    const removed = [];
    const dequeued = [];
    while (!this.isEmpty()) {
      const popped = this.pop();
      if (cb(popped)) {
        removed.push(popped);
      } else {
        dequeued.push(popped);
      }
    }
    dequeued.forEach((val) => this.push(val));
    return removed;
  }
  /**
   * Returns the number of elements in the queue
   * @public
   * @returns {number}
   */
  size() {
    return this._heap.size();
  }
  /**
   * Checks if the queue is empty
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this._heap.isEmpty();
  }
  /**
   * Clears the queue
   * @public
   */
  clear() {
    this._heap.clear();
  }
  /**
   * Returns a sorted list of elements from highest to lowest priority
   * @public
   * @returns {array}
   */
  toArray() {
    return this._heap.clone().sort().reverse();
  }
  /**
   * Implements an iterable on the priority queue
   * @public
   */
  [Symbol.iterator]() {
    let size = this.size();
    return {
      next: () => {
        size -= 1;
        return {
          value: this.pop(),
          done: size === -1
        };
      }
    };
  }
  /**
   * Creates a priority queue from an existing array
   * @public
   * @static
   * @returns {PriorityQueue}
   */
  static fromArray(values, compare) {
    return new PriorityQueue(compare, values);
  }
}
export {
  PriorityQueue
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2xpYnMvcHJpb3JpdHlRdWV1ZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIEBjb3B5cmlnaHQgMjAyMCBFeWFzIFJhbmpvdXMgPGV5YXMucmFuam91c0BnbWFpbC5jb20+XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEhlYXAgfSBmcm9tIFwiL2xpYnMvaGVhcFwiO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBQcmlvcml0eVF1ZXVlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUHJpb3JpdHlRdWV1ZSB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHByaW9yaXR5IHF1ZXVlXHJcbiAgICogQHBhcmFtcyB7ZnVuY3Rpb259IGNvbXBhcmVcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihjb21wYXJlLCBfdmFsdWVzKSB7XHJcbiAgICBpZiAodHlwZW9mIGNvbXBhcmUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcmlvcml0eVF1ZXVlIGNvbnN0cnVjdG9yIGV4cGVjdHMgYSBjb21wYXJlIGZ1bmN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9oZWFwID0gbmV3IEhlYXAoY29tcGFyZSwgX3ZhbHVlcyk7XHJcbiAgICBpZiAoX3ZhbHVlcykge1xyXG4gICAgICB0aGlzLl9oZWFwLmZpeCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBlbGVtZW50IHdpdGggaGlnaGVzdCBwcmlvcml0eSBpbiB0aGUgcXVldWVcclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge251bWJlcnxzdHJpbmd8b2JqZWN0fVxyXG4gICAqL1xyXG4gIGZyb250KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlYXAucm9vdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBlbGVtZW50IHdpdGggbG93ZXN0IHByaW9yaXR5IGluIHRoZSBxdWV1ZVxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfHN0cmluZ3xvYmplY3R9XHJcbiAgICovXHJcbiAgYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWFwLmxlYWYoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSB2YWx1ZSB0byB0aGUgcXVldWVcclxuICAgKiBAcHVibGljXHJcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfG9iamVjdH0gdmFsdWVcclxuICAgKiBAcmV0dXJucyB7UHJpb3JpdHlRdWV1ZX1cclxuICAgKi9cclxuICBlbnF1ZXVlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhcC5pbnNlcnQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHZhbHVlIHRvIHRoZSBxdWV1ZVxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8b2JqZWN0fSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtQcmlvcml0eVF1ZXVlfVxyXG4gICAqL1xyXG4gIHB1c2godmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLmVucXVldWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbmQgcmV0dXJucyBhbiBlbGVtZW50IHdpdGggaGlnaGVzdCBwcmlvcml0eSBpbiB0aGUgcXVldWVcclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge251bWJlcnxzdHJpbmd8b2JqZWN0fVxyXG4gICAqL1xyXG4gIGRlcXVldWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhcC5leHRyYWN0Um9vdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbmQgcmV0dXJucyBhbiBlbGVtZW50IHdpdGggaGlnaGVzdCBwcmlvcml0eSBpbiB0aGUgcXVldWVcclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge251bWJlcnxzdHJpbmd8b2JqZWN0fVxyXG4gICAqL1xyXG4gIHBvcCgpIHtcclxuICAgIHJldHVybiB0aGlzLmRlcXVldWUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGVsZW1lbnRzIHRoYXQgbWF0Y2ggYSBjcml0ZXJpYSBpbiB0aGUgY2FsbGJhY2tcclxuICAgKiBAcHVibGljXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2JcclxuICAgKiBAcmV0dXJucyB7YXJyYXl9XHJcbiAgICovXHJcbiAgcmVtb3ZlKGNiKSB7XHJcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUHJpb3JpdHlRdWV1ZSByZW1vdmUgZXhwZWN0cyBhIGNhbGxiYWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlZCA9IFtdO1xyXG4gICAgY29uc3QgZGVxdWV1ZWQgPSBbXTtcclxuICAgIHdoaWxlICghdGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgY29uc3QgcG9wcGVkID0gdGhpcy5wb3AoKTtcclxuICAgICAgaWYgKGNiKHBvcHBlZCkpIHtcclxuICAgICAgICByZW1vdmVkLnB1c2gocG9wcGVkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZXF1ZXVlZC5wdXNoKHBvcHBlZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXF1ZXVlZC5mb3JFYWNoKCh2YWwpID0+IHRoaXMucHVzaCh2YWwpKTtcclxuICAgIHJldHVybiByZW1vdmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBxdWV1ZVxyXG4gICAqIEBwdWJsaWNcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHNpemUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhcC5zaXplKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHF1ZXVlIGlzIGVtcHR5XHJcbiAgICogQHB1YmxpY1xyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhcC5pc0VtcHR5KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhcnMgdGhlIHF1ZXVlXHJcbiAgICogQHB1YmxpY1xyXG4gICAqL1xyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5faGVhcC5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHNvcnRlZCBsaXN0IG9mIGVsZW1lbnRzIGZyb20gaGlnaGVzdCB0byBsb3dlc3QgcHJpb3JpdHlcclxuICAgKiBAcHVibGljXHJcbiAgICogQHJldHVybnMge2FycmF5fVxyXG4gICAqL1xyXG4gIHRvQXJyYXkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhcC5jbG9uZSgpLnNvcnQoKS5yZXZlcnNlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbXBsZW1lbnRzIGFuIGl0ZXJhYmxlIG9uIHRoZSBwcmlvcml0eSBxdWV1ZVxyXG4gICAqIEBwdWJsaWNcclxuICAgKi9cclxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgIGxldCBzaXplID0gdGhpcy5zaXplKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgc2l6ZSAtPSAxO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5wb3AoKSxcclxuICAgICAgICAgIGRvbmU6IHNpemUgPT09IC0xXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBwcmlvcml0eSBxdWV1ZSBmcm9tIGFuIGV4aXN0aW5nIGFycmF5XHJcbiAgICogQHB1YmxpY1xyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAcmV0dXJucyB7UHJpb3JpdHlRdWV1ZX1cclxuICAgKi9cclxuICBzdGF0aWMgZnJvbUFycmF5KHZhbHVlcywgY29tcGFyZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcmlvcml0eVF1ZXVlKGNvbXBhcmUsIHZhbHVlcyk7XHJcbiAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsU0FBUyxZQUFZO0FBS2QsTUFBTSxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUt6QixZQUFZLFNBQVMsU0FBUztBQUM1QixRQUFJLE9BQU8sWUFBWSxZQUFZO0FBQ2pDLFlBQU0sSUFBSSxNQUFNLHNEQUFzRDtBQUFBLElBQ3hFO0FBQ0EsU0FBSyxRQUFRLElBQUksS0FBSyxTQUFTLE9BQU87QUFDdEMsUUFBSSxTQUFTO0FBQ1gsV0FBSyxNQUFNLElBQUk7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxRQUFRO0FBQ04sV0FBTyxLQUFLLE1BQU0sS0FBSztBQUFBLEVBQ3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsT0FBTztBQUNMLFdBQU8sS0FBSyxNQUFNLEtBQUs7QUFBQSxFQUN6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsUUFBUSxPQUFPO0FBQ2IsV0FBTyxLQUFLLE1BQU0sT0FBTyxLQUFLO0FBQUEsRUFDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLEtBQUssT0FBTztBQUNWLFdBQU8sS0FBSyxRQUFRLEtBQUs7QUFBQSxFQUMzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLFVBQVU7QUFDUixXQUFPLEtBQUssTUFBTSxZQUFZO0FBQUEsRUFDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxNQUFNO0FBQ0osV0FBTyxLQUFLLFFBQVE7QUFBQSxFQUN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsT0FBTyxJQUFJO0FBQ1QsUUFBSSxPQUFPLE9BQU8sWUFBWTtBQUM1QixZQUFNLElBQUksTUFBTSx5Q0FBeUM7QUFBQSxJQUMzRDtBQUVBLFVBQU0sVUFBVSxDQUFDO0FBQ2pCLFVBQU0sV0FBVyxDQUFDO0FBQ2xCLFdBQU8sQ0FBQyxLQUFLLFFBQVEsR0FBRztBQUN0QixZQUFNLFNBQVMsS0FBSyxJQUFJO0FBQ3hCLFVBQUksR0FBRyxNQUFNLEdBQUc7QUFDZCxnQkFBUSxLQUFLLE1BQU07QUFBQSxNQUNyQixPQUFPO0FBQ0wsaUJBQVMsS0FBSyxNQUFNO0FBQUEsTUFDdEI7QUFBQSxJQUNGO0FBRUEsYUFBUyxRQUFRLENBQUMsUUFBUSxLQUFLLEtBQUssR0FBRyxDQUFDO0FBQ3hDLFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsT0FBTztBQUNMLFdBQU8sS0FBSyxNQUFNLEtBQUs7QUFBQSxFQUN6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLFVBQVU7QUFDUixXQUFPLEtBQUssTUFBTSxRQUFRO0FBQUEsRUFDNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsUUFBUTtBQUNOLFNBQUssTUFBTSxNQUFNO0FBQUEsRUFDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxVQUFVO0FBQ1IsV0FBTyxLQUFLLE1BQU0sTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRO0FBQUEsRUFDM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsQ0FBQyxPQUFPLFFBQVEsSUFBSTtBQUNsQixRQUFJLE9BQU8sS0FBSyxLQUFLO0FBQ3JCLFdBQU87QUFBQSxNQUNMLE1BQU0sTUFBTTtBQUNWLGdCQUFRO0FBQ1IsZUFBTztBQUFBLFVBQ0wsT0FBTyxLQUFLLElBQUk7QUFBQSxVQUNoQixNQUFNLFNBQVM7QUFBQSxRQUNqQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsT0FBTyxVQUFVLFFBQVEsU0FBUztBQUNoQyxXQUFPLElBQUksY0FBYyxTQUFTLE1BQU07QUFBQSxFQUMxQztBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
